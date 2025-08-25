sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
  "use strict";

  return Controller.extend("converted.purchaseorderdetailsview.controller.App", {
    /**
     * Called when a view is instantiated and its controls (if available) are already created.
     * Used to generally initialize the view and attach event handlers.
     * @public
     */
    onInit: function () {
      // Log initialization message
      console.log("App controller initialized");

      // Get the router instance
      var oRouter = UIComponent.getRouterFor(this);

      // Check if router is available
      if (oRouter) {
        console.log("Router found, initializing navigation");

        // Attach event handler for bypassed routes
        oRouter.attachBypassed(function (oEvent) {
          console.log("Route bypassed:", oEvent.getParameter("hash"));
        });

        // Check if initial hash is empty, navigate to the main route if needed
        if (!window.location.hash || window.location.hash === "#") {
          console.log("No hash found, navigating to main route");
          // Use timeout to ensure router is fully initialized
          setTimeout(function () {
            oRouter.navTo("main");
          }, 100);
        }
      } else {
        // Log an error if the router is not found
        console.error("Router not found in App controller");
      }
    }
  });
});
