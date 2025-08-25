sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/m/MessageBox",
  "sap/m/MessagePopover",
  "sap/m/MessageItem",
  "sap/ui/core/library",
  "sap/ui/core/UIComponent",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
  "sap/ui/model/Sorter",
  "sap/ui/core/util/Export",
  "sap/ui/core/util/ExportTypeCSV"
], function (Controller, JSONModel, MessageToast, MessageBox, MessagePopover, MessageItem, coreLibrary, UIComponent, Filter, FilterOperator, Sorter, Export, ExportTypeCSV) {
  "use strict";

  // Shortcut for sap.ui.core.MessageType
  var MessageType = coreLibrary.MessageType;

  return Controller.extend("converted.purchaseorderdetailsview.controller.PurchaseOrderDetailsView", {
    /**
     * Called when a view is instantiated and its controls (if available) are already created.
     * Used to generally initialize the view and attach event handlers.
     * @public
     */
    onInit: function () {
      // Load mock data
      this.loadMockData();

      // Initialize message model for MessageArea/MessagePopover
      var oMessageModel = new JSONModel({
        messages: [{
          type: MessageType.Success,
          title: "System Information",
          description: "Application converted successfully, Use AI optimize for better result",
          subtitle: "Conversion complete",
          counter: 1
        }]
      });
      this.getView().setModel(oMessageModel, "messages");

      // Converted from WebDynpro: 2025-08-25T12:05:41.130Z
    },

    /**
     * Loads mock data from JSON files and sets the models for the view.
     * @private
     */
    loadMockData: function () {
      // Load header data from mock data
      var oHeaderModel = new JSONModel();
      oHeaderModel.loadData("model/mockData/header.json");
      this.getView().setModel(oHeaderModel, "header");

      // Load delivery invoice data from mock data
      var oDeliveryInvoiceModel = new JSONModel();
      oDeliveryInvoiceModel.loadData("model/mockData/deliveryInvoice.json");
      this.getView().setModel(oDeliveryInvoiceModel, "deliveryInvoice");

      // Load save options from mock data
      var oSaveOptionsModel = new JSONModel();
      oSaveOptionsModel.loadData("model/mockData/saveOptions.json");
      this.getView().setModel(oSaveOptionsModel, "saveOptions");

      // Load PO Types from mock data
      var oPoTypesModel = new JSONModel();
      oPoTypesModel.loadData("model/mockData/poTypes.json");
      this.getView().setModel(oPoTypesModel, "poTypes");
    },

    /**
     * Handle the back button press event. Navigates back to the previous view.
     * @public
     */
    onActionBack: function () {
      // Display a message toast
      MessageToast.show("Back button pressed");
    },

    /**
     * Handle the save button press event. Saves the current changes.
     * @public
     */
    onActionSave: function () {
      // Display a message toast
      MessageToast.show("Save button pressed");
    },

    /**
     * Handle the save option selection event. Saves the selected option.
     * @param {sap.ui.base.Event} oEvent The event object.
     * @public
     */
    onSelectSaveOption: function (oEvent) {
      // Get the selected key
      var sSelectedKey = oEvent.getParameter("selectedItem").getKey();

      // Display a message toast
      MessageToast.show("Selected save option: " + sSelectedKey);
    },

    /**
     * Handle the document overview button press event. Shows the document overview.
     * @public
     */
    onActionDocumentOverview: function () {
      // Display a message toast
      MessageToast.show("Document overview button pressed");
    },

    /**
     * Handle the document icon button press event. Displays the document.
     * @public
     */
    onActionDocumentIcon: function () {
      // Display a message toast
      MessageToast.show("Document icon button pressed");
    },

    /**
     * Handle the edit icon button press event. Enables editing mode.
     * @public
     */
    onActionEdit: function () {
      // Display a message toast
      MessageToast.show("Edit icon button pressed");
    },

    /**
     * Handle the export icon button press event. Exports the data.
     * @public
     */
    onActionExport: function () {
      // Display a message toast
      MessageToast.show("Export icon button pressed");
    },

    /**
     * Handle the print preview button press event. Shows the print preview.
     * @public
     */
    onActionPrintPreview: function () {
      // Display a message toast
      MessageToast.show("Print preview button pressed");
    },

    /**
     * Handle the messages button press event. Shows the messages.
     * @public
     */
    onActionMessages: function () {
      // Display a message toast
      MessageToast.show("Messages button pressed");
    },

    /**
     * Handle the info button press event. Shows the information.
     * @public
     */
    onActionInfo: function () {
      // Display a message toast
      MessageToast.show("Info button pressed");
    },

    /**
     * Handle the personal setting button press event. Shows the personal settings.
     * @public
     */
    onActionPersonalSetting: function () {
      // Display a message toast
      MessageToast.show("Personal setting button pressed");
    },

    /**
     * Handle the cancel button press event. Cancels the current operation.
     * @public
     */
    onActionCancel: function () {
      // Display a message toast
      MessageToast.show("Cancel button pressed");
    },

    /**
     * Handle the PO type selection event. Updates the PO type.
     * @param {sap.ui.base.Event} oEvent The event object.
     * @public
     */
    onSelectPoType: function (oEvent) {
      // Get the selected key
      var sSelectedKey = oEvent.getParameter("selectedItem").getKey();

      // Display a message toast
      MessageToast.show("Selected PO type: " + sSelectedKey);
    },

    /**
     * Handle the tab selection event. Updates the selected tab.
     * @param {sap.ui.base.Event} oEvent The event object.
     * @public
     */
    onSelectTab: function (oEvent) {
      // Get the selected tab key
      var sSelectedKey = oEvent.getParameter("key");

      // Display a message toast
      MessageToast.show("Selected tab: " + sSelectedKey);
    },

    /**
     * Handle the search payment terms event. Opens a value help dialog for payment terms.
     * @public
     */
    onActionSearchPaymentTerms: function () {
      // Display a message toast
      MessageToast.show("Search payment terms button pressed");
    },

    /**
     * Handle the exchange rate fixed toggle event. Updates the exchange rate fixed status.
     * @param {sap.ui.base.Event} oEvent The event object.
     * @public
     */
    onToggleExchangeRateFixed: function (oEvent) {
      // Get the checked status
      var bChecked = oEvent.getParameter("state");

      // Display a message toast
      MessageToast.show("Exchange rate fixed: " + bChecked);
    },

    /**
     * Handle the GR message toggle event. Updates the GR message status.
     * @param {sap.ui.base.Event} oEvent The event object.
     * @public
     */
    onToggleGRMessage: function (oEvent) {
      // Get the checked status
      var bChecked = oEvent.getParameter("state");

      // Display a message toast
      MessageToast.show("GR message: " + bChecked);
    },

    // Event handlers
    onBeforeRendering: function () {
      // Prepare data before rendering
    },

    onAfterRendering: function () {
      // Adjust UI after rendering
    },

    // Enhanced event handlers for special WebDynpro elements

    /**
     * Handle value help request (for ValueHelp / F4 elements)
     * @param {sap.ui.base.Event} oEvent The event object
     */
    handleValueHelp: function (oEvent) {
      var oSource = oEvent.getSource();

      // Create value help dialog if it doesn't exist
      if (!this._valueHelpDialog) {
        this._valueHelpDialog = new sap.m.SelectDialog({
          title: "Select Value",
          confirm: function (oEvent) {
            var oSelectedItem = oEvent.getParameter("selectedItem");
            if (oSelectedItem) {
              oSource.setValue(oSelectedItem.getTitle());
            }
          }
        });

        // Sample items - would be filled with actual data in a real app
        var oDialogModel = new JSONModel({
          items: [{
            title: "Item 1",
            description: "Description 1"
          }, {
            title: "Item 2",
            description: "Description 2"
          }, {
            title: "Item 3",
            description: "Description 3"
          }]
        });

        this._valueHelpDialog.setModel(oDialogModel);
        this._valueHelpDialog.bindAggregation("items", {
          path: "/items",
          template: new sap.m.StandardListItem({
            title: "{title}",
            description: "{description}"
          })
        });
      }

      // Open the dialog
      this._valueHelpDialog.open();
    },

    /**
     * Handle file download requests (for FileDownload elements)
     * @param {sap.ui.base.Event} oEvent The event object
     */
    onFileDownload: function (oEvent) {
      // In a real application, this would be connected to a backend service
      // For now, we'll show a message
      MessageToast.show("File download initiated");

      // Sample approach to download a file:
      // var sUrl = "/api/downloadFile?id=123";
      // var link = document.createElement("a");
      // link.href = sUrl;
      // link.download = "filename.pdf";
      // link.click();
    },

    /**
     * Open message popover (for MessageArea elements)
     * @param {sap.ui.base.Event} oEvent The event object
     */
    handleMessagePopoverPress: function (oEvent) {
      if (!this._messagePopover) {
        this._messagePopover = new MessagePopover({
          items: {
            path: "messages>/messages",
            template: new MessageItem({
              type: "{messages>type}",
              title: "{messages>title}",
              description: "{messages>description}",
              subtitle: "{messages>subtitle}",
              counter: "{messages>counter}"
            })
          }
        });

        this.getView().byId("messagePopoverBtn").addDependent(this._messagePopover);
      }

      this._messagePopover.toggle(oEvent.getSource());
    },

    /**
     * Handle navigation link press events
     * @param {sap.ui.base.Event} oEvent The event object
     */
    onNavigationLinkPress: function (oEvent) {
      var oSource = oEvent.getSource();
      var sHref = oSource.getHref();

      if (sHref) {
        // If href is set, let the default behavior handle it
        return;
      }

      // Otherwise, handle the navigation programmatically
      var sNavTarget = oSource.data("navTarget");
      if (sNavTarget) {
        MessageToast.show("Navigating to: " + sNavTarget);
        // In a real application, this would navigate to the appropriate view or application
        // using the router
      }
    },

    /**
     * Handle office control rendering
     * @param {sap.ui.base.Event} oEvent The event object
     */
    onOfficeControlRendered: function (oEvent) {
      // This would normally integrate with MS Office API or similar
      // In a converted application, this would be replaced by a more appropriate solution
      console.log("Office control container rendered");

      var oSource = oEvent.getSource();
      var sDomRef = oSource.getDomRef();
      if (sDomRef) {
        sDomRef.innerHTML = '<div class="sapUiMediumMargin">' +
          '<div class="sapUiMediumMarginBottom">' +
          '<span class="sapUiIcon sapUiIconMirrorInRTL" style="font-family:SAP-icons;color:#0854a0;font-size:2.5rem">&#xe0ef;</span>' +
          '</div>' +
          '<div class="sapMText">' +
          '<p>Office document integration would be configured here.</p>' +
          '<p>In SAPUI5, this typically uses OData services with MS Graph API integration.</p>' +
          '</div>' +
          '</div>';
      }
    },

    /**
     * Open dialog
     * This is a generic handler for WebDynpro dialog elements
     * @param {sap.ui.base.Event} oEvent The event object
     */
    openDialog: function (oEvent) {
      // Get the dialog ID from the source control
      var oSource = oEvent.getSource();
      var sDialogId = oSource.data("dialogId") || "confirmDialog";

      // Find the dialog in the view
      var oDialog = this.getView().byId(sDialogId);
      if (oDialog) {
        oDialog.open();
      } else {
        MessageToast.show("Dialog with ID '" + sDialogId + "' not found");
      }
    },

    /**
     * Close dialog
     * @param {sap.ui.base.Event} oEvent The event object
     */
    closeDialog: function (oEvent) {
      var oDialog = oEvent.getSource().getParent();
      oDialog.close();
    },

    /**
     * Handle dialog confirm button press
     * @param {sap.ui.base.Event} oEvent The event object
     */
    onDialogConfirm: function (oEvent) {
      // Handle dialog confirmation logic
      MessageToast.show("Dialog confirmed");
      this.closeDialog(oEvent);
    },

    /**
     * Handle dialog cancel button press
     * @param {sap.ui.base.Event} oEvent The event object
     */
    onDialogCancel: function (oEvent) {
      // Handle dialog cancellation
      this.closeDialog(oEvent);
    },

    /**
     * Navigate to SecondView
     * @param {sap.ui.base.Event} oEvent The event object
     */
    onNextPress: function (oEvent) {
      // Get the router instance
      var oRouter = UIComponent.getRouterFor(this);

      // Navigate to the 'second' route
      oRouter.navTo("second");
    },

    /**
     * Navigate back to main view
     * @param {sap.ui.base.Event} oEvent The event object
     */
    onBackPress: function (oEvent) {
      // Get the router instance
      var oRouter = UIComponent.getRouterFor(this);

      // Navigate to the 'main' route
      oRouter.navTo("main");
    },

    /**
     * Navigate to a specific route
     * @param {string} sRoute The route name to navigate to
     */
    navTo: function (sRoute) {
      var oRouter = UIComponent.getRouterFor(this);
      oRouter.navTo(sRoute);
    },
    /**
     * Exports the table data to a CSV file.
     * @public
     */
    onExportToCSV: function () {
      var oTable = this.byId("dataTable"); // Assuming the table has the ID "dataTable"
      if (!oTable) {
        MessageToast.show("Table with ID 'dataTable' not found.");
        return;
      }

      var oBinding = oTable.getBinding("items");
      if (!oBinding) {
        MessageToast.show("No data bound to the table.");
        return;
      }

      var aData = oBinding.getCurrentContexts().map(function (oContext) {
        return oContext.getObject();
      });

      if (!aData || aData.length === 0) {
        MessageToast.show("No data to export.");
        return;
      }

      var sCsvContent = this._convertToCSV(aData);
      var oBlob = new Blob([sCsvContent], {
        type: 'text/csv'
      });
      var sUrl = URL.createObjectURL(oBlob);
      var oLink = document.createElement('a');
      oLink.href = sUrl;
      oLink.download = 'data_export.csv';
      oLink.click();
      URL.revokeObjectURL(sUrl);
    },

    /**
     * Converts the given data array to CSV format.
     * @param {Array} aData The data to convert.
     * @returns {string} The CSV formatted string.
     * @private
     */
    _convertToCSV: function (aData) {
      if (!aData || aData.length === 0) {
        return '';
      }

      var aHeaders = Object.keys(aData[0]);
      var sCsv = aHeaders.join(',') + '\n';

      aData.forEach(function (row) {
        var aValues = aHeaders.map(function (header) {
          return '"' + (row[header] || '').toString().replace(/"/g, '""') + '"';
        });
        sCsv += aValues.join(',') + '\n';
      });

      return sCsv;
    },

    /**
     * Exports the table data to an Excel file.
     * @public
     */
    onExportToExcel: function () {
      var oTable = this.byId("dataTable"); // Assuming the table has the ID "dataTable"
      if (!oTable) {
        MessageToast.show("Table with ID 'dataTable' not found.");
        return;
      }

      var oExport = new Export({
        exportType: new ExportTypeCSV({
          fileExtension: 'xlsx',
          mimeType: 'application/vnd.ms-excel'
        }),
        models: oTable.getModel(),
        rows: {
          path: oTable.getBinding("items").getPath()
        },
        columns: this._getExportColumns()
      });

      oExport.saveFile("data_export").then(function () {
        MessageToast.show("Export completed successfully");
      });
    },

    /**
     * Defines the columns for the export.
     * @returns {Array} An array of column definitions.
     * @private
     */
    _getExportColumns: function () {
      return [{
        name: "Column 1",
        template: {
          content: "{column1}"
        }
      }, {
        name: "Column 2",
        template: {
          content: "{column2}"
        }
      }];
    },
    /**
     * Filters the table items based on the search query.
     * @param {sap.ui.base.Event} oEvent The search event.
     * @public
     */
    onSearch: function (oEvent) {
      var sQuery = oEvent.getParameter("newValue") || oEvent.getParameter("query");
      var oTable = this.byId("dataTable");
      var oBinding = oTable.getBinding("items");
      var aFilters = [];

      if (sQuery && sQuery.length > 0) {
        var aSearchFilters = [];
        // Search across multiple fields
        aSearchFilters.push(new Filter("name", FilterOperator.Contains, sQuery));
        aSearchFilters.push(new Filter("description", FilterOperator.Contains, sQuery));
        aSearchFilters.push(new Filter("id", FilterOperator.Contains, sQuery));

        aFilters.push(new Filter({
          filters: aSearchFilters,
          and: false
        }));
      }

      oBinding.filter(aFilters);
      this._updateSearchResultsCount(oBinding.getLength());
    },

    /**
     * Updates the search results count in the table title.
     * @param {int} iCount The number of search results.
     * @private
     */
    _updateSearchResultsCount: function (iCount) {
      var oTitle = this.byId("tableTitle");
      if (oTitle) {
        oTitle.setText("Results (" + iCount + ")");
      }
    }
  });
});
