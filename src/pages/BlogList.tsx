import data from "../data/blog";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function BlogList() {
    return (<>
        <motion.div
            style={{ maxWidth: "600px", padding: "1rem" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='p-2'>
                <ol className='list-decimal' style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
                    {data.map(blog => (
                        <li key={blog.id}>
                            <Link className='underline' to={`/${blog.id}`}>
                                {blog.title}
                            </Link>
                        </li>
                    ))}
                </ol>
            </div>
        </motion.div>
    </>);
}

export default BlogList;