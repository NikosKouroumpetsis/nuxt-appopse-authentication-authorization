<template>
  <div class="container">
    <NxNavbar :menu="mainMenu" @clicked="menuClicked" />
    <AppopseDashboardHeader class="appopse-dashboard-header" />
    <div>
      <slot />
    </div>
    <AppopseFooter>
      <p>&copy; 2023 Appopse, Inc</p>
    </AppopseFooter>
  </div>
</template>

<script setup lang="ts">
import { NxLink, NxLinks } from "~~/appopse/misc/types";

const nuxtAppopseMenu = [
  {
    name: "What is it?",
    link: "/appopse/",
  },
  {
    name: "Introduction",
    link: "/appopse/docs",
  },
  {
    name: "Getting Started",
    link: "/appopse/docs/getting-started",
  },
  {
    name: "Concepts",
    link: "/appopse/docs/concepts",
  },
  {
    name: "Features",
    link: "/appopse/docs/features",
  },
  {
    name: "Front End",
    link: "/appopse/docs/frontend",
  },
  {
    name: "Configuration",
    link: "/appopse/docs/configuration",
  },
  {
    name: "Backend",
    link: "/appopse/docs/backend",
  },
  {
    name: "Files",
    link: "/appopse/docs/files",
  },
] as NxLinks;

const mainMenu = [
  {
    name: "LOGO",
    bold: true,
  },
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Nuxt APPOPSE",
    children: nuxtAppopseMenu,
  },
  {
    name: "Sample",
    link: "/sample",
  },
  {
    name: "Protected Page",
    link: "/protected",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Protect With Middle",
    link: "/protect-with-middleware",
  },
] as NxLinks;

/**
 * @desc Receive clicked link from menu and navigate to that link
 * @param event Receive clicked link data
 */
function menuClicked(menuItem: NxLink) {
  if (menuItem.link) navigateTo(menuItem.link);
}

useHead({
  title: "Nuxt Appopse Example Site",
});
</script>

<style scoped>
.nuxt-appopse-logo {
  text-align: center;
}

.container {
  margin: 0 3rem;
  min-width: 360px;
}

.appopse-dashboard-header {
  margin-bottom: 1.75rem;
}

@media (max-width: 525px) {
  .container {
    margin: 0 auto;
  }
}
</style>
