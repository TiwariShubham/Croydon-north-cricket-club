# The Knights Site Handbook

A plain-English guide to updating croydonnorthcc.com.au yourself — no coding experience required for the edits covered here.

**For:** club committee & volunteers · **Covers:** text & content edits only · **Last verified:** 22 Sep 2026

> This is the durable backup copy of the handbook, kept in the repo so it survives independently of any one person's tools. The day-to-day version — with nicer formatting and navigation — lives at the link Shub shared with the committee.

---

## How the site is actually built

The website isn't one big file — it's split into two kinds of pieces, and that split is what makes it safe for a non-technical person to update.

**Content files** hold the words: club email, sponsor names, Hall of Fame records, page headings. They live in a folder called `content`, one file per page (`our-club.json`, `hall-of-fame.json`, and so on), written in a simple labelled format called JSON — think of it as a very structured form, where each line is a label and an answer.

**Template files** hold the layout and design — the code that turns those words into the page you see, with the right fonts, colours and boxes. These live in folders called `pages` and `components`.

You only ever need to touch the first kind. This guide is entirely about editing content files — it never asks you to write or understand code.

This guide has been verified directly against the live project at `github.com/TiwariShubham/Croydon-north-cricket-club` — nothing here is guesswork.

## The golden rules

✅ **Safe to edit:** Anything inside the `content` folder — the `.json` files. Change the text between the quote marks. Leave everything else on the line exactly as it is.

⛔ **Don't touch:** The `pages`, `components` and `lib` folders, any file ending in `.jsx` or `.js`, or `package.json`, `package-lock.json` and `next.config.js`. These contain code, not words — a mistake here can take the whole site down, not just one page.

⚠️ **One change at a time:** Make one edit, save it, and check the live site before making the next one. If two edits go in together and something breaks, it's much harder to tell which caused it.

## Making an edit, step by step

All of this happens in your web browser, on github.com. Nothing to install.

