# Health360 — Healthcare Risk & Disease Analytics

A responsive student-project website for **Health360: Comprehensive Healthcare Risk and Disease Analytics**.

## Files
- `index.html` — page structure and sections
- `style.css` — responsive design, mobile layout, and print styles
- `script.js` — interactive charts, filters, heatmap, reset, and print controls

## Run locally
1. Download/extract the project folder.
2. Open `index.html` in a modern browser.
3. Internet is needed for Chart.js and Google Fonts CDNs. The page structure still loads without fonts; charts need Chart.js.

## Important data note
The dashboard displays **illustrative sample values** for design and educational demonstration. It is not clinical advice, not a diagnosis tool, and not a substitute for validated healthcare data. The displayed patient representation is 5,000, as requested, but no real patient records are included.

## Publish on GitHub Pages
1. Sign in at https://github.com and create a new repository, e.g. `health360-analytics`.
2. Set it to Public if you want GitHub Pages publishing on the free plan.
3. On the repository page, choose **Add file → Upload files**.
4. Upload `index.html`, `style.css`, `script.js`, and `README.md` (or upload the extracted folder's contents).
5. Add a commit message such as `Add Health360 analytics website` and click **Commit changes**.
6. Go to **Settings → Pages**.
7. Under **Build and deployment**, choose **Deploy from a branch**.
8. Select branch **main** and folder **/(root)**, then click **Save**.
9. Wait a minute or two, refresh the Pages settings, and open the published URL shown there. It will usually look like `https://YOUR-USERNAME.github.io/health360-analytics/`.

## Updating the website
Edit the files in VS Code, then return to the repository and upload the changed files, or use Git commands:
```bash
git add .
git commit -m "Update Health360 dashboard"
git push
```
