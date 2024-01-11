import BackButton from "./backButton";
import GetUserId from "./getUserId";

const getCommentsList = async() =>{
    const response = await fetch(`https://dummyjson.com/comments`);
    const data = await response.json();
    const result = data.comments;
    return result;
}
const CommentList = async() =>{
    const comments = await getCommentsList();
    const name = "parminder";
    console.log(name);
    return(
        <>
            <BackButton test={comments} />
            <h1>Comments List server side</h1>
            <table>
                <thead>
                    <tr>
                        <td>Post Id</td>
                        <td>Body</td>
                        <td>User</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        comments.map((comment, index)=>(
                            <tr key={index}>
                                <td>{comment.postId}</td>
                                <td>{comment.body}</td>
                                <td>{comment.user.username}</td>
                                <td>
                                    <GetUserId id={comment.user.id} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
export default CommentList;