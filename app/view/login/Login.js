Ext.define('TutorialApp.view.login.Login', {                    //ОКНО ВХОДА
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [                                                  //указываем как классы должны подгрузиться
        'TutorialApp.view.login.LoginController',           
        'Ext.form.Panel'
    ],

    controller: 'login',                                //название блока который включает все классы
    bodyPadding: 10,
    title: 'Login Window',                              //название окна
    closable: false, //могу ли закрыть
    autoShow: true,  //что бы показывалось

    items: {
        xtype: 'form',                                  //тип окна входа
        reference: 'form',
        items: [
            // {
            //     xtype: 'checkbox',
            //     boxLabel: 'Is Admin',
            //     reference: 'isAdmin'
            // },{
            //     xtype: 'textfield',
            //     fieldLabel: 'Admin Key',
            //     // bind: {
            //     //     disabled: '{!isAdmin.checked}'
            //     // }
            // },
             {                               // создаем необходимые комоненты в форме
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            // maskRe: '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\
            //     //         [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/',
            maskRe: /[0-9]/,
            allowBlank: false
        }, {    
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false,
            // bind: {
            //     section: '{email}'
            // }
        }, {    
            xtype: 'displayfield',
            hidden: true,
            value: 'Error'
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        buttons: [{                                             //создание кнопки
            text: 'Enter',
            formBind: true,                                      //кнопка будет не активной до тех пор пока все поля не будут заполнены
            listeners: {                                         //события по нажатию на кнопку, после этог будет переадрисация
                click: 'onLoginClick'
            }
        }]
    }
});

// let login = document.getElementById('textfield-1026-inputEl');



//     function TestLogin1(login){
       
//         if(/^[a-zA-Z1-9]+$/.test(login) === false)
//             {alert('В логине должны быть только латинские буквы'); return false;}
//         if(login.length < 4 || login.length > 20)
//             { alert('В логине должен быть от 4 до 20 символов'); return false;}
//         if(parseInt(login.substr(0, 1)))
//             {alert('Логине должен начинаться с буквы'); return false;}
        
//          return true;
//         }