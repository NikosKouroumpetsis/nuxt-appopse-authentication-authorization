<template>
  <div>
    <NxAlert v-if="resetError" :show-close="false">
      <strong>{{ resetError.message }}</strong>
    </NxAlert>
  </div>
</template>

<script setup lang="ts">
import useAppopse from "~~/composables/useAppopse";

const route = useRoute();
const { verifyEmailToken } = useAppopse();

const resetError = ref(<Error | null>null);

// Get token from url parameters
const token = route.query.token as string;

if (!token) navigateTo("/appopse/verifyfailed");

try {
  const { data, error } = await verifyEmailToken(token);
  // If verification fails, navigate to a verify failed page
  if (error) navigateTo("/appopse/verifyfailed");

  // If successful, navigate to login page
  if (data) navigateTo(`/appopse/login?email_verify=true`);
} catch (e) {
  // If other error, like a server error occurs, show generic error message
  // console.log(e)
  resetError.value = {} as Error;
  resetError.value.message = "Error. Please contact an administrator.";
}
</script>
