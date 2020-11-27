---
title: Don't deploy untested edits to your CMS templates. Run them locally first!
date: 2020-11-23T21:54:14.965Z
description: Warning! This is a beta feature!
---
## The problem
I want to build editor templates so that my users can start contributing content. But I'm new to Gatsby so I'm not yet comfortable with making changes to the editor templates. I'm not afraid to experiment but I certainly need to test my changes I make to the templates *before* I unleash them on the users.

## The solution
There _is_ a way to run the CMS locally so it is not necessary to just push your changes, wait for the deployment to finish and then hope for the best.


1. Configure your Gatsby site (config.yml) to be able to use the local git repository:

```yaml
local_backend: true
```

2. Run the netlify-cms-proxy-server. Add a script to package.json to make this easier to remember:

```json
"scripts": {
  ...
  "local-cms": "npx netlify-cms-proxy-server",
  ...
}
```

3. Open a terminal to run the proxy server

```terminal
$ npm run local-cms
```

4. Open a separate terminal to run the site

```terminal
$ npm run develop
```
5. Open [http://localhost:8000](http://localhost:8000) to visit your site

6. Open [http://localhost:8000/admin](http://localhost:8000/admin) and click the Login button to access the localhost version of the CMS. You will not be prompted to authenticate and you'll be running your CMS completely locally. CAVEAT: If/when you publish any content changes, they are saved ONLY in your local git repo!

For more information see: [https://www.netlifycms.org/docs/beta-features/#working-with-a-local-git-repository](https://www.netlifycms.org/docs/beta-features/#working-with-a-local-git-repository)
