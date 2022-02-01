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
					<form>
						<div class="panel-body">
							<div class="form-group col-md-12">
								<label>Nilai P</label>
								<input type="text" v-model="p" class="prima form-control" @change="generate" placeholder="Bilangan prima nilai P diatas 100">
							</div>
							<div class="form-group col-md-12">
								<label>Nilai Q</label>
								<input type="text" v-model="q" class="prima form-control" @change="generate" placeholder="Bilangan prima nilai Q diatas 100">
							</div>
							<div class="form-group col-md-12">
								<label>Nilai N</label>
								<input type="text" v-model="n" class="form-control" placeholder="Nilai N" readonly>
							</div>
							<div class="form-group col-md-12">
								<label>Nilai M</label>
								<input type="text" v-model="m" class="form-control" placeholder="Nilai M" readonly>
							</div>
							<div class="form-group col-md-12">
								<label>Public Key (E)</label>
								<input type="text" v-model="e" class="form-control" readonly>
							</div>
							<div class="form-group col-md-12">
								<label>Private Key (D)</label>
								<input type="text" v-model="d" class="form-control" readonly>
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
			p:null,
			q:null,
			n:null,
			m:null,
			e:null,
			d:null
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
                     this.n = res.data.n;
                     this.m = res.data.m;
                     this.e = res.data.e;
                     this.d = res.data.d;
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