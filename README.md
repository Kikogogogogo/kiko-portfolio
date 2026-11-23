# Kiko Zhao · Portfolio

A personal website and technical blog built with HTML and CSS. Edit it directly on GitHub. No dependencies or build step are required.

[Visit the portfolio](https://kikogogogogo.github.io/kiko-portfolio/)

## Preview and maintain

- Open `docs/index.html` to preview the homepage, or run `python3 -m http.server 8000 --directory docs` from the repository root and visit `http://localhost:8000`.
- Edit `docs/experience/index.html` and `docs/projects/index.html` to update experience and projects. Copy an existing `article` to add an entry.
- Change the palette, layout, or CSS 3D animation in `docs/style.css`. The illustration stays still for visitors who enable reduced motion.

## Publish a blog post

1. Copy `templates/post.html` to `docs/journey/your-post.html`.
2. Update the page title, heading, publication date, and article body.
3. Add a link under **Posts** in `docs/journey/index.html`. For the first post, replace the empty-state paragraph with that link.

## Deploy on GitHub Pages

In **Settings → Pages → Build and deployment**, choose **Deploy from a branch** and select **main** and **/docs**. GitHub Pages republishes the website after updates to that branch.

[GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
