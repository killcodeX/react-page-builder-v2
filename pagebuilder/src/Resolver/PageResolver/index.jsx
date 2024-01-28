import React from "react";
import {
  Section,
  Flex,
  Grid,
  Button,
  Typography,
} from "../../Components/RenderComponents";

export default function PageResolver({ component }) {
  switch (component.component) {
    case "section":
      return <Section data={component} />;
    case "grid":
      return <Grid data={component} />;
    case "flexwrapper":
      return <Flex data={component} />;
    case "button":
      return <Button data={component} />;
    case "typography":
      return <Typography data={component} />;
    default:
      return <span>Empty Component</span>;
  }
}
