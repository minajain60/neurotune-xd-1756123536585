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
      // Log initialization message to the console for debugging purposes
      console.log("App controller initialized");

      // Get the router instance from the UIComponent
      var oRouter = UIComponent.getRouterFor(this);

      // Check if the router instance is available
      if (oRouter) {
        // Log that the router was found and is being initialized
        console.log("Router found, initializing navigation");

        // Attach an event handler to the bypassed event of the router
        oRouter.attachBypassed(function (oEvent) {
          // Log the bypassed route's hash value
          console.log("Route bypassed:", oEvent.getParameter("hash"));
        });

        // Check if the initial hash is empty or just a hash symbol
        if (!window.location.hash || window.location.hash === "#") {
          // Log that no hash was found and navigation to the main route is triggered
          console.log("No hash found, navigating to main route");

          // Use setTimeout to ensure the router is fully initialized before navigation
          setTimeout(function () {
            // Navigate to the 'main' route
            oRouter.navTo("main");
          }, 100); // Delay of 100 milliseconds
        }
      } else {
        // Log an error message if the router is not found
        console.error("Router not found in App controller");
      }
    }
  });
});
