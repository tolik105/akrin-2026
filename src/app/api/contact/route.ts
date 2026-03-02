import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 },
      )
    }

    const portalId = process.env.HUBSPOT_PORTAL_ID
    const formGuid = process.env.HUBSPOT_FORM_GUID

    if (!portalId || !formGuid) {
      console.error('Missing HubSpot configuration')
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 },
      )
    }

    // Submit to HubSpot Forms API
    const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`

    const hubspotPayload = {
      submittedAt: Date.now(),
      fields: [
        { objectTypeId: '0-1', name: 'firstname', value: firstName },
        { objectTypeId: '0-1', name: 'lastname', value: lastName },
        { objectTypeId: '0-1', name: 'email', value: email },
        { objectTypeId: '0-1', name: 'phone', value: phone || '' },
        { objectTypeId: '0-1', name: 'message', value: message },
      ],
      context: {
        pageUri: req.headers.get('referer') || 'https://akrin.jp/contact',
        pageName: 'Contact Us',
      },
    }

    const hubspotResponse = await fetch(hubspotUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(hubspotPayload),
    })

    if (!hubspotResponse.ok) {
      const errorData = await hubspotResponse.json().catch(() => ({}))
      console.error('HubSpot API error:', hubspotResponse.status, errorData)
      return NextResponse.json(
        { error: 'Failed to submit form. Please try again.' },
        { status: 502 },
      )
    }

    return NextResponse.json(
      { success: true, message: 'Thank you! We will get back to you soon.' },
      { status: 200 },
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 },
    )
  }
}
