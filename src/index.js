import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import { Actions, jsonformsReducer } from '@jsonforms/core';
import { materialRenderers } from '@jsonforms/material-renderers';

import personSchema from './schemas/personSchema';
import addressSchema from './schemas/addressSchema';

// Combine sub-schema to single for intial store
const schema = {
    type: 'object',
    properties: {
        person: personSchema,
        address: addressSchema
    }
}

// Create store
const store = createStore(
    combineReducers( { jsonforms: jsonformsReducer() }),  
    { jsonforms: { renderers: materialRenderers }  }
);

// Initialize store
store.dispatch(Actions.init({}, schema));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
