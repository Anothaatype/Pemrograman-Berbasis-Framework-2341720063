# W2 - Next.js Pages Router — Assignment Report

---

## Task 1 

### Create a new `about.js` page inside the `pages` folder

The `about.js` page displays the following student information:

| Field | Value |
|---|---|
| **Student Name** | `[Baskoro Seno Aji]` |
| **NIM** | `[2341720063]` |
| **Study Program** | `[D4 Informatics Engineering]` |

---

## Task 2 

### Add a Navigation Link from the Home Page to the About Page

A navigation link has been added to the main (`index.js`) page using Next.js `<Link>` component to navigate to the `/about` page.

![alt text](<img/Output Task 1-2.gif>)
---

## 💡 Reflection Questions & Answers

### 1. Why is the Pages Router called "file-based routing"?

Because in Next.js, the routing system is determined directly by the file structure inside the `pages` folder. For example:

- `pages/index.js` → `/`
- `pages/about.js` → `/about`
- `pages/blog.js` → `/blog`

This means URLs are **automatically created based on the file name** — no manual route configuration needed.

---

### 2. What is the difference between Next.js and standard React (CRA)?

| Feature | Next.js | React (CRA) |
|---|---|---|
| Routing | Built-in (file-based) | Requires React Router |
| Rendering | SSR & SSG supported | Client-side rendering only |
| SEO | Better SEO out of the box | Limited SEO optimization |
| API Routes | Built-in API routes | No built-in API support |
| Code Splitting | Automatic | Manual configuration |

> **Summary:** Next.js is a **React framework** with batteries included, while CRA is a minimal React setup that requires manual configuration.

---

### 3. What does the `npm run dev` command do?

It starts the **development server** for the Next.js application. Specifically, it:

- Runs the app on `localhost` (default port `3000`)
- Enables **hot reload** — the browser updates automatically whenever you save changes
- Runs in **development mode**, which is optimized for speed during coding/testing

---

### 4. What is the difference between `npm run dev` and `npm run build`?

| | `npm run dev` | `npm run build` |
|---|---|---|
| **Mode** | Development | Production |
| **Purpose** | For active development & testing | For preparing the app to deploy |
| **Optimization** | Not optimized | Fully optimized & minified |
| **Hot Reload** | ✅ Yes | ❌ No |
| **Output** | Runs a local server | Generates a `.next` build folder |

> **Typical workflow:**
> ```
> npm run dev   →  while coding/developing
> npm run build →  before deploying to production
> ```