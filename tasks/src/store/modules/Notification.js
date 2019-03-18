import { FETCH_DATA_FAILURE } from "@/store/mutationTypes";

const module = {
  state: {},
  mutations: {
    [FETCH_DATA_FAILURE](state) {
      state.message =
        "Something went wrong: unable to load 'data.json'. Please ensure network connectivity and try again.";
      state.level = "error";
    }
  }
};

export default module;
