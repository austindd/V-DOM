    // Primary config file for Require to refer to file paths throughout
    // the project component tree

    // Specifying file paths: 
    requirejs.config({
        baseUrl: '/public/js/',
        paths: {
            // Directory paths
            components: 'lib/components',
            utils: 'lib/utils',
            vdom: 'lib/vdom',
            test: 'lib/test',
            // File paths
            index: 'index',
            nodeutils: 'lib/utils/node-utils',
            austinutils: 'lib/utils/austin-utils',
            // VDOM
            VDOMObject: 'lib/vdom/vdom-object',
            updateVDOM: 'lib/vdom/update-vdom',
            VDOMComponent: 'lib/vdom/vdom-component',
        }
    });

    define(['index'], (index) => {
        console.log('REQUIRE-CONFIG');

    })