1. Go to github.com and sign in with the account that has access to the club's repository.
2. Open the **croydon-north-cc-website** repository, then click into the `content` folder.
3. Click the file for the page you want to change — file names match the page (`news.json` is the News page, `sponsors.json` is the Sponsors page, and so on).
4. Click the pencil icon (top right of the file view) to start editing.
5. Find the line you want to change and edit the text *inside the quote marks only*. See "Reading the content files" below for exactly what's safe to touch on a line.
6. Scroll to the bottom. Under "Commit changes," write a short plain-English note — e.g. *"Update sponsor logo link"* — this becomes a permanent, readable history of every change anyone makes.
7. Choose **"Commit directly to the `master` branch"** (GitHub names this option after your project's main branch, which here is called `master`) and click **Commit changes**.
8. Give it a minute or two, then reload the live site to check your change appears correctly.

## Reading the content files

Every content file uses the same pattern: a short **label**, a colon, then the actual **text** in quote marks. You only ever change what's inside the quote marks after the colon — never the label itself.

```
"email": "info@croydonnorthcc.com.au",
"facebook": "https://www.facebook.com/knightscncc/",
```

Above, you'd change the address and link between the quotes — everything else on those lines (`"email":`, the quote marks, the trailing comma) stays put.

**Three things that break a page:**
- **A missing comma.** Every line in a list needs a comma at the end — except the very last line in that list.
- **A missing quote mark.** Text always needs one at the start and one at the end.
- **Mismatched brackets.** `{ }` and `[ ]` pairs each need a matching partner, in the same order. Don't add or delete one unless you're deliberately adding a whole new entry.

**Quick safety check:** before clicking "Commit changes," select all the text in the editor, copy it, and paste it into [jsonlint.com](https://jsonlint.com) (free, no account) and press Validate. If it says the JSON is valid, it's safe to save.

## Common edits

### Update the club email, Facebook or Instagram link
*File: `content/site.json`*

These appear in the top bar and footer on every page. Find `"email"`, `"facebook"` or `"instagram"` and replace the text between the quotes. Keep the `https://` at the start of any web link, and keep the trailing comma.

### Update the scrolling top-bar text or home grounds
*File: `content/site.json`*

`"topbarText"` is the banner line at the very top of every page. `"grounds"` is a short list in square brackets, shown in the footer — to add a third ground, copy an existing line inside the brackets, give it a comma, and change its text.

### Add a Life Member, or a season's award winner
*File: `content/hall-of-fame.json`*

Each row in a table is one entry, written as three or four short pieces of text in square brackets:

```
["2024", "Jane Smith", "Club President, 2019-2024"],
["2025", "John Doe", "Treasurer, 15 years"]
```

Find the section you want — `lifeMembers`, `seniorHallOfFame`, `juniorHallOfFame` or `premierships` — each has its own `table` with a list of `rows`. Copy an existing row exactly, paste it as a new line, add a comma after the row above it, and change the text to the new entry, keeping the same order as the column headings.

### Rename or reorder a menu item
*File: `content/site.json`*

The main navigation is the `"nav"` list near the bottom:

| Key | Menu label |
|---|---|
| home | Home |
| our-club | Our Club |
| hall-of-fame | Hall of Fame |
| news | News |
| juniors | Juniors |
| seniors | Seniors |
| sponsors | Sponsors |
| contact | Contact |

To rename a menu item, change only its `"label"` text — never the `"href"` or `"key"`. To reorder the menu, cut and paste a whole `{ ... }` entry (including its own curly brackets) to a different position, keeping every comma where it was. Adding a brand-new menu item needs a matching page behind it — that's not a content-file change, so flag it and we'll add both pieces together.

### Add or update a news story
*File: `content/news.json`*

```
{ "tag": "Match Report", "date": "Sample date", "title": "1st XI opens the season with a win", "text": "A strong all-round performance…" },
```

Edit `"tag"`, `"date"`, `"title"` and `"text"` for an existing story. To add one, copy a whole `{ ... }` block, paste it as a new line, add a comma after the block before it, and fill in your own details. The homepage shows its own shorter news teaser too, in `home.json` under `"news" → "items"` — update both if a story should appear in both places.

### Add, rename or remove a sponsor
*Files: `content/sponsors.json` & `content/home.json`*

Sponsors currently appear as plain text names, not logo images — no image upload needed yet. Open `sponsors.json`, find `"thankYou" → "slots"`, and edit or add a name in quotes. The homepage keeps a shorter sponsor list too, in `home.json` under `"sponsorsPreview" → "slots"` — update it too if the sponsor should show there. When the club has real logo files ready, flag it — swapping text for logos is a small design change worth doing together the first time.

### Contact page & the message form
*File: `content/contact.json`*

The "Send a message" form already works — it's connected to Formspree, which emails the club directly, so there's nothing to set up. The contact details table is under `"details" → "rows"` — edit the `"value"` or `"display"` text for any row (the email and social links themselves actually live in `site.json`). Don't edit `"form" → "action"` — that's the address submissions are sent to.

### Home, Our Club, Juniors & Seniors, at a glance

| File | Page | What you can edit |
|---|---|---|
| `home.json` | Home | Hero headline & intro text; the four "quick link" tiles; the "about the club" text and its three cards; the four stat numbers; the news teaser and sponsor preview; the bottom call-to-action text. |
| `our-club.json` | Our Club | The club story paragraphs; the "Club Snapshot" table; the club timeline milestones; the apparel section text and each item's `"link"`. |
| `juniors.json` | Juniors | The intro text; the four age-group pathway cards; the junior committee text. |
| `seniors.json` | Seniors | The intro text; the senior teams table — each row is `["Team", "Grade", "Home Ground"]`. |

**One exception:** a few fields hold real web addresses rather than display text — `"href"`, `"action"`, and `"link"` keys. Editing the wording next to them is safe; editing the address itself changes where a button sends people, so double-check before saving.

## Going live automatically

Until now, turning an edited content file into the live pages needed one extra technical step only a developer could run. That's now been closed: an automatic-build file has been added at `.github/workflows/deploy.yml`. Once it's committed and pushed, every future commit on GitHub.com turns into the live site on its own within about a minute.

Two short steps finish it off:

1. In Terminal, inside the project folder:
   ```
   git add .github/workflows/deploy.yml
   git commit -m "Add automatic build and deploy workflow"
   git push
   ```
2. On github.com, open the repository, go to **Settings → Pages**, and change "Source" from "Deploy from a branch" to **GitHub Actions**.

From then on, the repository's **Actions** tab shows a green tick or red cross next to each commit, telling you at a glance whether it published successfully.

## If something looks wrong

**Change isn't showing:** wait two minutes and hard-refresh (Shift + Reload). Still not there? Open the **Actions** tab — a red cross next to your commit means the save didn't go through, usually a small JSON typo. Click it to see which file and line.

**Undo a change:** open the file, click **History** (the clock icon), find the version from before your edit, and copy its content back into a new edit — or ask Shub to revert the commit in one click.

**Nothing is ever truly lost:** GitHub keeps every past version of every file automatically. The worst case is a short delay while a mistake gets reverted.

## Plain-English glossary

- **Repository ("repo")** — the project's folder of files, stored on GitHub, with a complete saved history of every change.
- **Commit** — a saved checkpoint, like hitting "save," with a short note explaining what changed.
- **JSON** — the simple, labelled text format the content files use.
- **GitHub Pages** — the free service that puts the finished website files online at the club's address.
- **Deploy / publish** — turning the latest saved commit into what visitors actually see live.
- **GitHub Actions** — an automatic assistant that runs steps (like "rebuild the site") every time someone commits a change.

## Bigger changes & who to ask

This handbook covers text and content edits — most of what a club needs day to day. It deliberately doesn't cover adding a new page, changing colours or layout, or anything inside `pages` or `components` — those are code changes, and a mistake there can take the whole site offline. For anything in that category, or if a safety check ever fails and you're not sure why, reach out to Shub or the site's developer (Digituls) rather than guessing.

---

*Croydon North Cricket Club — internal handbook for committee use. Not for public distribution.*
