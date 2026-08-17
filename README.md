[README.md](https://github.com/user-attachments/files/31132568/README.md)
# SHPE @ SWC website

Six pages: Home, About, Officers, Events, Gallery, Join. Clean,
(navy + gold, Inter typeface, hairline card grids) built with plain
HTML/CSS/JS so it's free to host and easy for future webmasters to edit
without knowing a framework.

## Get it live on GitHub Pages/walk-thru for domain rename

1. Go to github.com and create a new repository (ex. `shpe-swc-website`).
2. Upload all the files in this folder into that repository (drag and drop
   works fine on github.com, or use `git push` if you're comfortable with
   git). This includes the `CNAME` file at the root — don't skip it, it's
   what tells GitHub Pages to serve the site at your own domain instead of
   `*.github.io`.
3. In the repo, go to Settings > Pages. Under "Source," pick the `main`
   branch and `/ (root)` folder, then save.
4. Still on Settings > Pages, under "Custom domain," type ex.`shpeswc.org` and
   save. GitHub will show a DNS check that fails until step 5 is done — that's
   expected.
5. At wherever you bought/manage the `shpeswc.org` domain (ex. Namecheap, Google Domains), add these DNS records:
   - Four `A` records for the root domain (`@`) pointing to GitHub's Pages
     IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
     `185.199.111.153`.
   - A `CNAME` record for `www` pointing to `YOUR-USERNAME.github.io`.
   DNS changes can take anywhere from a few minutes to 24 hours to take
   effect.
6. Back in Settings > Pages, once the DNS check passes, check "Enforce
   HTTPS" so the site loads securely at `https://shpeswc.org`.

If you'd rather not buy/manage a domain yet, you can delete the `CNAME` file
and the site will just live at `YOUR-USERNAME.github.io/shpe-swc-website`
instead — everything else works the same either way.

## How to edit photos/Officer panels/meet info/etc.

- **Photos:** drop real images into the `images/` folder, matching the file
  names already referenced in the HTML (`gallery-1.jpg` through
  `gallery-6.jpg` on the Gallery page). Add or remove officer/gallery cards
  in `officers.html` and `gallery.html` as needed, they're just repeated
  blocks. The homepage hero photo currently reuses `images/alina.jpg` —
  swap in a wide group/event shot when you have one (a landscape-ish photo
  will crop best there).
- **Officer names and roles:** already filled in from the current roster —
  update `officers.html` each time officers change.
- **Meeting info:** in `about.html`, fill in your regular meeting day, time,
  and room once it's set.
- **Instagram, email, SHPE National links:** already set to
  `instagram.com/shpeswc` and `shpe.swc@gmail.com` in the footer of every
  page and the Join page — update if those change.
- **Events calendar:** in `events.html`, replace `YOUR_CALENDAR_ID` in the
  iframe src with your club's actual Google Calendar embed link. Make a
  Google Calendar for the club, share it with officers as editors so they
  can add events straight there, then go to Settings > Integrate calendar >
  copy the embed code and swap the src in.
- **Canvas sign up form:** the `join.html` page already embeds a Google Form.
  Swap the iframe `src` for your own club's form if you make a new one
  (First Name / Last Name / School Email fields work well, exports straight
  to a spreadsheet).

## Folder structure

```
shpe-website/
  CNAME           custom domain for GitHub Pages (shpeswc.org)
  index.html      cover / home page
  about.html
  officers.html
  events.html
  gallery.html
  join.html
  css/style.css   all the styling lives here
  js/main.js      mobile nav toggle + active link highlighting
  images/         put your photos here
```

Everything shares the same `css/style.css`, so if you want to tweak a
color, font, or spacing sitewide, that's the one file to touch. The color
variables are all at the very top of the file under `:root` — `--navy` and
`--gold` are the two to know.

