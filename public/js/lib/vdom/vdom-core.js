
define(['../index.js', './vdom-component', './vdom-cache'], (indexjs, VDOMComponent, VDOMCache) => {

    let VDOMCore = {
        constructor(ROOT_NODE, MAIN_APP_COMPONENT, callbackToIndexJS) {
            this.rootNode = ROOT_NODE;
            this.mainAppComponent = MAIN_APP_COMPONENT
            this.VDOM_Cached_Current = {};
            this.VDOM_Cached_Prev = {};
            this.state = {};
            // method context-binding
            this.VDOMRender = this.render.bind(this);
        },

        VDOMRender = (h = null, callbackToComponent) => {
            checkVDOMCache(h, callback = () => {
                
            });
            callbackToComponent((callbackToVDOMRender = () => {

            }));

        },
        checkVDOMCache = (h, callbackToVDOMRender) => {

            this.VDOM_Cached_Current[h.id] = h;
            callbackToVDOMRender();
            this.VDOM_Cached_Prev.forEach(nodeRef => {
                if (h.id === nodeRef.id) {
                    
                }
            });
        },

        // Determine whether the application is ready to launch
        init = () => {
            let initChecklist = []
            if (ROOT_NODE) {
                initChecklist.push(0);
                if (MAIN_APP_COMPONENT) {
                    initChecklist.push(0);
                    if (callbackToIndexJS) {
                        initChecklist.push(0);
                    } else {
                        initChecklist.push(1);
                        console.error('callbackToIndexJS is undefined');
                    }
                } else {
                    initChecklist.push(1);
                    console.error('MAIN_APP_COMPONENT is undefined');
                }
            } else {
                initChecklist.push(1);
                console.error('ROOT DOM node is undefined');
            }
            (initChecklist.some((val) => {val === 1})) ? false : true;
        }
        }




        callbackToIndexJS();



    }
)