import { FETCH_DATA } from "./actionTypes";
import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from "./mutationTypes";

const actions = {
  [FETCH_DATA]({ commit }) {
    commit(FETCH_DATA_BEGIN);
    return fetch("/data.json")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        commit(FETCH_DATA_SUCCESS, { json });
        return json;
      })
      .catch(error => commit(FETCH_DATA_FAILURE, error));
  }
};

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export default actions;
