import React from 'react'
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import { Link, useNavigate } from 'react-router-dom';


const BlogList = () => {
  const navigate = useNavigate();
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
    <div>
      <div>
        {blogs?.map(blog => (
          <Link to={`/blog/${blog.id}`} key={blog.id} className="border p-4 my-4">
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p className="text-gray-600 mt-2">By: {blog.userEmail || "Anonymous"}</p>
            <p className="text-gray-500 mt-1">
              Posted on: {blog.timestamp?.toDate().toLocaleString()}
            </p>
            <p className="mt-4">{blog.content}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BlogList