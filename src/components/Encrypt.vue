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
					<form>
						<div class="panel-body">
							<div class="form-group col-md-12">
								<label>Public Key (E)</label>
								<input type="text" v-model="public_key" @change="encryptData" class="key form-control">
							</div>
							<div class="form-group col-md-12">
								<label>Nilai N</label>
								<input type="text" v-model="nilai_n" @change="encryptData" class="key form-control">
							</div>
							<div class="form-group col-md-12">
								<label>Plain Text</label>
								<textarea v-model="plain_text" rows="10" @change="encryptData" class="key form-control"></textarea>
							</div>
							<div class="form-group col-md-12">
								<label>Plaint Text ASCII</label>
								<textarea v-model="plain_text_ascii" rows="10" class="form-control" readonly></textarea>
							</div>
							<div class="form-group col-md-12">
								<label>Ciphertext</label>
								<textarea v-model="decrypt" rows="10" class="form-control" readonly></textarea>
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
			public_key:null,
			nilai_n:null,
			plain_text:null,
			plain_text_ascii:null,
			decrypt:null
		}
	},
	methods: {
		encryptData() {
			if (!this.public_key || !this.nilai_n || !this.plain_text ) {
				return;
			}else{
				let form = new FormData();
				form.append('public_key',this.public_key);
				form.append('nilai_n',this.nilai_n);
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