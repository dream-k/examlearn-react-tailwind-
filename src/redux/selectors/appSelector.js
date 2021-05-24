import { createSelector } from 'reselect'

const toastrReducer = state => state.get('toastrReducer')

export const appSelectors = {
  selectToastr: toastrReducer,
}
