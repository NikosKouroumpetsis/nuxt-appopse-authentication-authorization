// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    // CSS file in the project
    "@/assets/global/css/styles.css",
  ],

  runtimeConfig: {
    // APPOPSE token secrets. Please rotate every 2 - 4 weeks
    appopseAccessTokenSecret: process.env.APPOPSE_ACCESS_TOKEN_SECRET,
    appopseRefreshTokenSecret: process.env.APPOPSE_REFRESH_TOKEN_SECRET,
    appopseResetTokenSecret: process.env.APPOPSE_RESET_TOKEN_SECRET,
    appopseVerifyTokenSecret: process.env.APPOPSE_VERIFY_TOKEN_SECRET,

    // Public Url
    appopsePublicUrl: process.env.APPOPSE_PUBLIC_URL,

    // APPOPSE Emailer
    appopseEmailer: process.env.APPOPSE_EMAILER,

    // nodemailer-service
    appopseNodemailerService: process.env.APPOPSE_NODEMAILER_SERVICE,
    appopseNodemailerServiceSender:
      process.env.APPOPSE_NODEMAILER_SERVICE_SENDER,
    appopseNodemailerServicePassword:
      process.env.APPOPSE_NODEMAILER_SERVICE_PASSWORD,

    // nodemailer-smtp
    appopseNodemailerSmtpHost: process.env.APPOPSE_NODEMAILER_SMTP_HOST,
    appopseNodemailerSmtpPort: process.env.APPOPSE_NODEMAILER_SMTP_PORT,
    appopseNodemailerSmtpSender: process.env.APPOPSE_NODEMAILER_SMTP_SENDER,
    appopseNodemailerSmtpPassword: process.env.APPOPSE_NODEMAILER_SMTP_PASSWORD,

    // APPOPSE SendGrid
    appopseSendGridApiKey: process.env.APPOPSE_SENDGRID_API_KEY,
    appopseSendgridSender: process.env.APPOPSE_SENDGRID_SENDER,

    // GOOGLE CLIENT ID

    appopseGoogleClientId: process.env.APPOPSE_GOOGLE_CLIENT_ID,

    // Do not put secret information here
    public: {
      appopseVerifyRegistrations: process.env.APPOPSE_VERIFY_REGISTRATIONS,
      appopseAllowGoogleAuth: process.env.APPOPSE_ALLOW_GOOGLE_AUTH,
    },
  },

  // Modules

  // For google sign in add 'nuxt-vue3-google-signin' that in modules and enable the googleSignIn
  modules: ["@pinia/nuxt", "nuxt-vue3-google-signin"],

  // Google sign in
  googleSignIn: {
    clientId: process.env.APPOPSE_GOOGLE_CLIENT_ID,
  },
  typescript: {
    shim: false,
  },
});
