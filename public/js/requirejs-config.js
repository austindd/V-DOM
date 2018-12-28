    // Primary config file for Require to refer to file paths throughout
    // the project component tree

    // Specifying file paths: 
    requirejs.config({
        baseUrl: '/public/js/',
        paths: {
            // Directory paths
            components: 'lib/components',
            utils: 'lib/utils',
            vdomcore: 'lib/vdom-core',
            test: 'lib/test',
            // File paths
            index: 'index',
            nodeutils: 'lib/utils/node-utils',
            austinutils: 'lib/utils/austin-utils',
            // VDOM-Core
            VDOMObject: 'lib/vdom-core/vdom-object',
            updateVDOM: 'lib/vdom-core/update-vdom',
            VDOMComponent: 'lib/vdom-core/vdom-component',
        }
    });

    define(['index'], (index) => {
        console.log('REQUIRE-CONFIG');

    })


