import { FETCH_SURVEYS, DELETE_SURVEY } from "../actions/types";
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload;
    case DELETE_SURVEY:
      const newState = Object.assign([], state);
      const surveyIndex = state.findIndex(survey => {
        return (survey._id = action.payload._id);
      });
      newState.splice(surveyIndex, 1);
      return newState;
    default:
      return state;
  }
}
