import { redirect } from "next/navigation";
import { fetchBlogPosts } from "../blog/wp-posts";

export default async function Page() {
  const posts = await fetchBlogPosts();
  redirect(posts.length ? `/blog/${posts[0].slug}` : "/blog");
}
