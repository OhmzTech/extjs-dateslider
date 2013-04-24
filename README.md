extjs-dateslider
================

DateSlider Component for Sencha ExtJS

The component can be created using Ext.create (Ext.ux.DateSlider) or using the xtype (dateslider). Any slider properties can be passed, in addition to the following:

Configuration Properties
Required
minDate: valid Ext.Date format
maxDate: valid Ext.Date format
dateFields: array of Ext.form.field.Date items
OR
values: array of date string matching dateFormat

Optional
dateIncrement: Ext.Date interval constant (default Ext.Date.DAY)
dateFormat: valid Ext.Date format (default 'n/j/Y')