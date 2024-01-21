import React from "react";
import PageResolver from "../../../Resolver/PageResolver";

export default function Flex({ data }) {
  let {
    setting: { style },
  } = data;

  console.log(data);
  return (
    <div className="page-flex-wrapper" style={style}>
      {data.components &&
        data.components.length > 0 &&
        data.components.map((item) => {
          return <PageResolver key={item.id} component={item} />;
        })}
    </div>
  );
}
