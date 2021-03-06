    // Ext.create('Ext.window.Window', {
        Ext.define('TutorialApp.view.edit.Edit', {                    //ОКНО ВХОДА
            extend: 'Ext.window.Window',
            xtype: 'edit',

            requires: [                                                  //указываем как классы должны подгрузиться
                'TutorialApp.view.info.infoController',      
                'TutorialApp.view.info.InfoModel',     
                'Ext.form.Panel',
                'TutorialApp.view.edit.editModel',  
                'TutorialApp.view.edit.editController',  
            ],

            title: 'Edit',
            height: 400,
            width: 400,
            layout: {
                type: 'vbox',
                align: 'left'
            },
            margin: '30 0 0 30',
            closable: true,
            controller: 'edit',
            border: true,
            items: [ 
                {
                xtype: 'textfield',
                forId: 'myFieldId',
                // reference: 'editname',
                margin: '10',
                bind: {
                    value: '{record.firstName}',
                }
            },
            {
                xtype: 'textfield',
                forId: 'myFieldId',
                margin: '10',
                bind: {
                    value: '{record.lastName}'
                }            
            },
            {
                xtype: 'textfield',
                forId: 'myFieldId',
                margin: '10',
                bind: {
                    value: '{record.age}'
                }
            },
        {
                xtype: 'textfield',
                forId: 'myFieldId', 
                margin: '10',
                bind: {
                    value: '{record.email}'
                }
            },
            {
                xtype: 'button',
                bind: {
                    text: '{buttonText}'
                },
                text: 'add',
                listeners: {
                    click: 'editor'
                }
            }
        ]
        
    });