import styles from "./Blog.module.css";
import MotionSection from "../MotionSection";
import Image from "next/image";
import profile from "@/public/profile.json";

const blogs = profile.blogs;

const Blog = () => {
  return (
    <MotionSection>
      <section className={styles.blog}>
        {blogs.map((post, index) => (
          <a
            key={index}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.entry}
          >
            <div className={styles.meta}>
              <h3>{post.title}</h3>
              <p className={styles.info}>
                {post.date} &bull; {post.author}
              </p>
            </div>

            <div className={styles.thumbnail}>
              <Image
                src={post.image}
                alt={post.title}
                width={160}
                height={100}
              />
            </div>
          </a>
        ))}
      </section>
    </MotionSection>
  );
};

export default Blog;
