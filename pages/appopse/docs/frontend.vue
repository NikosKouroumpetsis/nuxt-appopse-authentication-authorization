<template>
  <div>
    <h1 id="frontend">Frontend</h1>
    <p>
      The following is en explanation of some of the logic and components of
      Nuxt appopse frontend.
    </p>
    <h2 id="pages">Pages</h2>
    <p>
      Nuxt appopse adds several pages to your apps frontend. The pages are
      wrappers around components. Use these pages and components as is, or as
      starting points for making your app great. The following routes are added
      to your Nuxt front end. Find them in your
      <strong>pages</strong> directory:
    </p>
    <ul>
      <li><strong>appopse</strong>: Parent directory for all pages</li>
      <li>
        <strong>appopse/index</strong>: Introductory page for Nuxt appopse
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
    <h2 id="components">Components</h2>
    <p>
      Nuxt appopse adds the following components to your Nuxt application. Most
      of the components are wrapped in pages.
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
    <h2 id="composables">Composables</h2>
    <p>
      Nuxt appopse uses composables as a bridge between the frontend and the
      backend. We recommend using composables as well. Composables contain the
      functions that send data to the API, and receive data from the API.
    </p>
    <p>Backend &lt;--- composables &lt;--- Frontend</p>
    <p>Backend ---&gt; composables ---&gt; Frontend</p>
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
  </div>
</template>
