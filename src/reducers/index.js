import CharacterListReducer from "./CharacterListReducer";
import CharacterReducer from "./CharacterReducer";

import { combineReducers } from "redux";

export default combineReducers({
    characterList: CharacterListReducer,
    character: CharacterReducer
})