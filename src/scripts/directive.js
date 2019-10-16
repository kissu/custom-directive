import Vue from "vue";

export const AnnoyingBackground = {
  bind(el, binding, vnode) {
    el.style.backgroundColor = "blue";
  },
  update(el, binding, vnode, old) {
    let pizza = document.createComment(" ");
    if (binding.value) {
      el.style.backgroundColor = binding.arg;
      if (el.parentNode) {
        // el.parentNode.replaceChild(pizza, el);
      }
    } else {
      el.style.backgroundColor = "teal";
      if (pizza.parentNode) {
        // pizza.parentNode.replaceChild(el, pizza);
      }
    }
  }
};
Vue.directive("annoying-background", AnnoyingBackground);
