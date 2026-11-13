/* The one place for site settings. Leave a value empty ('') and the button or
   block that needs it is hidden (or shows "coming soon") — nothing breaks. */
window.INVOICEO = {
  version: '1.0.10',
  releaseDate: '9 November 2026',

  // WhatsApp number with country code, digits only, e.g. '919876543210'.
  whatsapp: '919025537550',

  // Google Forms (from your own Google account).
  forms: {
    support: 'https://docs.google.com/forms/d/e/1FAIpQLSc6HAtInB-gJv9T2vwfLHoy26V2T-jTh83cMCBbuY889UwOuA/viewform',
    customization: 'https://docs.google.com/forms/d/e/1FAIpQLSeUgqmkyVSTjPFYT8p42ocNIHXM0q9JrbXWu7OyNOYHXC9DZQ/viewform',
    customizationEmbed: 'https://docs.google.com/forms/d/e/1FAIpQLSeUgqmkyVSTjPFYT8p42ocNIHXM0q9JrbXWu7OyNOYHXC9DZQ/viewform?embedded=true',
    feedback: 'https://docs.google.com/forms/d/e/1FAIpQLScAyP1dcMYSECr67mjOiol7-JUWVEguaB719En9OMwbfDOPtg/viewform'
  },

  // The download form (an email or a phone / WhatsApp number before the first download; not an account).
  // Where it is sent: the leads endpoint of our Cloudflare worker (tool/telemetry in the app repo).
  // Empty = no form, and every download starts straight away as before.
  leadUrl: 'https://invoiceo-telemetry.madhanprasat2002r.workers.dev/v1/lead',

  // Google Analytics measurement ID, e.g. 'G-XXXXXXXXXX'. Empty = no tracking.
  analyticsId: 'G-9KTHWETYYB',

  // The first-visit poster on the home page. Put a download count here
  // only when it is true: GitHub > Releases shows the counts, add up the four
  // installers of every version. Empty or 0 = no poster. A new number shows it
  // once more to everyone. Add ?milestone to the home page address to preview it.
  // goal: the next round number. The poster says "Help us reach {goal}" and shows {downloads} so far.
  milestone: { downloads: 1100, goal: 5000, asOf: '13 November 2026' },

  // The live download counter on the home page (the card under the buttons). It adds up the download
  // counts GitHub keeps for the four installers of every release, and shows the card with a LIVE tag.
  // If GitHub cannot be reached it shows the milestone.downloads figure above instead, without the LIVE
  // tag. Empty repo = it always shows that figure. The answer is kept in the visitor's browser for 1 hour.
  liveDownloads: { repo: 'Maddy-1303/invoiceo' },

  // Installer sizes shown on the Download page, e.g. '28 MB'. Empty = not shown.
  sizes: { windows: '18.7 MB', mac: '32.7 MB', linuxDeb: '23.6 MB', linuxAppImage: '28.4 MB' }
};
