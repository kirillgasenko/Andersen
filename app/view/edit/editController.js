Ext.define('TutorialApp.view.edit.editController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.edit',


    editor(button){
        const vm = this.getViewModel();
        const buttonVm = button.lookupViewModel();
        var storage = vm.get('localtext');
        if (buttonVm.get('isNew')) {
            debugger
            const w = vm.get('localstore');
            const record = buttonVm.get('record');
            w.add(record)
            button.up().close();
        } else {
            storage.set({
                'firstName': buttonVm.get('record.firstName'),
                'lastName': buttonVm.get('record.lastName'),
                age: buttonVm.get('record.age'),
                email: buttonVm.get('record.email')
            })
            button.up().setHidden(true)
        }
    }
});