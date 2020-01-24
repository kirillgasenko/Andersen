Ext.define('TutorialApp.view.grid.Grid',{
    extend: 'Ext.grid.Panel',
    xtype: 'main-grid',
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
    title: 'Users',
    // store: store,
    iconCls: 'icon-user',
    columns: [{
        text: 'userId',
        width: 50,
        sortable: true,
        dataIndex: 'userId',
        renderer: function(v, meta, rec) {
            return rec.phantom ? '' : v;
        }
    }, {
        text: 'id',
        flex: 1,
        sortable: true,
        dataIndex: 'id',
        field: {
            xtype: 'textfield',
            vtype: 'id'
        }
    }, {
        header: 'title',
        width: 120,
        sortable: true,
        dataIndex: 'title',
        field: {
            xtype: 'textfield'
        },
        renderer: function(v) {
            return Ext.String.htmlEncode(v);
        }
    }, {
        text: 'body',
        width: 120,
        sortable: true,
        dataIndex: 'body',
        field: {
            xtype: 'textfield'
        },
        renderer: function(v) {
            return Ext.String.htmlEncode(v);
        }
    }],
    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: 'Add',
            iconCls: 'icon-add',
            handler: function() {
                // empty record
                var rec = new Person(),
                    rowEditing = grid.findPlugin('rowediting');

                store.insert(0, rec);
                rowEditing.startEdit(rec, 0);
            }
        }, '-', {
            itemId: 'delete',
            text: 'Delete',
            iconCls: 'icon-delete',
            disabled: true,
            handler: function() {
                var selection = grid.getView().getSelectionModel().getSelection()[0];

                if (selection) {
                    store.remove(selection);
                }
            }
        }]
    }]
});