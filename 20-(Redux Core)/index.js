// import redux from "redux"

const redux = require("redux");

const createStore = redux.createStore;


// step 1 => product

const BUY_HTML = "BUY_HTML";


// step 2 => product functionality

function buy_html() {
    return{
        type:BUY_HTML,
        info:"Hyper Text Markup Language"
    }
}


// step 3 => InitialValue

const initValue = {
    noOfHtmlBook:10
}

// step 4 =>
const reducer = (state=initValue, action) =>{

    switch(action.type){
        case BUY_HTML : return {
            ...state,
            noOfHtmlBook:state.noOfHtmlBook -1
        }
        default : return state
    }

}

// step 5 => Store


const store = createStore(reducer);



// step 6 => 

    console.log("store update", store.getState());
    store.subscribe(()=> console.log("updated store value", store.getState()))
     store.dispatch(buy_html());
    


