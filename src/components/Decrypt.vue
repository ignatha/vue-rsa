<template>
	<div>
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
							<div class="panel-body">
								<label>Private Key</label>
								<div class="input-group mb-3 col-md-12">
									<input type="text" v-model="private_key" @change="decryptData" class="key_dec form-control">
								</div>
								<label>Ciphertext</label>
								<div class="input-group mb-3 col-md-12">
									<textarea v-model="cipher_text" rows="10" @change="decryptData" class="key_dec form-control"></textarea>
								</div>
								<label>Plaint Text ASCII</label>
								<div class="input-group mb-3 col-md-12">
									<textarea v-model="plain_text_ascii_decrypt" rows="10" class="form-control" readonly></textarea>
								</div>
								<div class="input-group mb-3 col-md-12">
									<b-button variant="outline-dark" id="plainAsciiTooltip" @click="showPlainAsciiTooltip = true" v-clipboard="plain_text_ascii_decrypt">Copy!</b-button>
									<b-tooltip target="plainAsciiTooltip"
										:show.sync="showPlainAsciiTooltip"
										@shown="hideTooltipLater"
										triggers
										title="Text Copied">
									</b-tooltip>
								</div>
								<label>Plaintext</label>
								<div class="input-group mb-3 col-md-12">
									<textarea v-model="plain_text_decrypt" rows="10" class="form-control" readonly></textarea>
								</div>
								<div class="input-group mb-3 col-md-12">
									<b-button variant="outline-dark" id="plainTextTooltip" @click="showPlainTextTooltip = true" v-clipboard="plain_text_decrypt">Copy!</b-button>
									<b-tooltip target="plainTextTooltip"
										:show.sync="showPlainTextTooltip"
										@shown="hideTooltipLater"
										triggers
										title="Text Copied">
									</b-tooltip>
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
	</div>
</template>

<script>

import axios from 'axios';

export default {
	data(){
		return {
			private_key:null,
			cipher_text:null,
			plain_text_ascii_decrypt:null,
			plain_text_decrypt:null,
			showPlainAsciiTooltip:false,
			showPlainTextTooltip:false
		}
	},
	methods: {
		decryptData() {
			if (!this.private_key || !this.cipher_text ) {
				return;
			}else{
				let form = new FormData();
				form.append('private_key',this.private_key);
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
		},
		hideTooltipLater() {
			setTimeout(() => {
				this.showPlainAsciiTooltip = false;
				this.showPlainTextTooltip = false;
			}, 2000);
		}
	}
}
	
</script>


<style>

</style>