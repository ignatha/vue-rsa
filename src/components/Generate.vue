<template>
	<div class="pricing-header p-3 pb-md-4 mx-auto text-center">
		<h1 class="display-4 fw-normal">Generate</h1>
	</div>
	<div class="row">
		<div class="col">
			<div class="card mb-4 rounded-3 shadow-sm">
				<div class="card-header py-3">
					<h4 class="my-0 fw-normal">Generate Key</h4>
				</div>
				<div class="card-body">
						<div class="panel-body">
							<label>Nilai P</label>
							<div class="input-group mb-3 col-md-12">
								<input type="text" v-model="p" class="prima form-control" @change="generate" placeholder="Bilangan prima nilai P diatas 100">
							</div>
							<label>Nilai Q</label>
							<div class="input-group mb-3 col-md-12">
								<input type="text" v-model="q" class="prima form-control" @change="generate" placeholder="Bilangan prima nilai Q diatas 100">
							</div>
							<label>Public Key</label>
							<div class="input-group mb-3 col-md-12">
								<input type="text" v-model="public_key" class="form-control" readonly>
								<div class="input-group-prepend">
									<b-button variant="outline-dark" v-b-tooltip.focus title="Copy!" v-clipboard="public_key">Copy!</b-button>
								</div>
							</div>
							<label>Private Key</label>
							<div class="input-group mb-3 col-md-12">
								<input type="text" v-model="private_key" class="form-control" readonly>
								<div class="input-group-prepend">
									<b-button variant="outline-dark" v-b-tooltip.focus title="Copy!" v-clipboard="private_key">Copy!</b-button>
								</div>
							</div>
						</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col" style="height:100px;">
		</div>
	</div>
</template>

<script>

import axios from 'axios';

export default {
	data(){
		return {
			p:null,
			q:null,
			public_key:null,
			private_key:null
		}
	},
	methods: {
		generate() {
			if (!this.p || !this.q) {
				return;
			}else{
				let form = new FormData();
				form.append('p',this.p);
				form.append('q',this.q);
				
				axios.post(process.env.VUE_APP_ROOT_API+'/generate', form)
                 .then((res) => {
                     this.public_key = res.data.public_key;
                     this.private_key = res.data.private_key;
                 })
                 .catch((error) => {
                     console.log(error);
                 });
			}
		}

	}
}
	
</script>


<style>

</style>