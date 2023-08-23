<template>
  <div v-if="hasAdminAccess">
    <h1>Admin</h1>
    <p>This is your admin center.</p>
    <AppopseUsersTable />
    <hr />
    <AppopseRefreshTokensTable />
  </div>
  <div v-else>
    <h1 class="text-danger">ACCESS DENIED!</h1>
  </div>
</template>

<script setup lang="ts">
import { User } from "~~/appopse/misc/types";
import useAppopseAdmin from "~~/composables/useAppopseAdmin";
import { useAppopseProfileStore } from "@/stores/useAppopseProfileStore";

const appopseStore = useAppopseProfileStore();
const { userHasPermission } = useAppopseAdmin();

const hasAdminAccess = ref(false);

onMounted(async () => {
  checkPermissions();
});

/**
 * @desc Check if user has permissions
 */
async function checkPermissions() {
  const user = appopseStore.getProfile;
  if (!user) return;
  try {
    hasAdminAccess.value = await canAccessAdmin(user);
  } catch (e) {
    console.log(e);
  }
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
</script>

<style scoped>
.text-danger {
  color: #dc3545;
}
</style>
