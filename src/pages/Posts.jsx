import React, {useEffect, useMemo, useState} from "react";
import {usePosts} from "../hooks/usePosts";
import {postsAPI} from "../API/PostSetvice";
import {getPageCount} from "../utils/pages";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import Pagination from "../components/Pagination/Pagination";
import Preloader from "../common/Preloader/Preloader";


function Posts() {
    const [posts, setPosts] = useState([
            {id: 1, title: "ff", body: "ff"},
            {id: 2, title: "аа", body: "Description"},
            {id: 3, title: "бб", body: "о"}
        ]
    )


    const [modal, setModal] = useState(false);

    const [isPostsLoading, setIsPostsLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);




    /*   function getSortedPosts() {
           if (selectedSort) {
               return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
           }
           return posts;
       }*/

    useEffect(() => {

        fetchPosts();

    }, [page])


    function fetchPosts() {
        setIsPostsLoading(true)
        postsAPI.getPosts(limit, page)
            .then(response => {
                setPosts(response.data)
                setIsPostsLoading(false)
                const totalCount = (response.headers["x-total-count"])
                setTotalPages(getPageCount(totalCount, limit))
            })


        /*const posts = await postsAPI.getPosts()
        setPosts(posts)*/
    }


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page);

    }

    return (
        <div className="App">
            <button>dss</button>
            <MyButton style={{marginTop: "15px"}} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: "15px 0"}}/>
            {isPostsLoading
                ? <div style={{display: "flex", justifyContent: "center"}}><Preloader/></div>
                : <PostList deletePost={deletePost} posts={posts} title={"Посты про JS"}/>
            }
            <Pagination changePage={changePage} page={page} totalPages={totalPages} />


        </div>
    );
}

export default Posts;
