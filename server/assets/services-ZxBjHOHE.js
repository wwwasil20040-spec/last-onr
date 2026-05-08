import { U as jsxRuntimeExports } from "./worker-entry-DMDGzCEL.js";
import { L as Link } from "./router-7FeldB5W.js";
import { S as SERVICES } from "./services-data-CSAz0Sya.js";
import { S as SiteHeader, a as SiteFooter, F as FloatingWhatsApp } from "./FloatingWhatsApp-BX5qMajw.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", dir: "rtl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-5 text-white", style: {
      background: "var(--grad-hero)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-5xl font-extrabold mb-3", children: "خدماتنا الأكاديمية" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/85 max-w-2xl mx-auto", children: "اختر الخدمة المناسبة لك — نقدم دعماً متخصصاً في كل مرحلة من رحلتك البحثية." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-16 px-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: SERVICES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-card border border-border rounded-2xl p-6 shadow-[var(--shadow-card)] hover:-translate-y-1 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl mb-4", style: {
          background: "var(--grad-accent)"
        }, children: s.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold mb-2", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-3", children: s.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: s.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold px-2.5 py-1 rounded text-primary bg-[oklch(0.94_0.03_245)]", children: t }, t)) })
      ] }, s.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white bg-[image:var(--grad-accent)] shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition", children: "📝 اطلب الخدمة الآن" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWhatsApp, {})
  ] });
}
export {
  ServicesPage as component
};
