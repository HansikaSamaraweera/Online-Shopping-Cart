import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';


class NewCategory extends Component {
    constructor(props) {
        super(props);

        this.state =
            {
                success: null,
                message: '',
                categoryName: '',
                type: '',
                dateAndTime: ''
            };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event)
    {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ [name]: value });

        return true;
    }

    handleSubmit(event)
    {
        //copy state to new object, prevent saving of other state variables (i.e message & success)
        var newCategory = {
            categoryName: this.state.categoryName,
            type: this.state.type,
            dateAndTime: this.state.dateAndTime,
        };

        // eslint-disable-next-line no-undef
        MeshyClient.currentConnection.meshesService.create("category", newCategory).then(_ => {
            this.setState({ "success" : true });
        }).catch(e=> {
            this.setState({ "message" : e.response.message });
            this.setState({ "success" : false });
        });
        event.preventDefault();
    }
    render() {
        return (
            <Container className="App">
                <h2>Add Category</h2>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Input
                                type="text"
                                name="categoryName"
                                id="ctName"
                                placeholder="Enter Category Name Here"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Input
                                type="text"
                                name="categoryType"
                                id="ctType"
                                placeholder="Category Type"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="date"
                                name="addDate"
                                id="ctDate"
                            />
                        </FormGroup>
                    </Col>
                    <Button>Submit</Button>
                </Form>
            </Container>
        );
    }

}
export default NewCategory;
