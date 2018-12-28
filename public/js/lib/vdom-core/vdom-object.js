
define(() => {

    const _ROOT = document.getElementById('ROOT');
    let _GLOBAL_HTML_COLLECTION = document.body.getElementsByTagName("*");     // Most efficient way I've found to create an array of all DOM elements in the document
    let _GLOBAL_HTML_ARRAY = [... _GLOBAL_HTML_COLLECTION];
    console.log(_GLOBAL_HTML_ARRAY);
    var _VIRTUAL_DOM_OBJECT = {};
    var len = _GLOBAL_HTML_ARRAY.length;
    // create an OBJECT that maps element ID's to their respective DOM nodes
    for (let i = 0; i < len; i++) {
        let element = _GLOBAL_HTML_ARRAY[i];
        _VIRTUAL_DOM_OBJECT[element.id] = element;
    };
    
    console.log(_VIRTUAL_DOM_OBJECT);
    
    return {
        root: _ROOT,
        node_count: len,
        global_html_array: _GLOBAL_HTML_ARRAY,
        virtual_dom_object: _VIRTUAL_DOM_OBJECT,
    };


});


