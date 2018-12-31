

define(() => {
    
    const vdomCache = (component, cbfn) => {
        return component;
    }
    
    let getCachedNode = (component, cachedComponentModel) => {
        return cachedComponentModel[component.id];
    }

    (componentModel) => {

        componentModel.push(

            component.id, {
                tagName: component.tagName,
                uuid: component.uuid,
                props: component.props,
                state: component.state,
                htmlString: component.htmlString,
                methods: component.propTypes.methods,
            })
        cbfn(componentModel[component.id])

    }

    let cachedComponentModel = {
        id: {
            DOMnode: null,
            component: {
               
            },
        },
    },

    return vdomCache;
});