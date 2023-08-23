<template>
  <div v-if="isLoggedIn" class="is-logged-in">
    <div class="logged-in-logo-menu">
      <NxNavbar
        :key="isLoggedInKey"
        :menu="isLoggedInMenu"
        theme="none"
        size="small"
        @clicked="menuClicked"
      />
    </div>
    <div class="avatar-block">
      <div class="avatar-dropdown">
        <NxDropdown :menu="profileMenu" @clicked="menuClicked">
          <NxAvatar
            :src="profile?.avatar ? profile.avatar : ''"
            :name="`${profile?.first_name} ${profile?.last_name}`"
            :title="`${profile?.first_name} ${profile?.last_name}`"
            :show-arrow="true"
          />
        </NxDropdown>
      </div>
    </div>
  </div>
  <div v-else class="is-not-logged-in">
    <AppopseLogoLink />
    <NxNavbar
      :menu="isNotLoggedInMenu"
      theme="none"
      size="small"
      class="login-register-menu"
      @clicked="menuClicked"
    />
  </div>
</template>

<script setup lang="ts">
import { useAppopseProfileStore } from "@/stores/useAppopseProfileStore";
import { NxLink, NxLinks, User } from "~~/appopse/misc/types";
import useAppopse from "~~/composables/useAppopse";
import useAppopseAdmin from "~~/composables/useAppopseAdmin";

const { isAuthenticated, getProfile } = useAppopse();

const appopseStore = useAppopseProfileStore();
const { logout } = useAppopse();
const { userHasPermission } = useAppopseAdmin();

const isLoggedIn = ref(false);
const isAdmin = ref(false);

// Used to refresh logged in menu navbar
const isLoggedInKey = ref(0);

// Menu when user is not logged in
const isNotLoggedInMenu = [
  {
    name: "Login",
    link: "/appopse/login",
  },
  {
    name: "Register",
    link: "/appopse/register",
  },
];

// Menu when user is logged in
let isLoggedInMenu = [
  {
    name: "Dashboard",
    link: "/appopse/dashboard",
  },
  {
    name: "Admin",
    link: "/appopse/dashboard/admin",
    show: false,
    group: "admin",
  },
] as NxLinks;

// User profile menu
const profileMenu = [
  {
    name: "Dashboard",
    link: "/appopse/dashboard",
  },
  {
    name: "Profile",
    link: "/appopse/dashboard/profile",
  },
  {
    name: "Settings",
    link: "/appopse/dashboard/settings",
    hasBorder: true,
  },
  {
    name: "Logout",
  },
] as NxLinks;

// Profile variables
const profile = ref(<User | null>null);

onMounted(async () => {
  await checkLoggedIn();
});

// Watch store for changes
appopseStore.$subscribe(async (mutation, state) => {
  isLoggedIn.value = state.isLoggedIn;

  hideAdminLinks(isLoggedInMenu);
  isLoggedInKey.value++;
  isAdmin.value = false;

  // If user is logged in
  if (isLoggedIn.value) {
    profile.value = appopseStore.getProfile as User;

    // If user is admin
    try {
      isAdmin.value = await canAccessAdmin(profile.value);
      if (isAdmin.value) {
        showAdminLinks(isLoggedInMenu);
        isLoggedInKey.value++;
      }
    } catch (e) {
      console.log(e);
    }
  }
});

/**
 * Check if user is logged in
 */
async function checkLoggedIn() {
  isLoggedIn.value = await isAuthenticated();
  if (isLoggedIn.value) {
    const { status, data } = await getProfile();
    if (status === "success") {
      profile.value = data as User;

      // Check if user is admin
      isAdmin.value = await canAccessAdmin(profile.value);
      if (isAdmin.value) {
        showAdminLinks(isLoggedInMenu);
        isLoggedInKey.value++;
      }
    }
  }
}

/**
 * @desc Processes clicked menu item
 * @param link Clicked menu item
 */
function menuClicked(menuItem: NxLink) {
  if (menuItem.name === "Logout") logMeOut();
  else navigateTo(menuItem.link);
}

/**
 * @desc Checks if user has admin permissions
 * @param user User we need to check
 */
async function canAccessAdmin(user: User): Promise<boolean> {
  const hasPermission = await userHasPermission(user, "can-access-admin");
  if (hasPermission.status === "success") return true;
  else return false;
}

/**
 * @desc Shows all admin-related links
 * @param menu Receives a menu to work on
 */
function showAdminLinks(menu: NxLinks) {
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].group === "admin") menu[i].show = true;
  }
}

/**
 * @desc Hide all admin-related links
 * @param menu Receives a menu to work on
 */
function hideAdminLinks(menu: NxLinks) {
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].group === "admin") menu[i].show = false;
  }
}

/**
 * @Desc Log user out
 */
async function logMeOut() {
  const { status } = await logout();
  if (status === "success") {
    // Clear store variables
    isLoggedIn.value = false;
    appopseStore.clearProfile();
    appopseStore.setIsLoggedIn(false);
    navigateTo("/appopse/login");
  }
}
</script>

<style scoped>
.is-logged-in,
.is-not-logged-in {
  display: flex;
  border-bottom: 1px solid #ddd;
}

.login-register-menu {
  margin-left: auto;
}

.logged-in-logo-menu {
  display: flex;
  align-items: center;
}

.avatar-block {
  margin-left: auto;
  display: flex;
}

.avatar-dropdown {
  display: flex;
  align-items: center;
}
</style>
