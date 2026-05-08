import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-DMDGzCEL.js";
import { s as supabase } from "./client-CXqtAPHV.js";
import { S as SiteHeader, a as SiteFooter, F as FloatingWhatsApp } from "./FloatingWhatsApp-BX5qMajw.js";
import { t as toast } from "./router-7FeldB5W.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const STATUS_LABELS = {
  new: {
    label: "جديد",
    color: "bg-blue-100 text-blue-800"
  },
  in_progress: {
    label: "قيد التنفيذ",
    color: "bg-amber-100 text-amber-800"
  },
  completed: {
    label: "مكتمل",
    color: "bg-green-100 text-green-800"
  },
  cancelled: {
    label: "ملغى",
    color: "bg-red-100 text-red-800"
  }
};
function TrackPage() {
  const [loading, setLoading] = reactExports.useState(false);
  const [result, setResult] = reactExports.useState(null);
  const [searched, setSearched] = reactExports.useState(false);
  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSearched(false);
    const fd = new FormData(e.currentTarget);
    let code = String(fd.get("code") || "").trim().toUpperCase();
    const phone = String(fd.get("phone") || "").trim();
    if (!code || !phone) {
      toast.error("الرجاء إدخال رمز التتبع ورقم الجوال");
      setLoading(false);
      return;
    }
    const cleaned = code.replace(/[^A-Z0-9]/g, "");
    const candidates = /* @__PURE__ */ new Set();
    candidates.add(code);
    if (/^[A-Z]{3}\d{4}$/.test(cleaned)) {
      candidates.add(`${cleaned.slice(0, 3)}-${cleaned.slice(3)}`);
    }
    if (/^\d{4}[A-Z]{3}$/.test(cleaned)) {
      candidates.add(`${cleaned.slice(4)}-${cleaned.slice(0, 4)}`);
    }
    if (/^\d{4}-[A-Z]{3}$/.test(code)) {
      const [d, l] = code.split("-");
      candidates.add(`${l}-${d}`);
    }
    let found = null;
    let lastError = null;
    for (const c of candidates) {
      const {
        data,
        error
      } = await supabase.rpc("track_request", {
        _code: c,
        _phone: phone
      });
      if (error) {
        lastError = error;
        continue;
      }
      if (data && data[0]) {
        found = data[0];
        break;
      }
    }
    setLoading(false);
    setSearched(true);
    if (!found && lastError) {
      console.error(lastError);
      toast.error("تعذر البحث، حاول لاحقاً");
      return;
    }
    setResult(found);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { dir: "rtl", className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 max-w-2xl mx-auto w-full px-5 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-4xl font-extrabold mb-2 text-primary", children: "📦 تتبع طلبك" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "أدخل رقم التتبع الذي حصلت عليه عند الإرسال + آخر 4 أرقام من جوالك." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "bg-card border border-border rounded-2xl p-6 shadow-[var(--shadow-card)] mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-semibold mb-2 text-sm", children: "رمز التتبع *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "code", required: true, placeholder: "مثل ABC-1234", className: "w-full px-3 py-2.5 border border-input rounded-md bg-secondary/30 focus:outline-none focus:border-[var(--primary-2)] uppercase" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "صيغة الرمز: 3 أحرف ثم 4 أرقام (مثال: FYR-7265). الترتيب المعكوس مقبول أيضاً." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-semibold mb-2 text-sm", children: "رقم الجوال *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "phone", required: true, placeholder: "نفس الرقم المسجل في الطلب", className: "w-full px-3 py-2.5 border border-input rounded-md bg-secondary/30 focus:outline-none focus:border-[var(--primary-2)]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading, className: "w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-white bg-[image:var(--grad-accent)] shadow-[var(--shadow-glow)] hover:opacity-95 transition disabled:opacity-60", children: loading ? "جاري البحث..." : "🔍 بحث" })
      ] }),
      searched && !result && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-destructive/10 border border-destructive/30 text-destructive rounded-2xl p-6 text-center", children: "لم نعثر على طلب بهذه البيانات. تأكد من الرمز ورقم الجوال." }),
      result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 shadow-[var(--shadow-card)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4 flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "رمز التتبع" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono font-bold text-lg", children: result.tracking_code })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-3 py-1 rounded-full text-sm font-semibold ${STATUS_LABELS[result.status]?.color || "bg-secondary text-foreground"}`, children: STATUS_LABELS[result.status]?.label || result.status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm border-t border-border pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "الاسم: " }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: result.full_name })
          ] }),
          result.service_type && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "نوع الخدمة: " }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: result.service_type })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "تاريخ الإرسال: " }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(result.created_at).toLocaleString("ar-EG") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "آخر تحديث: " }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(result.updated_at).toLocaleString("ar-EG") })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWhatsApp, {})
  ] });
}
export {
  TrackPage as component
};
