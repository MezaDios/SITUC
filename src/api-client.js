export default class APIHandler {
  constructor(URL = 'https://situc.herokuapp.com') {
    this.URL = URL;
    this.user = { id: null, name: null, last_name: null, email: null, authentication_token: null, credit: null, payments: [] }
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
    .then(response => response.json())
    .then(data => {
      this.user.id = data.user.id;
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
    .then(response => {
      if (response.status === 404) {
        console.log('No payments found!');
        return [];
      } else
        return response.json();
    })
    .then(data => {
      this.user.payments = data.reverse();

      return data;
    });
  }

  addCredit(amount) {
    return fetch(
      `${this.URL}/sessions/charge_credit`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          authentication_token: this.user.authentication_token,
          amount: amount,
        }),
      }
    )
    .then(response => response.json())
    .then(data => {
      this.user.credit = data.credit;
      return data.credit;
    });
  }
}