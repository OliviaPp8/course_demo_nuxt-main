import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-container" }, _attrs))} data-v-3142632c><div class="hero-section" data-v-3142632c><h1 class="main-title" data-v-3142632c>关于我们</h1><p class="subtitle" data-v-3142632c>致力于创造卓越的数字体验</p></div><div class="content-section" data-v-3142632c><div class="intro-card" data-v-3142632c><h2 data-v-3142632c>我们的故事</h2><p data-v-3142632c> 我们是一支充满激情的技术团队，专注于为客户提供创新的数字解决方案。 从网站开发到移动应用，从用户体验设计到技术咨询，我们始终坚持用技术改变世界的信念。 </p></div><div class="values-grid" data-v-3142632c><div class="value-card" data-v-3142632c><div class="icon" data-v-3142632c>🚀</div><h3 data-v-3142632c>创新驱动</h3><p data-v-3142632c>持续探索前沿技术，为客户带来突破性的解决方案</p></div><div class="value-card" data-v-3142632c><div class="icon" data-v-3142632c>🎯</div><h3 data-v-3142632c>专业精神</h3><p data-v-3142632c>严谨的工作态度，精湛的技术能力，确保项目质量</p></div><div class="value-card" data-v-3142632c><div class="icon" data-v-3142632c>🤝</div><h3 data-v-3142632c>客户至上</h3><p data-v-3142632c>深入理解客户需求，提供贴心的技术支持和服务</p></div></div><div class="team-section" data-v-3142632c><h2 data-v-3142632c>我们的团队</h2><p data-v-3142632c> 汇聚了前端开发、后端架构、UI/UX设计、产品管理等多领域的专业人才。 我们相信团队的力量，通过协作创造更大的价值。 </p><div class="stats" data-v-3142632c><div class="stat-item" data-v-3142632c><span class="number" data-v-3142632c>50+</span><span class="label" data-v-3142632c>成功项目</span></div><div class="stat-item" data-v-3142632c><span class="number" data-v-3142632c>3年+</span><span class="label" data-v-3142632c>行业经验</span></div><div class="stat-item" data-v-3142632c><span class="number" data-v-3142632c>99%</span><span class="label" data-v-3142632c>客户满意度</span></div></div></div><div class="contact-cta" data-v-3142632c><h2 data-v-3142632c>让我们一起创造未来</h2><p data-v-3142632c>有项目需求或技术咨询？我们随时准备为您提供专业服务。</p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact-us",
    class: "cta-button"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`联系我们`);
      } else {
        return [
          createTextVNode("联系我们")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3142632c"]]);
export {
  aboutUs as default
};
//# sourceMappingURL=about-us-BRzmtTHJ.js.map
