# theogreenly.com — Free, no-ads portfolio

A clean, mobile‑friendly portfolio for **Theo Greenly** you can host **100% free** (no ads) on **GitHub Pages** or **Netlify**. Includes local MP3 audio players and a simple photo gallery.

---

## Quick start (GitHub Pages)

1) **Create a GitHub account** (if you don’t have one).  
2) **New repository** → name it `theogreenly.com` (or any name you like).  
3) **Upload** the files from this folder into the repo (drag‑and‑drop in GitHub UI).  
4) Go to **Settings → Pages**:  
   - **Source**: `Deploy from a branch`  
   - **Branch**: `main` (or `master`) → `/root` → **Save**  
   - Wait for the green “Site is live” message (a minute or two).

5) **Custom domain**: On the same **Settings → Pages** screen, set the **Custom domain** to `theogreenly.com`. This will create/expect a `CNAME` file in the repo automatically (you can also edit the included `CNAME` file).

6) **DNS at GoDaddy** (Apex domain `theogreenly.com`):  
   In your GoDaddy DNS for `theogreenly.com`, add **four A records** pointing to GitHub Pages:
   - `A @ 185.199.108.153`  
   - `A @ 185.199.109.153`  
   - `A @ 185.199.110.153`  
   - `A @ 185.199.111.153`

   If you also want `www.theogreenly.com` to work, add a **CNAME**:
   - `CNAME www` → `YOUR_USERNAME.github.io`

7) Force **HTTPS** in **Settings → Pages** once the certificate is ready.

That’s it. No hosting costs, no ads.

---

## Add your work

### Photos
- Replace the placeholder images in `assets/images` with your own. Keep filenames or update `index.html` accordingly.
- Use meaningful `alt` text for accessibility and SEO.

### Audio
- Put MP3s in `assets/audio` and update the filenames in the `<audio>` tags in the **Audio** section of `index.html`.
- Each player is a native, ad‑free HTML5 audio element.

### Text
- Update headlines, descriptions, and bio directly in `index.html` (search for the `Selected work`, `Audio`, `Photography`, `About`, and `Contact` sections).

---

## Optional: Netlify (also free, very easy)
- Create a Netlify account → **Add new site** → **Deploy manually** → drag this folder.  
- Set your custom domain in **Domain management** and update GoDaddy DNS to the Netlify records they provide.

---

## Notes
- This template uses only vanilla HTML/CSS/JS. No tracking, no frameworks.  
- Lighthouse scores will be strong out of the box; keep images compressed for best performance.  
- The contact section uses a **copy‑to‑clipboard email** to avoid a server or spam. You can wire a form later if you want.

---

Enjoy!
