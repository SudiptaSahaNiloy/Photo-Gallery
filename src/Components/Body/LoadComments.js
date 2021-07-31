const LoadComments = (props) => {
    return (
        props.comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <h5>{comment.author}</h5>
                    <p>{comment.comment}</p>
                </div>
            )
        })
    )
}

export default LoadComments;
