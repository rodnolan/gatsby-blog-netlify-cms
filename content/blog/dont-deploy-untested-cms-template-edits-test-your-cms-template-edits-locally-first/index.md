---
title: Don't deploy untested CMS template edits. Test your CMS template edits
  locally first!
date: 2020-11-23T21:54:14.965Z
description: warning! beta feature!
---
#The problem
I want to build editor templates so that my users can start contributing content. But I'm new to Gatsby so I don't know what I'm doing yet. It'd make sense to be able to test the changes I make to the templates _before_ I unleash them on the users.

#The solution
- Configure your Gatsby site (config.yml) to be able to use the local git repository:
```yaml
local_backend: true
```
- Run the netlify-cms-proxy-server. Add a script to package.json to make this easier to remember:
```json
"scripts": {
  ...
  "local-cms": "npx netlify-cms-proxy-server",
  ...
}
```
- Open a terminal to run the proxy server
```terminal
  $ npm run local-cms
```
- Open a separate terminal to run the site
```terminal
  $ npm run develop
```
- Open http://localhost:8000/admin and click the Login button to access the localhost version of the CMS.

For more information see: https://www.netlifycms.org/docs/beta-features/#working-with-a-local-git-repository
