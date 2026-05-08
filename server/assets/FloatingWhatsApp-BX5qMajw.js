import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-DMDGzCEL.js";
import { L as Link, S as SITE } from "./router-7FeldB5W.js";
const NAV = [
  { to: "/", label: "الرئيسية" },
  { to: "/services", label: "الخدمات" },
  { to: "/pricing", label: "الأسعار" },
  { to: "/portfolio", label: "أعمالنا" },
  { to: "/track", label: "تتبع طلب" },
  { to: "/faq", label: "الأسئلة الشائعة" },
  { to: "/contact", label: "تواصل" }
];
function SiteHeader() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border", dir: "rtl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto px-5 flex items-center justify-between py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "font-extrabold text-lg text-primary flex items-center gap-2", children: [
        "📚 ",
        SITE.brandName,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[image:var(--grad-accent)] bg-clip-text text-transparent", children: SITE.brandTagline })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex gap-5 list-none", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: n.to,
          className: "font-semibold text-sm hover:text-[var(--primary-2)] transition",
          activeProps: { className: "font-semibold text-sm text-[var(--primary-2)]" },
          children: n.label
        }
      ) }, n.to)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/admin",
            className: "hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-border text-primary font-bold text-sm hover:bg-secondary transition",
            children: "🔐 المشرفون"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setOpen((v) => !v),
            className: "md:hidden text-2xl text-primary",
            "aria-label": "القائمة",
            children: "☰"
          }
        )
      ] })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden border-t border-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex flex-col p-4 gap-3", children: [
      NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: n.to, onClick: () => setOpen(false), className: "font-semibold w-full text-right block", children: n.label }) }, n.to)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin", onClick: () => setOpen(false), className: "font-semibold w-full text-right block", children: "🔐 لوحة المشرفين" }) })
    ] }) })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border py-8 px-5", dir: "rtl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-extrabold text-primary mb-2", children: [
      "📚 ",
      SITE.brandName,
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[image:var(--grad-accent)] bg-clip-text text-transparent", children: SITE.brandTagline })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-4 text-sm text-muted-foreground mb-2 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-foreground", children: "الخدمات" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pricing", className: "hover:text-foreground", children: "الأسعار" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", className: "hover:text-foreground", children: "أعمالنا" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/faq", className: "hover:text-foreground", children: "الأسئلة الشائعة" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-foreground", children: "تواصل" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
      "© 2025 مؤسسة ",
      SITE.brandName,
      ". جميع الحقوق محفوظة."
    ] })
  ] }) });
}
function FloatingWhatsApp() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: SITE.whatsappUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "fixed bottom-5 left-5 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center text-2xl z-40 shadow-lg hover:scale-110 transition",
      title: "WhatsApp",
      "aria-label": "تواصل عبر واتساب",
      children: "💬"
    }
  );
}
export {
  FloatingWhatsApp as F,
  SiteHeader as S,
  SiteFooter as a
};
