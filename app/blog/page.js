import { headerHtml, footerHtml } from "./chrome";
import { posts, getCategories, getTags, getRecentPosts } from "./posts";

export const metadata = {
  title: "PharmaCrop - Bring Balance To Your Life",
};

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const activeCategory = params?.category || "";
  const activeTag = params?.tag || "";

  const filteredPosts = posts.filter((p) => {
    if (activeCategory && p.category !== activeCategory) return false;
    if (activeTag && !p.tags.includes(activeTag)) return false;
    return true;
  });

  const categories = getCategories();
  const tags = getTags();
  const recentPosts = getRecentPosts(null, 3);

  const heading = activeCategory
    ? `Category: ${activeCategory}`
    : activeTag
    ? `Tag: ${activeTag}`
    : "Latest Post";

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: headerHtml }} />

      <section className="cs_page_heading cs_style_1 cs_bg_filed cs_heading_bg" data-src="/assets/img/about_heading_bg.jpg">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active">Blog</li>
          </ol>
          <h1 className="cs_page_title mb-0 cs_fs_80 wow fadeInUp">{heading}</h1>
        </div>
      </section>

      <section>
        <div className="cs_height_100 cs_height_lg_70" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {(activeCategory || activeTag) && (
                <div className="cs_mb_30">
                  <a href="/blog" className="cs_btn cs_style_2 cs_bold cs_heading_color">
                    &larr; Back to all posts
                  </a>
                </div>
              )}
              <div className="cs_post_1_list">
                {filteredPosts.length === 0 && (
                  <p className="cs_fs_20">No posts found.</p>
                )}
                {filteredPosts.map((post) => (
                  <div className="cs_post cs_style_1" key={post.slug}>
                    <a href={`/blog/${post.slug}`} className="cs_post_thumb cs_radius_15">
                      <img src={post.image} alt={post.title} className="w-100 cs_radius_15" />
                    </a>
                    <div className="cs_post_info">
                      <div className="cs_post_meta cs_style_1">
                        <span className="cs_posted_by">{post.date}</span>
                        <a href={`/blog?category=${encodeURIComponent(post.category)}`} className="cs_post_avatar">
                          {post.category}
                        </a>
                      </div>
                      <h2 className="cs_post_title cs_fs_40">
                        <a href={`/blog/${post.slug}`}>{post.title}</a>
                      </h2>
                      <div className="cs_post_sub_title">{post.excerpt}</div>
                      <a href={`/blog/${post.slug}`} className="cs_btn cs_style_2 cs_bold cs_heading_color">
                        See More
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_sidebar cs_right_sidebar">
                <div className="cs_sidebar_item widget_search">
                  <form className="cs_sidebar_search" action="#">
                    <input type="text" placeholder="Search..." />
                    <button className="cs_sidebar_search_btn" type="submit">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4351 10.0629H10.7124L10.4563 9.81589C11.3528 8.77301 11.8925 7.4191 11.8925 5.94625C11.8925 2.66209 9.23042 0 5.94625 0C2.66209 0 0 2.66209 0 5.94625C0 9.23042 2.66209 11.8925 5.94625 11.8925C7.4191 11.8925 8.77301 11.3528 9.81589 10.4563L10.0629 10.7124V11.4351L14.6369 16L16 14.6369L11.4351 10.0629ZM5.94625 10.0629C3.66838 10.0629 1.82962 8.22413 1.82962 5.94625C1.82962 3.66838 3.66838 1.82962 5.94625 1.82962C8.22413 1.82962 10.0629 3.66838 10.0629 5.94625C10.0629 8.22413 8.22413 10.0629 5.94625 10.0629Z" fill="currentColor" />
                      </svg>
                    </button>
                  </form>
                </div>
                <div className="cs_sidebar_item widget_categories">
                  <h4 className="cs_sidebar_widget_title">Categories</h4>
                  <ul>
                    {categories.map((cat) => (
                      <li className="cat-item" key={cat.name}>
                        <a href={`/blog?category=${encodeURIComponent(cat.name)}`}>
                          <i className="fa-solid fa-link"></i>
                          {cat.name} ({cat.count})
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="cs_sidebar_item">
                  <h4 className="cs_sidebar_widget_title">Recent Posts</h4>
                  <ul className="cs_recent_posts">
                    {recentPosts.map((post) => (
                      <li key={post.slug}>
                        <div className="cs_recent_post">
                          <a href={`/blog/${post.slug}`} className="cs_recent_post_thumb">
                            <div className="cs_recent_post_thumb_in cs_bg_filed" data-src={post.image} />
                          </a>
                          <div className="cs_recent_post_info">
                            <h3 className="cs_recent_post_title">
                              <a href={`/blog/${post.slug}`}>{post.title}</a>
                            </h3>
                            <div className="cs_recent_post_date cs_primary_40_color">{post.date}</div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="cs_sidebar_item widget_tag_cloud">
                  <h4 className="cs_sidebar_widget_title">Tags</h4>
                  <div className="tagcloud">
                    {tags.map((tag) => (
                      <a href={`/blog?tag=${encodeURIComponent(tag)}`} className="tag-cloud-link" key={tag}>
                        {tag}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_70" />
      </section>

      <div dangerouslySetInnerHTML={{ __html: footerHtml }} />
    </>
  );
}
