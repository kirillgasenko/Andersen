Ext.define('TutorialApp.view.login.LoginController', {              //ЛОГИКА ОКНА
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    

    onLoginClick: function() {                                      //по сути проверка на правильность входа 

        // some = {
        //     name : username,
        //     pass : password
        // };


        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        // Set the localStorage value to true
        
        localStorage.setItem("name", true);

        // Remove Login Window
        this.getView().destroy();

        // Add the main view to the viewport
        Ext.widget('app-main');             //переадрисация на нужную страницу

    }
});