# Frontend Mentor - Recipe page solution

This is a solution to the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)


## Overview

### Screenshot

![Mobile view](./assets/images/Screenshot%20FMr%20Recipe%20page.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/Glorit74/recipe-page-main)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Tailwind
- Mobile-first workflow

### What I learned

How to make custom list numbers, but I ended up not using it

```css
.custom-ol {
  /* Set "my-sec-counter" to 0 */
  counter-reset: my-counter;
  list-style-type: none;
  color: blue;
}

.costom-ol li::before {
  /* Increment "my-counter" by 1 */
  counter-increment: my-counter;
  content: counter(my-counter) ". ";
  display: inline-block;
  /* if there are more than nine items*/
  text-align: right;
  direction: rtl;
}
```

### Continued development

I failed to use the variable font with tailwind

### Useful resources

- [counter-increment with CSS](https://www.w3schools.com/cssref/pr_gen_counter-increment.php) - This helped me to make my custome ordered list.


