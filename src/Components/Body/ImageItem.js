import { Card, CardImg } from "reactstrap";
import { baseURL } from "../../Redux/baseURL";

// component to show images in home
const ImageItem = (props) => {
    // console.log(props);
    return (
        <div>
            <Card style={{ margin: "10px" }} onClick={() => props.ImageSelect(props.image)} className="flex-fill">
                <CardImg width="100%" src={baseURL + props.image.imageSrc} alt={props.image.name} />
            </Card>
        </div>
    )
}

export default ImageItem;