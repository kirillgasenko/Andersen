// /**
//  * This class is the view model for the Main view of the application.
//  */
// Ext.define('TutorialApp.view.main.LoginModel', {
//     extend: 'Ext.app.ViewModel',

//     alias: 'viewmodel.main',

//     data: {
//         name: 'TutorialApp',
//         mainSelction: null,
//         CommentSection: null,
//         loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//     },
//     formulas: {  //привязаься на данные
//         qwer: {
//             bind: {
//                 sell: '{mainSelction}'
//             },
//             get: function(data){  //когда меняются значение в дату попадают данные
//                 return data.sell && data.sell.get('id');
//             }
//         },
//         comments: {
//             bind: {
//                 sell: '{CommentSection}'
//             },
//             get: function(data, now){
//                 // now =  data.sell.get('id');
//                 // console.log(now)
//                 return data.sell && data.sell.get('id');
//             }
//         }
//     },
//     stores: {
//         mainStore: {
//             autoLoad: true,
//             autoSync: true,
//             // model: 'Person',
//             fields: [
//                 {
//                     name: 'usedId',
//                     type: 'int',
//                     useNull: true
//                 }, 'id', 'title', 'body'],
//                 validations: [{
//                     type: 'length',
//                     field: 'id',
//                     min: 1
//                 }, {
//                     type: 'length',
//                     field: 'title',
//                     min: 1
//                 }, {
//                     type: 'length',
//                     field: 'body',
//                     min: 1
//                 }
//             ],
//             proxy: {
//                 type: 'rest',
//                 url: 'https://jsonplaceholder.typicode.com/posts',
//                 reader: {
//                     type: 'json',
//                     rootProperty: 'data'
//                 },
//                 writer: {
//                     type: 'json'
//                 }
//             },
//             listeners: {
//                 write: function(store, operation) {
//                     var record = operation.getRecords()[0],
//                         name = Ext.String.capitalize(operation.action),
//                         verb;

//                     if (name === 'Destroy') {
//                         verb = 'Destroyed';
//                     }
//                     else {
//                         verb = name + 'd';
//                     }

//                     Ext.example.msg(name, Ext.String.format("{0} user: {1}", verb, record.getId()));

//                 }
//             }
//         },
//     }

//     //TODO - add data, formulas and/or methods to support your view
// });
