// /**                                          
//  * This class is the main view for the application. It is specified in app.js as the
//  * "mainView" property. That setting automatically applies the "viewport"
//  * plugin causing this view to become the body element (i.e., the viewport).
//  *
//  * TODO - Replace this content of this view to suite the needs of your application.
//  */
// Ext.define('TutorialApp.view.main.Main', {
//     extend: 'Ext.tab.Panel',
//     xtype: 'app-main',

//     requires: [
//         'Ext.plugin.Viewport',
//         'Ext.window.MessageBox',

//         'TutorialApp.view.main.MainController',
//         'TutorialApp.view.main.MainModel',
//         'TutorialApp.view.main.List'
//     ],

//     controller: 'main',
//     viewModel: 'main',

//     ui: 'navigation',

//     tabBarHeaderPosition: 1,
//     titleRotation: 0,
//     tabRotation: 0,

//     header: {
//         layout: {
//             align: 'stretchmax'
//         },
//         title: {
//             bind: {
//                 text: '{name}'
//             },
//             flex: 0
//         },
//         iconCls: 'fa-th-list'
//     },

//     tabBar: {
//         flex: 1,
//         layout: {
//             align: 'stretch',
//             overflowHandler: 'none'
//         }
//     },

//     responsiveConfig: {
//         tall: {
//             headerPosition: 'top'
//         },
//         wide: {
//             headerPosition: 'left'
//         }
//     },

//     defaults: {
//         bodyPadding: 20,
//         tabConfig: {
//             responsiveConfig: {
//                 wide: {
//                     iconAlign: 'left',
//                     textAlign: 'left'
//                 },
//                 tall: {
//                     iconAlign: 'top',
//                     textAlign: 'center',
//                     width: 120
//                 }
//             }
//         }
//     },

//     items: [{
//         title: 'Home',
//         iconCls: 'fa-home',
//         // The following grid shares a store with the classic version's grid as well!
//         items: [{
//             xtype: 'mainlist'
//         }]
//     }, {
//         title: 'Users',
//         iconCls: 'fa-user',
//         bind: {
//             html: '{loremIpsum}'
//         }
//     }, {
//         title: 'Groups',
//         iconCls: 'fa-users',
//         bind: {
//             html: '{loremIpsum}'
//         }
//     }, {
//         title: 'Settings',
//         iconCls: 'fa-cog',
//         bind: {
//             html: '{loremIpsum}'
//         }
//     }]
// });


