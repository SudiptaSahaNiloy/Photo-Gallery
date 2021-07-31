import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import LoadComments from "./LoadComments";
import CommentForm from "./CommentForm";
import { baseURL } from "../../Redux/baseURL";

// component to show image detail in home modal
const ImageDetail = (props) => {
    // console.log(props);
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardImg top src={baseURL + props.image.imageSrc} alt={props.image.name} />
                <CardBody style={{ textAlign: "center" }}>
                    <CardTitle>{props.image.name}</CardTitle>
                    <CardText>{props.image.description}</CardText>
                    <LoadComments comments={props.comments} />
                    <CommentForm imageId={props.image.id} />
                </CardBody>
            </Card>
        </div>
    )
}

export default ImageDetail;
