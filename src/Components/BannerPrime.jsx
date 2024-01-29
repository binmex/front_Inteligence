import React from "react";
import logo from '../Assets/logoCafe.svg'

export const BannerPrime = () => {
  return (
    <div className="div-banner">
      <div className="content-banner">
        <div className="banner-message">
          <h2>
            Now You Can{" "}
            <span className="banner-word">
              Create A Bedroom
            </span>{" "}
            Using IA
          </h2>
        </div>

        <div className="banner-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            fuga maxime sequi, facere eum magnam nemo voluptatibus explicabo
            earum minima? Voluptate est, dolores velit explicabo eaque quaerat
            rerum quia nostrum.
          </p>
        </div>
      </div>

      <div className="vector">
      <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};
