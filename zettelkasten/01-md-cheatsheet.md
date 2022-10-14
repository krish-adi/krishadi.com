---
title: Markdown Cheat Sheet
description: Markdown cheat sheet
date: 2021-11-15
modified: 2021-11-15
category: zettelkasten
layout: post
---

# Markdown Cheat Sheet

Thanks for visiting [The Markdown Guide](https://www.markdownguide.org)!

This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax) and [extended syntax](https://www.markdownguide.org/extended-syntax).

## Basic Syntax

These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.

### Heading

# H1

## H2

### H3

#### H4

##### H5

###### H6

### Bold

**bold text**

### Italic

_italicized text_

### Blockquote

> blockquote

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

-   First item
-   Second item
-   Third item

### Code

`code`

### Horizontal Rule

---

### Link

[title](https://www.example.com)

### Image

![alt text](https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2107&q=80)

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Table

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

### Fenced Code Block

```shell
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

```shell
python -m venv ./ENV_NAME
```

```js
/**
 * Does a thing
 */
function helloWorld(param1, param2) {
    var something = 0;

    // Do something
    if (2.0 % 2 == something) {
        console.log("Hello, world!");
    } else {
        return null;
    }

    // @TODO comment
}
```

### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading ID

### My Great Heading {#custom-id}

### Definition List

term
: definition

### Strikethrough

~~The world is flat.~~

### Task List

-   [x] Write the press release
-   [ ] Update the website
-   [ ] Contact the media
