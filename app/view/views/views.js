    // Ext.create('Ext.window.Window', {
Ext.define('TutorialApp.view.views.Views', {                    //ОКНО ВХОДА
    extend: 'Ext.window.Window',
    xtype: 'views',

    requires: [                                                  //указываем как классы должны подгрузиться
        'TutorialApp.view.views.viewsController',    
        'TutorialApp.view.views.viewsModel',
        'TutorialApp.view.watch.Watch',
        'Ext.form.Panel',
    ],
    viewModel: {
        type: 'views'
    },
    title: 'views',
    height: 800,
    width: 600,
    controller: 'views',
    scrollable: true,
    // layout: {
    //     type: 'absolute',
    //     // align: 'left'
    // },


    layout: {
        type: 'vbox',
        // align: 'end',
        // vertical: false,
        // left: 'begin'
        align: 'end',
        pack: 'end'
    },


    // items: [
    //     {
    //         xtype: 'textfield',
    //         x: 400,
    //         y: 700,
    //     }
    // ],

    items: [
        {
            xtype: 'textfield',
        }
    ],





    // initComponent(button){
    //     this.items = [
    //         {
    //             items: [{
    //                     xtype: 'textfield',
    //                     name : 'name',
    //                     fieldLabel: 'Название'
    //             },
    //             {
    //                 xtype: 'button',
    //                 text: 'btn',
    //                 listeners: {
    //                     click: 'button'
    //                 }
    //             },
    //             {
    //                 xtype: 'combobox',
    //                 tpl: Ext.create('Ext.XTemplate',
    //                     '<ul class="x-list-plain"><tpl for=".">',
    //                         '<li role="option" class="x-boundlist-item">{firstName} - {lastName} : {age}</li>',
    //                     '</tpl></ul>'
    //                 ),
    //                 displayTpl: Ext.create('Ext.XTemplate',
    //                     '<tpl for=".">',
    //                         '{firstName} - {lastName} : {age}',
    //                     '</tpl>'
    //                 ),
    //                 fieldLabel: 'Choose State',
    //                 bind: {
    //                     store: '{localstore}',
    //                     value: '{lol}'
    //                 },
    //                 queryMode: 'local',
    //                 // displayField: 'age',
    //                 valueField: 'id',
    //             }
                
    //             ]
    //         }
    //     ];
    //     this.callParent(arguments)
    // },
    // margin: '30 0 0 30',
    closable: true,
    // border: true,
    // items: [ 
    //     {
    //     xtype: 'textfield',
    //         margin: '10',
    //         bind: {
    //             value: '{email}lol',
    //         }
    //     },
    //     {
    //         xtype: 'textfield',
    //         margin: '10',
    //         bind: {
    //             value: '{day}',
    //         }
    //     },
    //     {
    //         xtype: 'textfield',
    //         margin: '10',
    //         bind: {
    //             value: '{year}',
    //         }
    //     },
    //     {
    //         xtype: 'datepicker',
    //         minDate: new Date(),
    //         handler: function(picker, date) {
    //             // do something with the selected date
    //         }
    //     },
    //     {
    //         xtype: 'button',
    //         text: 'btn',
    //         margin: '30',
    //         listeners: {
    //             click: 'btn'
    //         }
    //     }
    // ]
});


