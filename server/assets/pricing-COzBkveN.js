import { U as jsxRuntimeExports } from "./worker-entry-DMDGzCEL.js";
import { L as Link, S as SITE } from "./router-7FeldB5W.js";
import { S as SiteHeader, a as SiteFooter, F as FloatingWhatsApp } from "./FloatingWhatsApp-BX5qMajw.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const FACTORS = [{
  icon: "📚",
  title: "نوع الخدمة",
  desc: "بحث، رسالة، تحليل إحصائي، ترجمة..."
}, {
  icon: "📏",
  title: "حجم العمل",
  desc: "عدد الصفحات / الفصول / الحجم الكلي للبيانات"
}, {
  icon: "⏱️",
  title: "المدة الزمنية",
  desc: "الطلبات المستعجلة لها سعر مختلف"
}, {
  icon: "🎓",
  title: "المرحلة العلمية",
  desc: "بكالوريوس / ماجستير / دكتوراه"
}, {
  icon: "🔬",
  title: "التخصص",
  desc: "بعض التخصصات تتطلب جهداً متخصصاً أعلى"
}, {
  icon: "📑",
  title: "متطلبات إضافية",
  desc: "مراجع نادرة، تدقيق، تنسيق خاص..."
}];
const STEPS = [{
  n: "1",
  title: "أرسل تفاصيل طلبك",
  desc: "املأ النموذج أو راسلنا عبر واتساب"
}, {
  n: "2",
  title: "نراجع ونحدد السعر",
  desc: "نرسل لك عرض سعر دقيق خلال ساعات"
}, {
  n: "3",
  title: "اعتماد ودفع جزئي",
  desc: "نبدأ العمل بعد الموافقة"
}, {
  n: "4",
  title: "تسليم العمل",
  desc: "تسلم العمل في الموعد المحدد + تعديلات مجانية"
}];
function PricingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", dir: "rtl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-5 text-white", style: {
      background: "var(--grad-hero)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-5xl font-extrabold mb-3", children: "الأسعار" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/85 max-w-2xl mx-auto", children: "نقدم سعراً مخصصاً لكل طلب — لأن كل عمل بحثي مختلف. أرسل تفاصيل طلبك واحصل على عرض سعر مجاني خلال ساعات." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1100px] mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-extrabold mb-2", children: "العوامل التي تحدد السعر" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "نحرص على الشفافية الكاملة في تسعير خدماتنا" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: FACTORS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5 shadow-[var(--shadow-card)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl flex items-center justify-center text-white text-xl mb-3", style: {
          background: "var(--grad-accent)"
        }, children: f.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold mb-1", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: f.desc })
      ] }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-5 bg-[oklch(0.96_0.02_245)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1100px] mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-extrabold mb-2", children: "كيف نعمل؟" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "خطوات بسيطة من الطلب إلى التسليم" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5", children: STEPS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5 shadow-[var(--shadow-card)] text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 mx-auto rounded-full flex items-center justify-center text-white text-xl font-extrabold mb-3", style: {
          background: "var(--grad-accent)"
        }, children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold mb-1", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: s.desc })
      ] }, s.n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[900px] mx-auto rounded-3xl p-10 text-center text-white", style: {
      background: "var(--grad-hero)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-extrabold mb-2", children: "احصل على عرض سعر مجاني الآن" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 mb-6", children: "ردّ خلال ساعات — بدون أي التزام" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white bg-[image:var(--grad-accent)] shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition", children: "📝 اطلب عرض سعر" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: SITE.whatsappUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white border border-white/40 hover:bg-white/10 transition", children: "💬 تواصل عبر واتساب" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWhatsApp, {})
  ] });
}
export {
  PricingPage as component
};
