import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import  Main  from "./Main";
import  Detail  from "./Detail";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./Reducer";

const App=() =>{
  const store = createStore(reducer);
  console.log(store);
  return (
 <Provider store={store}>
 <Router>
<Route exact path="/" component={Main}/>
<Route exact path="/detail/:postId" component={Detail}/>
 </Router>
 </Provider>
  );
}

export default App;
