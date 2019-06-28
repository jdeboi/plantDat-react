import React, { Component } from 'react';

export default class Logout extends Component {

  onSubmit = (event) => {
    event.preventDefault();
    fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.props.history.push('/');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging out please try again');
    });
  }

  render() {
    return (
      <React.Fragment>
        Logout
      </React.Fragment>
    )
  }
}
