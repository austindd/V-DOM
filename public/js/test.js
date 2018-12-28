requirejs(['VDOMComponent']: () => {
    const ROOT = document.getElementById('ROOT');
    let _GLOBAL_HTMLCOLLECTION = document.body.getElementsByTagName("*");     // Most efficient way I've found to create an array of all DOM elements in the document


    var _VIRTUAL_DOM_INDEX = {};
    var len = _GLOBAL_HTMLCOLLECTION.length;
    // create an object that maps element ID's to their respective DOM nodes
    for (let i = 0; i < len; i++) {
        let element = _GLOBAL_HTMLCOLLECTION[i];
        _VIRTUAL_DOM_INDEX[element.id] = element
    };

    console.log(_VIRTUAL_DOM_INDEX);

    let AppComponent = new VDOMComponent('AppComponent', { testProp: 'abc' });
    AppComponent.render();

});


