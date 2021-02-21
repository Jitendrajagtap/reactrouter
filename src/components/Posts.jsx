import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Posts(props) {
    const [ posts, setPost ] = useState([]);

    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( res => {
            console.log(res);
            setPost(res.data.slice(0, 10));
        }
        )
    }, []);

    const postJsx = posts.map( (post) => {
        return (
            <div className="post card" key={post.id}>
                <div className="card-content">
                    <Link to={"/post/" + post.id}>
                        <span className="card-title">{post.title}</span>
                    </Link>
                    <p>
                        {post.body}
                    </p>
                </div>
            </div>
        )
    })
    return (
        <div className="container">
            {postJsx}    
        </div>
    );
}

export default Posts;
