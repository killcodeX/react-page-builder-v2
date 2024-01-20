import {
  AddSections,
  AddGridOrFlex,
  AddComponentToGrid,
  AddComponentToFlex,
  AddSettingToComponent,
} from "../Actions/constants";
import { findSection, findSettingSection, AddSettingToComponents } from "../../Utils/Settings";

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
      let res = findSection(
        state.pageBuilder,
        action.payload.sectionId,
        action.payload.component
      );
      return {
        ...state,
        pageBuilder: res,
      };
    case AddComponentToGrid:
      return {
        ...state,
      };
    case AddComponentToFlex:
      let flexres = findSection(
        state.pageBuilder,
        action.payload.flexId,
        action.payload.component
      );
      return {
        ...state,
        pageBuilder: flexres,
      };
    case AddSettingToComponent:
      let settingres = AddSettingToComponents(
        state.pageBuilder,
        action.payload.id,
        action.payload.setting
      );
      return {
        ...state
      };
    default:
      return state;
  }
};

export default BuildReducer;
