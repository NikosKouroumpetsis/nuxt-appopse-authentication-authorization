<template>
  <div>
    <div class="text-center">
      <AppopseLogo />
    </div>
    <h1 class="text-center">Your Nuxt Authentication Starter App!</h1>
    <div class="text-center">
      <p>
        Quickly build an amazing app with the Nuxt Appopse starter kit. It comes
        with Nuxt Appopse auth framework to help you get started quickly.
      </p>
      <div class="more-buttons">
        <NxButton
          class="learn-more-button"
          theme="primary-outline"
          size="large"
          @click="navigateTo('/appopse/')"
          >Learn More</NxButton
        >
        <NxButton theme="info" size="large" @click="navigateTo('/appopse/')"
          >Docs</NxButton
        >
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Home Page - Nuxt Appopse Sample app",
});
</script>

<style scoped>
.text-center {
  text-align: center;
}

.more-buttons {
  display: flex;
  justify-content: center;
}

.learn-more-button {
  margin-right: 1rem;
}
</style>
