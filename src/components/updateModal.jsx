import React from "react";
import { ASSETS } from "../assets/path";
import CloseButton from "./closeButton";
const UpdateModal = () => {
  return (
    <div
      className="modal fade"
      id="newletter"
      tabIndex="-1"
      aria-labelledby="newletterLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content mx-3">
          <div className="modal-body d-flex align-items-center justify-content-center">
            <button
              type="button"
              className="btn-modal-close p-0 m-0"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <CloseButton />
            </button>
            <img
              src={ASSETS.OPEN.NEWSLETTER_BANNER}
              // "./images/newsletter-banner.png"
              className="bg-banner-img"
              alt=""
            />
            <div className="newsletterbox mx-auto">
              <p className="heading">Say hello to us</p>
              <p className="desc">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,
              </p>
              <div className="field-box d-flex align-items-end">
                <input
                  type="email"
                  className="input-field"
                  placeholder="youremail@email.com"
                />
                <button className="btn-subscribe">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
