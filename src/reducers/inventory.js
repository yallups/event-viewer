import {SELECT_TICKET} from "../actionTypes";
import mapTickets from '../helpers/mapTickets'

//temporary
import inventoryFromAPI from '../temp-api/mock.inventory.json'

const tix = mapTickets(inventoryFromAPI.listing);

const initialState = {
  selectedTicket: null,
  tickets: [...tix],
};


const inventory = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TICKET: {
      return {
        ...state,
        selectedTicket: action.id
      }
    }
    default: {
      return state;
    }
  }
};

export default inventory;
