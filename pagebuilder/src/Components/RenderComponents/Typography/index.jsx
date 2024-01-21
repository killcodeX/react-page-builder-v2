import React from "react";

export default function Typography({ data }) {
  switch (data.type) {
    case "":
      return <h2>{data.style.label}</h2>;
  }
}
