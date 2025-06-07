import React from "react";

const FAQ = () => {
  return (
    <section class="faq pb-120 pt-120 position-relative z-0">
      <div class="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="assets/images/button.png"
          alt="vector"
          class="position-absolute pt-6 pt-xl-15 previewShapeRevX d-none d-lg-flex"
        />
        <img
          src="assets/images/star30.png"
          alt="vector"
          class="position-absolute push_animat end-0 top-0  mt-4 me-xl-20 pe-20 d-none d-xxl-flex"
        />
        <img
          src="assets/images/vector21.png"
          alt="vector"
          class="position-absolute bottom-0 start-0 pb-11 ps-20 ms-10 d-none d-xxxl-flex "
        />
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-xxl-7">
            <div class="heading__content mb-10 mb-lg-15 text-center">
              <span class="heading fs-five p1-color mb-5">Faq's</span>
              <h3>Frequently Asked Question</h3>
            </div>
          </div>
        </div>
        <div class="row gy-10 justify-content-center align-items-center">
          <div class="col-md-12 col-lg-7 col-xxl-6">
            <div class="faq__part">
              <div class="accordion-section d-grid gap-6">
                <div class="accordion-single  cus-rounded-1 nb3-bg box-shadow py-3 py-md-4 px-4 px-md-5">
                  <h5 class="header-area">
                    <button
                      class="accordion-btn transition fw-semibold text-start d-flex position-relative w-100"
                      type="button"
                    >
                      What is decentralized voting?
                    </button>
                  </h5>
                  <div class="content-area">
                    <div class="content-body pt-5">
                      <p>
                        Decentralized voting uses blockchain technology to ensure transparency, security, and fairness in the electoral process. It removes the need for central authorities and allows every vote to be verifiable and tamper-proof.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-single cus-rounded-1 nb3-bg box-shadow py-3 py-md-4 px-4 px-md-5">
                  <h5 class="header-area">
                    <button
                      class="accordion-btn transition fw-semibold text-start d-flex position-relative w-100"
                      type="button"
                    >
                      How can I get started with voting?
                    </button>
                  </h5>
                  <div class="content-area">
                    <div class="content-body pt-5">
                      <p>
                        Simply register as a voter through our secure portal. Once verified, you'll be able to participate in upcoming elections and make your voice count.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-single cus-rounded-1 nb3-bg box-shadow py-3 py-md-4 px-4 px-md-5">
                  <h5 class="header-area">
                    <button
                      class="accordion-btn transition fw-semibold text-start d-flex position-relative w-100"
                      type="button"
                    >
                      How can I stay informed about elections and updates?
                    </button>
                  </h5>
                  <div class="content-area">
                    <div class="content-body pt-5">
                      <p>
                        You can subscribe to our notifications or follow the "Voter Resources" section for real-time updates, civic news, and information about upcoming elections and public initiatives.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-single cus-rounded-1 nb3-bg box-shadow py-3 py-md-4 px-4 px-md-5">
                  <h5 class="header-area">
                    <button
                      class="accordion-btn transition fw-semibold text-start d-flex position-relative w-100"
                      type="button"
                    >
                      What are the different types of elections available?
                    </button>
                  </h5>
                  <div class="content-area">
                    <div class="content-body pt-5">
                      <p>
                        Our platform supports a range of elections — from local community voting to national leadership selection. Each process is tailored for accessibility and transparency.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-single cus-rounded-1 nb3-bg box-shadow py-3 py-md-4 px-4 px-md-5">
                  <h5 class="header-area">
                    <button
                      class="accordion-btn transition fw-semibold text-start d-flex position-relative w-100"
                      type="button"
                    >
                      Is digital voting secure for everyone?
                    </button>
                  </h5>
                  <div class="content-area">
                    <div class="content-body pt-5">
                      <p>
                        Yes, our system is designed with end-to-end encryption and blockchain integrity. It ensures every vote is counted and no vote can be altered or deleted.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-single cus-rounded-1 nb3-bg box-shadow py-3 py-md-4 px-4 px-md-5">
                  <h5 class="header-area">
                    <button
                      class="accordion-btn transition fw-semibold text-start d-flex position-relative w-100"
                      type="button"
                    >
                      What is blockchain and how does it relate to voting?
                    </button>
                  </h5>
                  <div class="content-area">
                    <div class="content-body pt-5">
                      <p>
                        Blockchain is a decentralized digital ledger. In voting, it secures the process by recording each vote in a way that is transparent, irreversible, and publicly verifiable.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-single cus-rounded-1 nb3-bg box-shadow py-3 py-md-4 px-4 px-md-5">
                  <h5 class="header-area">
                    <button
                      class="accordion-btn transition fw-semibold text-start d-flex position-relative w-100"
                      type="button"
                    >
                      What are the challenges of traditional voting?
                    </button>
                  </h5>
                  <div class="content-area">
                    <div class="content-body pt-5">
                      <p>
                        Traditional voting can face issues like long queues, inaccessibility, or even manipulation. Our digital solution aims to overcome these by offering a safe, inclusive, and tamper-proof alternative.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-9 col-sm-8 col-lg-5 col-xxl-6">
            <div class="faq_thumbs d-flex justify-content-center justify-content-xl-end">
              <img src="assets/images/faq.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
