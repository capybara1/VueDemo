import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";
import actions from "./actions";
import TasksModule from "@/store/modules/Tasks";
import CategoriesModule from "@/store/modules/Categories";
import TemplatesModule from "@/store/modules/Templates";
import NotificationModule from "@/store/modules/Notification";
import LoadingModule from "@/store/modules/Loading";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

const store = new Vuex.Store({
  modules: {
    tasks: TasksModule,
    categories: CategoriesModule,
    templates: TemplatesModule,
    notification: NotificationModule,
    loading: LoadingModule
  },
  mutations,
  actions,
  strict: debug
});

export default store;
