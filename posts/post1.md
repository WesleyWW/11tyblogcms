---
title: "Post 1 Title"
date: "2020-01-01"
slug: "post1"
---

The configuration above adds a new setting, public_folder. While media_folder specifies where uploaded files are saved in the repo, public_folder indicates where they are found in the published site. Image src attributes use this path, which is relative to the file where it's called. For this reason, we usually start the path at the site root, using the opening /.

If public_folder is not set, Netlify CMS defaults to the same value as media_folder, adding an opening / if one is not included.

Collections
Collections define the structure for the different content types on your static site. Since every site is different, the collections settings differ greatly from one site to the next.

Let's say your site has a blog, with the posts stored in _posts/blog, and files saved in a date-title format, like 1999-12-31-lets-party.md. Each post begins with settings in yaml-formatted front matter, like so: