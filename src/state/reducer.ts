import {ADD_BIRD, ADD_BIRD_SIZE, INCREMENT_BIRD } from "../store/constants/birdConstants";
import { BirdState, initialBirdState } from './state';

export function birdReducer(state: BirdState, action): BirdState {
  switch (action.type) {
    case ADD_BIRD:
      console.log(action.payload)
      return {
          ...state,
          ...action.payload,
        };
  case ADD_BIRD_SIZE:
      console.log(action.payload)
      return {
          ...state,
          ...action.payload,
        };
  // case INCREMENT_BIRD:
  //     const bird = state.find(b => action.bird === b.name2);
  //     const birds = state.filter(b => action.bird !== b.name2);
  //     return [
  //         ...birds,
  //         {
  //         ...bird,
  //         views: bird.views + 1
  //         }
  //     ];
  default:
      return state;

  }
}
