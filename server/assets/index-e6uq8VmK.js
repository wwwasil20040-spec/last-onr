import { U as jsxRuntimeExports } from "./worker-entry-DMDGzCEL.js";
import { S as SITE, L as Link } from "./router-7FeldB5W.js";
import { S as SERVICES } from "./services-data-CSAz0Sya.js";
import { S as SiteHeader, a as SiteFooter, F as FloatingWhatsApp } from "./FloatingWhatsApp-BX5qMajw.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const STATS = [{
  val: "+500",
  lbl: "بحث منجز"
}, {
  val: "+200",
  lbl: "باحث وأكاديمي"
}, {
  val: "98%",
  lbl: "رضا العملاء"
}, {
  val: "24/7",
  lbl: "دعم مستمر"
}];
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", dir: "rtl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative text-white text-center py-20 px-5 overflow-hidden", style: {
      background: "var(--grad-hero)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none", style: {
        background: "radial-gradient(circle at 20% 30%, rgba(34,193,195,0.25), transparent 50%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-[1200px] mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sm mb-6", children: "✨ خبرة أكاديمية موثوقة" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl mx-auto mb-6", children: [
          SITE.brandName,
          " لخدمات",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-br from-[oklch(0.74_0.14_195)] to-[oklch(0.85_0.1_190)] bg-clip-text text-transparent", children: "البحوث والمشاريع العلمية" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl mx-auto mb-10 text-base md:text-lg text-white/85", children: "نقدم خدمات إعداد البحوث، الرسائل الجامعية، التحليل الإحصائي (SPSS, R)، وحل مسائل الرياضيات لجميع الكليات ومراحل البكالوريوس والماجستير والدكتوراه." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white bg-[image:var(--grad-accent)] shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition", children: "📝 اطلب خدمة ←" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white border border-white/40 hover:bg-white/10 transition", children: "📋 استعرض الخدمات" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-14", children: STATS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl md:text-3xl font-extrabold bg-gradient-to-br from-[oklch(0.74_0.14_195)] to-[oklch(0.9_0.08_190)] bg-clip-text text-transparent", children: s.val }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs md:text-sm text-white/75 mt-1", children: s.lbl })
        ] }, s.lbl)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-5", style: {
      background: "linear-gradient(180deg, var(--background), oklch(0.95 0.02 245))"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-extrabold mb-3", children: "خدماتنا الأكاديمية" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "حلول متكاملة للباحثين وطلاب الدراسات العليا" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: SERVICES.slice(0, 6).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-card border border-border rounded-2xl p-6 shadow-[var(--shadow-card)] hover:-translate-y-1 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl mb-4", style: {
          background: "var(--grad-accent)"
        }, children: s.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold mb-2", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: s.desc })
      ] }, s.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "inline-flex items-center gap-2 text-[var(--primary-2)] font-bold hover:underline", children: "عرض جميع الخدمات ←" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-4xl font-extrabold mb-3", children: [
          "عن مؤسسة ",
          SITE.brandName
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "مؤسسة متخصصة في تقديم الخدمات البحثية بمعايير جودة عالية" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5", children: [{
        icon: "🎯",
        title: "الدقة والاحترافية",
        desc: "نلتزم بمعايير البحث العلمي الرصين."
      }, {
        icon: "⏱️",
        title: "الالتزام بالمواعيد",
        desc: "نسلّم أعمالك في الوقت المحدد."
      }, {
        icon: "🤝",
        title: "السرية التامة",
        desc: "نضمن خصوصية بياناتك وأبحاثك."
      }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 shadow-[var(--shadow-card)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl mb-4", style: {
          background: "var(--grad-accent)"
        }, children: c.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold mb-2", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: c.desc })
      ] }, c.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1200px] mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl p-10 text-center text-white", style: {
      background: "var(--grad-hero)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-extrabold mb-2", children: "جاهز لبدء مشروعك البحثي؟" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 mb-6", children: "احصل على عرض سعر خلال ساعات" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white bg-[image:var(--grad-accent)] shadow-[var(--shadow-glow)]", children: "📝 اطلب خدمة" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: SITE.whatsappUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white border border-white/40 hover:bg-white/10 transition", children: "💬 تواصل عبر واتساب" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWhatsApp, {})
  ] });
}
export {
  HomePage as component
};
