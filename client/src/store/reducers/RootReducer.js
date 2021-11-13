import { combineReducers } from "redux";
import { itemStoreReducer } from "./itemStoreReducer";
import { projectsReducer } from "./projectReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
    user: userReducer,
    projects: projectsReducer,
    itemStore: itemStoreReducer,
});

export default rootReducer;