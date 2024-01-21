import React from "react";
import PageResolver from "../../../Resolver/PageResolver";
import { cx, css } from "@emotion/css";

export default function Section({ data }) {
  let { style } = data;
  let { extraStyle } = style;
  console.log(extraStyle);

  return (
    <section
      className={cx("page-section", {
        [css`
          ${extraStyle}
        `]: !!extraStyle,
      })}
    >
      {data.components &&
        data.components.length > 0 &&
        data.components.map((item) => {
          return <PageResolver key={item.id} component={item} />;
        })}
    </section>
  );
}
