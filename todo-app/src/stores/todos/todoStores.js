import { createStore } from 'redux'
import { todoReducers } from './todoReducers';




export const todoStores = createStore(todoReducers);