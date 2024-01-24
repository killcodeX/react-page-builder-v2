import {
  AddSections,
  AddGridOrFlex,
  AddComponentToGridColumn,
  AddComponentToFlex,
  AddSettingToComponent,
} from "../Actions/constants";
import {
  findSection,
  findSettingSection,
  AddSettingToComponents,
  addComponentToGridColumn,
} from "../../Utils/Settings";

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
    case AddComponentToGridColumn:
      let page = addComponentToGridColumn(
        state.pageBuilder,
        action.payload.gridId,
        action.payload.columnId,
        action.payload.component
      );
      return {
        ...state,
        pageBuilder: page,
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
        ...state,
        pageBuilder: settingres,
      };
    default:
      return state;
  }
};

export default BuildReducer;
