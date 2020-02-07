/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('TutorialApp.view.testin.testinModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.testin',
    data: {
        text: null
    },
    stores: {
        newjson: {
            autoLoad: true,
            // autoSync: true,
            
            fields: [
                {
                    name: 'defaultValue',
                    useNull: true
                }, 'minDate', 'value'],
                validations: [{
                    type: 'length',
                    field: 'minDate',
                    min: 1
                },
                {
                    type: 'length',
                    field: 'value',
                    min: 1
                }
            ],
            proxy: {
                type: 'ajax',
                url: '/maybeNewJSON.json',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            },
        }
    }
    
});
