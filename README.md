"Minimal NFT " is a web application that allows users to create, view, and purchase NFTs (Non-Fungible Tokens). Users can register, log in, create new NFTs, and add them to the cart for further purchase.
Key Features
Registration and Login:
•	Users can register on the site by filling out the registration form.
•	After registration, users can log in using their credentials.
Creating NFTs:
•	Registered users can create new NFTs by filling out the NFT creation form.
•	Users can upload images, add descriptions, prices, and tags for their NFTs.
Viewing and Purchasing NFTs:
•	All users can view available NFTs on the main page.
•	Users can add NFTs to the cart and proceed to purchase.
What We Tried to Achieve
Database Creation:
•	We created an SQLite database with three tables: users, nfts, and cart_items.
•	The users table stores user information.
•	The nfts table stores NFT information.
•	The cart_items table stores information about items in the cart.
User Registration:
•	We created a registration form and a PHP script to handle registration.
•	After successful registration, users are redirected to the main page.
Creating and Displaying NFTs:
•	We created a form for creating NFTs and a PHP script to save NFTs in the database.
•	We updated the main page to display all available NFTs.
Cart:
•	We added functionality to add NFTs to the cart and remove items from the cart.
•	We updated the interface to display items in the cart and the total amount.
Access Restriction:
•	We added session checks to restrict access to the "Create NFT" tab to registered users only.
How to Use the Site
Registration:
•	Go to the registration page and fill out the form.
•	After registration, you will be automatically logged in.
Creating NFTs:
•	After logging in, go to the "Create NFT" tab.
•	Fill out the NFT creation form and click "Create NFT".
Viewing and Purchasing NFTs:
•	Go to the main page to view available NFTs.
•	Add desired NFTs to the cart and proceed to the cart to make a purchase.
How to Run the "Minimal NFT Gallery" Project
Requirements
1.	XAMPP or another local server to run PHP.
2.	Visual Studio Code or another text editor.
3.	Git to clone the repository (optional).

