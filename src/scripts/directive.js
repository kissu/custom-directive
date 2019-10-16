import Vue from "vue";

export const AnnoyingBackground = {
  bind(el, binding, vnode) {
    el.style.backgroundColor = "blue";
  },
  update(el, binding, vnode, old) {
    let nothing = document.createComment(" ");
    if (binding.value) {
      el.style.backgroundColor = binding.arg;
      if (el.parentNode) {
        // el.parentNode.replaceChild(nothing, el);
      }
    } else {
      el.style.backgroundColor = "teal";
      if (nothing.parentNode) {
        // nothing.parentNode.replaceChild(el, nothing);
      }
    }
  }
};
Vue.directive("annoying-background", AnnoyingBackground);
