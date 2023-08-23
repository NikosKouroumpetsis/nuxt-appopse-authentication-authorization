<template>
  <div>
    <h3>Your temporary password is</h3>
    <code>{{ tempPassword }}</code>
    <h3>
      Copy it, <NuxtLink to="/appopse/login">log in</NuxtLink>, and change it.
    </h3>
  </div>
</template>

<script setup>
// Get token from route/
// This assumes route is [host]/appopse/verifysuccessful?pass=[password]
const route = useRoute();
const tempPassword = route.fullPath.split("/appopse/verifysuccessful?pass=")[1];
</script>

<style scoped>
code {
  font-size: 200%;
}
</style>
