<template>
	<nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
    <div>
      <router-link class="me-3 py-2 text-dark text-decoration-none" active-class="active" to="/">Home</router-link>
    </div>
    <div v-if="!currentUser" >
      <router-link class="me-3 py-2 text-dark text-decoration-none" active-class="active" to="/login">Login</router-link>
      <router-link class="me-3 py-2 text-dark text-decoration-none" active-class="active" to="/register">Register</router-link>
    </div>
    <div v-if="currentUser" >
      <router-link class="me-3 py-2 text-dark text-decoration-none" active-class="active" to="/generate">Generate</router-link>
      <router-link class="me-3 py-2 text-dark text-decoration-none" active-class="active" to="/encrypt">Encrypt</router-link>
      <router-link class="me-3 py-2 text-dark text-decoration-none" active-class="active" to="/decrypt">Decrypt</router-link>
      <router-link class="me-3 py-2 text-dark text-decoration-none" active-class="active" to="/">{{ currentUser.user.name }}</router-link>
      <a class="me-3 py-2 text-dark text-decoration-none" active-class="active" href @click.prevent="logOut">LogOut</a>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>


<style>

</style>