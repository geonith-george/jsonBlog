import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function NavBar() {
    return (<div className="mt-5">
        <h1>Hey Dreamer!</h1>
        <nav className="flex flex-row justify-start items-center gap-2">
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <NavLink className="inline-flex items-center gap-2 w-max underline" to={'/'}>Blog </NavLink>
            </motion.div >,
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <NavLink className="inline-flex items-center gap-2 w-max underline" to={'/about'}>About </NavLink>
            </motion.div >

        </nav>

    </div>);
}

export default NavBar;