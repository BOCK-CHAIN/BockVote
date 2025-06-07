import React from "react";

const Blog = () => {
  return (
    <section class="blog_news pt-120 pb-120 position-relative z-0">
      <div class="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="assets/images/star.png"
          alt="vector"
          class="position-absolute"
        />
        <img
          src="assets/images/vector2.png"
          alt="vector"
          class="position-absolute bottom-0 start-0"
        />
        <img
          src="assets/images/sun.png"
          alt="vector"
          class="position-absolute"
        />
      </div>
      <div class="container">
        <div class="row gy-6">
          {/* Blog content removed */}
        </div>
      </div>
    </section>
  );
};

export default Blog;
