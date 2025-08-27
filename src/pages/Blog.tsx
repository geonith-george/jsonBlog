import { Link, useParams } from "react-router-dom";
import data from "../data/blog";
import {motion} from "framer-motion"
function Blog() {
      const { id } = useParams();

    const blog = data.find(b => b.id === id);

    if (!blog) return <h2>Blog not found</h2>;

    return (
    <motion.div
      style={{ maxWidth: "600px" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
    <div className="p-2">
        <article style={{ maxWidth: "600px", padding: "1rem" }}>
            <h1>{blog.title}</h1>
            <p><em>{new Date(blog.date).toDateString()}</em></p>
            <div style={{ whiteSpace: "pre-line", lineHeight: "1.6" }}>
                {blog.content}
            </div>
        </article>

        <button type="button" className="underline"><Link to={'/'}> :back to blogs</Link></button>
    </div>
    </motion.div>

    );
}

export default Blog;