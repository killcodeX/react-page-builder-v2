import {
  AddSections,
  AddGridOrFlex,
  AddColumnToGrid,
  AddComponentToGridColumn,
  AddComponentToFlex,
  AddSettingToComponent,
} from "../Actions/constants";

export const addSection = (section) => {
  return {
    type: AddSections,
    payload: section,
  };
};

export const addGridorFlex = (sectionId, component) => {
  return {
    type: AddGridOrFlex,
    payload: { sectionId, component },
  };
};

export const addColumnToGrid = (gridId, columns) => {
  return {
    type: AddColumnToGrid,
    payload: { gridId, columns },
  };
};

export const addComponentToGridColumn = (gridId, columnId, component) => {
  return {
    type: AddComponentToGridColumn,
    payload: { gridId, columnId, component },
  };
};

export const addComponentToFlex = (flexId, component) => {
  return {
    type: AddComponentToFlex,
    payload: { flexId, component },
  };
};

export const addSettingToComponent = (id, setting) => {
  return {
    type: AddSettingToComponent,
    payload: { id, setting },
  };
};
