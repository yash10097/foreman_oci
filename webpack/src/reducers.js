import { combineReducers } from 'redux';
import EmptyStateReducer from './Components/EmptyState/EmptyStateReducer';

const reducers = {
  foremanOci: combineReducers({
    emptyState: EmptyStateReducer,
  }),
};

export default reducers;
