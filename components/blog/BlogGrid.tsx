import BlogCard from './BlogCard';
import type { BlogPost } from '@/lib/types';

interface BlogGridProps {
  posts: BlogPost[];
  title?: string;
}

export default function BlogGrid({ posts, title = 'Latest Articles' }: BlogGridProps) {
  return (
    <section className="blog-grid-section section">
      <div className="container">
        {title && <h2 className="blog-grid-title">{title}</h2>}
        <div className="blog-grid">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
