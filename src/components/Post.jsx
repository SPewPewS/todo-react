import React from "react";
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router";


const Post = (props) => {

    const navigate = useNavigate()


    return (
        <div className="post">
            <div className="post_contant">
                <strong>{props.post.id}. {props.post.title} </strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post_btns">
                <MyButton onClick={() => navigate((`/posts/${props.post.id}`))}>Открыть</MyButton>
            </div>
            <div className="post_btns">
                <MyButton onClick={() => props.deletePost(props.post)}>Удалить</MyButton>
            </div>

        </div>
    )
}

export default Post;