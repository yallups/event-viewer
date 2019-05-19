import {SELECT_TICKET, UNSELECT_TICKET} from '../actionTypes';

// TODO: may be useful in the future to pass the ticket object
export const select = ({id}) => ({ type: SELECT_TICKET, id });
export const unselect = ({id}) => ({ type: UNSELECT_TICKET, id });
