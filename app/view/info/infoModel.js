

Ext.define('TutorialApp.view.info.InfoModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.info',
    data: {
        name: 'TutorialApp',
        mainSelction: null,
        CommentSection: null,

        localtext: null,
        // qwer: null,
        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    formulas: {  //привязаться на данные
        qwer: {
            bind: {
                sell: '{mainSelction}',
                sell2: '{CommentSection}',
                text: 'localtext'
            },
            get: function(data){ 
            },

        },
    },
    localstore: {
        autoLoad: true,
        // autoSync: true,
        
        fields: [
            {
                name: 'firstName',
                useNull: true
            }, 'lastName', 'age', 'email'],
            validations: [{
                type: 'length',
                field: 'lastName',
                min: 1
            }, {
                type: 'length',
                field: 'age',
                min: 1
            }, {
                type: 'length',
                field: 'email',
                min: 1
            }
        ],
        proxy: {
            type: 'ajax',
            url: '/users.json',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        },
    }
  
});


        