/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('TutorialApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',// имя

    data: {
        name: 'TutorialApp',
        mainSelction: null,
        CommentSection: null,
        border: null,
        first: '',
        last: '',
        age: '',
        email: '',
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
            get: function(data){  //когда меняются значение в дату попадают данные
            },
        },
        comments: {
            bind: {
                text: '{localtext}'
            },
            get: function(data, now){
                // now =  data.sell.get('id');
                // console.log(now)
               // return data.sell && data.sell.get('id');
                return data.text;
            }
        },
        q: {
            bind: {
                qw : '{comments}'
            },
            get: function(data){
                
                return data;
            }
        }
    },
    stores: {
        mainStore: {
            autoLoad: true,
            autoSync: true,
            fields: [
                {
                    name: 'usedId',
                    type: 'int',
                    useNull: true
                }, 'id', 'title', 'body'],
                validations: [{
                    type: 'length',
                    field: 'id',
                    min: 1
                }, {
                    type: 'length',
                    field: 'title',
                    min: 1
                }, {
                    type: 'length',
                    field: 'body',
                    min: 1
                }
            ],
            proxy: {
                type: 'rest',
                url: 'https://jsonplaceholder.typicode.com/posts',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                },
                writer: {
                    type: 'json'
                }
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
    }
});
