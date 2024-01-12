// function to find section and add layer into it

export let findSettingSection = (page, obj) => {
    return page.map((section) => {
      if (section.id === obj.id) {
          //console.log('this is seetingggg -->', section)
          section.containerType = obj.containerType
          section.layers.push(obj.layer)
      } else if (section.layers) {
        section.layers = findSettingSection(section.layers);
      }
      return section;
    });
  }