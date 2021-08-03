import dateFormat from "dateformat";

const LoadComments = (props) => {
    return (
        Object.entries(props.comments).map((comment) => {
            return (
                <div key={comment[1][1].id}>
                    <h5>{comment[1][1].author}</h5>
                    <p>{comment[1][1].comment}</p>
                    <p style={{ fontSize: "11px" }}>{dateFormat(comment[1][1].date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
                </div>
            )
        })
    )
}

export default LoadComments;
