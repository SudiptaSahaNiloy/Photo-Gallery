import dateFormat from "dateformat";

const LoadComments = (props) => {
    return (
        props.comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <h5>{comment.author}</h5>
                    <p>{comment.comment}</p>
                    <p style={{fontSize: "11px"}}>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
                </div>
            )
        })
    )
}

export default LoadComments;
