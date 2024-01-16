import React from "react";

export function Layers(layer) {
  switch (layer.component) {
    case "section":
      return (
        <div className="page-builder-component-card" key={layer.id}>
          <div className="page-builder-component-label">Section</div>
          {/* <IconButton onClick={() => setDrawer(true)}>
            <CiEdit />
          </IconButton> */}
          {/* <Drawer anchor="right" open={drawer} onClose={() => setDrawer(false)}>
            <Section
              drawer={drawer}
              setDrawer={setDrawer}
              id={layer.id}
              setOpenSnackbar={setOpenSnackbar}
              setMessage={setMessage}
              setSnackbarType={setSnackbarType}
            />
          </Drawer> */}
        </div>
      );
  }
}
