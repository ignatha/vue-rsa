<template>
	<div>
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
										<b-button variant="outline-dark" id="publicTooltip" @click="showPublicTooltip = true" v-clipboard="public_key">Copy!</b-button>
										<b-tooltip target="publicTooltip"
										:show.sync="showPublicTooltip"
										@shown="hideTooltipLater"
										triggers
										title="Text Copied">
									</b-tooltip>
									</div>
								</div>
								<label>Private Key</label>
								<div class="input-group mb-3 col-md-12">
									<input type="text" v-model="private_key" class="form-control" readonly>
									<div class="input-group-prepend">
										<b-button variant="outline-dark" id="privateTooltip" @click="showPrivateTooltip = true" v-clipboard="private_key">Copy!</b-button>
										<b-tooltip target="privateTooltip"
										:show.sync="showPrivateTooltip"
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
			p:null,
			q:null,
			public_key:null,
			private_key:null,
			showPublicTooltip: false,
			showPrivateTooltip: false
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
		},
		hideTooltipLater() {
			setTimeout(() => {
				this.showPublicTooltip = false;
				this.showPrivateTooltip = false;
			}, 2000);
		}

	}
}
	
</script>


<style>

</style>