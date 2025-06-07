import React from "react";

const Company = () => {
  return (
    <section class="company-story position-relative z-0  pt-120 pb-120 ">
      <div class="animation position-absolute w-100 h-100 z-n1">
        <img
          src="assets/images/star3.png"
          alt="vector"
          class="position-absolute top-0 end-0 pt-10 pe-20 me-20 d-none d-xxl-flex previewSkew"
        />
      </div>
      <div class="container">
        <div class="row gy-15 gy-lg-0 justify-content-center align-items-center">
          <div class="col-sm-10 col-lg-6 col-xxl-5 order-2 order-lg-0">
            <div class="company-story__thumbs d-center">
              <img
                src="assets/images/company_story.png"
                class="cus-rounded-1 w-100"
                alt="Imgae"
              />
              <a
                href="https://www.youtube.com/watch?v=BHACKCNDMW8"
                class="popup-video btn-popup-animation position-absolute d-center rounded-circle"
              >
                <i class="fa-solid fa-play fs-four"></i>
              </a>
            </div>
          </div>
          <div class="col-lg-6 col-xxl-7">
            <div class="row ms-xl-3 ms-xxl-10">
              <div class="col-xxl-6">
                <div class="company-story__part">
                  <span class="heading p1-color fs-five">
                    Our Civic Journey
                  </span>
                  <h3 class="mb-3 mt-5">What We Do</h3>
                  <p>
                    We're building a future where every citizen can make their voice heard. Our secure, decentralized voting platform empowers communities to choose their leaders transparently and fairly.
                  </p>
                </div>
              </div>
              <div class="col-xxl-12 mt-8 mt-md-10 mt-xxl-13">
                <div class="company-story__part d-flex align-items-sm-center flex-column flex-sm-row">
                  <div class="btn-area mt-8 mt-sm-0 me-2 me-sm-6 me-xxl-10 order-2 order-sm-0">
                    <a
                      href="signup.html"
                      class="cmn-btn cmn-btn-circle d-center flex-column fw_500"
                    >
                      <i class="ti ti-arrow-up-right fs-three"></i>
                      Get Involved
                    </a>
                  </div>
                  <div class="content">
                    <h3 class="mb-3">Who We Are</h3>
                    <p>
                      We are citizens, technologists, and community builders committed to strengthening democracy. From first-time voters to civic leaders, we're here to support informed, inclusive participation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
