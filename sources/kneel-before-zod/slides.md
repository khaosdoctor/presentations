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
exportFilename: ../../exported/kneel-before-zod
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
image: /zod.svg
---

# What is Zod?

<v-clicks>

- Zod is a TypeScript-first schema declaration and validation library
- Allows you to define a schema and validate data against it

</v-clicks>

<!--
- Comment that schema validation is one of the most important aspects of an application
- Guarantees that the data is consistent
-->

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
- Zod is easier to read and already produces the typed output
- You don't need to type the data again
- Supports advanced features of TS like branded types, union types, discriminated unions and more
- Transforms and custom validators
- built-in string types like dates, emails, uuids etc
-->

---
layout: iframe-right
url: https://ajv.js.org
---

# Zod is not the first

There are others that do the same, like:

1. AJV: But then, where are the types?

<!--
- AJV is a classic, but it doesn't create a type-safe validation, because it relies on JSON Schema
- You need to both create the json validation and the types for the validation, which is prone to errors
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
- plus it's two tools and two libs
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
url: https://zod.dev/?id=io-ts
---

# Zod is not the fourth

There are others that do the same, like:

1. AJV
1. Typebox
1. Joi
1. IO-TS

<!--
- IO-TS is a functional approach to schema validation
- Scroll to the part where it compares to IO-TS if it's not there already
- It's good, but complex to read, complex to write, and even more complex to understand
- briefly talk about the partial type example
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
- Uses a mix of string types and object types, it's not consistent
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

<!--
1. AJV is old, relies on JSON schemas, which are not bad but are long, difficult to read and verbose, plus they don't produce types, you would need typebox to create typed json schemas
2. Joi is old and does not produce types, so not safe
3. IO-TS is complex to read, understand and make sense of the types, during our tests in the team we realized it was super difficult to understand them and we often needed to have functions to create types which led to a super verbose code
4. Ark is quite ok, but the lack of consistency in the syntax is difficult to maintain in long term
-->

---

# The Zod way

<v-clicks>

  - Zod is a library that is built on top of the concept of "Zod Types"
  - You compose Zod Types (which are standalone) to create a more complex schema
  - You can transform, refine, and extend the schema with custom validations
  - Has a very good error handling system
  - Easy to read and maintain
  - Generates types for you
  - Has support for advanced TS features, like branded types, union, discriminated unions, enums, and more

</v-clicks>

<!--
1. Each zod type is a schema of its own, which means you can use them to validate stuff
2. Then you can compose those schemas to create a complex object
3. Zod is easy to extend, mostly because its types are schemas of their own
4. Error handlers are meant to be precise and you can use ZodErrors alone as return from APIs
5. Super easy to read, makes the process of creating types a breeze
6. Type inference allows you to define your schemas and types in one place only, and they will be propagated in case one changes, meaning the schema is the source of truth
7. The support for advanced techniques allows for more complex schemas
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
- We're only using Joi here because it's the one that closely matches Zod's API
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

And typing it ourselves means that we have two sources of truth that *are not connected*. If the type changes, the schema **won't**... And vice-versa


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

<v-click>

Types 🤝 Schema. If the schema changes, the type will also change ➡️ *instant feedback*

</v-click>

<!--
- Zod has all keys being required by default, no need to put a required key
- The API looks almost the same, fluent, readable
- Parsing the schema gives you a type in the end, no need to recreate the types

*click*

- Now we have both the schema and the types agreeing, so if the schema changes, the types will reflect that, and instantly give us feedback on our code
-->

---
transition: slide-up
---

# Schema-driven development

<style scoped>
  #list li::marker {
  	color: var(--green) !important;
  }
</style>

<v-clicks id="list" class="text-[24px]">

  1. Schema-driven development is when you focus your data on schemas
  1. It allows your application to stay consistent
  1. Reduces the amount of errors and makes your code more reliable

</v-clicks>

<!--
- Schema driven development allows you to focus on creating schemas for incoming data, and then validating this data against them
- This makes the application constant, you can rely on the schemas alone without the need of manually typing everything
  - And, because of the parsing, you are sure, even in runtime, that the data is correct
- With runtime and compile-time validations, your application is essentially error proof
-->

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

