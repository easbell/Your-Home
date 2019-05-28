import React from 'react';
import ReactDOM from 'react-dom';
import './Style/index.scss';
import App from './containers/App/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './reducers';

export const addProject = async () => {
  const url = "https://hometrackr.herokuapp.com//api/v1/graphql"
  const response = await fetch(url, {
    body: JSON.stringify({
      "query": "query { projects { id name description address rooms { name type description }}}"
      }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = response.json()
  console.log(data)
 }

addProject()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));