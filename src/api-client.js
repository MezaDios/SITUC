export default class APIHandler {
  constructor(URL = 'localhost:3000') {
    this.URL = URL;
    this.user = { name: null, last_name: null, email: null, authentication_token: null, credit: null, payments: [] }
  }

  getToken(email, password) {
    return fetch(
      `${this.URL}/sessions`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    )
    .then(response => response.json())
    .then(data => {
      this.user.authentication_token = data.user.authentication_token;
      return this.user.authentication_token;
    });
  }

  getUser() {
    return fetch(
      `${this.URL}/sessions/current_user`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          authentication_token: this.user.authentication_token,
        }),
      }
    )
    .then(response => {
      console.warn(response);
      return response.json();
    })
    .then(data => {
      this.user.name = data.user.name;
      this.user.last_name = data.user.last_name;
      this.user.email = data.user.email;
      this.user.credit = +data.user.credit;

      return this.user;
    });
  }
  
  getPayments() {
    return fetch(
      `${this.URL}/users/payments`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          authentication_token: this.user.authentication_token,
        }),
      }
    )
    .then(response => response.json())
    .then(data => {
      this.user.payments = data

      return data;
    });
  }
}

const api = new APIHandler();
api.getToken('avalencia18@ucol.mx', 'poncho123')
  .then(token => api.getUser())
  .then(user => api.getPayments())
  .then(payments => console.log(api.user));