import { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Button } from "reactstrap";
import { addComments } from "../../Redux/actionCreator";

const mapDispatchToProps = (dispatch) => {
    return ({
        addComments: (author, comment, imageId) => dispatch(addComments(author, comment, imageId))
    })
}

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            comment: '',
        };
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onSubmitHandler = (event) => {
        // console.log(this.state);
        this.props.addComments(this.state.author, this.state.comment, this.props.imageId);
        this.setState({
            author: '',
            comment: '',
        })
        event.preventDefault();
    }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        event.preventDefault();
    }

    render() {
        // console.log(this.props);
        return (
            <div>
                <Form onSubmit={this.onSubmitHandler}>
                    <Input type="text" name="author" value={this.state.author} placeholder="Enter your name" required onChange={this.onChangeHandler} /><br />
                    <Input type="textarea" name="comment" value={this.state.comment} placeholder="Enter your comment" required onChange={this.onChangeHandler} /><br />
                    <div className="d-flex justify-content-end">
                        <Button type="submit" color="success">Submit Comment</Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(CommentForm);
