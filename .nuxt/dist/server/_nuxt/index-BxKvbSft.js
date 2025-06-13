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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-e39bc55d><header class="hero" data-v-e39bc55d><h1 data-v-e39bc55d>Web3 &amp; AI Industry Professional</h1><p class="subtitle" data-v-e39bc55d>Connecting Technology with Business Growth</p></header><section class="about" data-v-e39bc55d><h2 data-v-e39bc55d>About Me</h2><p data-v-e39bc55d> As a Web3 and AI industry professional, I specialize in driving growth and innovation at the intersection of blockchain technology and artificial intelligence. My expertise lies in building bridges between cutting-edge technology and business success. </p></section><section class="expertise" data-v-e39bc55d><h2 data-v-e39bc55d>Areas of Expertise</h2><div class="expertise-grid" data-v-e39bc55d><div class="expertise-card" data-v-e39bc55d><h3 data-v-e39bc55d>Web3 Strategy</h3><p data-v-e39bc55d>Blockchain technology implementation and community building</p></div><div class="expertise-card" data-v-e39bc55d><h3 data-v-e39bc55d>AI Solutions</h3><p data-v-e39bc55d>AI integration and optimization for business processes</p></div><div class="expertise-card" data-v-e39bc55d><h3 data-v-e39bc55d>Growth Marketing</h3><p data-v-e39bc55d>Data-driven marketing strategies for tech products</p></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e39bc55d"]]);
export {
  index as default
};
//# sourceMappingURL=index-BxKvbSft.js.map
