import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from "axios";

function Post(props) {
    // const [ post, setPost] = useState();
    const params = useParams();

    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/'+params.post_id)
        .then( res => {
            console.log(res);
            setPost(res.data);
        }
        )
    });

    // const [ postId, setPostId ] = useState();
    return (
        <div>
            In Post file {params.post_id}
        </div>
    );
}

export default Post;