<template>
	<div class="pricing-header p-3 pb-md-4 mx-auto text-center">
		<h1 class="display-4 fw-normal">Encrypt</h1>
	</div>
	<div class="row">
		<div class="col">
			<div class="card mb-4 rounded-3 shadow-sm">
				<div class="card-header py-3">
					<h4 class="my-0 fw-normal">Encrypt</h4>
				</div>
				<div class="card-body">
						<div class="panel-body">
							<label>Public Key</label>
							<div class="input-group mb-3 col-md-12">
								<input type="text" v-model="public_key" @change="encryptData" class="key form-control">
							</div>
							<label>Plain Text</label>
							<div class="input-group mb-3 col-md-12">
								<textarea v-model="plain_text" rows="10" @change="encryptData" class="key form-control"></textarea>
							</div>
							<label>Plaint Text ASCII</label>
							<div class="input-group mb-3 col-md-12">
								<textarea v-model="plain_text_ascii" rows="10" class="form-control" readonly></textarea>
							</div>
							<div class="input-group mb-3 col-md-12">
								<b-button variant="outline-dark" v-b-tooltip.focus title="Copy!" v-clipboard="plain_text_ascii">Copy!</b-button>
							</div>
							<label>Ciphertext</label>
							<div class="input-group mb-3 col-md-12">
								<textarea v-model="decrypt" rows="10" class="form-control" readonly></textarea>
							</div>
							<div class="input-group mb-3 col-md-12">
								<b-button variant="outline-dark" v-b-tooltip.focus title="Copy!" v-clipboard="decrypt">Copy!</b-button>
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
			public_key:null,
			plain_text:null,
			plain_text_ascii:null,
			decrypt:null
		}
	},
	methods: {
		encryptData() {
			if (!this.public_key || !this.plain_text ) {
				return;
			}else{
				let form = new FormData();
				form.append('public_key',this.public_key);
				form.append('plain_text',this.plain_text);
				
				axios.post(process.env.VUE_APP_ROOT_API+'/enkripsi', form)
                 .then((res) => {
                     this.plain_text_ascii = res.data.plain_text_ascii.join(" ");
                     this.decrypt = res.data.decrypt.join(" ");
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