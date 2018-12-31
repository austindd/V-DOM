
define(['./vdom-cache'], (vdomCache) => {
    
/* Will be called by vdomComponent(component, cbfn = () => {})
    The vdomComponent will send the component metadata in 'component' param
    metaData = {
        id: id,
        attributes: {... rest}
        children:
        props:
        state:
        prevState:
        domNode
    }
*/

    


    //cbfn() in this case will return data back to the component to continue render tree
    const vdomRender = (component, VDOMCachedModel, cbToComponent) => {
        // send metadata to vdomCache for comparison to VDOMCachedModel
        let ComponentToBeRendered = vdomCache(component);
        /* ^ vdomCache should return
            ComponentToBeRendered = {
                shouldRender: true || false, // based on boolean var specifying, and true also confirms it has been compared and cached
                metaData: {
                    
                },
                pushToRenderArray:  
            }
        */
        if  (ComponentToBeRendered.shouldRender === true) {
            if (ComponentToBeRendered.id) {
                ComponentToBeRendered.renderArray.push(component.domNode);
            }
        }

    }









})