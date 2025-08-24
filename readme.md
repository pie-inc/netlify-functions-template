# Netlify Functions Template

A simple template to create and deploy Netlify Functions with ease.

## Requirements
This repo requires [netlify-cli](https://docs.netlify.com/api-and-cli-guides/cli-guides/get-started-with-cli/) to be installed globally:
```
npm install -g netlify-cli
```
## Getting started

1. **Clone and install:**
   ```bash
   git clone <your-repo-url>
   cd netlify-functions-template
   npm install
   ```

2. **Create a function:**
An example Hello World function is provided to help development

3. **Run locally:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:8888/hello`

## How it works

The `netlify.toml` file redirects all paths to matching functions:

```toml
[[redirects]]
  from = "/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

So `/api` calls `functions/api.js`, `/users` calls `functions/users.js`, etc.