//                                               ОСНОВНАЯ ЛОГИКА
Ext.define('TutorialApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onClickButton: function () {

        // Remove the localStorage key/value
        localStorage.removeItem('TutorialLoggedIn');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.widget('login');

    },
    onSelectGrid: function(cmp, selection){
        // console.log(this.lookupController().lookupReference('userId'))
    },
   
    updateFunc(button){
        debugger
        var localtext = this.getViewModel().get('localtext')
        var newRecord = !button.fromNew ? localtext.getData() : {
            firstName: '',
            lastName: '',
            age: '',
            email: ''
        };  
        var newField = Ext.create({
            xtype: 'edit',
            viewModel: {
              parent: this.getViewModel(),
              data: {
                  isNew: button.fromNew,
                  record: newRecord,
              },// привязка в нужному окну груббо гоовря  // не перезаписывает обьект а добавляет,
              formulas: {
                buttonText: {
                    bind: {
                        isNew: '{isNew}'
                    },
                    get: function(data, now){
                        return data.isNew ? 'add' : 'edit'
                    }
                }
              }
            }
          });
          newField.show()
        
    },
    views(){
      var newField = Ext.create({
        xtype: 'views',
        viewModel: {
          parent: this.getViewModel(),
        }
      });
      newField.show()
    },
    qwe(){
      var newField = Ext.create({
        xtype: 'init',
        viewModel: {
          parent: this.getViewModel(),
        }
      });
      newField.show()
    },
    createBtn(button){
      debugger
        console.log(this.getViewModel().data.name)
        var newField = Ext.create({
            xtype: 'test',
            viewModel: {
              parent: this.getViewModel(), // привязка в нужному окну груббо гоовря  // не перезаписывает обьект а добавляет
              mytext: this.getViewModel().data.name
            }
          });
          newField.show()
    },
    rowDBL(record, element, rowIndex, e, eOpts){
            var userId = this.lookupReference('userId');
            userId.setValue(element.data.userId)
            var id = this.lookupReference('id');
            console.log(id)
            id.setValue(element.data.id)
            var title = this.lookupReference('title');
            console.log(title)
            title.setValue(element.data.title)
            var body = this.lookupReference('body')
            body.setValue(element.data.body)        
    },
    
    nothingFun(record, element, rowIndex, e, eOpts){
        var t = element.getData()
        var newField = Ext.create({
            xtype: 'info',
            viewModel: {
              parent: this.getViewModel() // привязка в нужному окну груббо гоовря  // не перезаписывает обьект а добавляет
            },
          });
          var name = this.lookupReference('firstNAme')
          name.setText(t.firstName)
          var surname = this.lookupReference('last')
          surname.setText(t.lastName)
          var age = this.lookupReference('age')
          age.setText(t.age)
          var email = this.lookupReference('email')
          email.setText(t.email)
          

    newField.show();
        
    },

    deleteFunc(){
        debugger
        const vm = this.getViewModel();
        var storage = vm.get('localtext');        
            // var delet = this.lookupReference('delete');
            // delet.setDisabled(false)    
        
        var somethingNew = vm.get('localstore')
        // console.log(storage.data)
        somethingNew.remove(storage)
    },
});

