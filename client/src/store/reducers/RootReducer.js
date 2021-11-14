import { combineReducers } from "redux";
import { itemStoreReducer } from "./itemStoreReducer";
import { companyReducer } from "./companyReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
    user: userReducer,
    companies: companyReducer,
    itemStore: itemStoreReducer,
});

export default rootReducer;