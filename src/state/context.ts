import React from 'react';
import { BirdState, initialBirdState } from './state';
// import { GameActions } from './actions';

export const BirdContext = React.createContext<{
  state: BirdState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialBirdState,
  dispatch: () => undefined,
});
