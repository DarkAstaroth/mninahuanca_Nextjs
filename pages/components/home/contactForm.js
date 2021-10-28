import React from "react";

const ContactForm = () => {
  return (
    <>
      <section className="wrapper bg-light">
        <div className="container py-10 py-md-10">
          <div className="card bg-soft-primary">
            <div className="card-body p-10">
              <div className="row gx-md-8 gx-xl-12 gy-10">
                <div className="col-lg-6">
                  {/* <img
                    src="./assets/img/icons/email.svg"
                    className="svg-inject icon-svg icon-svg-sm mb-4"
                    alt=""
                  /> */}
                  <h2 className="display-4 mb-3 pe-lg-10">
                    If you like what you see, let's work together.
                  </h2>
                  <p className="lead pe-lg-12 mb-0">
                    I bring rapid solutions to make the life of my clients
                    easier. Have any questions? Reach out to me from this
                    contact form and I will get back to you shortly.
                  </p>
                </div>

                <div className="col-lg-6">
                  <form className="contact-form needs-validation">
                    <div className="messages"></div>
                    <div className="row gx-4">
                      <div className="col-md-6">
                        <div className="form-floating mb-4">
                          <input
                            id="frm_name"
                            type="text"
                            name="name"
                            className="form-control border-0"
                            placeholder="Jane"
                            required="required"

                          />
                          <label htmlFor="frm_name">Name *</label>
                          <div className="invalid-feedback">
                            Please enter your name.
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-floating mb-4">
                          <input
                            id="frm_email"
                            type="email"
                            name="email"
                            className="form-control border-0"
                            placeholder="jane.doe@example.com"
                            required="required"

                          />
                          <label htmlFor="frm_email">Email *</label>
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please provide a valid email address.
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating mb-4">
                          <textarea
                            id="frm_message"
                            name="message"
                            className="form-control border-0"
                            placeholder="Your message"
                            style={{ height: 150 }}
                          ></textarea>
                          <label htmlFor="frm_message">Message *</label>
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please enter your messsage.
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <input
                          type="submit"
                          className="btn btn-outline-primary rounded-pill btn-send mb-3"
                          value="Send message"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
