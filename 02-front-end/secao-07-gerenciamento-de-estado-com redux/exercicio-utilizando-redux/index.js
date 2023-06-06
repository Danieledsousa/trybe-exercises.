import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const INITIAL_STATE = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
  };

const reducer = (state = INITIAL_STATE, action) => {
    if(action.type === 'NEXT_COLOR') {
        return { ...state,
            index: state.index === state.colors.length - 1 ? 0 : state.index + 1,}
    }else if(action.type === 'PREVIOUS_COLOR'){
        return { ...state,
            index: state.index === 0 ? state.colors.length - 1 : state.index - 1,}
    }else {
        state
    }
}


const store = createStore(reducer, composeWithDevTools());

const btnPreviousColor = document.getElementById('previous');
const btnNextColor = document.getElementById('next');


btnNextColor.addEventListener('click', () => {
   store.dispatch({type: 'NEXT_COLOR'}); 
    
})

btnPreviousColor.addEventListener('click', () => {
   store.dispatch({type: 'PREVIOUS_COLOR'});
})

store.subscribe(() => {
    const { colors, index } = store.getState()
    document.getElementById('value').innerHTML = colors[index];
    document.getElementById('container').style.backgroundColor = colors[index];
})