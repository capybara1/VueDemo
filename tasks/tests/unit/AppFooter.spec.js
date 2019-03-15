import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import AppFooter from "@/components/AppFooter.vue";

describe("AppFooter.vue", () => {
  it("renders props.company when passed", () => {
    const company = "TestCompany";
    const wrapper = shallowMount(AppFooter, {
      propsData: { company }
    });
    expect(wrapper.text()).to.include(company);
  });
});
