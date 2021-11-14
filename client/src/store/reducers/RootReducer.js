import { combineReducers } from "redux";
import { itemStoreReducer } from "./itemStoreReducer";
import { companyReducer } from "./companyReducer";
import { userReducer } from "./userReducer";
import { adReducer } from "./extrasReducer";

const rootReducer = combineReducers({
    ad: adReducer,
    user: userReducer,
    companies: companyReducer,
    itemStore: itemStoreReducer,
});

export default rootReducer;
