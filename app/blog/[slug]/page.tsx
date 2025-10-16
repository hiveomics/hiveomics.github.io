/**
 * Individual Blog Post Page
 *
 * Dynamic route for displaying full blog post content.
 */

import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { blogPosts } from '@/data/blog-posts';
import { formatDate, filterPostsByCategory } from '@/lib/helpers';
import Button from '@/components/shared/Button';
import type { Metadata } from 'next';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - Nexus Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts from the same category
  const relatedPosts = filterPostsByCategory(blogPosts, post.category)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <article className="blog-post">
      {/* Hero Section */}
      <div className="blog-post-hero">
        <div className="container">
          <div className="blog-post-header">
            <span className={`blog-category blog-category-${post.category.toLowerCase().replace(/\s+/g, '-')}`}>
              {post.category}
            </span>
            <h1 className="blog-post-title">{post.title}</h1>
            <div className="blog-post-meta">
              <span className="blog-author">{post.author}</span>
              <span className="meta-separator">•</span>
              <time dateTime={post.publishedDate} className="blog-date">
                {formatDate(post.publishedDate)}
              </time>
              <span className="meta-separator">•</span>
              <span className="blog-read-time">{post.readTime} read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="blog-post-content-wrapper">
        <div className="container">
          <div className="content">
            <div className="blog-post-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="blog-post-tags">
                <h3 className="tags-heading">Tags:</h3>
                <div className="blog-tags-list">
                  {post.tags.map((tag) => (
                    <span key={tag} className="blog-tag-large">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="related-posts-section section">
          <div className="container">
            <h2 className="related-posts-title">Related Articles</h2>
            <div className="related-posts-grid">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="related-post-card"
                >
                  <div className="related-post-content">
                    <span className={`blog-category blog-category-${relatedPost.category.toLowerCase().replace(/\s+/g, '-')}`}>
                      {relatedPost.category}
                    </span>
                    <h3 className="related-post-title">{relatedPost.title}</h3>
                    <p className="related-post-excerpt">{relatedPost.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="blog-post-cta-section">
        <div className="container">
          <div className="blog-post-cta">
            <h2>Ready to Transform Your Radiology Workflow?</h2>
            <p>
              Discover how Nexus can improve quality assurance and reduce diagnostic misses in your
              radiology department.
            </p>
            <div className="cta-buttons">
              <Button href="mailto:info@hiveomics.com?subject=Demo Request" variant="primary">
                Request Demo
              </Button>
              <Button href="/blog" variant="secondary">
                View All Articles
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
