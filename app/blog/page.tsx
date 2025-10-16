/**
 * Blog Listing Page
 *
 * Displays featured blog post and grid of all other posts.
 */

import FeaturedPost from '@/components/blog/FeaturedPost';
import BlogGrid from '@/components/blog/BlogGrid';
import { blogPosts } from '@/data/blog-posts';
import { getFeaturedPost } from '@/lib/helpers';

export const metadata = {
  title: 'Blog - Nexus Radiology AI Insights',
  description:
    'Expert insights on AI in radiology, clinical workflows, quality assurance, and regulatory compliance. Stay informed about the latest advances in medical imaging AI.',
};

export default function BlogPage() {
  const featuredPost = getFeaturedPost(blogPosts);
  const otherPosts = blogPosts.filter((post) => !post.featured);

  return (
    <>
      {featuredPost && <FeaturedPost post={featuredPost} />}
      <BlogGrid posts={otherPosts} title="All Articles" />
    </>
  );
}
