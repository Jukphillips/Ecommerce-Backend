# Ecommerce Backend

## Video of the Deployed Application and all its Functionality

https://drive.google.com/file/d/1uAZzURHWeD9hDHbQ8TY3CeSUU-pWVgR8/view

https://drive.google.com/file/d/1yTI4xxy-gzCpbb9OljjYJI8chkfZn3bA/view

## Description

Created the backend of an ecommerce website so that the user can recieve database information from a Api client like Insomia.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

> first do an npm install to install all the necessary npm packages. Then locate the .env file and input your relevent credentials. Next, using mysql use the provided schema to create a datbase. Then run an npm run seed and that should seed data automatically for the user. Finally, run 'npm run start' to start your server.

## Usage

There is no frontend connection, so for the user to get any data they must use a Api client like Insomnia or Postman.

## License

This project is licensed under the None license.

## Contributing

Contact me!

## Tests

> There are no test avaliable for this application.

## Questions

If you have any questions about the repo, open an issue or contact me directly jukphillips1990@gmail.com. You can find more of my work at my github account: jukphillips.
