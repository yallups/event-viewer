import mapTickets from '../helpers/mapTickets'

//temporary
import inventoryFromAPI from '../temp-api/mock.inventory.json'

const tix = mapTickets(inventoryFromAPI.listing);

const initialState = {
  tickets: [...tix],
};


const inventory = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default inventory;
