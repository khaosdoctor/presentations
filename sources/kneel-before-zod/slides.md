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
layout: image-right
image: https://zod.dev/logo.svg
---

# What is Zod?

<v-clicks>

- Zod is a TypeScript-first schema declaration and validation library
- Allows you to define a schema and validate data against it

</v-clicks>

---

# How it looks like

```ts twoslash
import { z } from "zod";

const schema = z.object({
  id: z.string().uuid().brand("ID"),
  name: z.string(),
  email: z.string().email(),
});

const data = {
  id: "123e4567-e89b-12d3-a456-426614174000",
  name: "Lucas",
  age: 28,
}

const result = schema.parse(data);
//     ^?
```

<!--
-Zod is easier to read and already produces the typed output
-->

---
layout: iframe-right
url: http://ajv.js.org
---

# Zod is not the first

There are others that do the same, like:

1. AJV: But then, where are the types?

<!--
- AJV is a classic, but it doesn't create a type-safe validation, because it relies on JSON Schema
- scroll the page so the audience can see it's long and cumbersome
-->

---
layout: image
---

# Zod is not the second

![](/typebox.jpg)

<!--
- To add types to AJV, we have typebox, which creates JSON Schemas from TS Types
- Problem remains, though, we still need to parse the JSON Schema
-->

---

# Zod is not the third

```typescript
const Joi = require('joi');

const schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeat_password: Joi.ref('password'),
    access_token: [
        Joi.string(),
        Joi.number()
    ],
    birth_year: Joi.number()
        .integer()
        .min(1900)
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})

schema.validate({ username: 'abc', birth_year: 1994 });
// -> { value: { username: 'abc', birth_year: 1994 } }
```

<!--
- Joi is the most classical one, and also the one closest to Zod
- the problem is that it doesn't have types, because it was created before TS was a thing
-->

---
layout: iframe-right
url: https://gcanti.github.io/io-ts/#the-idea
---

# Zod is not the fourth

There are others that do the same, like:

1. AJV
1. Typebox
1. Joi
1. IO-TS

<!--
- IO-TS is a functional approach to schema validation
- It's good, but complex to read, complex to write, and even more complex to understand
-->

---
layout: iframe-right
url: https://arktype.io
---

# Zod is not the fifth

There are others that do the same, like:

1. AJV
1. Typebox
1. Joi
1. IO-TS
1. ArkType

<!--
- the new kid on the block, arktype allows you to create types from a mix of Zod and IO
- Still not that easy to read or understand
-->

---

# Then, why Zod?

<v-clicks depth="2">

- AJV and TypeBox are not TypeScript-first and they need to be converted to JSON Schema
- Joi is not TypeScript-first, it's old and not very composable (also not super maintained)
- IO-TS is super composable, but also super complex, and it's not very easy to read or maintain
- ArkType is a new one, it's good, but it's not as mature as Zod
  - Plus it's also not as easy to read and maintain

</v-clicks>

---

# The Zod way

<v-clicks>

  - Zod is a library that is built on top of the concept of "Zod Types"
  - You compose Zod Types (which are standalone) to create a more complex schema
  - You can transform, refine, and extend the schema with custom validations
  - Has built-in support for branded types
  - Has a very good error handling system
  - Easy to read and maintain
  - Generates types for you

</v-clicks>

<!--
1. Each zod type is a schema of its own, which means you can use them to validate stuff
2. Then you can compose those schemas to create a complex object
3. Zod is easy to extend, mostly because its types are schemas of their own
-->

---

# Comparing Zod

Let's create a type that represents a user, using Joi:

```ts twoslash
import Joi from 'joi'

const schema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  password: Joi.string().required()
})

const user = schema.validate({ username: 'lsantosdev', password: '123456' })
```

<!--
  - Despite joi being easy to read, it fails to produce a type-safe output
-->

---
transition: slide-up
---

# Comparing Zod

Oh no! We got `any`... This means we have to type it ourselves

```ts twoslash
import Joi from 'joi'

const schema = Joi.object({
//       ^?


  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  password: Joi.string().required()
})

const user = schema.validate({ username: 'lsantosdev', password: '123456' })
//     ^?
```

---

# Comparing Zod

Let's do the same with Zod:

```ts twoslash
import { z } from 'zod'

const schema = z.object({
  username: z.string().min(3).max(30), // zod is required by default
  password: z.string()
})

const user = schema.parse({ username: 'lsantosdev', password: '123456' })
//      ^?





//@noErrors
const username = user.us // COMPLETIONS!
//                     ^|
```

