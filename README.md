# External Clean Guernsey website
Static site (no build step). Open `index.html` or deploy the folder to Netlify / GitHub Pages / Cloudflare Pages.

```
index.html          all page content, sections are commented
thanks.html         shown after the form sends
css/styles.css      COMPILED output, don't edit by hand
tailwind.config.js  brand colours + fonts (then run `npm run build`)
css/input.css       custom CSS source (compiles into css/styles.css)
js/main.js          menu, reveal animations, before/after sliders
images/             all photos (see images/README.md)
images/art/         hero house + floating cleaning-kit SVGs (swap for your own artwork)
fonts/              self-hosted Unbounded + Figtree (no Google dependency)
site.webmanifest    app icon info
```
## Common edits
- Phone/email: search `07781` and `externalcleanguernsey@gmail.com` in index.html.
- Colours: `tailwind.config.js`, then `npm install` once and `npm run build`. The compiled `css/styles.css` is committed, so just deploying needs no build.
- Testimonials: replace the placeholder quotes in the `#reviews` section.
- Domain: update `og:url`, `og:image`, `canonical` and the form `_next` URL in index.html.
- Form: uses FormSubmit.co. After the first live submission, confirm the activation email sent to the business address.

## Contact form (FormSubmit)
- Posts to https://formsubmit.co/externalcleanguernsey@gmail.com (spam trap on, captcha page off).
- It only works on the live (hosted) site, not by double-clicking the file.
- The FIRST submission after going live sends an activation email to that Gmail. Click the link in it, then forms start arriving.
- After sending, visitors land on thanks.html (the address is filled in automatically).
