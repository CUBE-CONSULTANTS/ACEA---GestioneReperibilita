sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/core/date/UI5Date",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment, UI5Date) {
        "use strict";
        return Controller.extend("trasfertedirigenti.controller.BaseController", {
            _formatDate: function (sDate, sTime) {
                const [day, month, year] = sDate.split("/").map(Number);
                const [hour, minute] = sTime.split(":").map(Number);

                return UI5Date.getInstance(year, month - 1, day, hour, minute, 0, 0);
            },
            _formatStartDate: function (date) {
                return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
            },
            _formatStartHour: function (date) {
                return `${date.getHours()}:${date.getMinutes()}`
            },
            onSelectRow: function (oEvent) {
                const selected = oEvent.getSource().getSelectedRows()
                if (selected.length != 0) {
                    this.byId("createElement").setEnabled(true)
                } else {
                    this.byId("createElement").setEnabled(false)
                }
            }
        })
    })