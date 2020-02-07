    // Ext.create('Ext.window.Window', {
        Ext.define('TutorialApp.view.test.Test', {                    //ОКНО ВХОДА
            extend: 'Ext.window.Window',
            xtype: 'test',

            requires: [                                                  //указываем как классы должны подгрузиться
                'TutorialApp.view.test.testController',      
                // 'TutorialApp.view.test.testModel',    
                'TutorialApp.view.testin.Testin', 
                'Ext.form.Panel',
            ],
            title: 'Test',
            controller: 'test',
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
                margin: '10',
                bind: {
                    value: '{value}'
                }
            },
            {
                xtype: 'textfield',
                margin: '10',
                bind: {
                    value: '{name}'
                }
            },
            {
                xtype: 'textfield',
                margin: '10',
            },
            {
                xtype: 'textfield',
                margin: '10',
            },
            {
                xtype: 'button',
                text: 'test',
                listeners: {
                    click: 'testing'
                }
            }
        ]
        
    });

