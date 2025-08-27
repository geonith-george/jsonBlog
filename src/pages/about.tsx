import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { about as aboutData } from "../data/aboutPage"; // Adjust the path as needed
import type { JSX } from "react";

const iconMap: Record<string, JSX.Element> = {
  Twitter: <FaTwitter />,
  LinkedIn: <FaLinkedin />,
};

function About() {
  return (
    <div className="p-2">
      <motion.div
        style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>{aboutData.title}</h1>

        {aboutData.intro.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <h2 style={{ marginTop: "2rem" }}>Connect with me</h2>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            fontSize: "1.5rem",
            marginTop: "0.5rem",
          }}
        >
          {aboutData.socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {iconMap[social.name] ?? social.name}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default About;