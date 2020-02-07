    // Ext.create('Ext.window.Window', {
        Ext.define('TutorialApp.view.testin.Testin', {                    //ОКНО ВХОДА
            extend: 'Ext.window.Window',
            xtype: 'testin',

            requires: [                                                  //указываем как классы должны подгрузиться
                'TutorialApp.view.testin.testinController',    
                'TutorialApp.view.testin.testinModel',
                'TutorialApp.view.watch.Watch',
                'Ext.form.Panel',
            ],
            viewModel: {
                type: 'testin'
            },
            title: 'TestIn',
            height: 800,
            width: 600,
            controller: 'testin',
            scrollable: true,
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
                    value: '{value}',
                }
            },
            {
                xtype: 'datepicker',
                minDate: new Date(),
                handler: 'calendar',
                bind: {
                    maxWidth: '{qwe}'
                }
            },
            {
                xtype: 'textfield',
                margin: '10',
                reference: 'fieldforkirill',
                referenceHolder: true,
            },
            {
                xtype: 'textfield',
                margin: '10',
            },
            {
                xtype: 'textfield',
                margin: '10',
                bind: {
                    value: '{qwe}'
                }
            },
            {
                xtype: 'textfield',
                margin: '10',
                bind: {
                    value: '{text}'
                }
            },
            {
                xtype: 'main-watch',
                margin: '30 0 0 30',
                bind: {
                    store: '{newjson}', 
                },
            }
        ]
    });


