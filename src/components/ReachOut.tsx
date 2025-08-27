import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ReachOut() {
    return (
        <div className="inline-flex gap-2 p-2 flex-wrap">
            <p className="">Reach out: </p>
            <a
                href="https://www.linkedin.com/in/geonith-george/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
            >
                <FaLinkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a
                href="mailto:geonith98@gmail.com"
                className="flex items-center gap-2"
            >
                <MdEmail className="w-5 h-5" /> geonith98@gmail.com
            </a>
        </div>
    );
}

export default ReachOut;