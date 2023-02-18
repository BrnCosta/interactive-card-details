# Frontend Mentor - Interactive card details

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- HTML5
- Javascript
- Tailwind CSS
- Mobile-first workflow

### What I learned

Basics of Tailwind CSS

```html
<link rel="stylesheet" href="./tailwind/styles.css">

<label id="error-name" class="text-[12px] tracking-widest text-red-400"></label>
```

How to use regex

```js
var cardNumber = e.target.value
  .replace(/\D/g, "")
  .replace(/(\d{4})(\d)/, "$1 $2")
  .replace(/(\d{4})(\d)/, "$1 $2")
  .replace(/(\d{4})(\d{1,4})/, "$1 $2")
  .replace(/( \d{4})\d+?$/, "$1");
```

### Useful resources

- [Regex examples](https://valchan.com.br/mask-input/) - This helped me a lot with the regex mask
- [Tailwind Website](https://tailwindcss.com/docs/installation) - Docs

## Author

- LinkedIn - Bruno Costa
- Frontend Mentor - @BrnCosta
- Twitter - @_brnCosta
