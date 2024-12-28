import React from 'react'
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from 'react-router-dom';


const BlogList = () => {
  const [blogs, setBlogs] = React.useState(null);

  React.useEffect(() => {
    const fetchBlogs = async () => {
      const blogsCollection = collection(db, "blogs");
      const blogsSnapshot = await getDocs(blogsCollection);
      const blogsList = blogsSnapshot.docs.map(doc => {
        const id = doc.id;
        const data = doc.data();
        return { id, ...data }
      });
      setBlogs(blogsList);
    };

    fetchBlogs();
  }, []);

  return (
    <div style={{ backgroundColor: '#f3f4f6' }}>
      <div style={{ 
        margin: '0 auto',
         maxWidth: '112rem',
          paddingLeft: '24px',
           paddingRight: '32px',
           display: "flex",
           flexDirection: "column",
           alignItems: "center",
           justifyContent: "center",
         }}>
        <div style={{ margin: '0 auto', margin: '2.5rem auto 0', paddingTop: '2.5rem', }}>
          <h2
            style={{
              fontSize: '2.25rem',
              fontWeight: '600',
              letterSpacing: '-0.025em',
              color: '#111827',
              lineHeight: '1',
            }}
          >
            Explore the Blog
          </h2>
        </div>
        <div
          style={{
            margin: '2.5rem auto 0',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '1rem',
            maxWidth: '100%',
            borderTop: '1px solid #E5E7EB',
            paddingTop: '2.5rem',
            alignItems: 'flex-start',
            justifyContent: 'space-around'
          }}
        >
          {blogs?.map((blog) => (
            <Link
              to={`/blog/${blog.id}`}
              key={blog.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minWidth: '28rem',
                minHeight: '20rem',
                boxShadow: '11px 22px 19px 3px rgba(0,0,0,0.1)',
                padding: '2rem',
                borderRadius: '8px',
                backgroundColor: '#fff',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  fontSize: '0.75rem',
                  color: '#6B7280',
                }}
              >
                <time>{new Date(blog.timestamp?.toDate()).toDateString()}</time>
                <a
                  href="#"
                  style={{
                    borderRadius: '9999px',
                    backgroundColor: '#F3F4F6',
                    padding: '0.375rem 0.75rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#6B7280',
                    textDecoration: 'none',
                  }}
                >
                  Marketing
                </a>
              </div>

              <div style={{ position: 'relative' }}>
                <h3
                  style={{
                    marginTop: '12px',
                    fontSize: '1.125rem',
                    lineHeight: '1.5rem',
                    fontWeight: '600',
                    color: '#111827',
                  }}
                >
                  <a
                    href="#"
                    style={{
                      position: 'relative',
                      display: 'block',
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    {blog.title ? blog.title : 'Untitled'}
                  </a>
                </h3>
                <p
                  style={{
                    marginTop: '20px',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    WebkitLineClamp: '3',
                    fontSize: '0.875rem',
                    lineHeight: '1.5rem',
                    color: '#6B7280',
                  }}
                >
                  {blog.content ? blog.content.length > 100 ? blog.content.substring(0, 100) + '...' : blog.content : 'No content'}
                </p>
              </div>

              <div
                style={{
                  marginTop: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <img
                  src="https://picsum.photos/200/300"
                  alt=""
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '9999px',
                    backgroundColor: '#F3F4F6',
                  }}
                />
                <div style={{ fontSize: '0.875rem', lineHeight: '1.5rem' }}>
                  <p
                    style={{
                      fontWeight: '600',
                      color: '#111827',
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        position: 'relative',
                        color: 'inherit',
                        textDecoration: 'none',
                      }}
                    >
                      {blog.userEmail || 'Anonymous'}
                    </a>
                  </p>
                  <p style={{ color: '#6B7280' }}>Author</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>


  )
}

export default BlogList