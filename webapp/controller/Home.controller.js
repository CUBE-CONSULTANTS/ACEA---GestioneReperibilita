sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/core/date/UI5Date',
    "sap/ui/core/Fragment",
    "./BaseController",
    "sap/m/MessageBox",

], (Controller, UI5Date, Fragment, BaseController, MessageBox) => {
    "use strict";

    return BaseController.extend("gestionereperibilita.controller.Home", {
        onInit() {
            this.getOwnerComponent()
                .getRouter()
                .getRoute("RouteHome")
                .attachPatternMatched(this._onRouteMatched, this);
        },
        _onRouteMatched: function (oEvent) {
            this.initModel()
            this.initModelCalendar()

        },
        initModel: function () {
            this.getView().setModel(new sap.ui.model.json.JSONModel({
                anno: new Date(),
                meseSelected: `${new Date().getMonth()+1}`,
                tiporeperibilitakey: null,
                edit: false,
                modify: null,
                listaMesi: [
                    { "mese": "Gennaio", "numero": "01" },
                    { "mese": "Febbraio", "numero": "02" },
                    { "mese": "Marzo", "numero": "03" },
                    { "mese": "Aprile", "numero": "04" },
                    { "mese": "Maggio", "numero": "05" },
                    { "mese": "Giugno", "numero": "06" },
                    { "mese": "Luglio", "numero": "07" },
                    { "mese": "Agosto", "numero": "08" },
                    { "mese": "Settembre", "numero": "09" },
                    { "mese": "Ottobre", "numero": "10" },
                    { "mese": "Novembre", "numero": "11" },
                    { "mese": "Dicembre", "numero": "12" }
                ]
            }), "modello")
        },
        initModelCalendar: function () {

            var oStateModel = new sap.ui.model.json.JSONModel();
            oStateModel.setData({
                legendShown: false
            });
            this.getView().setModel(oStateModel, "stateModel");
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData({
                startDate: UI5Date.getInstance("2025", "11", "13", "8", "0"),
                people: [
                    {
                        name: "John Miller",
                        role: "team member",
                        appointments: [
                            {
                                start: UI5Date.getInstance("2025", "11", "13", "00", "00"),
                                end: UI5Date.getInstance("2025", "11", "13", "24", "00"),
                                title: "Reperibilità",
                                info: "01",
                                type: "Type08",
                            },
                            {
                                start: UI5Date.getInstance("2025", "11", "14", "00", "00"),
                                end: UI5Date.getInstance("2025", "11", "14", "24", "00"),
                                title: "Reperibilità",
                                info: "01",
                                type: "Type08",
                            },
                            {
                                start: UI5Date.getInstance("2025", "11", "24", "00", "00"),
                                end: UI5Date.getInstance("2025", "11", "24", "24", "00"),
                                title: "Reperibilità",
                                info: "01",
                                type: "Type08",
                            },
                            {
                                start: UI5Date.getInstance("2025", "11", "20", "00", "00"),
                                end: UI5Date.getInstance("2025", "11", "20", "24", "00"),
                                title: "Reperibilità",
                                info: "01",
                                type: "Type08",
                            }
                        ]
                    },
                    {
                        name: "Oliver Bennett",
                        role: "team member",
                        appointments: [
                            {
                                start: UI5Date.getInstance("2025", "11", "13", "00", "00"),
                                end: UI5Date.getInstance("2025", "11", "13", "24", "00"),
                                title: "Reperibilità",
                                info: "01",
                                type: "Type08",
                            },
                            {
                                start: UI5Date.getInstance("2025", "11", "20", "00", "0"),
                                end: UI5Date.getInstance("2025", "11", "20", "24", "0"),
                                title: "Reperibilità",
                                info: "01",
                                type: "Type08",
                            },
                            {
                                start: UI5Date.getInstance("2025", "11", "22", "00", "00"),
                                end: UI5Date.getInstance("2025", "11", "23", "24", "00"),
                                title: "Reperibilità",
                                info: "01",
                                type: "Type08",
                            },
                            {
                                start: UI5Date.getInstance("2025", "11", "17", "00", "00"),
                                end: UI5Date.getInstance("2025", "11", "17", "24", "00"),
                                title: "Reperibilità",
                                info: "01",
                                type: "Type08",
                            },

                        ]
                    }, {
                        name: "Emily Turner",
                        role: "team member",
                        appointments: [
                            {
                                start: UI5Date.getInstance("2025", "11", "20", "00", "0"),
                                end: UI5Date.getInstance("2025", "11", "20", "24", "0"),
                                title: "Reperibilità",
                                info: "01",
                                type: "Type08",
                            },
                            {
                                start: UI5Date.getInstance("2025", "11", "16", "00", "00"),
                                end: UI5Date.getInstance("2025", "11", "16", "24", "00"),
                                title: "Reperibilità",
                                info: "01",
                                type: "Type08",
                            },
                            {
                                start: UI5Date.getInstance("2025", "11", "18", "00", "00"),
                                end: UI5Date.getInstance("2025", "11", "18", "24", "00"),
                                title: "Reperibilità",
                                info: "01",
                                type: "Type08",
                            },
                            {
                                start: UI5Date.getInstance("2025", "11", "22", "00", "00"),
                                end: UI5Date.getInstance("2025", "11", "23", "24", "00"),
                                title: "Reperibilità",
                                info: "01",
                                type: "Type08",
                            },
                            {
                                start: UI5Date.getInstance("2025", "11", "24", "00", "00"),
                                end: UI5Date.getInstance("2025", "11", "24", "24", "00"),
                                title: "Reperibilità",
                                info: "01",
                                type: "Type08",
                            },
                            {
                                start: UI5Date.getInstance("2025", "11", "20", "00", "00"),
                                end: UI5Date.getInstance("2025", "11", "20", "24", "00"),
                                title: "Reperibilità",
                                info: "01",
                                type: "Type08",
                            }
                        ]
                    }
                ],

                legendItems: [
                    {
                        text: "Reperibilità",
                        type: "Type08"
                    }
                ]
            });
            this.getView().setModel(oModel);
        },
        openDialog: function (oEvent) {
            if (oEvent.getSource()?.getCustomData()?.[0]?.getKey() == 'Create') {
                this.getView().getModel("modello").setProperty("/edit", true)
            } else {
                let { end, start, title, info } = oEvent.getParameter("appointment").getBindingContext().getObject()
                let rowElement = oEvent.getParameter("appointment").getBindingContext().sPath
                this.getView().getModel("modello").setProperty("/modify", rowElement)
                this.getView().getModel("modello").setProperty("/data_inizio", this._formatStartDate(start))
                this.getView().getModel("modello").setProperty("/data_fine", this._formatStartDate(end))

                this.getView().getModel("modello").setProperty("/tiporeperibilitakey", info)
                this.getView().getModel("modello").setProperty("/edit", false)
            }
            this._arrangeDialogFragment()
        },
        _arrangeDialogFragment: function (sTitle) {
            //open dialog for create new Management business trip
            var oView = this.getView();
            if (!this._pNewAppointmentDialog) {
                this._pNewAppointmentDialog = Fragment.load({
                    id: "p",
                    name: "gestionereperibilita.view.Fragments.CreateAppoiment",
                    controller: this
                }).then(function (oModifyDialog) {
                    oView.addDependent(oModifyDialog);
                    return oModifyDialog;
                });
            }

            this._pNewAppointmentDialog.then(function (oModifyDialog) {
                this._arrangeDialog(sTitle, oModifyDialog);
            }.bind(this));
        },
        _arrangeDialog: function (sTitle, oModifyDialog) {
            oModifyDialog.setTitle("Crea Reperibilità");
            oModifyDialog.open();
        },
        handleDialogCancelButton: function (oEvent) {
            oEvent.getSource().getParent().getParent().close()
        },
        handleDialogOkButton: function (oEvent) {
            if (this.getView().getModel("modello").getProperty("/modify")) {
                this.saveModifyElement()
            } else {
                let elementSelected = this.getView().byId("PC1").getSelectedRows()[0].getBindingContext().getObject()
                const { data_inizio, data_fine, tiporeperibilitakey: tipoReperibilita } = this.getView().getModel("modello").getData()
                elementSelected.appointments.push({
                    start: UI5Date.getInstance(this._formatDate(data_inizio, "00:00")),
                    end: UI5Date.getInstance(this._formatDate(data_fine, "24:00")),
                    title: "Reperibilità",
                    info: tipoReperibilita,
                    type: "Type08"
                })
            }
            this.getView().getModel("modello").setProperty("/data_inizio", null)
            this.getView().getModel("modello").setProperty("/data_fine", null)
            this.getView().getModel("modello").setProperty("/tiporeperibilitakey", null)
            this.getView().getModel("modello").setProperty("/modify", null)
            this.getView().getModel().refresh()
            this.handleDialogCancelButton(oEvent)
        },
        handleDialogChangeButton: function (oEvent) {
            this.getView().getModel("modello").setProperty("/edit", true)
        },
        handleDialogDeleteButton: function (oEvent) {
            let self = this,
                event = oEvent
            let pathElement = this.getView().getModel("modello").getProperty("/modify").split("appointments/"),
                element = this.getView().getModel().getProperty(pathElement[0]),
                oModel = this.getView().getModel()
            MessageBox.confirm("Sei sicuro di voler cancellare?", {
                actions: [MessageBox.Action.YES, MessageBox.Action.CLOSE],
                emphasizedAction: "Manage Products",
                onClose: function (sAction) {
                    if (sAction == 'YES') {
                        self.handleDialogCancelButton(event)
                        element.appointments.splice(pathElement[1], 1);
                        oModel.updateBindings();
                    }
                },
                dependentOn: this.getView()
            });
        },
        saveModifyElement: function () {
            let pathChange = this.getView().getModel("modello").getProperty("/modify")
            const { data_inizio, data_fine, tiporeperibilitakey } = this.getView().getModel("modello").getData()
            this.getView().getModel().setProperty(`${pathChange}/start`, UI5Date.getInstance(this._formatDate(data_inizio, "00:00")))
            this.getView().getModel().setProperty(`${pathChange}/end`, UI5Date.getInstance(this._formatDate(data_fine, "24:00")))
            this.getView().getModel().setProperty(`${pathChange}/info`, tiporeperibilitakey)
            this.getView().getModel().setProperty(`${pathChange}/title`, "Reperibilità")
            this.getView().getModel().refresh()
        }

    });
});