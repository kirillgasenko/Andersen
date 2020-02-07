    // Ext.create('Ext.window.Window', {
        Ext.define('TutorialApp.view.add.Add', {                    //ОКНО ВХОДА
            extend: 'Ext.window.Window',
            xtype: 'add',

            requires: [                                                  //указываем как классы должны подгрузиться
                'TutorialApp.view.add.addController',      
                // 'TutorialApp.view.login.LoginModel',     
                'Ext.form.Panel'
            ],
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