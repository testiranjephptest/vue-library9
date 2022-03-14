'use strict';

var vue = require('vue');

var script$1 = {
  name: 'InputText',
  props: {
title: Array
}

};

const _hoisted_1 = /*#__PURE__*/vue.createElementVNode("h1", null, "welcome", -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/vue.createElementVNode("input", { type: "text" }, null, -1 /* HOISTED */);

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    vue.createTextVNode(" " + vue.toDisplayString($props.title), 1 /* TEXT */)
  ], 64 /* STABLE_FRAGMENT */))
}

script$1.render = render$1;
script$1.__file = "src/InputText.vue";

var script = {
  name: 'InputTextarea'
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("textarea"))
}

script.render = render;
script.__file = "src/InputTextarea.vue";

var components = { InputTextarea: script, InputText: script$1 };

const plugin = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  }
};

module.exports = plugin;
