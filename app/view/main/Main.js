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
        items:[
            {
                title: 'Tab 1',
                items: [
                    {
                        xtype: 'main-grid',
                        margin: '30 0 0 0',
                        bind: {
                            store: '{mainStore}',
                            selection: '{mainSelction}'
                        },
                        listeners: {
                            select: 'onSelectGrid'
                        },
                    },
                    {
                        xtype: 'main-comment',
                        margin: '50 0 0 0',
                        bind: {
                            store: '{comment}',
                            selection: '{CommentSection}',
                            border: '{border}'
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Comparison',
                        margin: '20',
                        listeners: {
                            click: 'someFunc',
                        }
                    }
                ]
                // html: '<h2>Content appropriate for the current navigation.</h2>'
            }
        ]
    }]
});

