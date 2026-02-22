const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const farcasterConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjU2Njk4MiwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDM0NGU5OEZEMWU5MzVjOTE4YzM2MzNjRDBhMDMxNjZEMkE3Qjg0ZEIifQ",
    payload: "eyJkb21haW4iOiJuZXctbWluaS1hcHAtcXVpY2tzdGFydC1zaWdtYS1tb2NoYS52ZXJjZWwuYXBwIn0",
    signature: "cjoOvF08YrBwuFXliU4zPJtKdRBSUvDXOxX9KvVigU5vgqv3HsQhV1xF5RVGeHx56IXStma6Vo7HQPeoJYjJ5hw"
  },
  miniapp: {
    version: "1",
    name: "Malo Base Flip", 
    subtitle: "Try your luck earn Mice tokens", 
    description: "games",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "game app",
    tags: ["marketing", "ads", "quickstart", "FLIP GAME"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`, 
    tagline: "my first miniapp",
    ogTitle: "my App",
    ogDescription: "his is my first Base mini app",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },
} as const;

