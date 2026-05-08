import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-DMDGzCEL.js";
import { L as Link } from "./router-7FeldB5W.js";
import { S as SiteHeader, a as SiteFooter, F as FloatingWhatsApp } from "./FloatingWhatsApp-BX5qMajw.js";
import { s as supabase } from "./client-CXqtAPHV.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function iconFor(category) {
  const c = (category ?? "").toLowerCase();
  if (c.includes("دكتوراه")) return "🎓";
  if (c.includes("ماجستير")) return "🎓";
  if (c.includes("تحليل") || c.includes("spss")) return "📊";
  if (c.includes("بحث")) return "📖";
  if (c.includes("رياض")) return "🧮";
  if (c.includes("تخرج") || c.includes("برمج")) return "💻";
  if (c.includes("ترجم")) return "📝";
  return "📄";
}
function PortfolioPage() {
  const [items, setItems] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    (async () => {
      const {
        data,
        error
      } = await supabase.from("portfolio_items").select("id,title,category,field,year,description,file_path,file_name").order("display_order", {
        ascending: true
      }).order("created_at", {
        ascending: false
      });
      if (!error) setItems(data ?? []);
      setLoading(false);
    })();
  }, []);
  function publicUrl(path) {
    return supabase.storage.from("portfolio-files").getPublicUrl(path).data.publicUrl;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", dir: "rtl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-5 text-white", style: {
      background: "var(--grad-hero)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-5xl font-extrabold mb-3", children: "أعمالنا السابقة" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/85 max-w-2xl mx-auto", children: "نماذج مختارة من المشاريع التي نفّذناها — يمكنك تصفّح ملفات PDF مباشرة." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto", children: [
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground py-12", children: "جاري تحميل الأعمال..." }) : items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16 bg-card rounded-2xl border border-dashed border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-2", children: "لا توجد أعمال منشورة بعد." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "سيتم نشر نماذج من أعمالنا قريباً." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: items.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-card border border-border rounded-2xl p-6 shadow-[var(--shadow-card)] hover:-translate-y-1 transition flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl", style: {
            background: "var(--grad-accent)"
          }, children: iconFor(w.category) }),
          w.category && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold px-2.5 py-1 rounded text-primary bg-[oklch(0.94_0.03_245)]", children: w.category })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-bold mb-2", children: w.title }),
        w.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3 line-clamp-3", children: w.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-muted-foreground mt-auto pt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: w.field ? `📚 ${w.field}` : "" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: w.year ? `📅 ${w.year}` : "" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: publicUrl(w.file_path), target: "_blank", rel: "noopener", className: "mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-bold text-white bg-[image:var(--grad-accent)] shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition text-sm", children: "📄 عرض ملف PDF" })
      ] }, w.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "هل تريد عملاً مشابهاً؟" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white bg-[image:var(--grad-accent)] shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition", children: "📝 ابدأ مشروعك معنا" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWhatsApp, {})
  ] });
}
export {
  PortfolioPage as component
};
