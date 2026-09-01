import { notFound } from "next/navigation";
import { headerHtml, footerHtml } from "../chrome";
import { posts, getPostBySlug, getCategories, getTags, getRecentPosts, getRelatedPosts } from "../posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "PharmaCrop - Bring Balance To Your Life" };
  }
  return {
    title: `${post.title} - PharmaCrop`,
    description: post.excerpt,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const categories = getCategories();
  const tags = getTags();
  const recentPosts = getRecentPosts(post.slug, 3);
  const relatedPosts = getRelatedPosts(post, 2);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: headerHtml }} />

      <section className="cs_page_heading cs_style_1 cs_bg_filed cs_heading_bg" data-src="/assets/img/about_heading_bg.jpg">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="/blog">Blog</a></li>
            <li className="breadcrumb-item active">{post.title}</li>
          </ol>
          <h1 className="cs_page_title mb-0 cs_fs_80 wow fadeInUp">{post.title}</h1>
        </div>
      </section>

      <section>
        <div className="cs_height_100 cs_height_lg_70" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="cs_post cs_style_1 cs_type_1">
                <div className="cs_post_thumb cs_radius_15">
                  <img src={post.image} alt={post.title} className="w-100 cs_radius_15" />
                </div>
                <div className="cs_post_info">
                  <div className="cs_post_meta cs_style_1 cs_ternary_color cs_semi_bold cs_primary_font">
                    <span className="cs_posted_by">{post.date}</span>
                    <a href={`/blog?category=${encodeURIComponent(post.category)}`} className="cs_post_avatar">
                      {post.category}
                    </a>
                  </div>
                  <h2 className="cs_post_title">{post.title}</h2>
                  {post.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                  <div className="cs_height_20 cs_height_lg_20" />
                  <div className="tagcloud">
                    {post.tags.map((tag) => (
                      <a href={`/blog?tag=${encodeURIComponent(tag)}`} className="tag-cloud-link" key={tag}>
                        {tag}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {relatedPosts.length > 0 && (
                <>
                  <div className="cs_height_60 cs_height_lg_40" />
                  <h2 className="cs_fs_32 mb-0">Related Posts</h2>
                  <div className="cs_height_30 cs_height_lg_30" />
                  <div className="row cs_gap_y_30">
                    {relatedPosts.map((rp) => (
                      <div className="col-md-6" key={rp.slug}>
                        <div className="cs_post cs_style_1">
                          <a href={`/blog/${rp.slug}`} className="cs_post_thumb cs_radius_15">
                            <img src={rp.image} alt={rp.title} className="w-100 cs_radius_15" />
                          </a>
                          <div className="cs_post_info">
                            <div className="cs_post_meta cs_style_1">
                              <span className="cs_posted_by">{rp.date}</span>
                              <a href={`/blog?category=${encodeURIComponent(rp.category)}`} className="cs_post_avatar">
                                {rp.category}
                              </a>
                            </div>
                            <h2 className="cs_post_title cs_fs_24">
                              <a href={`/blog/${rp.slug}`}>{rp.title}</a>
                            </h2>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <div className="cs_height_60 cs_height_lg_40" />
              <h2 className="cs_fs_32 mb-0">Leave A Reply</h2>
              <div className="cs_height_5 cs_height_lg_5" />
              <p className="mb-0">
                Your email address will not be published. Required fields are marked *
              </p>
              <div className="cs_height_40 cs_height_lg_30" />
              <form action="#" className="row">
                <div className="col-lg-6">
                  <label>Full Name*</label>
                  <input type="text" className="cs_form_field" />
                  <div className="cs_height_20 cs_height_lg_20" />
                </div>
                <div className="col-lg-6">
                  <label>Email*</label>
                  <input type="text" className="cs_form_field" />
                  <div className="cs_height_20 cs_height_lg_20" />
                </div>
                <div className="col-lg-12">
                  <label>Write Your Comment*</label>
                  <textarea cols="30" rows="7" className="cs_form_field"></textarea>
                  <div className="cs_height_25 cs_height_lg_25" />
                </div>
                <div className="col-lg-12">
                  <button className="cs_btn cs_style_1 cs_bold cs_heading_bg cs_white_color" type="submit">
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
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
                    {recentPosts.map((rp) => (
                      <li key={rp.slug}>
                        <div className="cs_recent_post">
                          <a href={`/blog/${rp.slug}`} className="cs_recent_post_thumb">
                            <div className="cs_recent_post_thumb_in cs_bg_filed" data-src={rp.image} />
                          </a>
                          <div className="cs_recent_post_info">
                            <h3 className="cs_recent_post_title">
                              <a href={`/blog/${rp.slug}`}>{rp.title}</a>
                            </h3>
                            <div className="cs_recent_post_date cs_primary_40_color">{rp.date}</div>
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

      <section className="cs_half_bg">
        <div className="container">
          <div className="cs_card cs_style_1 cs_heading_bg cs_bg_filed" data-src="/assets/img/card_bg.jpg">
            <div className="cs_card_top">
              <div className="cs_card_tags">
                <a href="/" className="cs_card_tag">Home</a>
                <a href="/industry" className="cs_card_tag">Industry</a>
                <a href="#" className="cs_card_tag">GMP-Certified</a>
                <a href="#" className="cs_card_tag">Australian-Grown</a>
              </div>
            </div>
            <div className="cs_card_bottom">
              <h2 className="cs_card_title cs_gradient_color_1 cs_fs_80 mb-0">WANT TO KNOW <br />MORE ABOUT US?</h2>
            </div>
            <a href="/contact" className="cs_arrow_btn cs_size_lg cs_center cs_white_bg cs_heading_color">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <div dangerouslySetInnerHTML={{ __html: footerHtml }} />
    </>
  );
}
