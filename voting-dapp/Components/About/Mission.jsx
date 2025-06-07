import React from "react";

const Mission = () => {
  return (
    <section class="provide-world our_mission pt-120 pb-120 position-relative z-0">
      <div class="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="assets/images/vector7.png"
          alt="vector"
          class="position-absolute bottom-0 pt-6 pt-xl-15 d-none d-lg-flex push_animat"
        />
      </div>
      <div class="container">
        <div class="row justify-content-between align-items-center mb-10 mb-lg-15">
          <div class="col-xl-5">
            <span class="heading s1-color fs-five mb-5">Our Mission</span>
            <h3>Empowering Democracy — How We're Making a Difference</h3>
          </div>
          <div class="col-xl-4">
            <p class="fs-six-up mx-ch text-xl-end mt-3 mt-xl-0">
              We believe democracy belongs to everyone. With the right tools and transparent systems, every person can play a role in shaping their future.
            </p>
          </div>
        </div>
        <div class="row gy-6 gy-xxl-0">
          <div class="col-md-6 col-xxl-4">
            <div class="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span class="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i class="ti ti-currency-dollar-brunei  fs-three p1-color"></i>
              </span>
              <h4 class="mt-5 mb-5">People-First Approach</h4>
              <p>
                We've transformed the way citizens vote. Our digital platform makes it easy, accessible, and secure — anytime, anywhere.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-xxl-4">
            <div class="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span class="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i class="ti ti-brand-cakephp fs-three p1-color"></i>
              </span>
              <h4 class="mt-5 mb-5">Integrity and Trust</h4>
              <p>
                Transparency and accountability are at the heart of what we do. Every vote is protected, every process is fair.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-xxl-4">
            <div class="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span class="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i class="ti ti-broadcast fs-three p1-color"></i>
              </span>
              <h4 class="mt-5 mb-5">Secure & Seamless Experience</h4>
              <p>
                Voting may have challenges — but with a trusted system, citizens can engage confidently and without barriers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
