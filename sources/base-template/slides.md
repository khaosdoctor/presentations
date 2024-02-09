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
info: >
  ## {{title complete}}
title: {{talkName}}
author: Lucas Santos
keywords: {{keywords}}
presenter: true
exportFilename: ../../exported/{{talkName}}
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

# Title

## Subtitle

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

<div class="flex flex-col flex-wrap flex-content-center flex-justify-center h-full w-full">
  <h1 class="text-center bg-[--yellow] p-5 text-[64px]!">Thank you!</h1>
</div>
<div class="socials text-center" style="font-family: 'Fira Code', mono;">
  <span>https://</span><span class="text-[--green]">{twitter,instagram,github,youtube,linkedin}</span><span>.lsantos.dev</span>
</div>

---
layout: two-cols-header
---

<style scoped>
  .two-cols-header.w-full.h-full {
    align-items: center !important;
  }
  img {
    width: 90% !important;
  }
</style>

# See this talk on my website

::left::

*https://lsantos.dev/talks/{{talkName}}*

::right::

![](/talk-qr.png)
