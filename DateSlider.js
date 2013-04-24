/*!
 * DateSlider Plugin - Created for Sencha ExtJS4
 * Plugin: Ext.ux.DateSlider
 * Version: 1.1.0
 * Tested: Sencha ExtJS 3,4
 * Author: OhmzTech (www.ohmztech.com)
 */

Ext.define('Ext.ux.DateSlider', {

    extend: 'Ext.slider.Multi',

    alias: 'widget.dateslider',

    config: {
        dateFormat: 'n/j/Y',
        dateIncrement: Ext.Date.DAY
    },

    convertToUnix: function(date) {
        var pd = Ext.Date.parse(date,this.dateFormat);
        return Number(Ext.Date.format(new Date(pd),'U'));   
    },

    convertFromUnix: function(dt) {
        var pd = Ext.Date.parse(dt,'U');
        return Ext.Date.format(new Date(pd),this.dateFormat);
    },

    constructor: function(config) {
        var format = (config.dateFormat || this.config.dateFormat);
        this.dateFormat = format;
        config.dateFormat = (config.dateFormat || this.config.dateFormat);
        this.values = [];
	this.minValue = this.convertToUnix(config.minDate);
	this.maxValue = this.convertToUnix(config.maxDate);		
        var me = this;
	if (config.dateFields) {
            config.values = [];
       	    config.dateFields.forEach(function(item){
	       	var tf = Ext.Date.format(item.getValue(), me.dateFormat);				
       		me.values.push(me.convertToUnix(tf));				
	    });
	} else {
	    config.dateFields = [];
	    config.values = (config.values || []);
	    config.values.forEach(function(item){
	        me.values.push(me.convertToUnix(item));
	        config.dateFields.push(Ext.create('Ext.form.field.Date',{
	            value: new Date(me.convertToUnix(item))
	        }));
	    });
	}
        config.values = me.values.sort(function(a,b){return a-b});
        this.tipText = function(tip, val){
            var pd = Ext.Date.parse(tip.value,'U');
            return Ext.Date.format(new Date(pd),me.dateFormat);
        };
        this.callParent(arguments);
        this.initConfig(config);
        return this;
    },

    listeners: {
        change: function(sld,val,tb) {
       	    sld.dateFields[tb.index].setValue(this.convertFromUnix(val));
        }
    },

    applyDateIncrement: function(inc) {
        var minc = Ext.Date.format(Ext.Date.add(new Date(),inc, 1),'U')-Ext.Date.format(new Date(),'U');
        this.increment = minc;
    }
});