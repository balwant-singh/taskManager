sap.ui.define([
  "com/candent/tools/taskManager/controller/BaseController"
], function (Controller) {
  "use strict";

  return Controller.extend("com.candent.tools.taskManager.controller.Main", {
    onInit: function () {
      if (sap.ui.Device.system.desktop) {
        this.getView().addStyleClass("sapUiSizeCompact");
      }
    },
    onCollapseExpandPress: function () {
      var oSideNavigation = this.byId("sideNavigation");
      var bExpanded = oSideNavigation.getExpanded();
      oSideNavigation.setExpanded(!bExpanded);
    }
  });
});
