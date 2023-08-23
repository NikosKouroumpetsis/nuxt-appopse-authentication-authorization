<template>
  <div>
    <h1>Protect-with-middleware Page</h1>
    <p>Protected route front-end from middleware</p>
    <p>
      This is a page which is protected with middleware and no normal login...
    </p>
    <p>
      When u make a request and you are not a auth user it transfer you to login
      page
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
</script>
<style scoped></style>
