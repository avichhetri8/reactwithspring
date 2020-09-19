import React, { Component } from 'react'
import axios from 'axios';

export default class Users extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      employee: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:8080/api/show")
      .then(res => {
        this.setState({employee: res.data});
        console.log("userlist",res.data)
      });

  }


  render() {
    return (
      <div>

      </div>
    )
  }
}
