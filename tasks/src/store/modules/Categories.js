import { FETCH_DATA_SUCCESS } from "@/store/mutationTypes";
import { generateId } from "@/shared/utils";

const module = {
  state: [],
  mutations: {
    [FETCH_DATA_SUCCESS](state, payload) {
      state.push(
        ...payload.json.categories.map(i => {
          i.id = generateId();
          return i;
        })
      );
    }
  }
};

export default module;
