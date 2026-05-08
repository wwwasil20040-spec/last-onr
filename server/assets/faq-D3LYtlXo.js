import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-DMDGzCEL.js";
import { L as Link, S as SITE } from "./router-7FeldB5W.js";
import { S as SiteHeader, a as SiteFooter, F as FloatingWhatsApp } from "./FloatingWhatsApp-BX5qMajw.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const FAQS = [{
  q: "كيف أحصل على عرض سعر؟",
  a: "أرسل تفاصيل طلبك عبر نموذج التواصل أو واتساب، وسنرد عليك بعرض سعر مجاني خلال ساعات قليلة."
}, {
  q: "ما هي مدة تنفيذ البحث؟",
  a: "تختلف المدة حسب نوع وحجم العمل: البحوث القصيرة من 3-7 أيام، الرسائل الجامعية من 3 أسابيع إلى عدة أشهر. نلتزم بالموعد المحدد دائماً."
}, {
  q: "هل تضمنون السرية التامة؟",
  a: "نعم. جميع بياناتك وأبحاثك سرية تماماً ولا نشاركها مع أي طرف ثالث، ولا نعيد استخدامها في أعمال أخرى."
}, {
  q: "هل توفرون تعديلات بعد التسليم؟",
  a: "نعم، نوفر تعديلات مجانية ضمن نطاق العمل المتفق عليه. التعديلات الكبيرة الخارجة عن النطاق قد تكلف رسوماً إضافية."
}, {
  q: "ما طرق الدفع المتاحة؟",
  a: "ندعم عدة طرق دفع. يتم تأكيد طريقة الدفع المناسبة عند الاتفاق على الطلب. عادة يتم دفع جزء مقدم وباقي المبلغ عند التسليم."
}, {
  q: "هل تتعاملون مع جميع التخصصات؟",
  a: "نتعامل مع غالبية التخصصات (إدارة، اقتصاد، تربية، علوم، هندسة، طب، شريعة...). إذا كان تخصصك دقيقاً، أرسل لنا تفاصيله ونؤكد قدرتنا على تنفيذه."
}, {
  q: "هل البحوث أصلية وخالية من النسخ؟",
  a: "نعم. جميع أعمالنا أصلية ومكتوبة من الصفر، ونمررها على برامج كشف الانتحال لضمان نسبة تشابه منخفضة."
}, {
  q: "ماذا لو لم يعجبني العمل؟",
  a: "نعمل معك على التعديلات حتى تحصل على النتيجة المرضية ضمن نطاق الاتفاق الأصلي."
}, {
  q: "هل تساعدون في المناقشة؟",
  a: "نعم، نوفر دعماً للتحضير للمناقشة عبر شرح محتوى الرسالة والإجابات المقترحة على الأسئلة المتوقعة."
}];
function FaqPage() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", dir: "rtl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-5 text-white", style: {
      background: "var(--grad-hero)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-5xl font-extrabold mb-3", children: "الأسئلة الشائعة" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/85 max-w-2xl mx-auto", children: "إجابات على أكثر الأسئلة التي يطرحها عملاؤنا." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-16 px-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[850px] mx-auto space-y-3", children: FAQS.map((f, i) => {
        const isOpen = open === i;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl shadow-sm overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(isOpen ? null : i), className: "w-full flex items-center justify-between gap-3 px-5 py-4 text-right hover:bg-secondary/30 transition", "aria-expanded": isOpen, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary", children: f.q }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[var(--primary-2)] text-xl transition-transform ${isOpen ? "rotate-180" : ""}`, children: "⌄" })
          ] }),
          isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4", children: f.a })
        ] }, f.q);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[850px] mx-auto mt-10 bg-card border border-border rounded-2xl p-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "لم تجد إجابة سؤالك؟" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-white bg-[image:var(--grad-accent)] shadow-[var(--shadow-glow)]", children: "📝 تواصل معنا" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: SITE.whatsappUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold border border-border", children: "💬 واتساب" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWhatsApp, {})
  ] });
}
export {
  FaqPage as component
};
