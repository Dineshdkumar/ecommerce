// @ts-ignore

import React from "react";

// @ts-ignore
import { Helmet } from "react-helmet";
import { MetaProps } from "../Type/MetaProps";

const Meta: React.FC<MetaProps> = ({ title }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
    </>
  );
};

export default Meta;
