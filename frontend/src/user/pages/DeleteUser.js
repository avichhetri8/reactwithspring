import React, { Component } from 'react'
import axios from 'axios'

export default class DeleteUser extends Component {
    constructor(props) {
        super(props);
        console.log(" sdas",)
        //const {id} = props.match.params.id
        this.state = {
            id  : props.match.params.id
        };
    }

    componentDidMount() {
        const {id} = this.state;
        axios.delete(`http://localhost:8080/api/dalete/${id}`)
            .then(res => {
                this.props.history.push("/");
            });

    }
    render(){
        return(
            <div>
            </div>
        )
    }

  
}
