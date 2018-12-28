


define(['./lib/vdom-core/vdom-component'], (VDOMComponent) => {
    console.log('Running index.js in browser');



    let AppComponent = new VDOMComponent('AppComponent', { testProp: 'abc' });

    let htmlROOT = document.getElementById('ROOT');
    htmlROOT.innerHTML = '';
    let htmlString = AppComponent.render(`<div><h1>Hello World</h1></div>`);
    console.log(htmlString);


    htmlROOT.htmlContent = (htmlString);
    function appendHtml(el, str) {
        var div = document.createElement('div');
        div.innerHTML = str;
        while (div.children.length > 0) {
            el.appendChild(div.children[0]);
        }
    }

    let _GLOBAL_HTML_COLLECTION = document.body.getElementsByTagName("*");     // Most efficient way I've found to create an array of all DOM elements in the document
    console.log('New DOM', _GLOBAL_HTML_COLLECTION);


    // let AppMain = new VDOMComponent(null, {testProp: 'abcde'});
    // AppMain.render(`
    //     <div>
    //         <p>Hello World</p>
    //     </div>

    //     `)

});

