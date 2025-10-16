import BlogCard from './BlogCard';
import type { BlogPost } from '@/lib/types';

interface FeaturedPostProps {
  post: BlogPost;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <section className="featured-post-section">
      <div className="container">
        <h2 className="featured-post-label">Featured Article</h2>
        <BlogCard post={post} variant="featured" />
      </div>
    </section>
  );
}
