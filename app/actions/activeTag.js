import {
  ACTIVE_TAG_SET,
  ACTIVE_TAG_CLEAR
} from '_constants/ActionTypes';

import { createAction } from 'redux-actions';

export const set = createAction(ACTIVE_TAG_SET, tagId => tagId);

export const clear = createAction(ACTIVE_TAG_CLEAR);
