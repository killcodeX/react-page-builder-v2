import {
    GetAllComponents,
    AddLayers,
    ActiveSection,
    AddSections,
    AddSetting,
    AddSectionSetting,
  } from "../Actions/constants";
  import { findSection } from "../../Utils/FindSection";
  import { findSettingSection } from "../../Utils/AddSetting";
  
  const initialState = {
    components: [],
    pageBuilder: [],
    preview: [],
    activeSection: null,
  };
  
  // Reducers
  const BuildReducer = (state = initialState, action) => {
    switch (action.type) {
      case GetAllComponents:
        return {
          ...state,
          components: action.payload,
        };
      case AddSections: // Add section into Page
        console.log("Add Section called -->", action.payload);
        return {
          ...state,
          pageBuilder: [...state.pageBuilder, action.payload],
        };
      case ActiveSection: // Save current active session
        console.log("Active Section called -->", action.payload);
        return {
          ...state,
          activeSection: action.payload,
        };
      case AddLayers: // Add layers/element into section
        let res = findSection(
          state.pageBuilder,
          state.activeSection,
          action.payload,
        );
        return {
          ...state,
          pageBuilder: res,
        };
      case AddSetting: // Add Saved Setting into preview object
        console.log("AddSetting called", action.payload);
        return {
          ...state,
        };
      case AddSectionSetting: // Add Saved Setting into preview object
        let result = findSettingSection(state.pageBuilder, action.payload);
        console.log("AddSetting called", result);
        return {
          ...state,
          pageBuilder: result,
        };
      default:
        console.log("default -->", state);
        return state;
    }
  };
  
  export default BuildReducer;
  