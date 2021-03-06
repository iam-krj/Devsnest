import { combineReducers } from "redux";
import placeReducer from "./placeReducer";
import placeDataReducer from "./placeDataReducer";
import themeReducer from "./theme";

const rootReducer = combineReducers({
    place: placeReducer,
    placeData: placeDataReducer,
    theme: themeReducer,
});

export default rootReducer;
