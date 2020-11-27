---
title: Running Netlify CMS Proxy Server locally on a custom port
date: 2020-11-26T22:29:56.786Z
description: When you want to run multiple instances of Netlify CMS Proxy Server
  simultaneously they can't all use the same port
---
To get multiple Gatsby/Netlify-CMS sites running locally on the same machine at the same time, you have to configure the second and subsequent sites to use a custom port.

Fortunately, the changes you have to make are simple. Here they are:

1. Create a `.env` file in the project's root folder.

```ini
PORT=8084
``` 
2. Update `config.yml`

```yaml
backend:
  name: git-gateway

local_backend:
  # when using a custom proxy server port
  url: http://localhost:8084/api/v1
```

3. Run `npx netlify-cms-proxy-server` from the root directory of the above repository and make sure the server starts successfully and is listening on the port you configured.

4. Start your local development server (e.g. run `gatsby develop`).

5. Open [http://localhost:8000/admin](http://localhost:8000/admin) to verify that your can administer your content locally.

Please see https://github.com/rodnolan/netlify-cms-on-localhost for a working version

