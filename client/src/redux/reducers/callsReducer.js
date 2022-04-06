import { callsAT } from "../actionTypes/callsAT";
import { getDate } from "../../helpers/dateHelper";

const initialState = { calls: [], callsInRange: [], sortedCalls: [], isSorted: false };

export const callsReducer = (state = initialState, action) => {
  switch (action.type) {

    case callsAT.DATA_RECEIVED: {
      const callsData = action.payload;
      const today = getDate();
      const callsInRange = callsData.filter((call) => call['date_notime'] === today);

      return {
        ...state,
        calls: callsData,
        callsInRange,
        isSorted: false,
      }
    }

    case callsAT.SET_RANGE: {
      const { calls: callsCopy } = state;
      const chosenDate = action.payload
      const filteredCalls = callsCopy.filter((call) => call['date_notime'] === chosenDate);

      return {
        ...state,
        callsInRange: filteredCalls,
        sortedCalls: filteredCalls,
        isSorted: false,
      }
    }

    case callsAT.SET_CALLS_TYPE: {
      const sortType = action.payload;
      const { callsInRange: callsCopy } = state;
      let filteredCalls;

      if (sortType === 'In') {
        filteredCalls = callsCopy.filter((call) => call['in_out'] === "1");
      } else if (sortType === 'Out') {
        filteredCalls = callsCopy.filter((call) => call['in_out'] === "0");
      } else {
        filteredCalls = callsCopy;
      }
      return {
        ...state,
        sortedCalls: filteredCalls,
        isSorted: true,
      }
    }

    default: {
      return state;
    }
  }
}