---
transition: slide-up
---

# Schema-driven development


<v-clicks>

  1. Schema-driven development is when you focus your data on schemas
  1. It allows your application to stay consistent
  1. Reduces the amount of errors and makes your code more reliable

</v-clicks>

---

# The rules of schema-driven-development

<style scoped>
  ol#rules li:nth-child(even)::marker {
    color: var(--red) !important;
  }

  ol#rules li:nth-child(odd)::marker{
    color: var(--yellow) !important;
  }
</style>

<v-clicks>

<ol id="rules" class="text-[3em]">
<li>Your schema is your type</li>
<li>Schemas are the source of truth</li>
<li><u class="text-bold">D</u>o not <u class="text-bold">R</u>epeat <u class="text-bold">Y</u>ourself</li>
</ol>

</v-clicks>

---
layout: two-cols-header
clicks: 2
---

<style scoped>
  div.slidev-layout.two-cols-header.h-full.w-full {
    grid-template-rows: repeat(2, 0.18fr) !important;
    grid-column-gap: 2em !important;
  }
</style>

# Your schema is your type

**NEVER** redefine a type that can be inferred from a schema.

If your schema changes, your type will **not** follow ➡️ _Bad typing_

::left::

<v-click at="1">

  ## Do ✅

  ```ts twoslash
  import {z} from 'zod'
  // ---cut---
  const userSchema = z.object({
    user: z.string(),
    pass: z.string()
  })

  type UserType = z.infer<typeof userSchema>
  //     ^?
  ```

</v-click>

::right::

<v-click at="0">

  ## Don't 🚫

  ```ts twoslash
  import {z} from 'zod'
  // ---cut---
  const userSchema = z.object({
    user: z.string(),
    pass: z.string()
  })

  // REPEATED
  interface UserType {
    user: string
    pass: string
  }
  ```

</v-click>

---
layout: fact
transition: slide-up
---

<h1>Data is <span class="bg-[--red] color-[--purple-dark] px-4">not</span> unique</h1>

Extend and reuse, <span class="bg-[--yellow] color-[--purple-dark] px-1">do not</span> re-create

---
layout: two-cols-header
clicks: 2
---

<style scoped>
  div.slidev-layout.two-cols-header.h-full.w-full {
    grid-template-rows: repeat(2, 0.18fr) !important;
    grid-column-gap: 2em !important;
  }
</style>

# Reduce, Reuse, Recycle

Try to extend and reuse your types as much as possible without re-creating the schema

::left::

<v-click at="0">

  ## Reuse ♻️

  ```ts twoslash
  import { z } from 'zod'
  // ---cut---
  const idSchema = z.string().uuid().brand('ID')
  const userSchema = z.object({
    id: idSchema,
    email: z.string().email().brand('EMAIL')
  })
  type UserType = z.infer<typeof userSchema>
  //     ^?
  ```

</v-click>

::right::

<v-click at="1">

  ## Extend 🔎

  ```ts twoslash
  import { z } from 'zod'
  const idSchema = z.string().uuid().brand('ID')
  const userSchema = z.object({
    id: idSchema,
    email: z.string().email().brand('EMAIL')
  })
  type UserType = z.infer<typeof userSchema>
  // ---cut---
  const employeeSchema = userSchema.extend({
    badge: z.number()
  })

  type EmployeeType = z.infer<typeof employeeSchema>
  //     ^?
  ```

</v-click>

---

# The extensibility of Zod

- If you need custom validations you can extend zod and refine your data
- You can also transform the data so you receive the final schema already converted

```ts twoslash
import {z} from 'zod'
// ---cut---
const configSchema = z.object({
  PORT: z.string().optional().default("3000"),
  DB_NAME: z.string().optional().default('my-db'),
  DB_HOST: z.string().optional().default('localhost'),
  DB_PORT: z.string().optional().default('27017'),
  DB_USER: z.string().optional(),
  DB_PASS: z.string().optional()
}).transform((val) => {
  const credentials = val.DB_USER && val.DB_PASS ? `${val.DB_USER}:${val.DB_PASS}@` : ''
  return {
    port: Number(val.PORT),
    connStr: `mongodb://${credentials}${val.DB_HOST}:${val.DB_PORT}/${val.DB_NAME}`
  }
})

