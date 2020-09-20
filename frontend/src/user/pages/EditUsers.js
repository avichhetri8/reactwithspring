import React, {Component} from 'react';
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import {Formik} from "formik";
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";

class EditUsers extends Component {
    constructor(props) {
        super(props);
        console.log(" sdas",)
        //const {id} = props.match.params.id
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRest = this.handleReset.bind(this);
        this.state = {
            employee: [],
            id  : props.match.params.id
        };
    }

    componentDidMount() {
        const {id} = this.state;
        axios.get(`http://localhost:8080/api/employee/${id}`)
            .then(res => {
                this.setState({employee: res.data});
                const {employee} = this.state;
                console.log("userlist",employee)
            });

    }

    handleChange = event => {
        this.setState({[event.target.name] : event.target.value});
    };

    handleReset = event => {
        console.log("test")
        this.setState({employee : ""})
    }

    handleSubmit = event => {
        const {id} = this.state;
        let value = this.context;
        console.log("submit clicked...", value);
        event.preventDefault();
        const postData = {
            "firstName" : this.state.firstName,
            "lastName" : this.state.lastName ,
            "emailId" : this.state.emailId,

        };
        console.log("postData", postData);
        event.target.reset();
        axios.put(`http://localhost:8080/api/update/${id}`,postData,
        )
            .then(res => {
                console.log('axios post is', res);


                this.props.history.push("/");

            })




    };


    render() {
        const {id, employee} = this.state;
        return (
            <div className="animated fadeIn">
                <Formik

                    enableReinitialize
                    initialValues={employee }
                    validate={values => {
                        let errors = {};
                        if (!values.firstName) {
                            errors.firstName = 'First Name is Required';
                        }
                        this.setState({firstName : values.firstName})


                        if (!values.lastName) {
                            errors.lastName = 'Last Name is Required';
                        }
                        this.setState({lastName : values.lastName })

                        if (!values.emailId) {
                            errors.emailId = 'email address is Required';
                        }
                        this.setState({emailId : values.emailId})


                        return errors;
                    }}

                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,

                          /* and other goodies */
                      }) => (
                        <Form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                            <Row>
                                <Col xs="12" sm="8">

                                    <Card>
                                        <CardHeader>
                                            <strong>Edit Employee</strong>
                                            <small> Edit a Employee by entering details below</small>
                                        </CardHeader>
                                        <CardBody>
                                            <FormGroup row>
                                                <Col md="3">
                                                    <Label htmlFor="text-input">First Name</Label>
                                                </Col>
                                                <Col xs="12" md="9">
                                                    <Input
                                                        type="text"
                                                        id="firstName"
                                                        name="firstName"
                                                        placeholder="first name"
                                                        className={
                                                            errors.firstName && touched.firstName ? 'is-invalid' : 'form-control'
                                                        }
                                                        onBlur={handleBlur}
                                                        value={values.firstName || ''}
                                                        onChange={handleChange}
                                                        required
                                                    />

                                                    {errors.firstName && touched.firstName && (
                                                        <div className="invalid-feedback">{errors.firstName}</div>
                                                    )}

                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col md="3">
                                                    <Label htmlFor="text-input">Last Name</Label>
                                                </Col>
                                                <Col xs="12" md="9">
                                                    <Input
                                                        type="text"
                                                        id="lastName"
                                                        name="lastName"
                                                        placeholder="Last Name"
                                                        className={
                                                            errors.lastName && touched.lastName ? 'is-invalid' : 'form-control'
                                                        }
                                                        onBlur={handleBlur}
                                                        value={values.lastName || ''} onChange={handleChange}
                                                        required/>

                                                    {errors.lastName && touched.lastName && (
                                                        <div className="invalid-feedback">{errors.lastName}</div>
                                                    )}

                                                </Col>
                                            </FormGroup>

                                            <FormGroup row>
                                                <Col md="3">
                                                    <Label htmlFor="text-input">Last Name</Label>
                                                </Col>
                                                <Col xs="12" md="9">
                                                    <Input
                                                        type="email"
                                                        id="emailId"
                                                        name="emailId"
                                                        placeholder="email"
                                                        className={
                                                            errors.emailId && touched.emailId ? 'is-invalid' : 'form-control'
                                                        }
                                                        onBlur={handleBlur}
                                                        value={values.emailId || ''} onChange={handleChange}
                                                        required/>

                                                    {errors.emailId && touched.emailId && (
                                                        <div className="invalid-feedback">{errors.emailId}</div>
                                                    )}

                                                </Col>
                                            </FormGroup>


                                        </CardBody>
                                        <CardFooter>
                                            <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>&nbsp;
                                            <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                                        </CardFooter>
                                    </Card>
                                </Col>

                            </Row>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
}

export default EditUsers;