import React from 'react'
import {
} from 'reactstrap';
// import '../CSS/Blog.css';

const Blog = (props) => {

    return (
        <div className="blogwrap">
            <img src="/assets/images(31).jpeg" alt=" lupa" />
            <p>{props.tanggal}</p>
            <p>{props.judul}</p>
            <p>{props.sumarry}</p>
            <p>sumarry</p>
        </div>
    )
}

export default Blog;