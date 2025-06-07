import React from "react";

const Vote = () => {
  return (
    <section class="trade_on a2-bg pt-120 pb-120 position-relative z-0">
      <div class="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="assets/images/coin.png"
          alt="vector"
          class="position-absolute d-none d-md-flex previewShapeRevX"
        />
        <img
          src="assets/images/star2.png"
          alt="vector"
          class="position-absolute d-none d-xl-flex push_animat"
        />
        <img
          src="assets/images/coin_vector.png"
          alt="vector"
          class="position-absolute d-none d-xxxl-flex bottom-0 end-0 previewShapeRevX opacity-50"
        />
      </div>
      <div class="container">
        <div class="row gy-10 gy-xxl-0 justify-content-center justify-content-xxl-between align-items-center">
          <div class="col-lg-6 col-xxl-5">
            <div class="trade_on__content">
              <span class="heading s1-color fs-five mb-5">Vote on Our</span>
              <h3 class="mb-4 mb-lg-5">Next-Generation Platform</h3>
              <p class="fs-six mx-ch">
                Participating in democratic processes involves thoughtful choices
                guided by knowledge and responsibility. From first-time voters to
                community leaders, every role plays a part in shaping a better future.
              </p>
              <ul class="d-flex gap-4 flex-column mt-6">
                <li class="d-flex align-items-center gap-3 fs-six-up">
                  <i class="ti ti-circle-check s1-color fs-four"></i>Civic
                  Participation Tools
                </li>
                <li class="d-flex align-items-center gap-3 fs-six-up">
                  <i class="ti ti-circle-check s1-color fs-four"></i>
                  Understanding Voting Processes{" "}
                </li>
                <li class="d-flex align-items-center gap-3 fs-six-up">
                  <i class="ti ti-circle-check s1-color fs-four"></i>Ensuring
                  Vote Integrity & Security{" "}
                </li>
                <li class="d-flex align-items-center gap-3 fs-six-up">
                  <i class="ti ti-circle-check s1-color fs-four"></i>Digital
                  vs. Traditional Voting Methods{" "}
                </li>
              </ul>
              <a
                href="signup.html"
                class="cmn-btn secondary-alt fs-six-up nb4-xxl-bg gap-2 gap-lg-3 align-items-center py-2 px-5 py-lg-3 px-lg-6 mt-7 mt-xxl-8"
              >
                Sign up Now <i class="ti ti-arrow-right fs-four"></i>
              </a>
            </div>
          </div>
          <div class="col-md-8 col-lg-6">
            <div class="trade_on__thumbs d-flex justify-content-end">
              <img src="assets/images/trade_on.png" alt="Imgae" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vote;
