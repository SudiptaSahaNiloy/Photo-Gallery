import { Component } from "react";
import ImageItem from "./ImageItem";
import ImageDetail from "./ImageDetail"
import '../../StyleSheet/Home.css';
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return ({
        images: state.images,
        comments: state.comments,
    })
}

// main home class to show all the home components
class Home extends Component {
    state = {
        selectedImage: null,
        modalOpen: false,
    }

    onImageSelect = (image) => {
        this.toggleModal();
        this.setState({
            selectedImage: image,
        });
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen,
        })
    }


    render() {
        // console.log(this.state.selectedImage);
        const image = this.props.images.map((item) => {
            return (
                <ImageItem image={item} key={item.id} ImageSelect={this.onImageSelect} />
            )
        })

        let imageDetail = null;
        if (this.state.selectedImage !== null) {
            const comments = this.props.comments.filter((comment) => {
                return comment.imageId === this.state.selectedImage.id;
            })
            imageDetail = <ImageDetail image={this.state.selectedImage} comments={comments} />
        }

        return (
            <div className="container">
                <div className="grid-container">
                    {image}
                </div>

                {/* Modal section */}
                <Modal isOpen={this.state.modalOpen}>
                    <ModalBody>
                        {imageDetail}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Home);