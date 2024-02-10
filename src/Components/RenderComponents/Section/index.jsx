import React from "react";
import PageResolver from "../../../Resolver/PageResolver";
import { cx, css } from "@emotion/css";

export default function Section({ data }) {
  let {
    setting: { style },
  } = data;

  return (
    <section
      className={cx("page-section", {
        [css`
          ${style}
        `]: !!style,
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
