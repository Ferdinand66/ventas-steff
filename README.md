# ventas-steff

The heroku create CLI command creates a new empty application on Heroku, along with an associated empty Git repository. If you run this command from your app’s root directory, the empty Heroku Git repository is automatically set as a remote for your local repository.

## heroku create -a example-app

You can use the git remote command to confirm that a remote named heroku has been set for your app:
git remote -v

---

Add a remote to your local repository with the heroku git:remote command. All you need is your Heroku app’s name:

## heroku git:remote -a example-app

---

By default, the Heroku CLI names all of the Heroku remotes it creates for your app heroku. You can rename your remotes with the git remote rename command. For example, rename heroku to heroku-staging:

## git remote rename heroku heroku-staging

To deploy your app to Heroku, use the git push command to push the code from your local repository’s main branch to your heroku remote. For example:

## git push heroku main

---

Each time you wish to deploy to Heroku:

## git add -A

git commit -m "commit for deploy to heroku"
...

## git push -f heroku

---
