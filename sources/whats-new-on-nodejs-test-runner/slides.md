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
  ## What's new on Node.js Test Runner


  One of the most exciting features of Node in the past months is the new test
  runner. But for some reason people don't seem to be using it a lot!


  In this talk I'll guide you through all the coolest new features this new test
  runner has, including the ones that I have personally created and worked with.
  We will go internally in the Node code and see how mocks are implemented and
  how to work with them, we will also see the next steps for the runner and what
  we should expect for it in the future.


  So get ready to make your testing much more integrated with native assertions
  getting all the gold without having to sacrifice performance!
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

<!--
So today we will be talking about node and test, all together!
-->

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

<!--
First things first, what is my goal with this talk

*click*

- I want to make you forget Jest completely
- Do I hate Jest? No, but I had my fair share of problems with it and I think it's time for something new

*click*

- Yes, that's just it, please let me know in my socials if I convinced you
-->

---
layout: section
---

# and how am I going to do that?


<v-clicks>

<h2 class="text-[--purple-darker]! bg-[--green] py-1 font-bold">by showing you something (possibly) better</h2>

</v-clicks>

<!--
- How I'm going to convince you of this?

*click*

- I'm going to show you something amazing today
-->

---
layout: fact
transion: slide-up
---

# Why "possibly"?

<v-clicks>

<h2 class="bg-[--red] text-[--purple-darker]! font-bold">because the Node.js test runner is still being improved</h2>

</v-clicks>

<!--
- But why possibly?

*click*

- Well, because the runner is still being improved activelly
- You can already use it on Node.js 20 in the stable version though!
-->

---
layout: section
---

# What's bad about current runners?

<!--
- What about we have today? Why isn't that enough?
-->

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

<!--
*all clicks*

1. Configuring runners like jest is a pain, so many options, so many things, it does it all, transform, parse, move, assert, coverage, it's just too many things
2. This makes them slow
3. Runners should be a thing from your runtime, they shouldn't be an extra library that you have to take care of. Remember, each library you have is external code you don't maintain, and yet, you rely on
4. Each test runner is completely different from each other in configuration, they make sure you will only be able to use them and nothing else
5. They're either not extensible enough, or they are extremely extensible, there's no middle ground
6. TypeScript is the nemesis of test runners. They're particularly hard to configure when you want to transpile ts on the fly
6.1. Mostly because you have to download other libraries to that for you, which, is yet another lib
7. Test runners spawn like rats, there's one new everyday, most of them are just more of the same, but this creates a huge bloat in the ecosystem (and they don't interop)
-->

---
layout: section
transition: slide-up
---

<h1>Enters the Node.js <span class="bg-[--green] text-[--purple-darker]! px-1">Test Runner_</span></h1>

---

# It's not that new

![](/initial-cli.png)

<!--
The initial version of the runner was added in 2022 by Colin Ihrig
-->

---

# Improvements came soon after

![](/tap-parser.png)

<!--
Soon after, one of my former MS colleagues Wasim added the TAP parser
-->

---

# It was soon stable

![](/stable-cli.jpg)

<!--
In node 20, the runner was marked stable, this was roughly 4 months from the initial release
-->

---

<style scoped>
  ul li {
    @apply text-[24px]!;
  }
</style>

# Why is it different?

<v-clicks>

  - It's built-in, so no **YAL**
  - It's fast
  - No configuration needed, integrates seamlessly with Node.js
  - Can use native assertions, or any other assertion library
  - Outputs TAP, so it's easy to integrate with other runners
  - Always use up to date Node.js features
  - Consistency across projects
  - No polyfills needed
  - Experimental support for code coverage and other reporters
  - Supports TS out of the box

</v-clicks>

<!--
But why is it different, and why am I advocating for it so much?

*click*

