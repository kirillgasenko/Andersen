/**                                                     ОСНОВНАЯ ЛОГИКА
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
// Ext.define('TutorialApp.view.main.MainController', {
//     extend: 'Ext.app.ViewController',

//     alias: 'controller.main',

//     onItemSelected: function (sender, record) {
//         Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
//     },

//     onConfirm: function (choice) {
//         if (choice === 'yes') {
//             //
//         }
//     }
// });


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
    editSome(){
        const vm = this.getViewModel();
        var somethingNew = vm.get('localstore')
        var storage = vm.get('localtext');
        var edit = this.lookupReference('update');
   
        //debugger
        // console.log(storage)


    },
    editor(button){
        const vm = this.getViewModel();
        var storage = vm.get('localtext');
        // console.log(storage.data)
        // console.log(button.lookupViewModel().data.record)
        // debugger
        // console.log(vm.getConfig().data.localtext.data)
        // console.log(vm.get(''))
        // // console.log(vm.get('first'))
        storage.set({
            'firstName': button.lookupViewModel().data.record.firstName,
            'lastName': button.lookupViewModel().data.record.lastName,
            age: button.lookupViewModel().data.record.age,
            email: button.lookupViewModel().data.record.email
        })
        button.up().setHidden(true)
        // debugger
        //debugger
       // console.log(storage)
    //    vm.set('localtext.age', )
    },
    updateFunc(button){
        // const vm = this.getViewModel();
        // var somethingNew = vm.get('localstore')
        // var storage = vm.get('localtext');
        // debugger
        // console.log(somethingNew.getAt())
        // debugger
        if(button.fromNew){
            var newField = Ext.create({
                xtype: 'add',
                viewModel: {
                  parent: this.getViewModel() // привязка в нужному окну груббо гоовря  // не перезаписывает обьект а добавляет
                }
              });
              newField.show()
        }else{
        var newField = Ext.create({
            xtype: 'edit',
            viewModel: {
              parent: this.getViewModel(),
              data: {
                  record: this.getViewModel().get('localtext').getData(),
              } // привязка в нужному окну груббо гоовря  // не перезаписывает обьект а добавляет
            }
          });
          newField.show()
        }
    },
    addFunc(){
        var newField = Ext.create({
            xtype: 'add',
            viewModel: {
              parent: this.getViewModel() // привязка в нужному окну груббо гоовря  // не перезаписывает обьект а добавляет
            }
          });
          newField.show()
        // const vm = this.getViewModel();
        // // debugger
        // var qwe = vm.get('localstore')
        // // console.log(qwe)
        
        //     // qwe.add(vm.get('first'))
        //     qwe.add({
        //         'firstName': vm.get('first'),
        //         'lastName': vm.get('last'),
        //         age: vm.get('age'),
        //         email: vm.get('email')
        //     })
       
    },
    someFunc(){
        // const vm = this.getViewModel();
        // // if (vm.get('qwer') === vm.get('comments') ){
        // //     alert('everything good')
        // // } else {
        // //     alert('so bad everything')
        // // }
        // var qwe = vm.get('localstore')
        // // console.log(qwe)
        
        // if(vm.get('mainSelction')){
        //     qwe.add(vm.get('mainSelction'))
        // }
        // console.log(vm.get('qwer'));
        // console.log(vm.set('name', 'lol'));
        // console.log(vm.get('localstore'));
        // console.log(vm.get('comments'))
    },
    rowDBL(record, element, rowIndex, e, eOpts){
        // return console.log(element.data)
            var t = element.data;
            
            //  debugger
            var userId = this.lookupReference('userId');
            userId.setValue(element.data.userId)
            var id = this.lookupReference('id');
            console.log(id)
            id.setValue(element.data.id)
            var title = this.lookupReference('title');
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
          

    //     Ext.create('Ext.window.Window', {
    //         viewModel: {
    //             parent: this.getViewModel(),
    //         },
    //         title: 'Hello',
    //         height: 200,
    //         width: 400,
    //         layout: 'fit',
    //         margin: '30 0 0 30',
    //         closable: true,
    //         border: true,
    //         items: [ {
    //             xtype: 'label',
    //             forId: 'myFieldId',
    //             margin: '0 0 0 10',
    //             bind: {
    //                 text: '{localtext.firstName}'
    //             }
    //         },
    //         {
    //             xtype: 'label',
    //             forId: 'myFieldId',
    //             margin: '0 0 0 10',
    //             bind: {
    //                 text: '{localtext.lastName}'
    //             }            
    //         },
    //         {
    //             xtype: 'label',
    //             forId: 'myFieldId',
    //             margin: '0 0 0 10',
    //             bind: {
    //                 text: '{localtext.age}'
    //             }
    //         },
    //     {
    //             xtype: 'label',
    //             forId: 'myFieldId', 
    //             margin: '0 0 0 10',
    //             bind: {
    //                 text: '{localtext.email}'
    //             }
    //         }]
        
    // });
    newField.show();
        // return console.log(element.data)
            //var t = element.getData();
            // console.log(t)
            // var field = this.lookupReference('fieldForLocal')
            // field.setHidden(false)
            // newField
            // var name = this.lookupReference('nameFirst');
            // var surname = this.lookupReference('lastWindow');
            // var age = this.lookupReference('ageWindow');
            // var email = this.lookupReference('emailWindow');
            // name.setText(element.data.firstName);
            // surname.setText(element.data.lastName)
            // age.setText(element.data.age);
            // email.setText(element.data.email)
    },
    // nothingFun(){
    //     // return console.log(element.data)
    //     //     var t = element.data
    //     //     record
    //     //      debugger
    //     //     var userId = this.lookupReference('userId');
    //     //     userId.setValue(element.data.userId)
    //     //     var id = this.lookupReference('id');
    //     //     id.setValue(element.data.id)
    //     //     var title = this.lookupReference('title');
    //     //     title.setValue(element.data.title)
    //     //     var body = this.lookupReference('body')
    //     //     body.setValue(element.data.body) 

    //     const vm = this.getViewModel();
    //     var storage = vm.get('localtext');
    //     var name = vm.get('nameFirst')
    //     name.setText(storage.data.age)
    //     console.log(qwe)
    //     console.log(storage.data.age)

    // },
    
    myFunc(button){

        const vm = this.getViewModel();
        // debugger
        var qwe = vm.get('localstore')
        
            // qwe.add(vm.get('first'))
            qwe.add({
                'firstName': vm.get('first'),
                'lastName': vm.get('last'),
                age: vm.get('age'),
                email: vm.get('email')
            })
            button.up().setHidden(true)
       
    },
    deleteFunc(){
        const vm = this.getViewModel();
        var storage = vm.get('localtext');        
            // var delet = this.lookupReference('delete');
            // delet.setDisabled(false)    
        
        var somethingNew = vm.get('localstore')
        // console.log(storage.data)
        somethingNew.remove(storage)
    },
    
    // updateFunc(){
    // //     const vm = this.getViewModel();
    // //     var storage = vm.get('localtext');  
    // //     storage.set('age', 'sdfifdg')
    // //     // var somethingNew = vm.get('localstore');    
    // //     // var qwert = storage.data.age
    // //     // var first = vm.get('firstUp')
    // //     // var last = vm.get('lastUp')
    // //     // var age = vm.get('ageUp')
    // //     // var email = vm.get('emailUp')
    // //     // somethingNew.updatedRecords ({
    // //     //     qwert: age
    // //     // })
    // //     // storage.remove(storage.data.age)
    // //     // storage.add({
    // //     //     age: age
    // //     // })
        
    // // }
});


// rowDBL(record, element, rowIndex, e, eOpts){
//     // return console.log(element.data)
//         var t = element.data
        
//         debugger
//         // var userId = this.lookupReference('userId');
//         // console.log(userId)
//         // console.log(userId.get(element.data.id))
//         // var id = this.lookupController().lookupReference('id');
//         // var title = this.lookupController().lookupReference('title');
//         // var body = this.lookupController().lookupReference('body')
//         // console.log(userId)
//         // console.log(id)
//         // console.log(title)
//         // console.log(body)
//         // var textfield = this.lookupReference(element.data)
    
// },
// addFunc(){
//     const vm = this.getViewModel();
//     // debugger
//     var qwe = vm.get('first')
//     console.log(qwe)
//     if(vm.get('mainSelction')){
//         qwe.add(vm.get('mainSelction'))
//     }
// }

// var window = Ext.create('Ext.window.Window', {
//     title: 'Hello',
//     height: 200,
//     viewModel: {
//         type: 'main'
//     },
//     width: 400,
//     layout: 'fit',
//     items: {  // Let's put an empty grid in just to illustrate fit layout
//         xtype: 'grid',
//         border: false,
//         columns: [{header: 'World'}],                 // One header just for show. There's no data,
//         store: Ext.create('Ext.data.ArrayStore', {}) // A dummy empty data store
//     }
// });
// window.show()
// var panel = Ext.create('Ext.window.Window', {
//     title: 'Hello',
//     height: 200,
//     width: 400,
//     autoShow:true,
//     layout: 'fit',
//     modal : true,
//     items: [{
//         xtype:'new-window'
//     }]
// });

