import { Component } from "react";
import ImageItem from "./ImageItem";
import ImageDetail from "./ImageDetail"
import '../../StyleSheet/Home.css';
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import { connect } from "react-redux";
import { fetchImages, fetchComments } from "../../Redux/actionCreator";

const mapStateToProps = (state) => {
    return ({
        images: state.images,
        comments: state.comments,
        category: state.category,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchImages: () => dispatch(fetchImages()),
        fetchComments: () => dispatch(fetchComments()),
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

    componentDidMount() {
        this.props.fetchImages();
        this.props.fetchComments();
        // console.log(this.props.comments);
    }


    render() {
        let image = null;
        const Category = this.props.category;
        if (this.props.images !== null) {
            if (Category !== null) {
                const images = this.props.images.filter((img) => {
                    return img.category === Category;
                })
                image = images.map((img) => {
                    return (
                        <ImageItem image={img} key={img.id} ImageSelect={this.onImageSelect} />
                    )
                })
            }else{
                image = this.props.images.map((img) => {
                    return <ImageItem image={img} key={img.id} ImageSelect={this.onImageSelect} />
                })
            }
        }


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

export default connect(mapStateToProps, mapDispatchToProps)(Home);