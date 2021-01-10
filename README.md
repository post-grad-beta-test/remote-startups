# Coject

A platform that supports online collaboration and group events.

## Set up instructions:

- Clone the repo
- Create branch according to feature you are working on

```sh
npm i
npx knex migrate:latest
npx knex seed:run
cp .env.example .env
```

To run in development (watch mode):

```sh
npm run dev
```

If you see warning `API key does not start with "SG.".`, make sure you've put a real SendGrid API key in `.env`. Ask your teammates for more info.

To run in production:

```sh
npm start
```

## JS Docs/ Better-Docs

---

JSDoc is used to document this project.

We would like to keep the project documentation up to date with changes to the main branch. For a pull request to be approved all functions should include a JSDoc block.
example:

```
/**
 * Add userID and EventId to users_projects table
 * @param {string} userId - User Id
 * @param {string} eventId - eventId
 *
 * @returns {Promise.<number[]>} array[0] team id
 */
 const function joinEvent(userId, eventID){...}
```

Project documentation is found in the [docs](./docs) folder.

More information about JSdoc and creating doc blocks can be found in the [JSdoc documentation](https://jsdoc.app/index.html)

A JSdoc quick reference/cheatsheet found here: [Devhints JSdoc](https://devhints.io/jsdoc)

To update docs

```
npm run docs
```

## User Stories

---

### version 1:

Develop a platform where users can find people to attend their online events.

- A user wants to host event.
- Create a new event that will will appear on the home page
- A user can join an event
- User profile will show a list of joined events

### MVP

---

- Refer to the Github project - [product backlog](https://github.com/post-grad-beta-test/coject/projects/1)

- [Miro Board](https://miro.com/app/board/o9J_leNHzkI=/)

## Testing

---

- Run `npm test` to run jest in watch mode.
- Run `npm run lint:fix` to format files before making any commits.
- Husky will check files are linted before you commit and will run tests before pushing to remote.
- Pull requests are to be pair reviewed before feature/bug fix can be added to main branch.
- Node.js CI tests must pass before any pull request will merged in to main branch.

## The Tech

---

- [React](https://reactjs.org/docs/getting-started.html)
- [Redux](https://redux.js.org/)
- [Express](https://expressjs.com/en/api.html)
- [Knex.js (SQL)](https://knexjs.org/)
- [JWT Auth (Local)](https://jwt.io/)
- [Lint](https://www.npmjs.com/package/lint)
- [Husky](https://www.npmjs.com/package/husky)

### Ta-Da!