<ol id="rules" class="text-[2.3em]">
<li>Schemas are the source of truth</li>
<li><u class="text-bold">D</u>o not <u class="text-bold">R</u>epeat <u class="text-bold">Y</u>ourself</li>
<li>Always validate, never cast</li>
<li>Data flows in one direction: outside ➡ inside</li>
</ol>

</v-clicks>

<!--
1. Trust the schema only, it will generate the type for you, don't do the opposite, the types should always be a side-effect of having a schema
2. Never duplicate, if you need to use the same type as a previous schema, extend or reference, never re-create
3. Never cast a source into a type, always use the schema to transform the source into the final object, make use of type guards and assertion functions
4. Data should always flow from outside the application (the client) to your services, being parsed in the middle by your schema
-->

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

# Schemas as the source of truth

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

  // DUPLICATE, not source of truth
  interface UserType {
    user: string
    pass: string
  }
  ```

</v-click>

<!--
- The most important rule is that you should never define both the schema and the types
- The types should always come from the schema

*click*

- When defining both the schema and the type, we lose the inference and if one changes the other will not follow

*click*

- When we infer the types from the schema, any changes to our schema will be reflected in the types
- This way you get instant feedback
-->

---
layout: fact
transition: slide-up
---

<h1>Data is <span class="bg-[--red] color-[--purple-dark] px-4">not</span> unique</h1>

Extend and reuse, <span class="bg-[--yellow] color-[--purple-dark] px-1">do not</span> re-create

<!--
- An important thing to remember is that data is not unique, we are bound to repeat the same patterns over and over
- How many times did you type an ID? A date?
- Why recreate them if you can extend, you can even have a lib for that
-->

---
layout: two-cols-header
transition: slide-up
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

<!--
*click*

- Reusing allows you to make the schemas more concise, it's the preferred way for primitives like IDs and dates, since you can add the validation to them and propagate the same validation everywhere

*click*

- Extending is more important when you have variations of the same object, let's say an user and an employee, one being a child entity from the other
-->

---
layout: section
---

<h1 class="bg-[--green] text-[--purple-darker]!">Extensibility_</h1>

<!--
- Let's talk about when zod is not enough
-->

---

# The extensibility of Zod

- If you need custom validations you can extend zod and refine your data
- You can also transform the data so you receive the final schema already converted

<v-click>

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

</v-click>

<!--
- You won't always have all the validations correctly set, so you will need to create your own, Zod makes it very easy in two ways, refinements and transforms

*click*

- This is an example where we can parse a configuration schema from an envfile to an internal object while still validating what's needed
- It's also one of the biggest use cases for Zod, parsing external env data and sending it as an object to the application

* draw attention to the intellisense of the final config object
-->

---

# Refine

`.refine()` will extend your validation to create custom validators. It's a function that returns a boolean and a message

<v-click>

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

</v-click>

<!--
The first thing is refine, it allows you to extend the validation and add your own logic to it

*click*

- In this example we are refining our port range to be within the 16bit integer range
- Notice that we are also transforming it into a number, since it comes as a string
- If the refinement fails, Zod will automatically parse it into a ZodError this both allows us to standardize the error message and also the error object
-->

---

# Transform

`.transform()` will modify the end result of the parsing. It can be applied at an object level

<v-click>

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

</v-click>

<!--
- On another note, the transform function will actually transform the output on something different, like we did with the configuration

*click*

- Here we are both validating the port range, but also transforming the final output into a number
- Draw attention to the v variable that's an object with a PORT property as string
- Compare the final output of Config to the previous slide, now we have a port as number
-->

---
transition: slide-up
---

# Transform

But can also be applied at a type level:

<v-click>

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

</v-click>

<!--
On the last example we applied it in the object level, but we can also apply it to the type level

*click*

- Look how we can transform the string into a number first
- Then we call refine, and v will be a number
- Chaining transforms and refines is a pretty common pattern in zod
- In the end, we will have the port as a number, since we transformed it before

* Draw attention that we are transforming the uppercase to lowercase
-->

---
layout: section
---

<h1 class="bg-[--red] text-[--purple-darker]!">Error handling_</h1>

<!--
Let's talk about when something doesn't go right
-->

---

# The errors of Zod

<v-clicks depth="2">

- Zod has two methods:
  - `.parse()` will tryparse the schema and, if it fails, will throw a `ZodError`
  - `.safeParse()` will tryparse the schema but will always return with a `success` property that indicates errors
- Both of them have their `async` counterparts (`.parseAsync` and `safeParseAsync`) for async flows
- `ZodError` is a powerful class that includes the error message, the issues found with the schema and the path for the error

</v-clicks>

<v-click>

```ts
const stringSchema = z.string()

