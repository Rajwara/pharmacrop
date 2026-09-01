import { redirect } from "next/navigation";
import { posts } from "../blog/posts";

export default function Page() {
  redirect(`/blog/${posts[0].slug}`);
}
