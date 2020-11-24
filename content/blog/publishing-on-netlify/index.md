---
title: Publishing on Netlify
date: 2020-11-23T22:52:32.926Z
description: documenting the steps for getting your site deployed on Netlify
---
## Where are we now?
How that your site is up and running on localhost, you can use the local version of the admin interface to generate content by visiting http://localhost:8000/admin. Each time you publish a blog post, though, the new files will appear in your local repository only. This means, of course, that only you can see them until you push them to the public repo. And even then, the content is only visible in the repo, since the site isn't deployed anywhere.

## Next steps
Pushing to the public repo makes the content available only in the repository. Connecting your GitHub repository to a Netlify site will automatically publish your content whenever changes occur in your master branch. This process involves two macro steps:
- Configure Netlify to watch for changes to your repository
- Optional: Secure Your Netlify site so that only trusted users can deploy/publish

### Connect your repository to Netlify
- Login to Netlify using the account you used to host your repository.
- Click the 'New Site from Git' button. 
- Select GitHub and select the repository that contains your content. 
- Click Configure Netlify on GitHub and give access to your repository. 
- Finish the setup by clicking Deploy Site. 

Netlify will begin reading your repository and start building your project.

While you wait for the first deployment to finish, you can also configure a custom *.netlify.app domain for your site.
- Click Site Settings > General > Change site name 
- Enter a new, more meaningful name and click Save
- Visit your new domain name in your browser to see your site's content

### Configure trusted users to add content
- Go to Settings > Identity, and select Enable Identity.
- Under Registration preferences, click Edit Settings and select Open or Invite only. In most cases, you want only invited users to access your CMS, but if you're just experimenting, you can leave it open for convenience.
- If you'd like to allow one-click login with services like Google and GitHub, check the boxes next to the services you'd like to use, under External providers.
- Scroll down to Services > Git Gateway, and click Enable Git Gateway. This authenticates with your Git host and generates an API access token. In this case, we're leaving the Roles field blank, which means any logged in user may access the CMS. For information on changing this, check the Netlify Identity documentation.



