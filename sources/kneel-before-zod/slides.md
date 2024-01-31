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
  ## Kneel Before Zod

  > Unlocking the secrets to an error-free TypeScript experience

  Prepare to dive into the secrets of creating an error-proof application. Unlock the full potential of Zod, the powerful TypeScript library for schema validation. Discover techniques, tips, and best practices that will elevate your code to new heights of reliability. Join us on this transformative journey as we harness the might of Zod and master the art of error-proofing, ensuring flawless applications that stand the test of time.
title: Kneel Before Zod
author: Lucas Santos
keywords: typescript,nodejs,validation,schema,zod,deno
presenter: true
exportFilename: kneel-before-zod
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

# Kneel Before Zod

## Unlocking the secrets to an error-free TypeScript experience

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

# What is Zod?

- Definition of zod
- What it is
- Briefly present others like Joi, AJV and IO-TS (say we use all at Klarna)

---

# Why Zod?

- Why we use it
- Compare with other tools (AJV, Joi, IO-TS, Typebox, ark)

---

# Schema-driven development

- What is schema validation
- Why is it important
- What is the base flow of a schema validation
- How to properly do schema validation

---

# The encounter with Zod

- Show an example of a schema validation done with AJV, it should be a big one
- Say that it's difficult to read and understand
- Show another one with Joi, then explain about the usage with TypeScript
- Show the same example with Zod, explain that it's easy to read and understand, then explain about the usage with TypeScript

---

# The workings of Zod

- Basic usage of Zod

---

# The power of Zod

- The quote here is "Data is not unique"
- Show that Zod can be used in a composable way, without having to recreate the same types
- Rather than that you can extend the current schema, and even use parts of the schema in other schemas

---

# The extensibility of Zod

- Show that you can extend the schema with custom validations
- Zod is a library that is built on top of the concept of "Zod Types", which are the building blocks of the schema
- Transform, refine, and extend the schema with custom validations
- Branded types

---

# The errors of Zod

- Talk about the error handling with parse and safeParse
- Show that you can use the error map to customize the error messages
- Show what you can do with ZodError

---

# The reality of Zod

- Show a real example of a schema validation
- OAP validation example with Zod validating a JSON string that comes within a request body
- Other complex examples of schema validation

---

# Summary

- Key takeaways and final thoughts

---

# Thank you
