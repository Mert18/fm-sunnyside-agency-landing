# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./images/screenshot.jpg)


### Links

- Solution URL: [https://fm-sunnyside-agency-landing.vercel.app/](https://fm-sunnyside-agency-landing.vercel.app/)
- Live Site URL: [https://fm-sunnyside-agency-landing.vercel.app/](https://fm-sunnyside-agency-landing.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- Vanilla JS

### What I learned

I do not have so many hamburger menus that I made, so making this was a challenge to me but I managed to do it.

This was a more css challenge, so I realized there are some parts that I have to get better at such as grid system and background images.

Hoverable links that I made with borders in the project, gave me a solid understanding how borders work. 

This is the hoverable links code, so it does not seem clean to me, so I am planning to find another cool way to do it as soon as possible.
```css
    #stand-text a{
      font-family: var(--font-fraunces);
      color: black;
      padding: 0rem .4rem;
      border-radius: 3px;
      --d: 100%;
    
      background: 
          linear-gradient(var(--soft-red2) 0 0) 
          0 100% /var(--d, 0) 7px 
        no-repeat;
      transition:0.5s;
    }
```

Hiding mobile menu in javascript was easier than I thought.
```javascript
    const hamburgerLines = document.querySelector(".header-nav-hamburger-hamb");
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    hamburgerMenu.style.display = 'none'
    
    hamburgerLines.addEventListener('click', () => {
      if(hamburgerMenu.style.display === "block"){
        hamburgerMenu.style.display = "none"
      }else {
        hamburgerMenu.style.display = "block"
      }
    })
```

In the first section, I had to decide If I would use background images or img tags, I chose img tags, It was a hard challenge but I managed to do it with using grid row and grid column properties together.
```css
    .promise{
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
```
```

## Author

- Website - [Mert Uyğur](https://merd.dev/)
- Frontend Mentor - [@Mert18](https://www.frontendmentor.io/profile/Mert18)