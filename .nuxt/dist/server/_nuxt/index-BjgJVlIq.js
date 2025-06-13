import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/pipi1/Documents/CodeWarehouse/course_demo_nuxt-main/course_demo_nuxt-main/node_modules/hookable/dist/index.mjs";
import "C:/Users/pipi1/Documents/CodeWarehouse/course_demo_nuxt-main/course_demo_nuxt-main/node_modules/unctx/dist/index.mjs";
import "C:/Users/pipi1/Documents/CodeWarehouse/course_demo_nuxt-main/course_demo_nuxt-main/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/pipi1/Documents/CodeWarehouse/course_demo_nuxt-main/course_demo_nuxt-main/node_modules/radix3/dist/index.mjs";
import "C:/Users/pipi1/Documents/CodeWarehouse/course_demo_nuxt-main/course_demo_nuxt-main/node_modules/defu/dist/defu.mjs";
import "C:/Users/pipi1/Documents/CodeWarehouse/course_demo_nuxt-main/course_demo_nuxt-main/node_modules/ufo/dist/index.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-91ac3ebb><header class="hero" data-v-91ac3ebb><h1 data-v-91ac3ebb>Olivia: Web3 &amp; AI Industry Professional</h1><p class="subtitle" data-v-91ac3ebb>Connecting Technology with Business Growth</p></header><section class="about" data-v-91ac3ebb><h2 data-v-91ac3ebb>About Me</h2><p data-v-91ac3ebb> As a Web3 and AI industry professional, I specialize in driving growth and innovation at the intersection of blockchain technology and artificial intelligence. My expertise lies in building bridges between cutting-edge technology and business success. </p></section><section class="expertise" data-v-91ac3ebb><h2 data-v-91ac3ebb>Areas of Expertise</h2><div class="expertise-grid" data-v-91ac3ebb><div class="expertise-card" data-v-91ac3ebb><h3 data-v-91ac3ebb>Web3 Strategy</h3><p data-v-91ac3ebb>Blockchain technology implementation and community building</p></div><div class="expertise-card" data-v-91ac3ebb><h3 data-v-91ac3ebb>AI Solutions</h3><p data-v-91ac3ebb>AI integration and optimization for business processes</p></div><div class="expertise-card" data-v-91ac3ebb><h3 data-v-91ac3ebb>Growth Marketing</h3><p data-v-91ac3ebb>Data-driven marketing strategies for tech products</p></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-91ac3ebb"]]);
export {
  index as default
};
//# sourceMappingURL=index-BjgJVlIq.js.map
