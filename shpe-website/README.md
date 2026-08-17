# SHPE @ Southwestern College — website

Six pages: Home, About, Officers, Events, Gallery, Join. Scrapbook style,
French blue + burnt orange, built with plain HTML/CSS/JS so it's free to
host and easy for future webmasters to edit without knowing a framework.

## Get it live on GitHub Pages

1. Go to github.com and create a new repository. Name it exactly
   `YOUR-USERNAME.github.io` if you want it at the root of your GitHub
   domain, or anything else (like `shpe-swc-website`) if you're fine with
   a URL like `YOUR-USERNAME.github.io/shpe-swc-website`.
2. Upload all the files in this folder into that repository (drag and drop
   works fine on github.com, or use `git push` if you're comfortable with
   git).
3. In the repo, go to Settings > Pages. Under "Source," pick the `main`
   branch and `/ (root)` folder, then save.
4. Give it a minute, then your site is live at the URL GitHub shows you.

## What you still need to fill in

- **Photos:** drop real images into the `images/` folder, matching the file
  names already referenced in the HTML (`cover-photo.jpg`, `officer-1.jpg`
  through `officer-6.jpg`, `gallery-1.jpg` through `gallery-6.jpg`). Add or
  remove officer/gallery cards in `officers.html` and `gallery.html` as
  needed, they're just repeated blocks.
- **Officer names and roles:** in `officers.html`, swap out "Full Name" and
  the role text for each card.
- **Meeting info:** in `about.html`, fill in your regular meeting day, time,
  and room.
- **Instagram, email, SHPE National links:** search for `YOUR_HANDLE` and
  `YOUR_EMAIL@swccd.edu` across the files (they're in the footer of every
  page, plus the Join page) and swap in the real ones.
- **Events calendar:** in `events.html`, replace `YOUR_CALENDAR_ID` in the
  iframe src with your club's actual Google Calendar embed link. Make a
  Google Calendar for the club, share it with officers as editors so they
  can add events straight there, then go to Settings > Integrate calendar >
  copy the embed code and swap the src in.
- **Canvas sign up form:** the `join.html` page has a form ready to go, but
  it needs an endpoint to actually send submissions somewhere. Easiest
  option is Google Forms (free, exports straight to a spreadsheet) —
  create one with First Name / Last Name / School Email fields, then either
  swap the whole form block for the Google Form's embed iframe, or just
  link the "Add me to Canvas" button straight to the Google Form URL.
  There are notes in the HTML comments right above the form explaining
  both options.

## Folder structure

```
shpe-website/
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
variables are all at the very top of the file under `:root`.
