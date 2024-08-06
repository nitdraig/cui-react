<p align="center">
  <a href="https://c-ui.agustin.top/">
    <img src="https://res.cloudinary.com/draig/image/upload/v1720318582/cui/qri5p1r8fwfp8wvfc6l0.png" alt="CUI Logo" width="200" height="200">
  </a>
</p>
<h2 align="center">IN DEVELOP</h2>

<h3 align="center">C-UI React | Docs & NPM Package | Component UI Library for React</h3>

<p align="center">
  Build Beautiful Interfaces with Ease
  <br>
<a href="https://c-ui.agustin.top/"><strong>Explore CUI docs »</strong></a>
  <br>
  <br>
  <a href="https://github.com/nitdraig/cui-react/issues">Report bug</a>
  ·
  <a href="https://github.com/nitdraig/cui-react/issues">Request feature</a>
  ·
  <a href="https://agustin.top/">Creator Portfolio</a>
</p>

# C-UI

[![npm version](https://img.shields.io/npm/v/cui-react.svg?style=flat-square)](https://www.npmjs.com/package/cui-react)
[![npm downloads](https://img.shields.io/npm/dm/cui-react.svg?style=flat-square)](https://www.npmjs.com/package/cui-react)

## Introduction
C-UI is a component library built with Tailwind CSS and TypeScript for React and Next.js applications. It focuses on consistency, reusability, clarity, simplicity and adaptability to provide an excellent user and developer experience.

## Principles of design<br/>
1.**Consistency**: Maintain a consistent appearance and behavior across all components.<br/>
2.**Reuse**: Design components in a modular way to facilitate their reuse in different parts.<br/>
3.**Clarity and Simplicity**: Prioritize simplicity and clarity in design to improve understanding and usability.<br/>
4.**Adaptability**: Design components that can adapt to different devices and screen sizes.<br/>
5.**Accessibility**: Ensure all components are accessible per WCAG guidelines.

## Facility
### Previous requirements
- Node.js (>=12.x)
- npm or yarn
- React (>=17.x)
- Next.js (>=10.x)


## Installation

First, install the package using npm:

```bash
npm install cui-react
```
Second, add this to tailwind.config.ts
```bash
  content: [
    "./node_modules/cui-react/dist/**/*.{js,ts,jsx,tsx}",
           ], 

```
Third, import in your React/Next project
```bash
import { Button } from "cui-react";
```
Fourth, Enjoy C-UI

## Contributions
Contributions are welcome! Please follow the steps below to contribute to the project.

### Clone the Repository

```bash
git clone https://github.com/nitdraig/cui-react.git

cd cui-react
```
### Installation of Dependencies

```bash
npm install
```

### Project Structure

```
└── 📁cui-react
    └── .gitignore
    └── CODE_OF_CONDUCT.md
    └── 📁docs
        └── .gitignore
        └── next-env.d.ts
        └── next.config.js
        └── package-lock.json
        └── package.json
        └── 📁pages
            └── 404.mdx
            └── 📁docs
                └── 📁Components
                    └── Accordion.mdx
                    └── Buttons.mdx
                    └── 📁Cards
                        └── Card.mdx
                        └── HoverCard.mdx
                        └── OverlayCard.mdx
                    └── GitHubStarsButton.mdx
                    └── Input.mdx
                    └── Progress.mdx
                    └── Select.mdx
                    └── Skeleton.mdx
                    └── Spinner.mdx
                    └── Switch.mdx
                    └── TypingEfect.mdx
                └── index.mdx
            └── index.mdx
            └── index.module.css
            └── _app.mdx
            └── _meta.json
        └── postcss.config.js
        └── 📁public
            └── github.svg
            └── intro.mp4
            └── logo.png
        └── README.md
        └── style.css
        └── tailwind.config.js
        └── theme.config.tsx
        └── tsconfig.json
    └── LICENSE
    └── 📁npm
        └── .gitignore
        └── .npmignore
        └── LICENSE
        └── package-lock.json
        └── package.json
        └── postcss.config.js
        └── README.md
        └── 📁src
            └── 📁components
                └── 📁ui
                    └── 📁Accordion
                        └── Accordion.tsx
                        └── index.ts
                    └── 📁Button
                        └── Button.tsx
                        └── index.ts
                    └── 📁Card
                        └── Card.tsx
                        └── HoverCard.tsx
                        └── index.ts
                        └── OverlayCard.tsx
                        └── TextCard.tsx
                    └── 📁CircularProgress
                        └── CircularProgress.tsx
                        └── index.ts
                    └── 📁GitHubStarsButton
                        └── GitHubStarsButton.tsx
                    └── 📁Input
                        └── index.ts
                        └── Input.tsx
                    └── 📁Select
                        └── index.ts
                        └── Select.tsx
                    └── 📁Skeleton
                        └── index.ts
                        └── Skeleton.tsx
                    └── 📁Spinner
                        └── index.ts
                        └── Spinner.tsx
                    └── 📁Switch
                        └── index.ts
                        └── Switch.tsx
                    └── 📁TypingEffect
                        └── index.ts
                        └── TypingEffect.tsx
            └── index.tsx
        └── tailwind.config.js
        └── tsconfig.json
    └── README.md
```
## Contribution
Contributions are welcome! Please follow the steps below to contribute to the project.
