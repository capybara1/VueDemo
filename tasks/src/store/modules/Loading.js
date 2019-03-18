import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from "@/store/mutationTypes";

const module = {
  state: { isLoading: false },
  mutations: {
    [FETCH_DATA_BEGIN](state) {
      state.isLoading = true;
    },
    [FETCH_DATA_SUCCESS](state) {
      state.isLoading = false;
    },
    [FETCH_DATA_FAILURE](state) {
      state.isLoading = false;
    }
  }
};

export default module;
