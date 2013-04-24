extjs-dateslider
================

DateSlider Component for Sencha ExtJS

DateSlider is a simple extension that allows standard sliders to use dates as values. More than one handle can be set, and each can be tied to date input fields.

The component can be created using Ext.create (Ext.ux.DateSlider) or using the xtype (dateslider). Any slider properties can be passed, in addition to the following:

<u>Configuration Properties</u><br/>
<b>Required</b><br/>
minDate: valid Ext.Date format<br/>
maxDate: valid Ext.Date format<br/>
dateFields: array of Ext.form.field.Date items<br/>
OR<br/>
values: array of date string matching dateFormat<br/>

<b>Optional</b><br/>
dateIncrement: Ext.Date interval constant (default Ext.Date.DAY)<br/>
dateFormat: valid Ext.Date format (default 'n/j/Y')<br/>
