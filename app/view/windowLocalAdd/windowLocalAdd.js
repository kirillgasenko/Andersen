    // Ext.create('Ext.window.Window', {
        Ext.define('TutorialApp.view.add.Add', {                    //ОКНО ВХОДА
            extend: 'Ext.window.Window',
            xtype: 'add',

            requires: [                                                  //указываем как классы должны подгрузиться
                'TutorialApp.view.add.addController',      
                // 'TutorialApp.view.login.LoginModel',     
                'Ext.form.Panel'
            ],
        
            // // plugins: 'viewport',
            // viewModel: {
            //     type: 'info'
            // },
            title: 'Hello',
            height: 400,
            width: 400,
            layout: {
                type: 'vbox',
                align: 'left'
            },
            margin: '30 0 0 30',
            closable: true,
            border: true,
            items: [ 
                {
                    xtype: 'textfield',
                    fieldLabel: 'first Name',
                    name: 'firstName',
                    // reference: 'firstName',
                    bind: {
                        value: '{first}'
                    }                 
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'last Name',
                    name: 'lastName',
                    bind: {
                        value: '{last}'
                    }                 
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'age',
                    name: 'age',
                    bind: {
                        value: '{age}'
                    }                 
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'email',
                    name: 'email',
                    bind: {
                        value: '{email}'
                    }                 
                },
                {
                    xtype: 'button',
                    text: 'add',
                    listeners: {
                        click: 'myFunc'
                    }
                }
            ]
        
    });




    // Ext.define('TutorialApp.view.login.Login', {                    //ОКНО ВХОДА
    //     extend: 'Ext.window.Window',
    //     xtype: 'login',
    
    //     requires: [                                                  //указываем как классы должны подгрузиться
    //         'TutorialApp.view.login.LoginController',      
    //         // 'TutorialApp.view.login.LoginModel',     
    //         'Ext.form.Panel'
    //     ],
    
    //     // plugins: 'viewport',
    //     viewModel: {
    //         type: 'login'
    //     },
    
    
    //     controller: 'login',                                //название блока который включает все классы
    //     bodyPadding: 10,
    //     title: 'Login Window',                              //название окна
    //     closable: false, //могу ли закрыть
    //     autoShow: true,  //что бы показывалось
    
    //     items: {
    //         xtype: 'form',                                  //тип окна входа
    //         reference: 'form',
    //         items: [
    //             // {
    //             //     xtype: 'checkbox',
    //             //     boxLabel: 'Is Admin',
    //             //     reference: 'isAdmin'
    //             // },{
    //             //     xtype: 'textfield',
    //             //     fieldLabel: 'Admin Key',
    //             //     // bind: {
    //             //     //     disabled: '{!isAdmin.checked}'
    //             //     // }
    //             // },
    //              {                               // создаем необходимые комоненты в форме
    //             xtype: 'textfield',
    //             name: 'username',
    //             fieldLabel: 'Username',
    //             // maskRe: '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\
    //             //     //         [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/',
    //             maskRe: /[0-9]/,
    //             allowBlank: false
    //         }, {    
    //             xtype: 'textfield',
    //             name: 'password',
    //             inputType: 'password',
    //             fieldLabel: 'Password',
    //             allowBlank: false,
    //             // bind: {
    //             //     section: '{email}'
    //             // }
    //         }, {    
    //             xtype: 'displayfield',
    //             hidden: true,
    //             value: 'Error'
    //         }, {
    //             xtype: 'displayfield',
    //             hideEmptyLabel: false,
    //             value: 'Enter any non-blank password'
    //         }],
    //         buttons: [{                                             //создание кнопки
    //             text: 'Enter',
    //             formBind: true,                                      //кнопка будет не активной до тех пор пока все поля не будут заполнены
    //             // onEnterKey: true,
    //             submit: 'onSubmit',
    //             listeners: {                                         //события по нажатию на кнопку, после этог будет переадрисация
    //                 click: 'onLoginClick',
    //                 // afterRender: function(){
    //                 //     debugger
    //                 // },
    //                 // specialkey: function(){
    //                 //     debugger;
    //                 // }
    //             }
    //         }]
    //     }
    // });
