Ext.define('TutorialApp.view.testin.testinController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.testin',

    calendar(button, picker, date) {
        // do something with the selected date
        const lol = this.getViewModel();
        debugger
        // qwe.get()
        console.log(button)
        var userId = this.lookupReference('fieldforkirill');
        userId.setValue(picker)
        var btn = button.up().down('textfield').nextSibling().nextSibling().nextSibling();
        btn.setValue(picker)
        const qwe = button.lookupViewModel().data.newjson
        qwe.loadData(picker)
       // ExtJSON.encode()
        //debugger
    }
});
