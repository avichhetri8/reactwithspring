import React, { Component } from 'react'
import axios from 'axios';
import { MDBDataTable } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Link } from 'react-router-dom'

export default class Users extends Component {
    constructor(props){
        super(props);

        this.state = {
            //employee: [{"firstname": "dasd","lastname":"das"}]
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

    editEmployee(id){

        console.log("",id)
    }

    render() {
        const {employee} = this.state;
        const data = {
            columns: [
                {
                    label: "Fist Name",
                    field: "firstname",
                    sort: "asc",
                    width: 150
                },
                {
                    label: "Last Name",
                    field: "lastname",
                    sort: "asc",
                    width: 270
                },
                {
                    label: "Email",
                    field: "email",
                    sort: "asc",
                    width: 200
                },
                {
                    label: "Action",
                    field: "action",
                    sort: "asc",
                    width: 200
                }
            ],

            rows: employee.map(item => {
                return {
                    firstname: item.firstName,
                    lastname: item.lastName,
                    email :item.emailId,
                    action : <div>
                        <Link to={`/edit/${item.id}`} name={item.id}><button  name={item.id} className="btn btn-info">Edit </button></Link>
                        <Link to={`/delete/${item.id}`} name={item.id}><button  name={item.id} className="btn btn-danger">Delete </button></Link>
                        
                        </div>
                }
            })

        };
        return (
            <MDBDataTable striped bordered hover data={data} />
        );
    }
}


