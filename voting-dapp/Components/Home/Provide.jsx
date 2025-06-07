import React from "react";

const Provide = () => {
  return (
    <section class="provide-world bg nb4-bg pt-120 pb-120  position-relative z-0">
      <div class="animation position-absolute top-0 left-0 w-100 h-100 z-n1 d-none d-md-flex">
        <img
          src="assets/images/button.png"
          alt="vector"
          class="position-absolute pt-6 pt-xl-15 previewShapeRevX"
        />
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-xxl-7">
            <div class="heading__content mb-10 mb-lg-15 text-center">
              <span class="heading p1-color fs-five mb-5">
                We Provide
              </span>
              <h3 class="mb-5 mb-lg-6">
                Join a growing community of empowered citizens
              </h3>
              <p class="fs-six-up mx-ch mx-auto">
                Experience the future of democracy with decentralized, blockchain-powered voting where every voice is secure, transparent, and truly counted.
              </p>
            </div>
          </div>
        </div>
        <div class="row gy-6 gy-xxl-0">
          <div class="col-md-6 col-xxl-4">
            <div class="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span class="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i class="ti ti-award-filled fs-three p1-color"></i>
              </span>
              <h4 class="mt-5 mb-5">Trusted by the People</h4>
              <p>
                Decentralized technology has transformed civic participation. Secure platforms and blockchain systems now make it easier than ever for citizens to vote anytime, anywhere — transparently and confidently.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-xxl-4">
            <div class="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span class="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i class="ti ti-users fs-three p1-color"></i>
              </span>
              <h4 class="mt-5 mb-5">A Growing Network of Active Citizens</h4>
              <p>
                One of the core principles of a strong democracy is participation. Responsible citizens engage thoughtfully, knowing their vote is a powerful tool for change.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-xxl-4">
            <div class="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span class="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i class="ti ti-shield-check-filled fs-three p1-color"></i>
              </span>
              <h4 class="mt-5 mb-5">Trusted & Secure</h4>
              <p>
                Voting isn't without its challenges — trust, transparency, and security are essential. With blockchain-powered decentralization, every vote is protected and every voice truly matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Provide;
