# Design QA: Farshad Naderi leadership profile

## Reference and implementation

- Reference: Radman Consulting Group live homepage at 1440 x 1000.
- Implementation: leadership profile at 1440 x 1000 and 390 x 844.
- Comparison performed with the reference and implementation combined in one image.

## Visual-system checks

- Typography matches the corporate system: Newsreader for display type and Manrope for UI and body copy.
- Color tokens match the corporate navy, blue, warm-white, line, and yellow action palette.
- Header, navigation density, section rhythm, rule treatment, button style, and footer structure follow the corporate site.
- The profile-specific split hero preserves the corporate page language while giving the portrait the required prominence.
- Portrait is sharp, uncropped at the head and shoulders, and scales cleanly on desktop and mobile.
- Organization marks use real logo assets, are consistently sized, and remain legible on the navy panel.

## Content and interaction checks

- Role is shown as “Founder & Managing Director.”
- Profile copy focuses on capabilities, including applied AI, agentic workflows, business transformation, organizational systems, and executive leadership.
- Education is limited to the DBA from the University of Bordeaux and MBA from Royal Roads University.
- Social links are limited to YouTube, LinkedIn, Instagram, and X.
- No email address, phone number, or WhatsApp link is exposed.
- Contact actions route to Radman’s secure inquiry form.
- Primary navigation, profile anchor, social links, return link, and inquiry CTAs have valid destinations.

## Responsive and technical checks

- Production build completes successfully with linting and TypeScript validation.
- Desktop and mobile screenshots show no horizontal overflow.
- Browser verification reports no console errors on the implementation.
- Social-link count is four at both tested viewports.
- Exposed-contact scan returns no email addresses, phone numbers, or WhatsApp links.

final result: passed
