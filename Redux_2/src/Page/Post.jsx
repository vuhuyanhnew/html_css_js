import  { useEffect, useState } from 'react';
import axios from 'axios';

const Post = () => {
    const [post, setPost] = useState();

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPost(result.data);
            } catch (error) { 
                console.log(error)
            }
        };

        getData();
    }, []);

    return (
        <div>
            <div>This is posts:</div>
            {post?.map((p) => {
                return (
                    <div key={p.id}>{p?.title}</div>
                );
            })}
        </div>
    );
}
export default Post