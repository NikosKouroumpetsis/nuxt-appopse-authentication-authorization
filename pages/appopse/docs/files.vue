<template>
  <div id="icon-grid">
    <h1 id="files-and-directories">Files and Directories</h1>
    <p>
      Nuxt appopse adds several directories and files to your Nuxt application.
      Here&#39;s a brief explanation of them.
    </p>
    <h2 id="components">components</h2>
    <p>
      The <code>components</code> directory is part of Nuxt. Nuxt appopse adds
      several components to your app. You will find the additional components in
      the <strong>components</strong> directory. Each component&#39;s name
      starts with <strong>appopse</strong> e.g. appopseDashboard, appopseLogin.
    </p>
    <ul>
      <li><strong>appopseAdmin</strong>: Deals with user administration</li>
      <li>
        <strong>appopseDashboard</strong>: Contains dashboard user interface and
        logic such as checking if user is logged in, and email verification.
        Also acts as the layout wrapper for other pages.
      </li>
      <li>
        <strong>appopseLogin</strong>: Contains login UI (user interface) and
        logic
      </li>
      <li>
        <strong>appopseRegister</strong>: Frontend user registration component
      </li>
      <li>
        <strong>appopseReset</strong>: Frontend user password reset component
      </li>
      <li>
        <strong>appopseVerifyEmailToken</strong>: Verifies if token sent in
        email verification is valid
      </li>
      <li>
        <strong>appopseVerifyFailed</strong>: Component that notifies user is
        email verification token or password verification token failed
      </li>
      <li>
        <strong>appopseVerifyPasswordReset</strong>: Receives password
        verification token from email
      </li>
      <li>
        <strong>appopseVerifySuccessful</strong>: Notifies user if password
        reset was successful
      </li>
    </ul>
    <h2 id="composables">composables</h2>
    <p>
      The <code>composables</code> directory is part of Nuxt. It houses all the
      composables of your application. Nuxt appopse adds the following
      composables to your application:
    </p>
    <ul>
      <li>
        <strong>useAppopse</strong>: Contains functions and logic for
        authentication such as user registration, logging in, checking if user
        is authenticated etc.
      </li>
      <li>
        <strong>useAppopseAdmin</strong>: Contains functions and logic for user
        administration.
      </li>
    </ul>
    <h2 id="appopse">appopse</h2>
    <p>
      The <code>appopse</code> directory is the main Nuxt appopse directory. It
      contains the vast majority of files and backend logic that make Nuxt
      appopse work.
    </p>
    <h3 id="authz">authz</h3>
    <p>
      The <code>authz</code> directory is found in the
      <code>appopse</code> directory. It is designed to house any functions that
      deal with authroization.
    </p>
    <h3 id="middleware">middleware</h3>
    <p>
      The <code>middleware</code> directory is found inside the
      <code>appopse</code> directory. Its purpose is to store any middleware
      functions, that is, functions that may need to run between controllers and
      models.
    </p>
    <h3 id="misc">misc</h3>
    <p>
      The <code>misc</code> directory is a folder for miscellaneous items. It
      contains functions such as the type definitions that Nuxt appopse uses,
      functions that send email, and helper functions that perform work required
      in different places of Nuxt appopse. The helper functions file is
      extensive and should be refactored in the future.
    </p>
    <h3 id="mvc">mvc</h3>
    <p>
      The <code>mvc</code> directory stands for model, view, and controller. It
      only houses the models and controllers because Nuxt appopse is an API
      (application program interface) authentication framework and APIs have no
      views. Nevertheless, we have kept the &#39;v&#39; for convention.
    </p>
    <p>
      The <code>mvc</code> contains the controllers (functions that handle
      requests from users and return responses), and models (functions that
      handle data). Because the amount of data and logic that is required for
      authentication and authorization to work properly is quite extensive, the
      mvc directories also contain files called <code>queries</code>. Queries
      deal with database access.
    </p>
    <p>
      The <code>mvc</code> directory&#39;s main directories are
      <code>autha</code>, which handles authentication,
      <code>refresh-tokens</code>, which handle refresh token logic, and
      <code>users</code>, which handles users data logic. Each of these
      directories contains a controller file, a model file, and a queries file.
    </p>
    <p>
      The <code>gadgets</code> directory is an example directory to help you get
      started. It can be deleted. If you delete it, make sure you delete the
      <code>gadgets</code> directory in
      <code>server/api/appopse/gadgets</code> as well.
    </p>
    <p>
      We worked hard to make the code readable and easy to understand and so we
      do not have many long functions, but we do have many small functions.
    </p>
    <p>In general, the data flow in Nuxt appopse is:</p>
    <ul>
      <li>
        request: server api --&gt; controller --&gt; model --&gt; query --&gt;
        helper
      </li>
      <li>
        response: server api &lt;-- controller &lt;-- model &lt;-- query &lt;--
        helper
      </li>
    </ul>
    <h2 id="stores">stores</h2>
    <p>The <code>stores</code> directory stores Pinia store.</p>
    <ul>
      <li>
        <strong>useAppopseProfileStore</strong>: Pinia store that stores profile
        data after login.
      </li>
    </ul>

    <p>
      To modify Nuxt appopse to your liking, you need to understand the
      <code>mvc</code> directory.
    </p>
    <h3 id="ui">ui</h3>
    <p>
      The <code>ui</code> directory contains user interface items such as the
      Nuxt appopse logo.
    </p>
    <h2 id="pages">pages</h2>
    <p>
      The <code>pages</code> directory is part of Nuxt. Nuxt appopse adds
      several pages to your apps frontend. The pages are wrappers around
      components. The following pages are added to your Nuxt front end. Find
      them in your <strong>pages</strong> directory:
    </p>
    <ul>
      <li><strong>appopse</strong>: Parent directory for all pages</li>
      <li>
        <strong>appopse/index</strong>: Introductory page for Nuxt appopse. Can
        be modified.
      </li>
      <li>
        <strong>appopse/docs</strong>: Documentation information for Nuxt
        appopse. This entire directory can be deleted. Find up-to-date
        documentation at
        <a href="https://nuxt-appopse.vercel.app/appopse/docs"
          >Nuxt appopse Docs</a
        >
      </li>
      <li>
        <strong>appopse/register</strong>: User registration page. After
        successful registration, you will be directed to login page
      </li>
      <li>
        <strong>appopse/verifyemail</strong>: If email verification was set to
        true, (see configuration section), receives email verification token and
        sends it to backend for verification.
      </li>
      <li>
        <strong>appopse/login</strong>: User login page. After successful login,
        you will be directed to appopse/dashboard/index
      </li>
      <li><strong>appopse/dashboard/index</strong>: User dashboard.</li>
      <li>
        <strong>appopse/dashboard/profile</strong>: User profile. User can
        update their account.
      </li>
      <li>
        <strong>appopse/dashboard/settings</strong>: User settings. User can
        update their password and delete their account.
      </li>
      <li>
        <strong>appopse/reset</strong>: User can reset their password. Does not
        have to be logged in. User will receive an email with a one-time
        password reset token.
      </li>
      <li>
        <strong>appopse/verify</strong>: Page that receives password reset token
        and sends it to backend for verification
      </li>
      <li>
        <strong>appopse/verifyfailed</strong>: Displays email or password
        verification failure.
      </li>
      <li>
        <strong>appopse/verifysuccessful</strong>: Displays password
        verification success and a temporary password.
      </li>
    </ul>
    <h2 id="prisma">prisma</h2>
    <p>
      The <code>prisma</code> directory is added by
      <a href="https://prisma.io">Prisma</a>, which Nuxt appopse uses as its
      object-relational mapper. Prisma is required for Nuxt appopse to work. The
      <code>prisma</code> directory may contain a
      <code>migrations</code> directory. The <code>migrations</code> directory
      will house all migrations made to your database. Learn more about
      <a href="https://www.prisma.io/docs/concepts/components/prisma-migrate"
        >Prisma migrations</a
      >.
    </p>
    <p>
      The <code>prisma</code> directory will contain
      <code>schema.prisma</code> file. This is an important file for Prisma. It
      contains the schema (structure) of your database. It shows the names of
      your tables, their columns, and their data types.
      <strong>Only modify this file if you know what you are doing.</strong>
    </p>
    <p>
      Check out the Prisma web site to learn more about the
      <a href="https://www.prisma.io/docs/concepts/components/prisma-schema"
        >Prisma schema</a
      >.
    </p>
    <h3 id="tables">Tables</h3>
    <p>
      When you examine your <code>prisma.schema</code> file you&#39;ll notice
      several tables. Some tables are exposed to the frontend such as
      <code>users</code>, and <code>refresh-tokens</code>, but most tables are
      not. The other tables are internal tables and should only be exposed to
      the frontend if need be.
    </p>
    <p>
      To modify the tables in the UI, we recommend using a database management
      tool such <a href="https://dbeaver.io/">DBeaver</a>.
    </p>
    <h2 id="server">server</h2>
    <p>
      The <code>server</code> directory is part of Nuxt. Inside the
      <code>server</code> directory, you will find an
      <code>api</code> directory, which is also part of Nuxt. Nuxt appopse adds
      an <code>appopse</code> directory to the <code>api</code> directory, and
      inside the <code>appopse</code> directory adds the following directories:
    </p>
    <ul>
      <li>
        <code>autha</code> - the global Nuxt appopse authentication endpoint.
        All queries that begin with <code>api/appopse/autha</code> hit this
        endpoint, and are sent to the controller in the file
        <code>appopse/mvc/autha/controller.ts</code>, which routes them to the
        appropriate destination.
      </li>
      <li>
        <code>refresh-tokens</code> - the global Nuxt appopse refresh-tokens
        endpoint. All queries that begin with
        <code>api/appopse/refresh-tokens</code> hit this endpoint, and are sent
        to the controller in the file
        <code>appopse/mvc/refresh-tokens/controller.ts</code>, which routes them
        to the appropriate destination.
      </li>
      <li>
        <code>users</code> - the global Nuxt appopse users endpoint. All queries
        that begin with <code>api/appopse/users</code> hit this endpoint, and
        are sent to the controller in the file
        <code>appopse/mvc/users/controller.ts</code>, which routes them to the
        appropriate destination.
      </li>
      <li>
        <code>gadgets</code> - an example endpoint. All queries that begin with
        <code>api/appopse/gadgets</code> hit this endpoint, and are sent to the
        controller in the file <code>appopse/mvc/gadgets/controller.ts</code>,
        which routes them to the appropriate destination. This is for examples
        to help you get started quickly. You can delete it. If you delete this
        directory, make sure you delete the <code>gadgets</code> directory in
        <code>api/appopse/mvc/gadgets</code> as well.
      </li>
    </ul>
    <p>
      You can probably see that the <code>appopse/mvc</code> directory and the
      <code>server/api/appopse</code> mirror each other. This is by design and
      Nuxt appopse would like to keep it that way.
    </p>
  </div>
</template>
