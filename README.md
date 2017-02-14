# Lighthouse Labs Midterm Project

## Description
A food ordering experience for a single restaurant. Hungry clients of this fictitious restaurant can visit its website, select one or more dishes and place an order for pick-up. They will receive a notification when their order is ready.

The restaurant and client both need to be notified since this app serves as a middle-man.

You can use a modern telecomm API service such as Twilio to implement the communication from the website to the client and restaurant.

When an order is placed the restaurant is phoned and the order is read out to them. The restaurant can then specify how long it will take to fulfill it. Once they provide this information, the website updates for the client and also notifies them via SMS.

Group Members: 
  -Thomas Kilgour
  -Parshant Micoo
  
## Goals/Additional Features for Improvement
1. Allow clients to pay for their order online, using Stripe integration for implementing secure e-commerce. If implemented,      the clients would choose wether to pay online or at the counter
2. Allow the restaurant owner to view their orders
3. Allow the restaurant owner to manage their dishes (prices, photos, descriptions, etc.)
4. Support for multiple restaurants instead of just the one (making it a multi-tenant SaaS)

## Stack Requirement
1. ES6 for server-side (Node) code
2. ES5 for front-end code
3. Node
4. Express
  - RESTful routes
  - Using AJAX or complete SPA approach is optional
5. One of the following two CSS grid and UI frameworks
  - Bootstrap 3
  - Zurb Foundation 5
6. jQuery
7. SASS for styling
8. PostgreSQL for DB
9. Knex.js for querying and migrations
10. Git for version control

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
6. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
7. Run the server: `npm run local`
8. Visit `http://localhost:8080/`

## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above
