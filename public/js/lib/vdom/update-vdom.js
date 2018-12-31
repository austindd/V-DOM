
// THIS NEEDS WORK. If the component is a string, then it won't have the property 'id' (or any properties).
// Mostly trying to minimize actual DOM updates where possible.
define(['VDOMObject'], (VDOM) => {


    const updateVDOM = (component, cbfn) => {

        console.log('Component: ', component);
        console.log('VDOM: ', VDOM);
        console.log(VDOM.global_html_array);
        console.log(component.id);
        let target = {};
        if ((() => {
            target = object.keys(VDOM.virtual_dom_object).forEach((e) => {
                console.log(e);
                return (e.id === component.id) ? true : false;
            });;
            console.log(target);
            return (target.length > 0) ? true : false; 
        }) === true) {
            let targetDOMNode = document.getElementsByTagName(String(target.id));
            console.log('TargetDomNode: ', targetDOMNode);
            targetDOMNode.innerHTML = '';    
        }

        // let target = VDOM.global_html_array[`div#${component.id}`];

        console.log(`Update DOM Target: `, target);


        cbfn(target);
        // const renderToDocument = () => {
        //     targetDOMNode.item
        //     targetDomNode.createELement('DIV');

        // }
        // if (component === String(component)) {
        //     target.innerHTML = component;       /* If the component returns only a string of HTML code,
        //                                         then just add the string to the innerHTML for performance reasons.*/
        // }

    }
    return updateVDOM;

});

// Args (VDOMIndex, component, cbfn)


// --------------- Data supplied by VDOMObject.js ---------------
// {
//     _root: _ROOT,
//     _node_count: len,
//     _global_html_array, _GLOBAL_HTML_array,
//     _virtual_dom_index: _VIRTUAL_DOM_INDEX,
// }