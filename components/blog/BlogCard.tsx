import Link from 'next/link';
import Card from '@/components/shared/Card';
import { formatDate } from '@/lib/helpers';
import type { BlogPost } from '@/lib/types';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'card' | 'featured';
}

export default function BlogCard({ post, variant = 'card' }: BlogCardProps) {
  const isFeatured = variant === 'featured';

  return (
    <Link href={`/blog/${post.slug}`} className="blog-card-link">
      <Card hoverable className={`blog-card ${isFeatured ? 'blog-card-featured' : ''}`}>
        <div className="blog-card-content">
          <div className="blog-card-meta">
            <span className={`blog-category blog-category-${post.category.toLowerCase().replace(/\s+/g, '-')}`}>
              {post.category}
            </span>
            <span className="blog-read-time">{post.readTime}</span>
          </div>
          <h3 className={`blog-card-title ${isFeatured ? 'blog-card-title-featured' : ''}`}>
            {post.title}
          </h3>
          <p className="blog-card-excerpt">{post.excerpt}</p>
          <div className="blog-card-footer">
            <span className="blog-author">{post.author}</span>
            <span className="blog-date">{formatDate(post.publishedDate)}</span>
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="blog-tags">
              {post.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="blog-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
}
