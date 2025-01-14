# adx-wiki

This is a Next.js application generated with
[Create Fumadocs](https://github.com/fuma-nama/fumadocs).

Run development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## Contribution
<strong>It is highly recommended that you learn the basics of Git and GitHub (Desktop), as well as basic HTML tagging.<br> You don't need to know everything; just enough to understand what `fork, clone, commit, push, pull request/PR, merge, etc.` and what the words between these pointy tags <\> means. </strong>

<ins>Some tools to help you get started that you may need:</ins>
- [Node.js](https://nodejs.org)
- [Visual Studio Code](https://code.visualstudio.com/) (or [derivatives](https://vscodium.com/)) and an [MDX extension](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx) (found in the Extension Store)
- [GitHub Desktop](https://desktop.github.com/download/) or [the fork for Linux](https://github.com/shiftkey/desktop)

Of course, you can supplement these tools with others that are more comfortable for you if you understand Git, but this guide will assume that you are using these tools.

To get started on contributing to the Wiki page:
1. Make a fork of this repository
2. Clone your fork of the repository locally
3. Open a Terminal in the folder of the cloned repository<br>
    3.1. If you haven't installed Node.js, now's the time.
4. Run: `npm i`. This will install all necessary dependencies for the local development preview environment.
5. Run: `npm run dev`. This will initiate the development preview, allowing you to quickly view the changes that you've made.
6. Edit the following files:

In `app/[lang]/layout.tsx`, under `locales`, add an entry like this:
```
{
  name: "full_language_name", // ex: English
  locale: "two_letter_designation", // ex: en
},
```

In `lib/i18n.ts`, under `languages`, add the two letter designation you gave for your language.
ex.
```
languages: ["en", "cn", "vn", "jp", "your_language"],
```
***
Under `content/` and `content/media/` you will see a few .mdx files.

7. To make a translation, duplicate the base files (without language codes), and edit the names to include your two-letter language code. ex. `index.vn.mdx`.
8. You can now edit the files and start translating! The contents that you can translate are those not inbetween these pointy brackets `<>` and anything that looks like code. If you're confused about what you can or cannot translate, feel free to give `@davidscann` a ping.

To preview your translation and what they look like, save your document and go to the [preview page](http://localhost:3000). Note that this only works when the web server is running locally (i.e. after `npm run dev` is executed.)

9. To submit your translation, you must commit all of your changes to your forked repository, push all of them to remote, then send a PR to origin. We will then review and merge your changes into main, effectively deploying the translation.

Thanks for your interest in this project! We'd also like to keep in touch with you, in case the content changes or more content is added in the future (it's okay if you don't want to though).

If you have any questions, feel free to pass them to @davidscann.

## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.vercel.app) - learn about Fumadocs
