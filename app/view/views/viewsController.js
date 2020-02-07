Ext.define('TutorialApp.view.views.viewsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.views',

    btn(button){
        
        // debugger
        // var dt = new Date();
        //     const m = button.lookupViewModel().get('month');
        //     const d = button.lookupViewModel().get('day');
        //     const y = button.lookupViewModel().get('year')
        //     console.log(m + '-' + d + '-'+ y)
        //     console.log(Ext.Date.parse(m + '-' + d, "m-d"))
        //     console.log(Ext.Date.parse(y , "Y"))
        // console.log(Ext.Date.format(new Date(), "m-Y-d h:i:s"))
    },
    button(button){
        // console.log(button.up().down())
        // debugger
        // var t = new Ext.Template("<div>Hello {0}.</div>");
        // t.append(button.up().down('textfield'), ['foo']);
        
        // alert('hifvh')

    //     var tiobeData = [
    //         {
    //             position: 1,
    //             title: 'C',
    //             rate: '19.224%'
    //         }, {
    //             position: 2,
    //             title: 'Java',
    //             rate: '17.455%'
    //         }, {
    //             position: 3,
    //             title: 'Objective-C',
    //             rate: '10.383%'
    //         }, {
    //             position: 4,
    //             title: 'C++',
    //             rate: '9.689%'
    //         }, {
    //             position: 5,
    //             title: 'PHP',
    //             rate: '5.732%'
    //     }];
    //     var tpl = new Ext.XTemplate
    //     ('<h1>TIOBE Rate</h1>',
    //     '<table>',
    //     '<tr>',
    //     '<td>Позиция на Ноябрь 2012</td>',
    //     '<td>Язык программирования</td>',
    //     '<td>Рейтинг</td>',
    //     '</tr>',
    //     '<tpl for=".">',
    //         '<tr>',
    //         '<td>{position}</td>',
    //         '<td>{title}</td>',
    //         '<td>{rate}</td>',
    //         '</tr>',
    //     '</tpl>',
    //     '</table>');                          
    // tpl.overwrite(Ext.getBody(), tiobeData);

    // var t = new Ext.Template("<div>Hello {0}.</div>");
    // t.append('views-1063-innerCt', ['foo']);



    // var data = {
    //     name: 'Don Griffin',
    //     title: 'Senior Technomage',
    //     company: 'Sencha Inc.',
    //     drinks: ['Coffee', 'Water', 'More Coffee'],
    //     kids: [
    //         { name: 'Aubrey',  age: 17 },
    //         { name: 'Joshua',  age: 13 },
    //         { name: 'Cale',    age: 10 },
    //         { name: 'Nikol',   age: 5 },
    //         { name: 'Solomon', age: 0 }
    //     ]
    // };
    // var tpl = new Ext.XTemplate(
    //     '<p>Name: {name}</p>',
    //     '<p>Company: {company}</p>',
    //     '<tpl for="drinks">',       // process the data.kids node
    //         '<p>{#} {.}</p>',  // use current array index to autonumber
    //     '</tpl></p>',
    //     '<p>Kids: ',
    //     '<tpl for="kids">',       // process the data.kids node
    //         '<p>{#}. {age}</p>',  // use current array index to autonumber
    //     '</tpl></p>'
    // );
    // tpl.insertAfter('views-1063-innerCt', data);

    }
    
});