- First and foremost, it's a built-in thing, I realy hate extra libs
- It's pretty fast
- No need for config files and extra rituals
- Native assertions can be used, but you can also use any other assertion library that throws
- TAP by default, so it's easily interoperable, but can also integrate with other test reporters
- It always has the most up to date features of node
- This keeps your projects consistent since you don't need to install extra boilerplate
- No polyfills for things the test runner does (like babel)
- Supports code coverage
- Supports TS via importers
-->

---
transition: slide-up
---

# Getting started

You don't need anything to get started. Import `node:test` and `node:assert` and you are good to go!

```ts {1-8|9-19|all}{lines: true}
// @filename: index.js
export function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input')
  }
  return a + b
}

// @filename: test.js
import { describe, it } from 'node:test'
import assert from 'node:assert'
import { sum } from './index.js'

describe('sum', () => {
  it('should add two numbers', () => {
    assert.strictEqual(sum(1, 2), 3)
  })
})
```

<v-click>

Let's break it down...

</v-click>

<!--
- First we declare our function

*click*

- Them we create our test
-->

---
layout: section
---

<h1>Writing <span class="bg-[--yellow] px-1 text-[--purple-darker]!">tests_</span></h1>

<!--
- First let's start writing the tests
-->

---

# Writing tests

```ts {1|2|3|5-9|all}
import { describe, it } from 'node:test'
import assert from 'node:assert'
import { sum } from './index.js'

describe('sum', () => {
  it('should add two numbers', () => {
    assert.strictEqual(sum(1, 2), 3)
  })
})
```

<v-after>

Or you can use the `test` function

```ts {1,4-8}
import test from 'node:test'
import assert from 'node:assert'

test('sum', (t) => {
  t.test('should add two numbers', () => {
    assert.strictEqual(sum(1, 2), 3)
  })
})
```

</v-after>

<!--
- You can import describe and it from the runner

*click*

- Import the assertion lib

*click*

- Then the function we'll test

*click*

- The test is the same as we are used to in other runners, the assertion lib is a bit different but also not a problem

*click*

- If you don't want to use describe, you can use the native test version, it's a bit more verbose but does the same thing.

- All of them support async functions and promises
-->

---
transition: slide-up
---

# Assertions

Assertions are taken care of by the `assert` module, which is built-in

But you can use any other assertion library, like `chai` or `should`

```ts {2,4-8}
import { describe, it } from 'node:test'
import { expect } from 'chai'

describe('sum', () => {
  it('should add two numbers', () => {
    expect(sum(1, 2)).to.equal(3)
  })
})
```

<v-click>

**_the important thing:** assertions are not tied to the runner

</v-click>

<!--
- For assertions you can, and should, use the native assertion lib, but I reckon it's not the best lib out there, especially because it's not that easy to read
- So you can use others, like chai

*click*

- The important thing here is that assertions are not tied to the runner itself, they're two completely different things
-->

---
layout: section
---

<h1 class="bg-[--blue] text-[--purple-darker]!">Running_</h1>

<!--
- How do we run those tests
-->

---
transition: slide-up
---

# Running tests

Node has a built-in `--test` command that you can use to run your tests

```sh
node --test test.js
```

<v-click>

This will give you a TAP output:

```sh {all|10|11|12}
❯ node --test test.js
  ▶ sum
    ✔ should add two numbers (0.130208ms)
  ▶ sum (0.949ms)

ℹ tests 1
ℹ suites 1
ℹ pass 1
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 49.5135
```

</v-click>

<!--
- Just append --test to the node command and pass on your test file

*click*

- This will give back a TAP output by default

*click*

- You can see the number of cancelled or aborted tests

*click*

- Skipped tests are also another feature

*click*

- And todo tests are also supported
-->

---
layout: section
---

<h1 class="bg-[--green] text-[--purple-darker]! px-1">Mocks_</h1>

<!--
Mocking is one of the most important parts of a test. And, to be honest, is one of the best features of Jest, for instance.

But node has them too.
-->

---

# Mocking

