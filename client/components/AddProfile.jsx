import React from 'react'

class AddProfile extends React.Component {
  state = {

    firstName: '',
    lastName: '',
    aboutMe: '',
    country: ''

  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  submit = (e) => {
    e.preventDefault()
    addProfile(this.state())
  }

  listenForKeys = (event) => {
    switch (event.keyCode) {
      case 13:
        this.submit()
        break
    }
  }

  render() {
    return (
      <>
        <div className='profile-form'>

          <h2>Make a Profile</h2>
          <form>
            <input
              placholder='Your first name'
              name='firstName'
              onChange={this.handleChange}
              value={this.state.firstName}
            />
            <input
              placholder='Your Last Name'
              name='lastName'
              onChange={this.handleChange}
              value={this.state.lastName}
            />
            <input
              placholder='New Zealand'
              name='country'
              onChange={this.handleChange}
              value={this.state.country}
            />
            <textarea
              placholder='Tell us about you!'
              name='aboutMe'
              onChange={this.handleChange}
              value={this.state.aboutMe}
            />
            <button onClick={this.submit}>Save Profile</button>
          </form>
        </div>
      </>
    )
  }

}
export default AddProfile