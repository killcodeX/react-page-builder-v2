// function to find section and add layer into it

export let findSection = (page, id, layer) => {
    return page.map((section) => {
      //console.log('i am here ->>',section, id)
      if (section.id === id) {
        if(section.layers){
          section.layers.push(layer)
        }else{
          section.layers = [layer]
        }
      } else if (section.layers) {
        section.layers = findSection(section.layers, id, layer);
      }
      return section;
    });
  }