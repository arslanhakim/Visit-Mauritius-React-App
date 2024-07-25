import React from "react";
import "../css/main.css";

const SocialLinks = () => {
  return (
    <div>
      <aside id="aside">
        <div className="aside-box">
          <div className="rotation-wrapper-outer">
            <div className="rotation-wrapper-inner">
              <ul
                className="element-to-rotate social-list d-flex align-items-center justify-content-center"
                role="list"
              >
                <li className="social-item">
                  <a href="#" className="social-link">
                    Facebook
                  </a>
                </li>
                <li className="social-item">
                  <a href="#" className="social-link">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SocialLinks;
