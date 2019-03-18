import {
  ADD_TASK,
  SET_LABEL,
  SET_DUE,
  REMOVE_TASK,
  GENERATE_OUTPUT
} from "@/store/mutationTypes";
import { TODAY, generateId } from "@/shared/utils";
import { mapToRepresentationModel } from "@/shared/converters";

const createTaskModel = (label = "") => {
  const result = {
    id: generateId(),
    due: TODAY,
    label: label
  };
  return result;
};

const module = {
  state: [],
  mutations: {
    [ADD_TASK](state) {
      state.push(createTaskModel());
    },
    [SET_LABEL](state, payload) {
      const { id, value } = payload;
      state.forEach(i => {
        if (i.id === id) {
          i.label = value;
        }
        return i;
      });
    },
    [SET_DUE](state, payload) {
      const { id, value } = payload;
      state.forEach(i => {
        if (i.id === id) {
          i.due = value;
        }
        return i;
      });
    },
    [REMOVE_TASK](state, payload) {
      const id = payload.id;
      const index = state.findIndex(i => i.id === id);
      if (index === -1) return;
      state.splice(index, 1);
    },
    [GENERATE_OUTPUT](state) {
      const representation = state.map(mapToRepresentationModel);
      const data = encodeURIComponent(JSON.stringify(representation));
      window.open("events?descr=" + data, "_blank");
    }
  }
};

export default module;
