import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {useFetching} from "../hooks/useFetching";
import {postsAPI} from "../API/PostSetvice";
import Preloader from "../common/Preloader/Preloader";

const PostIdPage = () => {

    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await postsAPI.getById(params.id)
        setPost(response.data)

    })
    const [fetchComments, isComLoading, comError] = useFetching(async () => {
        const response = await postsAPI.getCommentsById(params.id)
        setComments(response.data);


    })

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);


    }, [])


    return (
        <div>
            <h1>{`Страница с поста с ID = ${params.id}`}</h1>
            {isLoading
                ? <Preloader />
                : <div>{post.id} {post.title}</div>
            }
            <h1>
                Комментарии
            </h1>
            {isComLoading
                ? <Preloader />
                : <div>
                    {comments.map(comm =>
                        <div style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                        )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;