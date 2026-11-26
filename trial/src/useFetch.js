import { useEffect } from "react";
function useFetch(url){
useEffect(()=>{
    axios.get(url)
    .then((response)=>{
        return response;
    })
},[])
}


import { createStore } from "redux";

const initialState = {
  count: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    default:
      return state;
  }
}

const store = createStore(counterReducer);