




// What kind of data needs to be received from server?

const StateManager = class {
    constructor(
        props = {... rest},
        priorityMap = {},
    ) {
        this.props = props;
        this.priorityMap = priorityMap;
    };
    rankedServerRequest() {};
    updatePriorityMap(key, newRank) {
        if (key === (undefined || null)) throw console.error("Invalid Key Argument");
        if (newRank === (undefined || null)) throw console.error("Invalid Rank Argument");
        
        Object.keys(this.priorityMap).forEach(x => {
            if (x === key) this.priorityMap[x] = newRank;
        });
        
    };
}; // Should dictate when each client node's state change will get processed


const ClientComNode = class {
    constructor(
        props = {
            header: {key: null},
            component: {htmlString: ''},
            state: {rank: 0, isReady: false, isListening: false, ... rest},
            ... rest
        }, callback = null
    ) {
        this.props = props;
        this.callback = callback;
    };
    setNewState(newState = {}) {
        Object.keys(newState).forEach((x) => {
            this.props.state[x] = newState[x];
        });
        return;
    };
    getStream() {return 'inside getStream()';};
    postStream() {return 'inside postStream()';};
};

const myCallbackFn = (val) => {
    console.log(`This is a useless callback function, \r\nbut it returns this value: ${val}`);
    return val;
};



const findArrayMax = (arr = []) => {
    return Math.max(... arr);
}
const findArrayMin = (arr = []) => {
    return Math.min(... arr);
}


// ===============================  Test Area  ===============================

let testStateManager = new StateManager({}, {a: 1, b: 2, c: 3, d: 4});

console.log(`\r\nOriginal priorityMap:\r\n`, testStateManager.priorityMap);
testStateManager.updatePriorityMap('a', 100000);
console.log(`\r\nNew priorityMap:\r\n`, testStateManager.priorityMap);

let testCCN = new ClientComNode(
    {
        header: {name: 'Austin', age: '27', location: 'Birmingham'},
        component: {htmlString: '<h2>Test Component</h2>'},
        state: {isReady: false, isListening: false},
        otherProp1: "another prop",
        otherProp2: 2,
        otherProp3: {a: 1, b: 2, c: 3}
    }, myCallbackFn
);

// testing the setState() function inside ClientComNode
console.log(`\r\nOriginal State:\r\n`, testCCN.props.state);
testCCN.setNewState({isReady: true, isListening: true, addedStateProp: 42});
console.log(`\r\nUpdated State:\r\n`, testCCN.props.state);


// testing findArrayMax() and findArrayMin()
console.log(findArrayMax([3,8,10,2,4,1,16,8,3,10]));
console.log(findArrayMin([3,8,10,2,4,1,16,8,3,10]));