const config = configSchema.parse({}) // { port: 3000, connStr: 'mongodb://localhost:27017/my-db' }
//      ^?
```

---

# Refine

`.refine()` will extend your validation to create custom validators. It's a function that returns a boolean and a message

```ts twoslash
import { z } from 'zod'
// ---cut---
const configSchema = z.object({
  PORT: z
    .string()
    .optional()
    .default('3000')
    .refine((v) => Number(v) > 65535, 'Invalid port range')
})
type Config = z.infer<typeof configSchema>
//    ^?




const valid = configSchema.parse({ PORT: 3000 }) // ok
const invalid = configSchema.parse({PORT: 99999999}) // ZodError "Invalid Port Range"
```

---

# Transform

`.transform()` will modify the end result of the parsing. It can be applied at an object level

```ts twoslash
import { z } from 'zod'
// ---cut---
const configSchema = z.object({
  PORT: z
    .string()
    .optional()
    .default('3000')
    .refine((v) => Number(v) > 65535, 'Invalid port range')
})
.transform((v) => ({ port: Number(v.PORT) }))
//          ^?




type Config = z.infer<typeof configSchema>
//    ^?
```

---
transition: slide-up
---

# Transform

But can also be applied at a type level:

```ts twoslash
import { z } from 'zod'
// ---cut---
const configSchema = z.object({
  PORT: z
    .string()
    .optional()
    .default('3000')
    .transform((v) => Number(v))
//              ^?


    .refine((v) => v > 65535, 'Invalid port range')
//           ^?
})

.transform(({PORT}) => ({port: PORT})) // lowercasing

type Config = z.infer<typeof configSchema>
//    ^?
```

---

# The errors of Zod

- Zod has two methods:
  - `.parse()` will tryparse the schema and, if it fails, will throw a `ZodError`
  - `.safeParse()` will tryparse the schema but will always return with a `success` property that indicates errors
- Both of them have their `async` counterparts (`.parseAsync` and `safeParseAsync`) for async flows
- `ZodError` is a powerful class that includes the error message, the issues found with the schema and the path for the error

```ts
const stringSchema = z.string()

stringSchema.safeParse(12);
// => { success: false; error: ZodError }

stringSchema.safeParse("billie");
// => { success: true; data: 'billie' }
```

---

# Handling errors in APIs

```ts twoslash
import {z, ZodError} from 'zod'
// ---cut---
// @noErrors

const userSchema = z.object({
  name: z.string(),
  pass: z.string()
})

app.post('/users', async (req, res, next) => {
    const {success, data} = userSchema.safeParse(req.body)
    if (!success) {
      return res.status(422).json(err.message)
    }

    const user = await doSomething(data)
    return res.json(user)
})
```

---

# Handling errors in APIs

Errors can also be handled in "safe" mode

```ts twoslash
import {z, ZodError} from 'zod'
// ---cut---
// @noErrors

const userSchema = z.object({
  name: z.string(),
  pass: z.string()
})

app.post('/users', async (req, res, next) => {
  try {
    const parsed = userSchema.parse(req.body)
    const user = await doSomething(parsed)
    return res.json(user)
  } catch (err) {
    if (err instanceof ZodError) {
      return res.status(422).json(err.message)
    }
    next(err)
  }
})
```

---

# The reality of Zod

- Show a real example of a schema validation
- OAP validation example with Zod validating a JSON string that comes within a request body
- Other complex examples of schema validation

---
transition: slide-up
---

# Summary

<v-clicks>
  <ol class="text-[24px]">
    <li>Zod provides type-safe validations for objects or primitives</li>
    <li>Zod allows you to extract types from schemas, do not re-create</li>
    <li>Define your schemas in a single place, reuse from there</li>
    <li>Types comes from schemas alone</li>
    <li>Extend zod to create custom validators with refine and transform</li>
    <li>Use ZodError to type your APIs and parse messages automatically</li>
  </ol>
</v-clicks>

---

<div class="flex flex-col flex-wrap flex-content-center flex-justify-center h-full w-full">
  <h1 class="text-center bg-[--yellow] p-5 text-[64px]!">Thank you!</h1>
</div>
<div class="socials text-center" style="font-family: 'Fira Code', mono;">
  <span>https://</span><span class="text-[--green]">{twitter,instagram,github,youtube,linkedin}</span><span>.lsantos.dev</span>
</div>
