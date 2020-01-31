/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('TutorialApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

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
                // console.log(data)
                // return (data.sell && data.sell.get('id')) === (data.sell2 && data.sell2.get('id')) ? alert('everything good') : alert('so bad everything');
                // return (data.sell && data.sell.get('id') !==3) ? true : false
            },
            // get: function(data, some){
            //     some = document.getElementById('textfield-1050-inputEl');
            //     some = (data.sell || data.sell.get('id'))
            //     return some
            // }
            // get: function(data, name){
            //     name = data.sell;
            //     data.sell2 = name
            // }
        },
        // textFieldNew: {
        //     bind: {
        //         info : '{qwer}'
        //     },
        //     get: function(data){
        //         return info
        //     }
        // },
        comments: {
            bind: {
                sell: '{CommentSection}'
            },
            get: function(data, now){
                // now =  data.sell.get('id');
                // console.log(now)
                return data.sell && data.sell.get('id');
            }
        }
    },
    stores: {
        mainStore: {
            autoLoad: true,
            autoSync: true,
            // model: 'Person',
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
            // listeners: {
            //     write: function(store, operation) {
            //         var record = operation.getRecords()[0],
            //             name = Ext.String.capitalize(operation.action),
            //             verb;

            //         if (name === 'Destroy') {
            //             verb = 'Destroyed';
            //         }
            //         else {
            //             verb = name + 'd';
            //         }

            //         Ext.example.msg(name, Ext.String.format("{0} user: {1}", verb, record.getId()));

            //     }
            // }
        },
        // newField: {
        //     autoLoad: true,
        //     autoSync: true,
        // },
        // comment: {
        //     autoLoad: true,
        //     autoSync: true,
        //     // model: 'Person',
        //     fields: [
        //         {
        //             name: 'postId',
        //             type: 'int',
        //             useNull: true
        //         }, 'id', 'name', 'email', 'body'],
        //         validations: [{
        //             type: 'length',
        //             field: 'id',
        //             min: 1
        //         }, {
        //             type: 'length',
        //             field: 'name',
        //             min: 1
        //         }, {
        //             type: 'length',
        //             field: 'email',
        //             min: 1
        //         },{
        //             type: 'length',
        //             field: 'body',
        //             min: 1
        //         }
        //     ],
        //     proxy: {
        //         type: 'rest',
        //         url: 'https://jsonplaceholder.typicode.com/comments',
        //         reader: {
        //             type: 'json',
        //             rootProperty: 'data'
        //         },
        //         writer: {
        //             type: 'json'
        //         }
        //     },
        //     // listeners: {
        //     //     write: function(store, operation) {
        //     //         var record = operation.getRecords()[0],
        //     //             name = Ext.String.capitalize(operation.action),
        //     //             verb;

        //     //         // if (name === 'Destroy') {
        //     //         //     verb = 'Destroyed';
        //     //         // }
        //     //         // else {
        //     //         //     verb = name + 'd';
        //     //         // }

        //     //         Ext.example.msg(name, Ext.String.format("{0} user: {1}", verb, record.getId()));

        //     //     }
        //     // }
        // },
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
            // listeners: {
            //     write: function(store, operation) {
            //         var record = operation.getRecords()[0],
            //             name = Ext.String.capitalize(operation.action),
            //             verb;

            //         if (name) {
            //             verb = name;
            //         }
                    

            //       //  Ext.example.msg(name, Ext.String.format("{0} user: {1}", verb, record.getId()));

            //     }
            // }
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});
