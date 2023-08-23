# nuxt-Appopse - Nuxt authentication Full-stack framework

## Download from **[Github](https://github.com/NikosKouroumpetsis/nuxt-appopse-authentication-authorization)** NOT WITH NPM INSTALL.

Nuxt appopse, which stands for Nuxt Identity and Access Management, is an authentication and authorization framework for Nuxt that allows you to secure your app with industry best practices. Nuxt appopse, adds authentication and authorization logic to your Nuxt app.

Nuxt appopse is a Nuxt app that contains the following authentication and authorization features:

- user registration with email and password
- user login with email and password
- user login/registration with Google
- user password reset
- user dashboard
- user password change
- user profile/account delete
- admin user management
- admin token management

It is a full featured Nuxt 3 app.

## How it Works

Simply clone the [Github repo](https://github.com/NikosKouroumpetsis/nuxt-appopse-authentication-authorization), fork it, or download it.

## Getting Started

Nuxt appopse is a Nuxt application and comes ready to run. All you need to add is a database.

1.  Please install [Node](https://nodejs.org) if you don't already have it. The recommended Node version is **16.16 or greater**
2.  Please install [Yarn package manager](https://yarnpkg.com/). (You can also use npm if you like, but we prefer Yarn)
3.  Clone, fork, or download the repo from `https://github.com/NikosKouroumpetsis/nuxt-appopse-authentication-authorization`, and navigate to the root directory.
4.  Copy the `.env.example` file and create a `.env` file
5.  Run `yarn` or `yarn install`.
6.  Add your database information to your `.env` file. Nuxt appopse curently supports MySQL, but can be modified to support other databases. See [Prisma](https://www.prisma.io/docs/reference/database-reference/connection-urls) for more information.
7.  Connect your app to your database by running `npx prisma migrate dev`. Name your migration `initial_migration` or something similar
8.  Run `yarn dev`, and you're good to go!