/**
 * This class is the main view for the application. It is specified in `app.js` as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TutorialApp.view.main.Main', {
    extend: 'Ext.container.Container',
    

    requires: [
        'TutorialApp.view.main.MainController',
        'TutorialApp.view.main.MainModel',
        'TutorialApp.view.grid.Grid',
        'TutorialApp.view.comment.Comment',
        'TutorialApp.view.localtext.Localtext'
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
                items: [
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
                            
                            // rowdblclick: function(record, element, rowIndex, e, eOpts){
                            //     // return console.log(element.data)
                            //     var t = element.data
                                
                            //     // debugger
                            //     var userId = this.lookupController().lookupReference('userId');
                            //     // userId.add({
                            //     //     emptyText: element.data.id
                            //     // })
                            //     // var id = this.lookupController().lookupReference('id');
                            //     // var title = this.lookupController().lookupReference('title');
                            //     // var body = this.lookupController().lookupReference('body')
                            //     // console.log(userId)
                            //     // console.log(id)
                            //     // console.log(title)
                            //     // console.log(body)
                            //     // var textfield = this.lookupReference(element.data)
                            // }
                        },
                    },
                    {
                        xtype: 'main-local',
                        margin: '30 0 0 30',
                        // plugins: {
                        //     ptype: 'rowediting',
                        //   },
                        bind: {
                            store: '{localstore}',
                            selection: '{localtext}'
                        },
                        listeners: {
                            rowdblclick: 'nothingFun',
                            rowclick: 'editSome'
                        }
                        // listeners:{
                        //     rowdblclick: 'clickInfo'
                        // }
                    },
                    // {
                    //     title: 'Hello',
                    //     height: 200,
                    //     width: 400,
                    //     layout: 'fit',
                    //     margin: '30 0 0 30',
                    //     closable: true,
                    //     reference: 'fieldForLocal',
                    //     hidden: true,
                    //     border: true,
                    //     items: [ {
                    //         xtype: 'label',
                    //         forId: 'myFieldId',
                    //         margin: '0 0 0 10',
                    //         reference: 'nameFirst',
                    //     },
                    //     {
                    //         xtype: 'label',
                    //         forId: 'myFieldId',
                    //         margin: '0 0 0 10',
                    //         reference: 'lastWindow',
                    //     },
                    //     {
                    //         xtype: 'label',
                    //         forId: 'myFieldId',
                    //         margin: '0 0 0 10',
                    //         reference: 'ageWindow',
                    //     },
                    // {
                    //         xtype: 'label',
                    //         forId: 'myFieldId', 
                    //         margin: '0 0 0 10',
                    //         reference: 'emailWindow',
                    //     }]
                    // },

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
                    // {
                    //     xtype: 'button',
                    //     text: 'Update',
                    //     margin: '20',
                    //     listeners: {
                    //         click: 'updateFunc',
                    //     }
                    // },
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
                                // bind: {
                                //     emptyText: 'element.data.id'
                                // },
                                // listeners: {
                                //     add: function(component, index){
                                //         console.log(component)
                                //     }
                                // }
                                // bind: {
                                //     emptyText: '{element.data.id}'
                                // }
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
                    // {
                    //     xtype: 'main-comment',
                    //     margin: '50 0 0 30',
                    //     bind: {
                    //         store: '{comment}',
                    //         selection: '{CommentSection}', // возращает выбор сетки или возвращает выбрaнный массив
                    //     }
                    // },
                    {
                        xtype: 'button',
                        text: 'Comparison',
                        margin: '20',
                        listeners: {
                            click: 'someFunc',
                        }
                    },
                    // {
                    //     xtype: 'textfield',
                    //     fieldLabel: 'first Name',
                    //     name: 'firstName',
                    //     reference: 'firstName',
                    //     bind: {
                    //         value: '{first}'
                    //     }                 
                    // },
                    // {
                    //     xtype: 'textfield',
                    //     fieldLabel: 'last Name',
                    //     name: 'lastName',
                    //     bind: {
                    //         value: '{last}'
                    //     }                 
                    // },
                    // {
                    //     xtype: 'textfield',
                    //     fieldLabel: 'age',
                    //     name: 'age',
                    //     bind: {
                    //         value: '{age}'
                    //     }                 
                    // },
                    // {
                    //     xtype: 'textfield',
                    //     fieldLabel: 'email',
                    //     name: 'email',
                    //     bind: {
                    //         value: '{email}'
                    //     }                 
                    // },
                    // {
                    //     xtype: 'textfield',
                    //     fieldLabel: 'first name update',
                    //     name: 'first name',
                    //     reference: 'first name',
                    //     bind: {
                    //         value: '{firstUp}'
                    //     }                 
                    // },
                    // {
                    //     xtype: 'textfield',
                    //     fieldLabel: 'last name update',
                    //     name: 'last name',
                    //     bind: {
                    //         value: '{lastUp}'
                    //     }                 
                    // },
                    // {
                    //     xtype: 'textfield',
                    //     fieldLabel: 'age update',
                    //     name: 'age',
                    //     bind: {
                    //         value: '{ageUp}'
                    //     }                 
                    // },
                    // {
                    //     xtype: 'textfield',
                    //     fieldLabel: 'email update',
                    //     name: 'email',
                    //     bind: {
                    //         value: '{emailUp}'
                    //     }                 
                    // },
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
                // html: '<h2>Content appropriate for the current navigation.</h2>'
            }
        ]
    }]
});

