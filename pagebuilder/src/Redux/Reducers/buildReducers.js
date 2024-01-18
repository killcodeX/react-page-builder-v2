import { AddSections, AddGridOrFlex, AddComponentToGrid } from "../Actions/constants";
import { findSection, findSettingSection } from "../../Utils/Settings";

const initialState = {
  pageBuilder: [],
  activeSection: null,
};

// Reducers
const BuildReducer = (state = initialState, action) => {
  switch (action.type) {
    case AddSections: // Add section into Page
      return {
        ...state,
        pageBuilder: [...state.pageBuilder, action.payload],
      };
    case AddGridOrFlex:
      let res = findSection(state.pageBuilder, action.payload.sectionId, action.payload.component)
      return {
        ...state,
        pageBuilder:res
      }
    case AddComponentToGrid:
      console.log(action.payload)
      return{
        ...state
      }
    default:
      return state;
  }
};

export default BuildReducer;

//   case AddSections: // Add section into Page
//   console.log("Add Section called -->", action.payload);
//   return {
//     ...state,
//     pageBuilder: [...state.pageBuilder, action.payload],
//   };
// case ActiveSection: // Save current active session
//   console.log("Active Section called -->", action.payload);
//   return {
//     ...state,
//     activeSection: action.payload,
//   };
// case AddLayers: // Add layers/element into section
//   let res = findSection(
//     state.pageBuilder,
//     state.activeSection,
//     action.payload,
//   );
//   return {
//     ...state,
//     pageBuilder: res,
//   };
// case AddSetting: // Add Saved Setting into preview object
//   console.log("AddSetting called", action.payload);
//   return {
//     ...state,
//   };
// case AddSectionSetting: // Add Saved Setting into preview object
//   let result = findSettingSection(state.pageBuilder, action.payload);
//   console.log("AddSetting called", result);
//   return {
//     ...state,
//     pageBuilder: result,
//   };
