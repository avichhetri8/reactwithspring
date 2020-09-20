import React, {Component} from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Col,
    Form,
    Button,
    FormGroup,
    Input,
    Label,
    Row,
} from 'reactstrap';
import { Formik} from 'formik';
import axios from 'axios'

class AddUsers extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);


        this.state = {

            firstName: '',
            lastName: '',
            emailId:'',
        };
    }



    handleChange = event => {
        this.setState({[event.target.name] : event.target.value});
    };

    handleSubmit = event => {
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
        axios.post(`http://localhost:8080/api/add`,postData,
        )
            .then(res => {
                console.log('axios post is', res);


                this.props.history.push("/");

            })




    };


    render() {
        return (
            <div className="animated fadeIn">
                <Formik
                    initialValues={{ firstName: '', lastName: '',emailId:''}}
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
                        <Form onSubmit={this.handleSubmit}>
                            <Row>
                                <Col xs="12" sm="8">

                                    <Card>
                                        <CardHeader>
                                            <strong>New Employee</strong>
                                            <small> Create a New Employee by entering details below</small>
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
                                                        value={values.firstName}
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
                                                        value={values.lastName} onChange={handleChange}
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
                                                        value={values.emailId} onChange={handleChange}
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

export default AddUsers;