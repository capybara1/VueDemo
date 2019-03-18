import { FETCH_DATA_SUCCESS } from "@/store/mutationTypes";

const module = {
  state: [],
  mutations: {
    [FETCH_DATA_SUCCESS](state, payload) {
      state.push(...payload.json.templates);
    }
  }
};

export default module;
