import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-DMDGzCEL.js";
import { t as toast, S as SITE } from "./router-7FeldB5W.js";
import { s as supabase } from "./client-CXqtAPHV.js";
import { S as SiteHeader, a as SiteFooter, F as FloatingWhatsApp } from "./FloatingWhatsApp-BX5qMajw.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function RequestForm() {
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [fileName, setFileName] = reactExports.useState("");
  const fileInputRef = reactExports.useRef(null);
  const formRef = reactExports.useRef(null);
  async function handleSubmit(e) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const fd = new FormData(e.currentTarget);
      const full_name = String(fd.get("full_name") || "").trim();
      const phone = String(fd.get("phone") || "").trim();
      const service_type = String(fd.get("service_type") || "").trim() || null;
      const details = String(fd.get("details") || "").trim();
      const file = fileInputRef.current?.files?.[0] ?? null;
      if (!full_name || !phone || !details) {
        toast.error("الرجاء تعبئة الحقول المطلوبة");
        setSubmitting(false);
        return;
      }
      if (file && file.size > 50 * 1024 * 1024) {
        toast.error("حجم الملف يتجاوز 50 ميغابايت");
        setSubmitting(false);
        return;
      }
      let file_path = null;
      let file_name = null;
      if (file) {
        const safeName = file.name.replace(/[^a-zA-Z0-9._\u0600-\u06FF-]/g, "_");
        const path = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}_${safeName}`;
        const { error: uploadErr } = await supabase.storage.from("request-files").upload(path, file, { contentType: file.type, upsert: false });
        if (uploadErr) {
          console.error("upload error", uploadErr);
          toast.error("تعذر رفع الملف");
          setSubmitting(false);
          return;
        }
        file_path = path;
        file_name = file.name;
      }
      const { data: inserted, error } = await supabase.from("service_requests").insert({
        full_name,
        phone,
        service_type,
        details,
        file_name,
        file_path,
        status: "new"
      }).select("tracking_code").single();
      if (error) {
        console.error("insert error", error);
        toast.error("تعذر إرسال الطلب، حاول مرة أخرى");
        setSubmitting(false);
        return;
      }
      const code = inserted?.tracking_code;
      toast.success(
        code ? `تم إرسال طلبك! رقم التتبع: ${code} — احتفظ به لمتابعة الحالة` : "تم إرسال طلبك بنجاح! سنتواصل معك قريباً."
      );
      formRef.current?.reset();
      setFileName("");
    } catch (err) {
      console.error(err);
      toast.error("حدث خطأ غير متوقع");
    } finally {
      setSubmitting(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      ref: formRef,
      onSubmit: handleSubmit,
      className: "bg-card border border-border rounded-2xl p-6 shadow-[var(--shadow-card)]",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-semibold mb-2 text-sm", children: "الاسم الكامل *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              name: "full_name",
              required: true,
              maxLength: 200,
              className: "w-full px-3 py-2.5 border border-input rounded-md bg-secondary/30 focus:outline-none focus:border-[var(--primary-2)] transition"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-semibold mb-2 text-sm", children: "رقم الجوال *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              name: "phone",
              required: true,
              maxLength: 50,
              className: "w-full px-3 py-2.5 border border-input rounded-md bg-secondary/30 focus:outline-none focus:border-[var(--primary-2)] transition"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-semibold mb-2 text-sm", children: "نوع الخدمة" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              name: "service_type",
              maxLength: 200,
              placeholder: "بحث / تحليل / رياضة ...",
              className: "w-full px-3 py-2.5 border border-input rounded-md bg-secondary/30 focus:outline-none focus:border-[var(--primary-2)] transition"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-semibold mb-2 text-sm", children: "تفاصيل الطلب *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              name: "details",
              required: true,
              rows: 4,
              maxLength: 5e3,
              className: "w-full px-3 py-2.5 border border-input rounded-md bg-secondary/30 focus:outline-none focus:border-[var(--primary-2)] transition resize-y"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-semibold mb-2 text-sm", children: "رفع ملفات (PDF, DOCX, ZIP, صور — حتى 50MB)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ref: fileInputRef,
              type: "file",
              accept: ".pdf,.docx,.doc,.zip,.jpg,.jpeg,.png,.txt",
              onChange: (e) => setFileName(e.target.files?.[0]?.name || ""),
              className: "w-full px-3 py-2 border border-input rounded-md bg-secondary/30 text-sm"
            }
          ),
          fileName && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
            "📎 ",
            fileName
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            disabled: submitting,
            className: "w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-white bg-[image:var(--grad-accent)] shadow-[var(--shadow-glow)] hover:opacity-95 hover:-translate-y-0.5 transition disabled:opacity-60 disabled:cursor-not-allowed",
            children: submitting ? "جاري الإرسال..." : "📤 إرسال الطلب"
          }
        )
      ]
    }
  );
}
function ContactPage() {
  const cards = [{
    icon: "📱",
    title: "الهاتف / واتساب",
    val: SITE.phone
  }, {
    icon: "💬",
    title: "WhatsApp",
    val: "محادثة مباشرة",
    href: SITE.whatsappUrl
  }, {
    icon: "🕐",
    title: "ساعات العمل",
    val: SITE.workingHours
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", dir: "rtl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-5 text-white", style: {
      background: "var(--grad-hero)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-5xl font-extrabold mb-3", children: "تواصل معنا" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/85 max-w-2xl mx-auto", children: "املأ النموذج وسنرد عليك في أقرب وقت — أو راسلنا مباشرة عبر واتساب." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: cards.map((c) => {
        const Inner = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl flex items-center justify-center text-white text-lg shrink-0", style: {
            background: "var(--grad-accent)"
          }, children: c.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "block text-primary", children: c.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: c.val })
          ] })
        ] });
        return c.href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: c.href, target: "_blank", rel: "noopener noreferrer", className: "bg-card border border-border rounded-2xl p-4 flex items-center gap-4 mb-4 hover:shadow-md transition", children: Inner }, c.title) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-2xl p-4 flex items-center gap-4 mb-4", children: Inner }, c.title);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RequestForm, {})
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWhatsApp, {})
  ] });
}
export {
  ContactPage as component
};
