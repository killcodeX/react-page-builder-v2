import { Routes, Route } from "react-router-dom";
import PageBuilder from "./Modules/PageBuilder";
import Preview from "./Modules/Preview";
import JSONGenerator from "./Modules/JsonGenerator";

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<PageBuilder/>} />
        <Route path="/preview" element={<Preview/>} />
        <Route path="/json-generator" element={<JSONGenerator/>} />
      </Routes>
  )
}

export default Router;