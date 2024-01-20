// function to find section and add layer into it

export let findSection = (page, id, layer) => {
  return page.map((section) => {
    //console.log('i am here ->>',section, id)
    if (section.id === id) {
      if (section.components) {
        section.components.push(layer);
      } else {
        section.components = [layer];
      }
    } else if (section.components) {
      section.components = findSection(section.components, id, layer);
    }
    return section;
  });
};

// function to find section and add layer into it
export let findSettingSection = (page, obj) => {
  return page.map((section) => {
    if (section.id === obj.id) {
      //console.log('this is seetingggg -->', section)
      section.containerType = obj.containerType;
      section.layers.push({ ...obj.layer, icon: "" });
    } else if (section.layers) {
      section.layers = findSettingSection(section.layers);
    }
    return section;
  });
};

// function add setting to component
export let AddSettingToComponents = (page, id, style) => {
  return page.map((component) => {
    if (component.id === id) {
      if(!component["style"]){
        component["style"] = style
      }else{
        component["style"] = {...component["style"], ...style}
      } 
    } else if (component.components) {
      component.components = AddSettingToComponents(component.components, id, style);
    }
    return component;
  });
};
