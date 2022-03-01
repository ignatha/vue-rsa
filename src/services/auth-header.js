import axios from 'axios';

export default function withHeader() {
	let user = JSON.parse(localStorage.getItem('user'));
	const instance = axios.create({
		baseURL: process.env.VUE_APP_AUTH
	});

	if (user && user.token) {
		instance.defaults.headers.common['Authorization'] = 'Bearer '+user.token;
		return instance;
	}
	return instance
}