import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const Offerings = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => {
      let featuredImgFluid = item.image.childImageSharp.fluid;
      return (
        <div
          key={featuredImgFluid.src}
          className="column is-6"
          style={{ borderRadius: "5px" }}
        >
          <section className="section">
            <div className="has-text-centered">
              <Img fluid={featuredImgFluid} />
            </div>
            <h4>{item.feature}</h4>
            <p>{item.text}</p>
          </section>
        </div>
      );
    })}
  </div>
);

Offerings.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object,
      text: PropTypes.string,
      feature: PropTypes.string,
    })
  ),
};

export default Offerings;
