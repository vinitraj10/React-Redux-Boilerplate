import React from "react";
import {render} from "react-dom";
//redux imports
import {createStore,applyMiddleware} from "redux";
//react-redux imports
import {Provider} from "react-redux";

//file imports
import Main from "./components/main";
import reducers from "./reducers";

const store = applyMiddleware()(createStore);

render(
	<Provider store={store(reducers)}>
		<Main/>
	</Provider>
	,document.getElementById('root'));