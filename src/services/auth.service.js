import axios from 'axios';
import withHeader from './auth-header';

class AuthService {
  login(user) {
    return axios
      .post(process.env.VUE_APP_AUTH + 'login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    return withHeader().post('logout')
      .then(res => {
        localStorage.removeItem('user')
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
    }

  register(user) {
    return axios.post(process.env.VUE_APP_AUTH + 'register', {
      name: user.name,
      email: user.email,
      email_confirmation: user.email_confirmation,
      password: user.password
    });
  }
}

export default new AuthService();