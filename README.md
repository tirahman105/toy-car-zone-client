
Live Website link: https://toy-car-zone.web.app


#
## Features:
#


## Navbar: 
#
The website includes a navbar with the logo, website name, and navigation links for Home, All Toys, My Toys, Add A Toy, Blogs, and User profile picture. 

## Login & Registration: 
#

ILogin and registration system is implemented with error messages. The login page has options for email/password login and Google sign-in.

## Home Page:
#

 The home page features a banner, a gallery section with toy pictures, and a "Shop by Category" section with tabs for sub-categories of toy cars. Each sub-category displays a minimum of two toys with information such as picture, name, price, rating, and a "View Details" button. Non-logged-in users clicking "View Details" are prompted to log in.

## Blogs Page: 
#
A blog page is created to answer specific questions related to access tokens and refresh tokens, SQL and NoSQL databases, Express.js, Nest.js, and MongoDB aggregation.

## All Toys Page: 
#
The "All Toys" page displays toys added by users in a tabular form. Each row shows the seller's name toy name, sub-category, price, available quantity, and a "View Details" button. The page includes a search system based on toy name. Clicking "View Details" without logging in redirects to the login page.

## Single Toy Details: 
After logging in and clicking "View Details," users are redirected to the toy details page (/toy/:id). This page displays information about the toy, including the picture, toy name, seller name, seller email, price, rating, available quantity, and a detailed description.

## Add A Toy Page:

 The "Add A Toy" page is a private route where users can fill out a form with toy information, such as picture URL, name, seller name, seller email, sub-category, price, rating, available quantity, and a detailed description.

## My Toys Page:
#

 As a private route, the "My Toys" page displays a tabular list of toys added by the logged-in user. Each row includes an update button to edit toy information (price, available quantity, description)