Today, Node support mocking of some built-in structures:

```ts {4|5|6|7}
import test from 'node:test'

test('mocks', (ctx) => {
  ctx.mock.fn() // mock function
  ctx.mock.getter() // mock getter
  ctx.mock.setter() // mock setter
  ctx.mock.method() // mock method
})
```

<v-click>

It also allows you to mock two more complex structures

</v-click>

<!--
Mocks are supported for some, but not all of them.

- It supports a generic spy function like Jest

*click*

- Getters

*click*

- Setters

*click*

- Methods of classes

*click*

And it allows you to mock other two complex structures I'll be going through.

Module mocking is not yet supported, for this you would need to use a test double library like sinon
-->

---

# Mocking

Timers ([link](https://github.com/nodejs/node/pull/47775))


<div class="flex flex-row flex-content-center flex-justify-center">
  <img src="/mocktimers.png" class="object-contain w-60%" />
</div>

<!--
The first supported mock came from a very good friend of mine, and added support for timers.

Things like set timeout, set interval, and etc.
-->

---

# Mock Timers

Allows you to fake timers, like `setTimeout` and `setInterval`

```ts {5|6|7|8-9|11|12-14}
import assert from 'node:assert'
import { describe, it } from 'node:test'

describe('setTimeout', () => {
  it('should call the callback', (ctx) => {
    const fn = ctx.mock.fn() // look ma, no jest!
    ctx.mock.timers.enable({ apis: ['setTimeout'] })
    setTimeout(fn, 99999)
    assert.strictEqual(fn.mock.callCount(), 0) // timer is not called yet

    ctx.mock.timers.tick(99999) // advance the timer
    assert.strictEqual(fn.mock.callCount(), 1) // timer is called

    ctx.mock.timers.reset() // reset back to original state
  })
})
```

<!--
You use them like this:

*each list is a click*

1. We first define our subtest (or test)
2. We define a function that will be our callback
3. We enable the timers from the context, saying that we want the setTimeout only to be mocked
4. Set a timeout with our mock function and If we assert, we will see the function hasn't been called because we haven't advanced time yet
6. Calling tick will advance time
7. We can now assert that the mock has been called And reset everything
-->

---
transition: slide-up
---

# Mock Timers

You can also import `mock` directly from `node:test`

```ts {all|2,6,7,11,14}
import assert from 'node:assert'
import { describe, it, mock } from 'node:test'

describe('setTimeout', () => {
  it('should call the callback', (ctx) => {
    const fn = mock.fn() // look ma, no jest!
    mock.timers.enable({ apis: ['setTimeout'] })
    setTimeout(fn, 99999)
    assert.strictEqual(fn.mock.callCount(), 0) // timer is not called yet

    mock.timers.tick(99999) // advance the timer
    assert.strictEqual(fn.mock.callCount(), 1) // timer is called

    mock.timers.reset() // reset back to original state
  })
})
```

<!--
If you don't want to call from the context

*click*

You can import the mock directly
-->

---

# Date mocking

Dates (by yours truly) ([link](https://github.com/nodejs/node/pull/48638))

<div class="flex flex-row flex-content-center! flex-justify-center!">
  <img src="/mockdates.png" class="object-contain w-60%" />
</div>

<!--
The next complex structure is Time!

This one is a feature I have personally worked with and implemented.

Building upon the previous one, it allows you to mock the Date object
-->

---
transition: slide-up
---

# Mocking dates

```ts {all|5|6|9|10}
import assert from 'node:assert';
import { test } from 'node:test';

test('mocks the Date object', (context) => {
  context.mock.timers.enable({ apis: ['Date'] });
  assert.strictEqual(Date.now(), 0); // Date is mocked to 1970-01-01

  // Advance in time will also advance the date
  context.mock.timers.tick(9999);
  assert.strictEqual(Date.now(), 9999); // Date is mocked to 1970-01-01 + 9999ms
  context.mock.timers.reset() // reset back to original state
});
```

<!--
It works quite the same

- The only thing is that we need to say we want to enable Date mocks
- When started the mock will be UNIX epoch
- If we tick the time, we will advance it by some mills, we can also set the date to another date
- Now the time is 9999. This is particularly useful if we want to deal with messaging, external databases and so on, we use it a lot in Klarna
-->

---
layout: section
---

<h1 class="bg-[--red] text-[--purple-darker]!">Code Coverage_</h1>

<!--
Next up is the support for code coverage
-->

---

# Code coverage

The test runner supports code coverage under an `--experimental-test-coverage` flag

```sh
node --test --experimental-test-coverage test.js
```

<v-click>

As you can expect, it's experimental, so use with caution

</v-click>

<!--
By default it's already supported, just pass this flag to the command and you're done.

*click*

However, this is still experimental and uses V8's built-in coverage for JS files, so use with caution
-->

---

# Code coverage

```sh {all|1|2-4|14-23}
❯ node --test --experimental-test-coverage test.js
▶ sum
  ✔ should add two numbers (0.193833ms)
▶ sum (1.418792ms)

ℹ tests 1
ℹ suites 1
ℹ pass 1
ℹ fail 0
ℹ cancelled 0
ℹ skipped `
ℹ todo 0
ℹ duration_ms 63.954292
ℹ start of coverage report
ℹ ---------------------------------------------------------
ℹ file     | line % | branch % | funcs % | uncovered lines
ℹ ---------------------------------------------------------
ℹ index.js |  66.67 |    66.67 |  100.00 | 3-4
ℹ test.js  | 100.00 |   100.00 |  100.00 |
ℹ ---------------------------------------------------------
ℹ all fil… |  86.67 |    83.33 |  100.00 |
ℹ ---------------------------------------------------------
ℹ end of coverage report
```

<!--
The output is a TAP with the report, which is very easy to read

*click*

We got our command

*click*

Our test result

*click*

Our coverage result
-->

---

# Code coverage

Those uncovered lines are the throw statement in the `sum` function

```ts {3}
export function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input')
  }
  return a + b
}
```

<!--
And the lines it showed us are just the ones we haven't tested
-->

---
transition: slide-up
---

# Coverage reporters

You can change the coverage reporters with the flag `--test-reporter`

```sh {2-3}
node --test --experimental-test-coverage \
--test-reporter=lcov \
--test-reporter-destination=lcov.info \
test.js
```

<v-click>

This gets you an `lcov.info` file that you can import into any coverage tool

The test runner supports:

- spec
- dot
- tap
- lcov
- junit

</v-click>

<!--
You can also use different reporters and send them to files instead of the stdout

*click*

right now the runner supports all these reporters natively
-->

---
layout: section
---

<h1 class="bg-[--yellow] text-[--purple-darker]!">TypeScript 🩵</h1>

<!--
Let's talk about TS
-->

---

# TypeScript support

Node already supports what's called "importers".

<v-clicks>

- Importers (previously "loaders") are functions that execute before a module is loaded
- They can be used to transform the module before it's imported
- This means you can transpile TypeScript on the fly
- Common importers are `ts-node`, `tsx`, and `esbuild`

</v-clicks>

<!--
Something on the side, but node already supports compiling ts on the fly via importers

*click - list*

- They were called loaders before and were super useful to transform and parse the data, since they run before the module code is loaded into the VM
- Babel had loaders, Jest has loaders and other tools also have them to modify the code on the go, Jest, for example, hoists some declarations on import
- So this means you can also compile TS on the fly
- The most common ones were TS-node and TSX, we will be using tsx
-->

---

# TypeScript support

Let's take this example:

```ts
// index.ts
export function sum(a: number, b: number) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input')
  }
  return a + b
}

