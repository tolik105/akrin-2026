'use client'

import Script from 'next/script'

const HUBSPOT_PORTAL_ID =
  process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || '245099642'

type HubSpotWindow = Window &
  typeof globalThis & {
    HubSpotConversations?: {
      widget: {
        load: () => void
      }
    }
    hsConversationsOnReady?: Array<() => void>
  }

export function HubSpotChat() {
  return (
    <>
      <Script
        id="hs-chat-config"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.hsConversationsSettings = {
              loadImmediately: false,
              enableWidgetCookieBanner: true,
              disableAttachment: false
            };
          `,
        }}
      />
      <Script
        id="hs-script-loader"
        src={`//js.hs-scripts.com/${HUBSPOT_PORTAL_ID}.js`}
        strategy="lazyOnload"
        onLoad={() => {
          const hubspotWindow = window as HubSpotWindow
          // Load chat widget after a short delay for better page performance
          if (hubspotWindow.HubSpotConversations) {
            hubspotWindow.HubSpotConversations.widget.load()
          } else {
            hubspotWindow.hsConversationsOnReady = [
              () => {
                hubspotWindow.HubSpotConversations?.widget.load()
              },
            ]
          }
        }}
      />
    </>
  )
}
