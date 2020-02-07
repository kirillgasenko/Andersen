/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('TutorialApp.view.test.testModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.test',

    data: {
        value: '',
        name: 'TutorialApp',
        mainSelction: null,
        CommentSection: null,
        mytext: '{mytext}'
    },
    formulas: {  //привязаться на данные
        qwer: {
            bind: {
                sell: '{mainSelction}',
                sell2: '{CommentSection}',
                text: 'localtext'
            },
        },

    }

    
});
