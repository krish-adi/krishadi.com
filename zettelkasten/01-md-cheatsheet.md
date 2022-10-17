---
title: Markdown Cheat Sheet
description: Markdown cheat sheet
date: 2021-11-15
modified: 2021-11-15
category: zettelkasten
layout: post
---

# Markdown Cheat Sheet

This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements.

-   [Basic syntax](#basic-syntax)
-   [Extended syntax](#extended-syntax).

## Basic Syntax

These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.

### Heading

<table>

<tr>
<td>

`#H1`

</td>
<td>

<h1>H1</h1>

</td>
</tr>

<tr>
<td>

`##H2`

</td>
<td>

<h2>H2</h2>

</td>
</tr>

<tr>
<td>

`###H3`

</td>
<td>

<h3>H3</h3>

</td>
</tr>

<tr>
<td>

`####H4`

</td>
<td>

<h4>H4</h4>

</td>
</tr>

<tr>
<td>

`#####H5`

</td>
<td>

<h5>H5</h5>

</td>
</tr>

<tr>
<td>

`######H6`

</td>
<td>

<h6>H6</h6>

</td>
</tr>

</table>

### Text

<table>

<tr>
<td>

`**bold text**`

</td>
<td>

**bold text**

</td>
</tr>

<tr>
<td>

`_italicized text_`

</td>
<td>

_italicized text_

</td>
</tr>

<tr>
<td>

`~~strikethrough text~~`

</td>
<td>

~~strikethrough text~~

</td>
</tr>

</table>

### Blockquote

<table>

<tr>
<td>

```
> blockquote
```

</td>
<td>

> blockquote

</td>
</tr>
</table>

### Lists

**Ordered List**

<table>
<tr>
<td>

```
1. First item
2. Second item
3. Third item
```

</td>
<td>

1. First item
2. Second item
3. Third item

</td>
</tr>
</table>

**Unordered List**

<table>
<tr>
<td>

```
-   First item
-   Second item
-   Third item
```

</td>
<td>

-   First item
-   Second item
-   Third item

</td>
</tr>
</table>

### Code

<table>
<tr>
<td>

```
`code`
```

</td>
<td>

`code`

</td>
</tr>

<tr>
<td>

````
    ```shell
    python -m venv ./ENV_NAME
    ```
````

</td>
<td>

```shell
python -m venv ./ENV_NAME
```

</td>
</tr>

<tr>
<td>

````
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
````

</td>
<td>

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

</td>
</tr>

<tr>
<td>

````
    ```shell
    {
      "firstName": "John",
      "lastName": "Smith",
      "age": 25
    }
    ```
````

</td>
<td>

```shell
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

</td>
</tr>

</table>

### Horizontal Rule

```md
---
```

---

### Link

```md
[title](https://www.example.com)
```

[title](https://www.example.com)

### Image

```md
![alt text](https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2107&q=80)
```

![alt text](https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2107&q=80)

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Table

```md
| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |
```

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

### Footnote

```md
Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.
```

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### My Great Heading With Custom Id For Reference {#custom-id}

```md
### My Great Heading With Custom Id For Reference {#custom-id}
```

### Definition List

```md
term
: definition
```

term
: definition

### Task List

```md
-   [x] Write the press release
-   [ ] Update the website
-   [ ] Contact the media
```

-   [x] Write the press release
-   [ ] Update the website
-   [ ] Contact the media

### Extended text

<table>

<tr>
<td>

```
Use an emoji! :joy:
```

</td>
<td>

Use an emoji! :joy:

</td>
</tr>

<tr>
<td>

```
Highlight these ==very important words==
```

</td>
<td>

Highlight these ==very important words==

</td>
</tr>

<tr>
<td>

```
Subscript H~2~O
Superscript X^2^
```

</td>
<td>

Subscript H~2~O
Superscript X^2^

</td>
</tr>
</table>

---

**References**

-   Taken from [The Markdown Guide](https://www.markdownguide.org)!
