Ext.define('TutorialApp.view.main.Main', {
    extend: 'Ext.container.Container',
    

    requires: [
        'TutorialApp.view.main.MainController',
        'TutorialApp.view.main.MainModel',
        'TutorialApp.view.grid.Grid',
        'TutorialApp.view.comment.Comment',
        'TutorialApp.view.localtext.Localtext',
        'TutorialApp.view.test.Test',
        'TutorialApp.view.testin.Testin',
        'TutorialApp.view.edit.Edit',
        'TutorialApp.view.views.Views',
    ],

    xtype: 'app-main',

    controller: 'main',
    plugins: 'viewport',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'west',
        html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
        width: 250,
        split: true,
        tbar: [{
            text: 'Back',
            handler: 'onClickButton'
        }]
    },{
        region: 'center',
        xtype: 'tabpanel',
        // config: {
        //     // scrollable: true    
        //     scroll: true
        // },
        items:[
            {
                title: 'Tab 1',
                scrollable: true,
                // bind: {
                //     disabled: true,
                // },
                items: [
                    {
                        xtype: 'button',
                        text: 'Views',
                        margin: '20',
                        listeners: {
                            click: 'views'
                        }
                    },
                    {
                        xtype: 'main-grid',
                        margin: '30 0 50 30',
                        bind: {
                            store: '{mainStore}',
                            selection: '{mainSelction}'
                        },
                        listeners: {
                            select: 'onSelectGrid',
                            rowdblclick: 'rowDBL',
                        },
                    },
                    {
                        xtype: 'main-local',
                        margin: '30 0 0 30',
                        bind: {
                            store: '{localstore}',
                            selection: '{localtext}'
                        },
                        listeners: {
                            rowdblclick: 'nothingFun',
                            // rowclick: 'editSome'
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Add',
                        margin: '20',
                        fromNew: true,
                        listeners: {
                            click: 'updateFunc',
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Update',
                        margin: '20',
                        reference: 'update',
                        fromNew: false,
                        bind: {
                            disabled: '{!localtext}',
                        },
                        listeners: {
                            click: 'updateFunc'
                        }
                        
                    },
                    {
                        xtype: 'button',
                        text: 'Delete',
                        reference: 'delete',
                        // disabled: true,
                        margin: '20',
                        bind: {
                            disabled: '{!localtext}',
                        },
                        listeners: {
                            click: 'deleteFunc',
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'create',
                        margin: '20',
                        listeners: {
                            click: 'createBtn'
                        }
                    },
                    {
                        xtype: 'form',
                        margin: '30 0 0 30',
                        // hidden: true,
                        items: [
                            {
                                xtype: 'textfield', 
                                name: 'userId',
                                reference: 'userId',
                                fieldLabel: 'userId',
                                referenceHolder: true,
                            },
                            {
                                xtype: 'textfield',
                                referenceHolder: true,
                                fieldLabel: 'id',
                                name: 'id',
                                reference: 'id',
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'title',
                                name: 'title',
                                reference: 'title',
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'body',
                                name: 'body',
                                reference: 'body',
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        text: 'Comparison',
                        margin: '20',
                        listeners: {
                            click: 'someFunc',
                        }
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'field',
                        name: 'textfield',
                        disabled: true,
                        bind: {
                            emptyText: '{mainSelction.title}'
                        },
                        
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Name',
                        name: 'textfield',
                        bind: {
                            value: '{qwe}'
                        },
                        listeners: {
                            change: {
                            //    fn: 'onTownComboChange',
                               buffer: 222
                            }
                        }
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Name',
                        name: 'textfield',
                        disabled: true,
                        bind: {
                            emptyText: "{qwe}"
                        }
                    },
                ]
            }
        ]
    }]
});

