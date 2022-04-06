import { callsAT } from '../actionTypes/callsAT';

export function getCallsDataAC(payload) {
  return {
    type: callsAT.RECEIVE_CALLS_DATA,
    payload
  };
}

export function setRange(payload) {
  return {
    type: callsAT.SET_RANGE,
    payload
  }
}

export function setCallsType(payload) {
  return {
    type: callsAT.SET_CALLS_TYPE,
    payload
  }
}
