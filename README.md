# Blog-App

## GOAL
Create a blog to be able to share articles with readers.

## User Stories
* As a viewer, I want to see a list of articles so that I can choose which one to read.
* As a viewer, I want to view an individual article on its own page.
* As an admin, I want to have a form so I can add a new article to my blog. 


## Diagrams
https://app.diagrams.net/#G1Vug4elKKz9f3aQcEkoYbDra7Obcruejg 
## Business Requirements
* Pages
    * Home Page.
    * Individual article page.
    * New article page.
* Home Page
    * Display the user profile image.
    * Display a list of articles with title, date, content.
    * Limit the article text to certain characters. 
* New Article Page
    * Allow an admin to enter title, content, and cover image. 
    * store the added date. 
	
## Technical Requirements
* Frontend uses Javascript. 
* Backend uses NodeJS
    * Rest API
* Database
    * JSON
* API Endpoints
    * Get a list of Articles
        * "api/articles"
    * Get individual Blog
        * "api/articles/:article_id"
    * Post article
        * "api/articles"
