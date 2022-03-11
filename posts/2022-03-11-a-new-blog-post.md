---
layout: blog
title: A New Blog Post
date: 2022-03-11T02:53:20.361Z
thumbnail: /images/uploads/screen-shot-2022-01-14-at-2.27.50-pm.png
rating: 1
---
As described above, the `widget` property specifies a built-in or custom UI widget for a given field. When a content editor enters a value into a widget, that value is saved in the document front matter as the value for the `name` specified for that field. A full listing of available widgets can be found in the [Widgets doc](https://www.netlifycms.org/docs/widgets).

Based on this example, you can go through the post types in your site and add the appropriate settings to your Netlify CMS `config.yml` file. Each post type should be listed as a separate node under the `collections` field. See the [Collections reference doc](https://www.netlifycms.org/docs/configuration-options/#collections) for more configuration options.