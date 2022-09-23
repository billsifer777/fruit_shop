import {createStore} from "redux";
import {reducer_pcs} from "./reducer_pcs";

export const store=createStore(reducer_pcs)