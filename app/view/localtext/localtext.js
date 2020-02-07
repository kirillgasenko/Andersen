Ext.define('TutorialApp.view.localtext.Localtext',{
    extend: 'Ext.grid.Panel',
    xtype: 'main-local',
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
        text: 'first Name',
        width: 100,
        sortable: true,
        dataIndex: 'firstName',
        // renderer: function(v, meta, rec) {
        //     return rec.phantom ? '' : v;
        // }
    }, {
        text: 'last Name',
        flex: 1,
        sortable: true,
        dataIndex: 'lastName',
        field: {
            xtype: 'textfield',
            // vtype: 'id'
        },
        tooltip: 'all field must be full',
        renderer: function(value, a){
            debugger
            if(value === ''){
                
                console.log('privetik')
            }
            //console.log(value)
            // evaluates `value` to append either `person' or `people`
            //return alert(value, 'firstName', 'first Name');
            return value;
        },
    }, {
        header: 'age',
        width: 120,
        sortable: true,
        dataIndex: 'age',
        field: {
            xtype: 'textfield'
        },
        // renderer: function(v) {
        //     return Ext.String.htmlEncode(v);
        // }
    }, {
        text: 'email',
        width: 120,
        sortable: true,
        dataIndex: 'email',
        field: {
            xtype: 'textfield'
        },
        // renderer: function(v) {
        //     return Ext.String.htmlEncode(v);
        // }
    }],
    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: 'Add',
            iconCls: 'icon-add',
                handler: function() {
                    // empty record
                    var rec = new localstore(),
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