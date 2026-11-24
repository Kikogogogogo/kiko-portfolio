# Kiko Zhao · Portfolio

A personal website and technical blog built with HTML and CSS. Edit it directly on GitHub. No dependencies or build step are required.

[Visit the portfolio](https://kikogogogogo.github.io/kiko-portfolio/)

## Preview and maintain

- Open `docs/index.html` to preview the homepage, or run `python3 -m http.server 8000 --directory docs` from the repository root and visit `http://localhost:8000`.
- Edit `docs/experience/index.html` and `docs/projects/index.html` to update experience and projects. Copy an existing `article` to add an entry.
- Edit `docs/personal-life/index.html` to update the Some Facts About Me page.
- Change the palette, layout, or CSS cat animation in `docs/style.css`. The illustration stays still for visitors who enable reduced motion.

## Publish a blog post

The blog has four topic folders under `docs/journey/`: `leetcode`, `system-design`, `robot-learning`, and `agents`.

1. Choose a topic and copy `templates/post.html` into its folder. For example, use `docs/journey/leetcode/valid-parentheses.html`.
2. Update the page title, heading, the date in both places in the `time` element, and the article body.
3. Open that topic's `index.html`. Under **Posts**, add a list item such as `<li><a href="valid-parentheses.html">Valid Parentheses</a></li>`. Each topic includes an English sample post you can use as a reference.
4. Open the topic page to test the article link and its **Back to topic** link. Commit the article and the index change together, then push to `main`.

To update a published post, edit its existing HTML file. Update the corresponding index link text if you change the title. Keep the filename stable so existing links keep working.


## Deploy on GitHub Pages

In **Settings → Pages → Build and deployment**, choose **Deploy from a branch** and select **main** and **/docs**. GitHub Pages republishes the website after updates to that branch.

[GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
