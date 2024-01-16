import {
    AddLayers,
    ActiveSection,
    AddSections,
    AddSetting,
    AddSectionSetting,
  } from "../Actions/constants";
  
  
  export const addSection = (section) => {
    return {
      type: AddSections,
      payload: section,
    };
  };
  
  export const addSectionSetting = (obj) => {
    return {
      type: AddSectionSetting,
      payload: obj,
    };
  };
  
  export const activeSection = (id) => {
    return {
      type: ActiveSection,
      payload: id,
    };
  };
  
  export const addLayers = (layer) => {
    return {
      type: AddLayers,
      payload: layer,
    };
  };
  
  export const addSetting = (setting) => {
    return {
      type: AddSetting,
      payload: setting,
    };
  };
  