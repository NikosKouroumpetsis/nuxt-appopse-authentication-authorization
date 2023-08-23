// async function checkLoggedIn() {
//     isLoggedIn.value = await isAuthenticated();
//     if (isLoggedIn.value) {
//       const { status, data } = await getProfile();
//       if (status === "success") {
//         profile.value = data as User;

//         // Check if user is admin
//         isAdmin.value = await canAccessAdmin(profile.value);
//         if (isAdmin.value) {
//           showAdminLinks(isLoggedInMenu);
//           isLoggedInKey.value++;
//         }
//       }
//     }
//   }

import useAppopse from "~~/composables/useAppopse";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { isAuthenticated } = useAppopse();
  const isLoggedIn = await isAuthenticated();

  // Ελέγχετε αν ο χρήστης είναι συνδεδεμένος
  if (isLoggedIn === false) {
    return navigateTo("/appopse/login"); // Ανακατεύθυνση στη σελίδα σύνδεσης αν ο χρήστης δεν είναι συνδεδεμένος
  }
});
