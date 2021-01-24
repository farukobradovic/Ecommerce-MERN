import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To Eccomerce",
  description: "We sell best products",
  keywords: "eletronics, buy eletronics, cheap eletronics",
};

export default Meta;
