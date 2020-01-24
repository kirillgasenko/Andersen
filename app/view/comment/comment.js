Ext.define('TutorialApp.view.comment.Comment',{
    extend: 'Ext.grid.Panel',
    xtype: 'main-comment',
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
    title: 'Comment',
    // store: store,
    iconCls: 'icon-user',
    columns: [{
        text: 'postId',
        width: 50,
        sortable: true,
        dataIndex: 'postId',
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
        header: 'name',
        width: 120,
        sortable: true,
        dataIndex: 'name',
        field: {
            xtype: 'textfield'
        },
        renderer: function(v) {
            return Ext.String.htmlEncode(v);
        }
    }, {
        text: 'email',
        width: 120,
        sortable: true,
        dataIndex: 'email',
        field: {
            xtype: 'textfield'
        },
        renderer: function(v) {
            return Ext.String.htmlEncode(v);
        }
    },  {
        text: 'body',
        flex: 1,
        sortable: true,
        dataIndex: 'body',
        field: {
            xtype: 'textfield',
            vtype: 'id'
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