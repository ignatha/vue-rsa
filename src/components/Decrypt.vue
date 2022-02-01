<template>
	<div class="pricing-header p-3 pb-md-4 mx-auto text-center">
		<h1 class="display-4 fw-normal">Decrypt</h1>
	</div>
	<div class="row">
		<div class="col">
			<div class="card mb-4 rounded-3 shadow-sm">
				<div class="card-header py-3">
					<h4 class="my-0 fw-normal">Decrypt</h4>
				</div>
				<div class="card-body">
					<form>
						<div class="panel-body">
							<div class="form-group col-md-12">
								<label>Private Key (D)</label>
								<input type="text" v-model="private_key" @change="decryptData" class="key_dec form-control">
							</div>
							<div class="form-group col-md-12">
								<label>Nilai N</label>
								<input type="text" v-model="nilai_n_decrypt" @change="decryptData" class="key_dec form-control">
							</div>
							<div class="form-group col-md-12">
								<label>Ciphertext</label>
								<textarea v-model="cipher_text" rows="10" @change="decryptData" class="key_dec form-control"></textarea>
							</div>
							<div class="form-group col-md-12">
								<label>Plaint Text ASCII</label>
								<textarea v-model="plain_text_ascii_decrypt" rows="10" class="form-control" readonly></textarea>
							</div>
							<div class="form-group col-md-12">
								<label>Plaintext</label>
								<textarea v-model="plain_text_decrypt" rows="10" class="form-control" readonly></textarea>
							</div>
						</div>
					</form>
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
			private_key:null,
			nilai_n_decrypt:null,
			cipher_text:null,
			plain_text_ascii_decrypt:null,
			plain_text_decrypt:null
		}
	},
	methods: {
		decryptData() {
			if (!this.private_key || !this.nilai_n_decrypt || !this.cipher_text ) {
				return;
			}else{
				let form = new FormData();
				form.append('private_key',this.private_key);
				form.append('nilai_n_decrypt',this.nilai_n_decrypt);
				form.append('cipher_text',this.cipher_text);
				
				axios.post(process.env.VUE_APP_ROOT_API+'/decrypt', form)
                 .then((res) => {
                     this.plain_text_ascii_decrypt = res.data.plain_text_ascii.join(" ");
                     this.plain_text_decrypt = res.data.plaintext.join("");
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