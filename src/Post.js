import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { request } from 'graphql-request';
import { useParams } from 'react-router-dom';


const Post = () => {    
    let { slug } = useParams();

    const [data, setData] = useState({posts: []});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await request('https://api-us-east-1.graphcms.com/v2/cl4bneb8634nl01w83u2w32z3/master', 
                `{
                    routes {
                       name
                       url
                    }
                  }
                `
                );
                setData(data);
            }
            catch(error) {
                console.log(error);
            }
        }
        fetchData();
    }, [slug]);
    return(
<div id="postcontainer">
<div id="divmesomespacesmall"></div>
  <img src={data.url}></img>

</div>
    )
}

export default Post;
