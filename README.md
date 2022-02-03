# Japanese Study Web

## Technologies

![image](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

## Setup & Installation

Vite requires Node.js version >= 12.0.0. If you have already installed Node.js according to the requirement, you can start scaffolding your Vite project.

```
npm init vite@latest

or

yarn create vite
```

After that, Vite will ask you some question below:

- Project name
- Select a framework: vanilla, vue, react, preact, etc.
- Select a variant: javascript, typescript

```
cd your-project
npm install
npm run dev
```

## vite-tsconfig-paths

Vite need additional package called `vite-tsconfig-paths` in case you would like to use tsconfig paths. [More information](https://github.com/aleclarson/vite-tsconfig-paths).

## Storybook

A development environment and playground for UI components. It create components independently and showcase those components interactively in an isolated development environment (outside React).

- view the different components that have already been developed
- view the different props that those components accept
- visually showcase the components to the stakeholders for feedback

### Installation

```
npx sb init
```

```
# run
npm run storybook

or

yarn storybook
```

### Folder Structure

```
├── .storybook
│   ├── main.js // config storybook itself
│   └── preview.js // config story that you write
├── src
│   └── stories // boilerplate
```

### Story Hierarchy

Use `/` to display components in the same folder
