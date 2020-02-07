        Ext.define('TutorialApp.view.info.Info', {                    //ОКНО ВХОДА
            extend: 'Ext.window.Window',
            xtype: 'info',

            requires: [                                                  //указываем как классы должны подгрузиться
                'TutorialApp.view.info.infoController',      
                'TutorialApp.view.info.InfoModel',     
                'Ext.form.Panel',
            ],
            title: 'Hello',
            height: 200,
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
                xtype: 'label',
                forId: 'myFieldId',
                margin: '0 0 0 10',
                reference: 'firstNAme',
            },
            {
                xtype: 'label',
                forId: 'myFieldId',
                margin: '0 0 0 10',
                reference: 'last',          
            },
            {
                xtype: 'label',
                forId: 'myFieldId',
                margin: '0 0 0 10',
                reference: 'age',
            },
        {
                xtype: 'label',
                forId: 'myFieldId', 
                margin: '0 0 0 10',
                reference: 'email',
            }]
        
    });
