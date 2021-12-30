import React from "react";

const SkillProgress = () => {
  return (
    <>
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6">
            <div class="col-md-5 offset-md-1 align-self-end">
              <div className="card bg-pale-yellow">
                <div className="card-body">
                  <img
                    src="img/icons/telephone-3.svg"
                    className="svg-inject icon-svg icon-svg-md text-yellow mb-3"
                    alt=""
                  />
                  <h4>24/7 Support</h4>
                  <p className="mb-0">
                    Nulla vitae elit libero, a pharetra augue. Donec id elit non
                    mi porta.
                  </p>
                </div>
              </div>
              </div>
            </div>

            <div className="col-lg-6">
              <h3 className="display-4 mb-6 pe-xxl-6">
                Knowledge of Frontend Technologies
              </h3>
              <ul className="progress-list mt-3">
                <li>
                  <p>HTML</p>
                  <div className="progressbar line navy" data-value="80"></div>
                </li>
                <li>
                  <p>CSS 3</p>
                  <div className="progressbar line aqua" data-value="75"></div>
                </li>
                <li>
                  <p>Sass</p>
                  <div className="progressbar line pink" data-value="70"></div>
                </li>
                <li>
                  <p>Bootstrap</p>
                  <div
                    className="progressbar line violet"
                    data-value="80"
                  ></div>
                </li>
                <li>
                  <p>React</p>
                  <div className="progressbar line blue" data-value="90"></div>
                </li>
                <li>
                  <p>Gatsby</p>
                  <div
                    className="progressbar line yellow"
                    data-value="60"
                  ></div>
                </li>
                <li>
                  <p>Nextjs</p>
                  <div
                    className="progressbar line orange"
                    data-value="85"
                  ></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillProgress;
