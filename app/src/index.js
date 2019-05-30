import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import { Actions, jsonformsReducer } from '@jsonforms/core';
import { materialRenderers } from '@jsonforms/material-renderers';

import personSchema from './schemas/personSchema';
import addressSchema from './schemas/addressSchema';

// Create store
const store = createStore(
    combineReducers( { jsonforms: jsonformsReducer() }),
    { jsonforms: { renderers: materialRenderers }  }
);

// Combine sub-schema to single for intial store
const schema = {
    type: 'object',
    properties: {
        person: personSchema,
        address: addressSchema
    }
}

// Initialize store
store.dispatch(Actions.init({}, schema));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
