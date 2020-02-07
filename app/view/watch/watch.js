Ext.define('TutorialApp.view.watch.Watch',{
    extend: 'Ext.grid.Panel',
    xtype: 'main-watch',
    // renderTo: document.body,
    // plugins: {
    //     rowediting: {
    //         listeners: {
    //             cancelEdit: function(rowEditing, context) {
    //             // Canceling editing of a locally added, unsaved record: remove it
    //                 if (context.record.phantom) {
    //                     store.remove(context.record);
    //                 }
    //             }
    //         }
    //     }
    // },
    width: 500,
    height: 330,
    frame: true,
    title: 'Local Users',
    // store: store,
    iconCls: 'icon-user',
    columns: [{
        text: 'defaultValue',
        width: 100,
        sortable: true,
        dataIndex: 'defaultValue',
        // renderer: function(v, meta, rec) {
        //     return rec.phantom ? '' : v;
        // }
    }, {
        text: 'minDate',
        flex: 1,
        sortable: true,
        dataIndex: 'minDate',
        field: {
            xtype: 'textfield',
            // vtype: 'id'
        }
    },

    {
        text: 'value',
        width: 120,
        sortable: true,
        dataIndex: 'value',
        field: {
            xtype: 'textfield'
        },
        // renderer: function(v) {
        //     return Ext.String.htmlEncode(v);
        // }
    }],
    dockedItems: [{
        xtype: 'toolbar',

    }]
});