<template>
  <div>
    <!--if successful -->
    <NxAlert v-if="loginSuccess" theme="success" :show-close="false">
      <strong>Login successful</strong>
    </NxAlert>

    <!-- Error message -->
    <NxAlert v-if="loginError" theme="danger" @click="loginError = null">
      <strong>{{ loginError.message }}</strong>
    </NxAlert>

    <!-- Login Form -->
    <NxCard
      header="Login"
      text="Login using Google or your email address and password"
      class="login-card"
    >
      <div v-if="allowGoogleAuth">
        <GoogleSignInButton
          @success="handleGoogleLoginSuccess"
          @error="handleGoogleLoginError"
        ></GoogleSignInButton>
      </div>
      <AppopseOrSeparator />
      <NxForm :data="inputData" submit-text="Login" @submit="loginUser" />
      <div class="register-forgot">
        <div>
          <NuxtLink to="/appopse/register">Register</NuxtLink>
        </div>
        <div class="forgot">
          <NuxtLink to="/appopse/reset">Forgot Password?</NuxtLink>
        </div>
      </div>
    </NxCard>
  </div>
</template>

<script setup lang="ts">
import { User, NxFormInput } from "~~/appopse/misc/types";
import {
  GoogleSignInButton,
  type CredentialResponse,
} from "vue3-google-signin";
import useAppopse from "~~/composables/useAppopse";

// Get necessary functions from useAppopse composable
const { login, loginWithGoogle, getProfile } = useAppopse();
const allowGoogleAuth =
  useRuntimeConfig().public.appopseAllowGoogleAuth === "true";

// Error variable
const loginError = ref(<Error | null>null);
const loginSuccess = ref(false);

// Data for login form
const inputData = [
  {
    label: "Email",
    id: "email",
    type: "input:email",
  },
  {
    label: "Password",
    id: "password",
    type: "input:password",
  },
] as Array<NxFormInput>;

async function loginUser(user: User) {
  // Validation
  if (!user.email) {
    loginError.value = {} as Error;
    loginError.value.message = "Email is required";
    return;
  }

  if (!user.password) {
    loginError.value = {} as Error;
    loginError.value.message = "Password is required";
    return;
  }

  const { status, error } = await login(user);

  // If error, log error and return
  if (status === "fail") {
    loginError.value = error;
    console.error(error);
    return;
  }

  // If successful, navigate to dashboard
  if (status === "success") loginSuccessful();
}

// Handle Google login success
const handleGoogleLoginSuccess = async (response: CredentialResponse) => {
  const { credential } = response;
  let res = null;
  if (credential) res = await loginWithGoogle(credential);

  // Check for error
  if (res?.error) loginError.value = res.error;
  else loginSuccessful();
};

// Handle Google error event
const handleGoogleLoginError = () => {
  console.error("Login failed");
};

/**
 * @desc Steps to take when login is successful
 */
async function loginSuccessful() {
  loginSuccess.value = true;
  setTimeout(() => {
    navigateTo("/appopse/dashboard");
  }, 300);
}

useHead({
  title: "Login",
});
</script>

<style scoped>
.register-forgot {
  display: flex;
}

.register-forgot a {
  text-decoration: none;
}

.forgot {
  margin-left: auto;
}

.login-card {
  margin: auto;
}
</style>
