## Contribution

Basic Git knowledge is recommended, as well as basic HTML and Markdown tagging.  
You don't need to know everything; just enough to understand what `fork, clone, commit, push, pull request/PR, merge, etc.` and what the words between these pointy tags `<\>` means.

Some tools to help you get started that you may need:
- [Node.js](https://nodejs.org)
- A code editor ([Visual Studio Code](https://code.visualstudio.com/), [VSCodium](https://vscodium.com/), [Zed](https://zed.dev), or others) and an MDX extension (For example, the [MDX plugin for VSCode](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)) 
- [Git](https://git-scm.com)
- (Optional) A graphical Git tool, check out a few recommendations [here](https://git-scm.com/tools/guis)

To get started on contributing to the Wiki page:
1. [Fork this repository](https://github.com/reflektone-games/AstroDX_Wiki/fork)
2. Clone your fork to your computer
3. Open a Terminal in the folder of the cloned repository  
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
```json
languages: ["en", "cn", "tw", "vn", "jp", "your_language"],
```
***
Under `content/` and `content/install/` you will see a few .mdx files.

7. To make a translation, duplicate the base files (without language codes), and edit the names to include your two-letter language code. ex. `index.vn.mdx`.
8. You can now edit the files and start translating! The contents that you can translate are those not inbetween these pointy brackets `<>` and anything that looks like code. If you're confused about what you can or cannot translate, feel free to give `@davidscann` a ping.

To preview your translation and what they look like, save your document and go to the [preview page](http://localhost:3000). Note that this only works when the web server is running locally (i.e. after `npm run dev` is executed.)

9. To submit your translation, you must commit all of your changes to your forked repository, push all of them to remote, then send a PR to origin. We will then review and merge your changes into main, effectively deploying the translation.

Thanks for your interest in this project! We'd also like to keep in touch with you, in case the content changes or more content is added in the future (it's okay if you don't want to though).

If you have any questions, feel free to pass them to @davidscann.
