import { APPLY_CATEGORY } from "@/store/mutationTypes";
import { TODAY, generateId } from "@/shared/utils";

const createTaskModel = (label = "") => {
  const result = {
    id: generateId(),
    due: TODAY,
    label: label
  };
  return result;
};

const mutations = {
  [APPLY_CATEGORY](state, payload) {
    const id = payload.id;
    const category = state.categories.find(e => e.id === id);
    if (!category) return state;
    const tags = category.tags;
    const newLabels = state.templates
      .filter(i => i.tags.some(t => tags.includes(t)))
      .map(i => i.label);
    if (newLabels.length === 0) return state;
    const newTasks = newLabels.map(l => createTaskModel(l));
    state.tasks.push(...newTasks);
  }
};

export default mutations;
