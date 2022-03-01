<template>
	<div>
		<div class="pricing-header p-3 pb-md-4 mx-auto text-center">
			<h1 class="display-4 fw-normal">Login</h1>
		</div>
		<div class="row">
			<div class="col">
				<div class="card mb-4 rounded-3 shadow-sm">
					<div class="card-header py-3">
						<h4 class="my-0 fw-normal">Login</h4>
					</div>
					<div class="card-body">
							<div class="panel-body">
								<form name="form" @submit.prevent="handleLogin">
								<label for="email" >Email</label>
								<div class="input-group mb-3 col-md-12">
									<input
									type="email"
									v-model="user.email"
									v-validate="'required|email|max:50'"
									name="email"
									class="prima form-control"
									placeholder="email"
									/>
								</div>
								<div
								v-if="errors.has('email')"
								class="alert alert-danger"
								role="alert"
								>Email is required!</div>
								<label for="password" >Password</label>
								<div class="input-group mb-3 col-md-12">
									<input
									type="password"
									v-model="user.password"
									v-validate="'required'"
									name="password"
									class="prima form-control"
									placeholder="password"
									/>
								</div>
								<div
								v-if="errors.has('password')"
								class="alert alert-danger"
								role="alert"
								>Password is required!</div>
								<div class="input-group mb-3 col-md-12">
									<button class="btn btn-primary btn-block" :disabled="loading">
										<span v-show="loading" class="spinner-border spinner-border-sm"></span>
										<span>Login</span>
									</button>
								</div>
								<div class="input-group mb-3 col-md-12">
									<div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
								</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col" style="height:100px;">
				</div>
			</div>
		</div>
</template>

<script>
import User from '../models/user';
export default {
  name: 'Login',
  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/');
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          this.loading = false;
          return;
        }
        if (this.user.email && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
            () => {
              this.$router.push('/');
            },
            error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            }
          );
        }
      });
    }
  }
};	
</script>


<style>

</style>