stringSchema.safeParse(NaN);
// => { success: false; error: ZodError }

stringSchema.safeParse("lsantos.dev");
// => { success: true; data: 'lsantos.dev' }
```

</v-click>

<!--
- Zod parses schemas using two methods

*click*

- Parse will try to parse and if it fails, it will throw

*click*

- safeParse will try to parse but will always return, never throwing. It's the recommended way if you don't want to use try/catch

*click*

- They also have their async counterparts just in case you want to have an async resolution

*click*

- The error class that Zod uses is the ZodError, this is a very interesting class because it allows you to standardize your returns, and it's a super complete class because it has all the paths and issues with the schema
- This guides the user to solving the error just with the API response

*click*

- Here's an example of a safe parse, returning a success property and a data property
-->

---

# Handling errors in APIs

```ts
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

<!--
- Let's explore a scenario where we will throw an API error
- We can define a schema first, then parse the data, remember about the data flow, from outside to inside
- In our route, we safeparse the data, check for the success variable and then we can return the error directly
-->

---

# Handling errors in APIs

Errors can also be handled in "unsafe" mode

```ts
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

<!--
- We can do the same but using trycatch, just need to check the instance of the error
-->

---
transition: slide-up
---

# Zod errors are complete

A `ZodError` includes the complete error stack so you can send it over to the client:

```json
[
  {
    "code": "invalid_type", // the error code
    "expected": "string", // the expected type
    "received": "number", // the received type
    "path": [], // the path to the error (empty means root)
    "message": "Expected string, received number" // the error message
  }
]
```

<v-click>

But you can also format it to a more human-readable message using `.format()`:

```ts twoslash
import { z } from 'zod'
// ---cut---
const result = z.object({ name: z.string(), }).safeParse({ name: 12 })
if (!result.success) {
  const formatted = result.error.format() // { name: { _errors: [ 'Expected string, received number' ] } }
  formatted.name?._errors // => ["Expected string, received number"]
  //                ^?


}
```

</v-click>

<!--
- Zod errors will favor completeness, which means that the final message will not always be human friendly, but you can mitigate that

*click*

By applying format, you will format all the errors into one array of strings
-->

---
layout: section
---

<h1 class="bg-[--yellow] text-[--purple-darker]!">Zod in real life_</h1>

<!--
Now let's not talk about examples and talk about a real case in Klarna
-->

---

# The reality of Zod

<v-click>

- Zod really shines when you have to create complex schemas
- This is a real example for a system that receives a JSON string that's another object which should be validated

</v-click>

<v-click>

Can you spot the problem?

```ts twoslash
import {z} from 'zod'
// ---cut---
const schema = z.object({
  maskedPan: z.string(),
  orderId: z.string().uuid(),
  clientInformation: z.string() // this is a json string, how to validate it?
})
```

</v-click>

<v-click>

We lose type inference for the `clientInformation` field. It's just a string, but we need it to be an object, **a validated object**

</v-click>

<!--
- As a bank, most of the systems we interact with, like PSPs, are not synchronous, some of them use webhooks to relay responses. Some other internal systems do the same
- When this happens we end up with a very complex schema

*click*

- Complex schemas are where Zod truly shines
- These types of schemas are usually nested, they contain a schema inside another schema

*click*

- The most common type is when we have a webhook
- Webhooks usually send client data as a JSON string within the payload itself

* some seconds for the audience to catch up with the code

*click*

- The big problem here is that we lose all type inference from the JSON string, after all, it's just a string
- We need to know which properties we are dealing with
-->

---

# Complex schemas

We can define a schema for our JSON:

```ts twoslash
import { z } from 'zod'
// ---cut---
const clientInformation = z.object({
  authenticationToken: z.string(),
  items: z
    .array(
      z.object({
        id: z.string().uuid(),
        quantity: z.number().int().positive()
      })
    )
    .nonempty(),
  orderId: z.string().uuid(),
  sourcePSP: z.string().optional(),
  sourcePSPTransactionId: z.string().optional()
})
```

<!--
- The first thing we do is to define a schema for the JSON string
- This will kill two rabbits, one is the validation of the schema itself, and the other is the typing of the nested schema in the end
-->

---

# Complex schemas

And then we can use it in our main schema:

```ts twoslash
import { z } from 'zod'
const clientInformation = z.object({
  authenticationToken: z.string(),
  items: z
    .array(
      z.object({
        id: z.string().uuid(),
        quantity: z.number().int().positive()
      })
    )
    .nonempty(),
  orderId: z.string().uuid(),
  sourcePSP: z.string().optional(),
  sourcePSPTransactionId: z.string().optional()
})
// ---cut---
const schema = z.object({
  maskedPan: z.string(),
  orderId: clientInformation.shape.orderId,
  clientInformation: z.string().transform((json, ctx) => {
    try {
      const obj = JSON.parse(json) // throws if not a valid JSON
      return clientInformation.parse(obj) // throws if not a valid clientInformation object
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.issues.forEach(ctx.addIssue)
      } else {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Invalid clientInformation JSON string',
          path: [],
          fatal: true
        })
      }
      return z.NEVER
    }
  })
})
```

<!--
- Then we use the defined schema in our main schema, but we can't just use it in the root, since clientInformation is indeed a string
- We then transform it while refining, the transform function receives a context, that can receive issues
- Inside the transform function, we parse the data using JSON parse, and, since we already need the catch, use the parse function to parse the JSON object and make sure that both the JSON string and JSON object matches
- Zod will ignore unknown keys
- If there's an error, we check if the object is a ZodError, which means the JSON is valid but the object isn't, if so we just add the issues inside the final context
- Otherwise the JSON string is invalid, then we create our own error
-->

---
transition: slide-up
---

# Complex schemas

This will give us a final schema that's fully typed and validated.

And, if the schema is not valid, either because of invalid JSON or invalid clientInformation, it will throw a `ZodError` with the issues

```ts twoslash
import { z } from 'zod'
const clientInformation = z.object({
  authenticationToken: z.string(),
  items: z
    .array(
      z.object({
        id: z.string().uuid(),
        quantity: z.number().int().positive()
      })
    )
    .nonempty(),
  orderId: z.string().uuid(),
  sourcePSP: z.string().optional(),
  sourcePSPTransactionId: z.string().optional()
})
const schema = z.object({
  maskedPan: z.string(),
  orderId: z.string().uuid(),
  clientInformation: z.string().transform((json, ctx) => {
    try {
      const obj = JSON.parse(json) // throws if not a valid JSON
      return clientInformation.parse(obj) // throws if not a valid clientInformation object
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.issues.map(ctx.addIssue)
      } else {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Invalid clientInformation JSON string',
          path: [],
          fatal: true
        })
      }
      return z.NEVER
    }
  })
})
// ---cut---
type SchemaType = z.infer<typeof schema>
//    ^?
```

<!--
In the end, we have a schema that's completely typed accordingly with the inbound data and already validated. The data is secured and consistent
-->

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
    <li>Zod shines when you have complex schemas</li>
  </ol>
</v-clicks>

<!--
- Let's recap what we learned

*click*

1. Zod is a validation library, it makes your types consistent with your data
2. We can extract the types directly from the schemas, no need to type manually
3. Do not repeat yourself, define all the schemas in one place, import, extend and reuse them. Remember: Data is not unique
4. Types should be inferred from schemas, not the other way around
5. You will need custom validators, make extensive use of transform and refine
6. Use ZodError as a consistent validation error from your handler, if it's a zod error, it's a validation error, it shouldn't be inside the business logic of the application, throw early
7. When you have complex schemas, break them down into parts, then use transform to both validate and refine the schemas, returning the final shape in the end
-->

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

*https://lsantos.dev/talks/kneel-before-zod*

::right::

![](public/talk-qr.png)
