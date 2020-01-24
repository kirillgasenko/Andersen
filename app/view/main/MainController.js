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
        
    },
    someFunc(){
        const vm = this.getViewModel();
        if (vm.get('qwer') === vm.get('comments') ){
            alert('everything good')
        } else {
            alert('so bad everything')
        }
        // console.log(vm.get('qwer'));
        // console.log(vm.get('comments'))
    },
    myFunc(){
        
    }
});