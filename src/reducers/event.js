//temporary
import shownEvent from '../temp-api/mock.event.json'

const initialState = {
  ...shownEvent,
};


const event = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default event;
