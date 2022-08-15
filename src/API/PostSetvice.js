import axios from "axios";
let instance = axios.create({
    withCredentials:true,
    baseURL: 'https://jsonplaceholder.typicode.com/',
    /*headers: {
        "API-KEY" : "ffb12bf6-39cb-412c-9ea1-a0403c00b419"
    }*/
})


export const postsAPI = {
    getPosts(limit = 10, page = 1) {
        return  instance.get('posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })

    },

    getById(id) {
        return  instance.get('posts/' + id)

    },
    getCommentsById(id) {
        return  instance.get(`posts/${id}/comments`)

    }



    }



/*
async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
}*/