console.log(sum(1, 2))
```

<v-click>

Install `tsx` with `npm install tsx` and run the file with:

```sh
node --import=tsx index.ts
```

</v-click>

<!--
Let's go back to our example, I just added some types in it and a console

*click*

we install tsx to run it and execute passing the --import flag
-->

---
layout: image-right
image: >-
  https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGV1dnNocXh1YWNyZXJ1cjlyOXM5cnNwNjBqZjdqc2R3ZHZpZmNnaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/E3MQDZl9qsVwgnKA7b/giphy.gif
---

# TypeScript support

You will get this

```sh
❯ node --import=tsx index.ts
3
```

<v-click>

WHAT IF I TOLD YOU...

</v-click>

<v-click>

you can use this with the test runner?

</v-click>

<!--
BOOM MAGIC!

*click*

Now what if

*click*

we could use it to run tests? Since node supports already, it should be easy right?
-->

---
transition: slide-up
---

# TypeScript support

Let's just take the previous example and change the file extension to `test.ts`

Then run it with the `--import` flag

<v-click>

```sh
❯ node --import=tsx --test test.ts
3 # our console
▶ sum
  ✔ should add two numbers (0.128ms)
▶ sum (0.72875ms)

ℹ tests 1
ℹ suites 1
ℹ pass 1
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 157.107959
```
  
</v-click>

<v-click>

Now look at that `jest.config.js` file you've been maintaining as a boilerplate for 5 years and tell me if this isn't just a bliss

</v-click>

<!--
And it is...

Just take the previous test file, move it to TS and run the same command but passing an import flag

*click*

BOOM magic! tests run, everything runs! No configuration, no nothing, just native stuff

*click*

Now when you look at that 50-line configuration file for your runner, you want to cry
-->

---
transition: slide-up
---

# Other supported features

<v-clicks class="text-[24px]">

- Aborting tests via abort signals
- Skipping tests with `t/it.skip`
- Todo tests with `t/it.todo`
- "only" flag to run only a specific test with `t/it.only`
- Lifecycle hooks like `before`, `after`, `beforeEach`, `afterEach`
- Test filtering with `--test-name-pattern` via RegExp
- Watch mode (experimental)

</v-clicks>

---
layout: iframe-right
url: https://cjihrig.com/test_runner_wishlist_2024
---

# The future of Node.js Testing

Funny enough, Colin Ihrig (one of the main contributors to the test runner) has a wishlist for 2024.

<v-clicks class="text-[18px]">

- Module mocking is something we might see soon
- Improved filtering
- (maybe) More reporters
- Snapshot testing
- Source map support
- MOAR mocks! (like `performance`)
- The **definitive** downfall of Jest (just kidding)

</v-clicks>

<!--
*scroll through the page*

*click list*

- Move to module mocking in the website
- Improved filtering also has a topic on the website, the thing is that filtering by name and filtering only tests need the runner to precompile all the tests first to filter out the ones that won't be executed
- Nothing to comment on more reporters
- Snapshot testing is something that was briefly added in the runner but was removed due to some storage issues, but it's a feature for the assertion library, no the runner
- source map (nothing to comment)
- Mock more things, I'm planning to start working on the mock for the performance module soon!
-->

---

# Get involved

The test runner is still in active development, and you can get involved!

<v-clicks depth="2" class="text-[24px]">

- Documentation is always a good place to start
- You can also contribute to the code
  - Maybe making Colin happy with his wishlist
- Or just use it and give feedback!
- Start shifting your projects to it, and help the community grow!

</v-clicks>

---

<div class="flex flex-col flex-wrap flex-content-center flex-justify-center h-full w-full">
  <h1 class="text-center bg-[--yellow] p-5 text-[64px]!">Thank you!</h1>
</div>
<div class="socials text-center" style="font-family: 'Fira Code', mono;">
  <span>https://</span><span class="text-[--green]">{twitter,instagram,github,youtube,linkedin}</span><span>.lsantos.dev</span>
</div>
