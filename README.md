# Kiko Zhao · Portfolio

静态个人网站，使用 HTML 和 CSS，无需安装依赖或运行构建。可在 GitHub 网页上直接编辑。

## 预览与维护

- 双击 `docs/index.html` 预览首页。也可以在仓库目录运行 `python3 -m http.server 8000 --directory docs`，打开 `http://localhost:8000`。
- 在 `docs/index.html` 更新经历和项目。新增条目时复制已有的 `article`。
- 在 `docs/style.css` 修改配色、字体和排版。
- 添加博客时，复制 `templates/post.html` 到 `docs/journey/your-post.html`，修改浏览器标题、日期、正文。然后在 `docs/journey/index.html` 的 Posts 区域把空状态替换为文章链接，例如 `<a href="your-post.html">Article title</a>`。以后继续在同一区块添加文章链接。

## GitHub Pages

把仓库推送到 GitHub。在仓库 **Settings → Pages → Build and deployment** 选择 **Deploy from a branch**，设为 **main** 和 **/docs** 后保存。首次发布成功后可以从 Pages 设置打开站点。之后推送到 `main` 的站点改动会自动重新部署。

[GitHub Pages 官方文档](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
