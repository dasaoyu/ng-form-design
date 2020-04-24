---
type: Theme
order: 100
title: Default Layout
---

The default layout all parameters are prefixed with `@vx-default-`.

## Parameters

| Name | Default | Description |
| --- | --- | --- |
| `@vx-default-prefix` | `.vx-default` | Style name prefix |
| `@vx-default-ease` | `cubic-bezier(.25, 0, .15, 1)` | Animation filter function |
| `@vx-default-header-hg` | `64px` | Height of header |
| `@vx-default-header-bg` | `@primary-color` | Background-color of header |
| `@vx-default-header-padding` | `@layout-gutter * 2` | Horizontal padding of header |
| `@vx-default-header-search-enabled` | `true` | Whether top search |
| `@vx-default-header-search-height` | `34px` | Height of top search |
| `@vx-default-header-icon-fs` | `18px` | Font size of icon |
| `@vx-default-aside-wd` | `200px` | Width of aside |
| `@vx-default-aside-bg` | `#fff` | Background-color of aside |
| `@vx-default-aside-scrollbar-width` | `0` | Scrollbar width of aside |
| `@vx-default-aside-scrollbar-height` | `0` | Scrollbar height of aside |
| `@vx-default-aside-scrollbar-track-color` | `transparent` | Scrollbar track color of aside |
| `@vx-default-aside-scrollbar-thumb-color` | `transparent` | Scrollbar thumb color of aside |
| `@vx-default-aside-nav-fs` | `14px` | Font size of nav name |
| `@vx-default-aside-nav-icon-width`          | `14px`                         | Width of nav icon     |
| `@vx-default-aside-nav-img-wh`              | `14px`                         | Width & height of nav image |
| `@vx-default-aside-nav-padding-top-bottom` | `@layout-gutter` | Vertical padding of nav |
| `@vx-default-aside-nav-item-height` | `38px` | Item height of nav |
| `@vx-default-aside-nav-text-color` | `rgba(0, 0, 0, 0.65)` | Nav text color |
| `@vx-default-aside-nav-text-hover-color` | `#108ee9` | Nav text hover color |
| `@vx-default-aside-nav-group-text-color` | `rgba(0, 0, 0, 0.43)` | Group text color |
| `@vx-default-aside-nav-selected-text-color` | `#108ee9` | Nav selected text color |
| `@vx-default-aside-nav-selected-bg` | `#fcfcfc` | Nav selected background color |
| `@vx-default-aside-collapsed-wd` | `@layout-gutter * 8` |  Width of aside collapsed |
| `@vx-default-aside-collapsed-nav-fs` | `24px` | Font size of aside collapsed |
| `@vx-default-aside-collapsed-nav-img-wh` | `24px` | Width & height nav image of aside collapsed |
| `@vx-default-content-heading-bg` | `#fafbfc` |  Heading background color of content area |
| `@vx-default-content-heading-border` | `#efe3e5` | Heading bottom border color of content area |
| `@vx-default-content-padding` | `@layout-gutter * 3` | Padding of content area |
| `@vx-default-content-bg` | `#f5f7fa` | Background color of content area |
| `@vx-default-widget-app-icons-enabled` | `true` | Whether the app-icon widget styles |
| `@vx-default-aside-user-enabled`       | `true` | Whether the user styles of aside |

## Usage

Import in `src/styles.less`:

```less
@import '~@vx/theme/styles/layout/default/index';
```
