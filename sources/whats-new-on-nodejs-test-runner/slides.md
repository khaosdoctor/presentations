---
theme: dracula
class: text-center
highlighter: shikiji
lineNumbers: true
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: Ubuntu
  mono: Fira Code
info: |
  ## What's new on Node.js Test Runner

  One of the most exciting features of Node in the past months is the new test runner. But for some reason people don't seem to be using it a lot!

  In this talk I'll guide you through all the coolest new features this new test runner has, including the ones that I have personally created and worked with. We will go internally in the Node code and see how mocks are implemented and how to work with them, we will also see the next steps for the runner and what we should expect for it in the future.

  So get ready to make your testing much more integrated with native assertions getting all the gold without having to sacrifice performance!
title: What's new on Node.js Test Runner
author: Lucas Santos
keywords: typescript,nodejs,validation,schema,zod,deno
presenter: true
exportFilename: whats-new-on-nodejs-test-runner
export:
  format: pdf
  withClicks: true
remoteAssets: true
layout: cover
---

<style scoped>
  h2 {
    @apply bg-[--red] text-[--purple-dark]! fw-bold text-white text-nowrap pr-[2px];
  }
</style>

# Node.js Test Runner

## Why is it game-changing?

---
layout: default
transition: slide-up
---

<style scoped>
  h1 {
    @apply text-center;
    font-family: 'Quantico'
  }
  #avatar {
    @apply w-full h-full text-center grid! items-center justify-items-center;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
  img {
    grid-area: 1 / 2 / 5 / 5;
  }
  div.position {
    grid-area: 1 / 1 / 5 / 2;
    @apply text-center;
  }
  div.logogde {
    grid-area: 1 / 5 / 3 / 6;
    @apply text-center;
  }
  div.logomvp {
    grid-area: 2 / 5 / 4 / 6;
    @apply text-center;
  }
  div.logodocker {
    grid-area: 3 / 5 / 5 / 6;
    @apply text-center;
  }
  div.socials {
    @apply text-center;
    grid-area: 5 / 1 / 6 / 6;
  }
</style>

# $whoami

<div id="avatar">
  <div class="position">
    <span class="text-nowrap font-size-[15px]">Senior Software <span class="bg-[--yellow] text-[--purple-darker] px-[3px] py-[1px]"><b>engineer_</b></span></span>
    <img class="mt-[5px]" src="/klarna.png" />
  </div>
  <img class="b-rd-[50%] w-[60%]" src="/avatar.png" />

  <div class="logogde">
    <img class="w-[55%] mt-5" src="/gde.png" />
  </div>
  <div class="logomvp">
    <img class="w-[65%] mt-5" src="/mvp.png" />
  </div>
  <div class="logodocker">
    <img class="w-[65%] mt-5" src="/captains.png" />
  </div>
  <div class="socials" style="font-family: 'Fira Code', mono;">
    <span>https://</span><span class="text-[--green]">{twitter,instagram,github,youtube,linkedin}</span><span>.lsantos.dev</span>
  </div>
</div>

---
layout: fact
---

# What is my objective here?

<v-clicks>

<h2 class="bg-[--yellow] text-[--purple-darker]! font-bold">make you ditch Jest</h2>
<h3 class="text-white! pt-6">yes, it's that simple...</h3>

</v-clicks>

---
layout: section
---

# and how am I going to do that?


<v-clicks>

<h2 class="text-[--purple-darker]! bg-[--green] py-1 font-bold">by showing you something (possibly) better</h2>

</v-clicks>

---
layout: fact
transion: slide-up
---

# Why "possibly"?

<v-clicks>

<h2 class="bg-[--red] text-[--purple-darker]! font-bold">because the Node.js test runner is still experimental</h2>

</v-clicks>

---
layout: section
---

# What's bad about current runners?

---

# What's bad about current runners?

<style scoped>
  ol {
   li:nth-child(even)::marker {
      @apply text-[--green]! fw-bold!;
   }
   li:nth-child(odd)::marker {
      @apply text-[--blue]! fw-bold!;
   }
  }
</style>

<v-clicks depth="2" class="text-[24px]">

1. They are difficult to configure, especially for TypeScript
1. (Some) Are slow
1. **YAL** (Yet Another Library) on top of your project
1. Test runners seem to not interoperate well with each other, making it hard to switch
1. Most of them are pretty opinionated, some of them are just old
1. Want TypeScript, but don't want to use ts-jest? Good luck!
    1. Otherwise, **YAL**
1. There are SO MANY of them, it's hard to choose

</v-clicks>

---

<div class="flex flex-col flex-wrap flex-content-center flex-justify-center h-full w-full">
  <h1 class="text-center bg-[--yellow] p-5 text-[64px]!">Thank you!</h1>
</div>
<div class="socials text-center" style="font-family: 'Fira Code', mono;">
  <span>https://</span><span class="text-[--green]">{twitter,instagram,github,youtube,linkedin}</span><span>.lsantos.dev</span>
</div>
