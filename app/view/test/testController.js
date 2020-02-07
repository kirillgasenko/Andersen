Ext.define('TutorialApp.view.test.testController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.test',

    testing(button){

      debugger
        var newField = Ext.create({
            xtype: 'testin',
            viewModel: {
              parent: this.getViewModel() // привязка в нужному окну груббо гоовря  // не перезаписывает обьект а добавляет
            }
          });
          newField.show();
          // console.log(button.lookupViewModel().getParent().get('loremIpsum'))
 
    }
});
