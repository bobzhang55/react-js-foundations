import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { useState, useEffect } from 'react';
import styles from './wp-blog.module.css';
import { useParams } from 'react-router-dom';

export default function ReactBlog(props) {
  let { id } = useParams();
  const [post, setPost] = useState();
  useEffect(() => {
    if (id) {
      const getPost = async () => {
        const response = await fetch(
          `https://blog.reactjsfoundations.com/wp-json/wp/v2/posts/${id}/`
        );
        const data = await response.json();
        console.log(data);
        setPost(data);
      };
      getPost();
    }
  }, [id]);

  if (post) {
    return (
      <div className={styles.blog__posts}>
        <h1 className={styles.blog__title}>{post.title.rendered}</h1>
        <div key={post.id}>
          <section
            className={styles.post__content}
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      </div>
    );
  }
  return 'Loading...';
}
