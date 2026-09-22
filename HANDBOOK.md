# The Knights Site Handbook

A plain-English guide to updating croydonnorthcc.com.au yourself — no coding experience required for the edits covered here.

**For:** club committee & volunteers · **Covers:** text & content edits only · **Full edition · Last verified:** 22 Sep 2026

> This is the durable backup copy of the handbook, kept in the repo so it survives independently of any one person's tools. The day-to-day version — with nicer formatting, navigation and collapsible sections — lives at the link Shub shared with the committee.

---

## 60-second cheat sheet

| I want to… | Open this file | Find this label |
|---|---|---|
| Change the club email / Facebook / Instagram | `site.json` | `email`, `facebook`, `instagram` |
| Change the scrolling top banner text | `site.json` | `topbarText` |
| Add a news story | `news.json` | `items` |
| Add a Life Member / award winner | `hall-of-fame.json` | `rows` inside the relevant table |
| Add or rename a sponsor | `sponsors.json` | `slots` |
| Update a senior team / ground | `seniors.json` | `rows` |
| Rename a menu item | `site.json` | `nav` |
| Change the homepage stats (100+ years, etc.) | `home.json` | `stats` |

Every one of these follows the same four moves: open the file on github.com, click the pencil, edit text inside the quotes, commit. Full detail below.

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
3. Click the file for the page you want to change — file names match the page (`news.json` is the News page, `sponsors.json` is the Sponsors page, and so on). You'll land on a page showing the file's text with line numbers down the left.
4. Look at the small toolbar above the text — it reads **Code | Blame** on the left, and on the right there's a pencil (edit) icon next to a small download icon. Click the **pencil**.
5. If you're not already signed in, GitHub will ask you to sign in first — do that, then click the pencil again.
6. Find the line you want to change and edit the text *inside the quote marks only*. See "Reading the content files" below for exactly what's safe to touch on a line.
7. Scroll to the bottom. Under "Commit changes," write a short plain-English note — e.g. *"Update sponsor logo link"* — this becomes a permanent, readable history of every change anyone makes.
8. Choose **"Commit directly to the `master` branch"** (GitHub names this option after your project's main branch, which here is called `master`) and click **Commit changes**.
9. Give it a minute or two, then reload the live site to check your change appears correctly.

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

## Full field reference

Everything above covers the edits people actually make. This is the rest — every label in every content file, for when you need something more obscure.

<details><summary><strong>content/site.json</strong></summary>

| Label | Controls |
|---|---|
| `clubName` | Full club name, used in the footer copyright line. |
| `nickname` | "Knights" — appears next to the club name across the site. |
| `siteUrl` | The site's own web address, used behind the scenes for search engines. Leave alone unless the domain changes. |
| `email`, `facebook`, `instagram` | Top bar & footer contact links, site-wide. |
| `playhq`, `playhqRegister` | Links to the club's PlayHQ page and its registration page. |
| `topbarText` | The scrolling banner line at the very top of every page. |
| `grounds` | List of home grounds, shown in the footer. |
| `tagline` | One-line club description, shown in the footer. |
| `builtBy.label`, `builtBy.url` | The "Site built by Digituls" footer credit. |
| `bottomNote` | The small print after the footer credit. |
| `nav` | The main menu — see the recipe above. |

</details>

<details><summary><strong>content/home.json</strong></summary>

| Label | Controls |
|---|---|
| `title`, `description` | Not shown on the page — used by search engines and browser tabs. |
| `hero.eyebrow`, `hero.heading`, `hero.highlight`, `hero.lead` | The big banner text at the top of the homepage. |
| `hero.primaryCta`, `hero.secondaryCta` | The two hero buttons — each a `label` and `href`. |
| `quickLinks` | The four tiles below the hero — each an `icon` (emoji), `title`, `text`, `linkLabel`, `href`. |
| `about.eyebrow`, `about.heading`, `about.text` | The "About The Club" heading and paragraph. |
| `about.cards` | The three cards under it — `media`, `tag`, `title`, `text` each. |
| `stats` | The four big numbers — each a `value` and `label`. |
| `news` | The homepage's short news teaser — see the recipe above. |
| `sponsorsPreview` | The homepage's short sponsor list — see the recipe above. |
| `callout` | The "Come play for the Knights" banner — `title`, `text`, `ctaLabel`, `href`. |

</details>

<details><summary><strong>content/our-club.json</strong></summary>

| Label | Controls |
|---|---|
| `hero.*` | The page banner — eyebrow, breadcrumb, heading, lead. |
| `story.heading`, `story.paragraphs` | The club history heading and paragraphs (a list — add more by copying a line). |
| `story.grounds` | The two ground cards — `title` and `text` each. |
| `snapshot.rows` | The "Club Snapshot" table — `label` and `value` each. |
| `timeline.items` | The club timeline — `year`, `title`, `text` each. |
| `hallOfFame` | The Hall of Fame callout on this page — `title`, `text`, `ctaLabel`, `href`. |
| `apparel.cards` | The three apparel cards — `media`, `title`, `text`, `link` (can be `""` if no link yet). |

</details>

<details><summary><strong>content/juniors.json & seniors.json</strong></summary>

| Label | Controls |
|---|---|
| `hero.*` (both) | Each page's banner text. |
| `pathway.cards` (juniors) | The four age-group cards — `title` and `text` each. |
| `committee.text`, `committee.notice` (juniors) | The junior committee description. |
| `getInvolved` (juniors) | The "Register a Junior" callout — `heading`, `text`, `ctaLabel`, `href`. |
| `teams.table` (seniors) | The senior teams table — see the recipe above. |
| `teams.notice` (seniors) | The reminder to confirm grades against PlayHQ each season. |
| `callout` (seniors) | The "Follow every senior fixture" banner. |

</details>

<details><summary><strong>content/sponsors.json & contact.json</strong></summary>

| Label | Controls |
|---|---|
| `hero.*` (both) | Each page's banner text. |
| `thankYou.text`, `thankYou.notice` (sponsors) | The "businesses behind the Knights" paragraph. |
| `thankYou.slots` (sponsors) | The sponsor name list — see the recipe above. |
| `becomeSponsor` (sponsors) | The "Become a Knights sponsor" callout. |
| `details.rows` (contact) | The contact details table — `label` plus either `value` or a `type`/`display` pair. |
| `details.notice` (contact) | The small reminder note under the contact table. |
| `form.heading`, `form.submitLabel` (contact) | The message form's heading and button text — safe to edit. Not `form.action`. |

</details>

<details><summary><strong>content/hall-of-fame.json</strong></summary>

| Label | Controls |
|---|---|
| `hero.*` | The page banner text. |
| `topNotice` | The placeholder-content reminder banner — set to `""` once real records are in. |
| `lifeMembers` | Heading, text and table for Life Members. |
| `seniorHallOfFame.categories` | Three sub-tables — Best & Fairest, Leading Run-Scorer, Leading Wicket-Taker. |
| `juniorHallOfFame` | Heading, text and table for junior award winners. |
| `premierships.cards` | The premiership honour board tiles — `title` (season) and `text` (team). |
| `callout` | The "Help us complete the honour board" banner. |

</details>

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

## The domain & hosting, explained

Background, not something you'll ever need to edit — but a few terms worth knowing, and an honest status check.

**Domain** is the address itself — `croydonnorthcc.com.au` — owned through a registrar, separately from where the site's files live.

**Hosting** is where the website files actually live and get served from — GitHub Pages, for free.

**DNS** is the phone book connecting the two: it tells the internet where to send someone who types the domain. This is configured at the registrar, not on GitHub.

> **Current status:** as of this handbook's last verification, `www.croydonnorthcc.com.au` isn't connected yet — the DNS entry hasn't been set up, so the address doesn't resolve. The site itself works fine at its GitHub-provided address in the meantime. Ask Shub for the current status before telling anyone the club's own web address is broken.

## Roles & access

Editing on GitHub requires a GitHub account with access to the repository — there's no separate "website password."

**Adding a committee member:** never share your own login. In the repository, go to Settings → Collaborators → Add people, and enter their GitHub username or email. They accept an invitation, then can edit exactly as this handbook describes, under their own name.

**Removing access:** same screen — remove their name from Collaborators. Takes effect immediately.

**Permission levels:** GitHub offers Read, Write and Admin. Write is enough for anyone following this handbook — it allows editing and committing, not changing repository settings or managing access. Keep Admin to one or two people.

## Seasonal update checklist

A short list of what typically goes stale between seasons:

- [ ] Senior teams table (`seniors.json`) — confirm grades and grounds match this season's PlayHQ listing.
- [ ] Homepage stats (`home.json → stats`) — team counts change year to year.
- [ ] Sponsors (`sponsors.json` & `home.json → sponsorsPreview`) — add new, remove lapsed.
- [ ] News (`news.json` & `home.json → news`) — clear out sample stories once real ones exist.
- [ ] Hall of Fame (`hall-of-fame.json`) — add the season's award winners once finals wrap up.
- [ ] Contact details (`site.json`) — confirm email/socials are current, especially after a committee handover.
- [ ] Registrations open (`home.json → hero` & `callout`) — update wording once the new season's registration is live.

## If something looks wrong

**Change isn't showing:** wait two minutes and hard-refresh (Shift + Reload). Still not there? Open the **Actions** tab — a red cross next to your commit means the save didn't go through, usually a small JSON typo. Click it to see which file and line.

**Undo a change:** open the file, click **History** (the clock icon), find the version from before your edit, and copy its content back into a new edit — or ask Shub to revert the commit in one click.

**Nothing is ever truly lost:** GitHub keeps every past version of every file automatically. The worst case is a short delay while a mistake gets reverted.

**More scenarios:**

| What you're seeing | What it means |
|---|---|
| No pencil icon on the file | You're not signed in, or don't have edit access yet — see Roles & access. |
| Pencil says something about "forking" | You're signed in but don't have Write access. Ask to be added as a collaborator instead of forking. |
| Can't click "Commit changes" | Write something in the commit message box first. |
| Want to check your edit before saving | Click "Preview" next to "Edit" — for JSON it shows raw text, but confirms nothing's visibly missing. |
| Edited the wrong file | No harm if not committed. If committed, follow "Undo a change" above. |
| Two people edited the same file at once | GitHub usually merges fine if different lines changed. If it warns of a conflict, stop and ask for help. |

## Plain-English glossary

- **Repository ("repo")** — the project's folder of files, stored on GitHub, with a complete saved history of every change.
- **Commit** — a saved checkpoint, like hitting "save," with a short note explaining what changed.
- **JSON** — the simple, labelled text format the content files use.
- **GitHub Pages** — the free service that puts the finished website files online at the club's address.
- **Deploy / publish** — turning the latest saved commit into what visitors actually see live.
- **GitHub Actions** — an automatic assistant that runs steps (like "rebuild the site") every time someone commits a change.

## Bigger changes & who to ask

This handbook covers text and content edits — most of what a club needs day to day. It deliberately doesn't cover adding a new page, changing colours or layout, or anything inside `pages` or `components` — those are code changes, and a mistake there can take the whole site offline. For anything in that category, or if a safety check ever fails and you're not sure why, reach out to Shub or the site's developer (Digituls) rather than guessing.

## Handbook change log

This handbook is verified against the real project, not written from memory — this log says when and what changed.

| Date | What changed |
|---|---|
| 22 Sep 2026 | Expanded into the full edition: cheat sheet, complete field-by-field appendix, roles & access, seasonal checklist, domain/hosting explainer, wider troubleshooting FAQ. |
| 22 Sep 2026 | All recipes verified live against every `content/*.json` file (previously only `site.json` and `hall-of-fame.json` were confirmed). |
| 16 Sep 2026 | First version: golden rules, step-by-step process, JSON basics, recipes for `site.json` and `hall-of-fame.json`. |

---

*Croydon North Cricket Club — internal handbook for committee use. Not for public distribution.*
