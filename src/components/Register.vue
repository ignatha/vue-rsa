<template>
	<div>
		<div class="pricing-header p-3 pb-md-4 mx-auto text-center">
			<h1 class="display-4 fw-normal">Register</h1>
		</div>
		<div class="row">
			<div class="col">
				<div class="card mb-4 rounded-3 shadow-sm">
					<div class="card-header py-3">
						<h4 class="my-0 fw-normal">Register</h4>
					</div>
					<div class="card-body">
							<div class="panel-body">
								<form name="form" @submit.prevent="handleRegister">
								<label for="name" >Full Name</label>
								<div class="input-group mb-3 col-md-12">
									<input
									type="text"
									v-model="user.name"
									v-validate="'required'"
									name="name"
									class="prima form-control"
									placeholder="Full Name"
									/>
								</div>
								<div
								v-if="errors.has('name')"
								class="alert alert-danger"
								role="alert"
								>Full Name is required!</div>
								<label for="email" >Email</label>
								<div class="input-group mb-3 col-md-12">
									<input
									type="email"
									v-model="user.email"
									v-validate="'required|email|max:50'"
									name="email"
									class="prima form-control"
									placeholder="Email"
									ref="email"
									/>
								</div>
								<div
								v-if="errors.has('email')"
								class="alert alert-danger"
								role="alert"
								>Email is required!</div>
								<label for="email_confirmation" >Confirm Email</label>
								<div class="input-group mb-3 col-md-12">
									<input
									type="email_confirmation"
									v-model="user.email_confirmation"
									v-validate="'required|email|confirmed:email'"
									name="email_confirmation"
									class="prima form-control"
									placeholder="Email Confirm"
									/>
								</div>
								<div
								v-if="errors.has('email_confirmation')"
								class="alert alert-danger"
								role="alert"
								>Email Confirm doesn't match!</div>
								<label for="password" >Password</label>
								<div class="input-group mb-3 col-md-12">
									<input
									type="password"
									v-model="user.password"
									v-validate="'required'"
									name="password"
									class="prima form-control"
									placeholder="Password"
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
										<span>Register</span>
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
  name: 'Register',
  data() {
    return {
      user: new User('', '', '',''),
      submitted: false,
      successful: false,
      loading: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/');
    }
  },
  methods: {
    handleRegister() {
      this.message = '';
      this.submitted = true;
      this.loading = true;
      this.$validator.validate().then(isValid => {
        if (isValid) {
        this.loading = false;
          this.$store.dispatch('auth/register', this.user).then(
            data => {
              this.message = data.status;
              this.successful = true;
            },
            error => {
              this.message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
              this.successful = false;
            }
          );
        }else{this.loading = false}
      });
    }
  }
};
</script>


<style>

</style>