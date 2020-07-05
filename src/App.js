import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card'


class App extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      surname: '',
      email: '',
      phone: '',
      address: {
        number: '',
        houseName: '',
        street: '',
        suburb: '',
        state: '',
        postcode: '',
        country: ''
    }
  }
}

onChangePersonal = (name,value) => {
  const updatedInfo = {
    ...this.state,
    [name]: value
  }
  this.setState(updatedInfo)
}

onChangeAddress = (name, value) => {
  const updatedAddress = {
    ...this.state.address,
    [name]: value
  }
  const updatedInfo = {
    ...this.state,
    address: updatedAddress
  }
  this.setState(updatedInfo)
}

  render() {
    return (
      <div>
            <Form {...this.state}
            onChangePersonal={this.onChangePersonal}
            onChangeAddress={this.onChangeAddress}
            />
            <Card {...this.state}/>
      </div>
    )
  }
  }


export default App;
