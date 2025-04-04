# Minimal Frontend UI – React + Vite + Tailwind

A minimalist front-end web UI built with **React**, **Vite**, and **Tailwind CSS**, showcasing a simple `HTTP POST` request to [`lazyapi-dotnet`](https://https://github.com/johnnsie/lazyapi-dotnet) and displaying the result.

## Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/) (for HTTP requests)

## Features

- Clean, minimalist UI
- Sends `POST` request to `lazyapi-dotnet` endpoint
- Displays the response neatly
- Few buttons with ready made json examples

## Setup

```bash
# Clone the repo
git clone https://github.com/johnnsie/lazyapi-react.git
cd lazyapi-react

# Install dependencies
npm install

# Start dev server
npm run dev

```

```js

// Update the backend endpoint in /src/LazyAPI.tsx
const res = await fetch('http://localhost:5022/api/parse', ...

```