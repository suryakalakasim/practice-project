import { createStore } from "redux"; 
import { contactReducer } from "./reducer";
export const store=createStore(contactReducer);