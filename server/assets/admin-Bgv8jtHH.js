import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-DMDGzCEL.js";
import { t as toast, u as useNavigate, L as Link } from "./router-7FeldB5W.js";
import { s as supabase } from "./client-CXqtAPHV.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function PortfolioManager({ userId, userEmail }) {
  const [items, setItems] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [fileName, setFileName] = reactExports.useState("");
  const fileRef = reactExports.useRef(null);
  const formRef = reactExports.useRef(null);
  async function load() {
    setLoading(true);
    const { data, error } = await supabase.from("portfolio_items").select("*").order("display_order", { ascending: true }).order("created_at", { ascending: false });
    setLoading(false);
    if (error) {
      toast.error("تعذر تحميل الأعمال");
      return;
    }
    setItems(data ?? []);
  }
  reactExports.useEffect(() => {
    load();
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    if (submitting) return;
    const file = fileRef.current?.files?.[0];
    if (!file) {
      toast.error("اختر ملف PDF");
      return;
    }
    if (file.type !== "application/pdf") {
      toast.error("يجب أن يكون الملف من نوع PDF");
      return;
    }
    if (file.size > 25 * 1024 * 1024) {
      toast.error("حجم الملف يتجاوز 25 ميغابايت");
      return;
    }
    setSubmitting(true);
    try {
      const fd = new FormData(e.currentTarget);
      const title = String(fd.get("title") || "").trim();
      const category = String(fd.get("category") || "").trim() || null;
      const field = String(fd.get("field") || "").trim() || null;
      const year = String(fd.get("year") || "").trim() || null;
      const description = String(fd.get("description") || "").trim() || null;
      if (!title) {
        toast.error("العنوان مطلوب");
        setSubmitting(false);
        return;
      }
      const safe = file.name.replace(/[^a-zA-Z0-9._\u0600-\u06FF-]/g, "_");
      const path = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}_${safe}`;
      const { error: upErr } = await supabase.storage.from("portfolio-files").upload(path, file, { contentType: "application/pdf", upsert: false });
      if (upErr) {
        console.error(upErr);
        toast.error("تعذر رفع الملف");
        setSubmitting(false);
        return;
      }
      const { error } = await supabase.from("portfolio_items").insert({
        title,
        category,
        field,
        year,
        description,
        file_path: path,
        file_name: file.name,
        created_by: userId,
        created_by_email: userEmail
      });
      if (error) {
        console.error(error);
        await supabase.storage.from("portfolio-files").remove([path]);
        toast.error("تعذر حفظ العمل");
        setSubmitting(false);
        return;
      }
      toast.success("تمت إضافة العمل");
      formRef.current?.reset();
      setFileName("");
      load();
    } catch (err) {
      console.error(err);
      toast.error("حدث خطأ غير متوقع");
    } finally {
      setSubmitting(false);
    }
  }
  async function handleDelete(item) {
    if (!confirm(`حذف "${item.title}"؟`)) return;
    await supabase.storage.from("portfolio-files").remove([item.file_path]);
    const { error } = await supabase.from("portfolio_items").delete().eq("id", item.id);
    if (error) {
      toast.error("تعذر الحذف");
      return;
    }
    toast.success("تم الحذف");
    load();
  }
  function publicUrl(path) {
    return supabase.storage.from("portfolio-files").getPublicUrl(path).data.publicUrl;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-card border border-border rounded-2xl p-5 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-extrabold mb-4", children: "📂 إدارة الأعمال السابقة (PDF)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { ref: formRef, onSubmit: handleSubmit, className: "grid grid-cols-1 md:grid-cols-2 gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold mb-1", children: "عنوان العمل *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            name: "title",
            required: true,
            maxLength: 200,
            className: "w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold mb-1", children: "التصنيف" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            name: "category",
            maxLength: 100,
            placeholder: "رسالة دكتوراه، تحليل إحصائي...",
            className: "w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold mb-1", children: "المجال" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            name: "field",
            maxLength: 100,
            placeholder: "إدارة، رياضيات...",
            className: "w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold mb-1", children: "السنة" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            name: "year",
            maxLength: 10,
            placeholder: "2024",
            className: "w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold mb-1", children: "ملف PDF * (حتى 25MB)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: fileRef,
            type: "file",
            accept: "application/pdf,.pdf",
            onChange: (e) => setFileName(e.target.files?.[0]?.name || ""),
            className: "w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
          }
        ),
        fileName && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground mt-1", children: [
          "📎 ",
          fileName
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold mb-1", children: "وصف موجز" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            name: "description",
            rows: 2,
            maxLength: 500,
            className: "w-full px-3 py-2 border border-input rounded-md bg-background text-sm resize-y"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          disabled: submitting,
          className: "px-5 py-2.5 rounded-lg font-bold text-white bg-[image:var(--grad-accent)] shadow-[var(--shadow-glow)] disabled:opacity-60",
          children: submitting ? "جاري الرفع..." : "➕ إضافة عمل"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold mb-3", children: [
        "الأعمال المضافة ",
        loading ? "..." : `(${items.length})`
      ] }),
      items.length === 0 && !loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "لا توجد أعمال بعد." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 border border-border rounded-lg bg-secondary/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm truncate", children: it.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: [it.category, it.field, it.year].filter(Boolean).join(" • ") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: publicUrl(it.file_path),
            target: "_blank",
            rel: "noopener",
            className: "px-3 py-1.5 rounded-md text-xs font-bold bg-primary text-primary-foreground hover:opacity-90",
            children: "عرض PDF"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => handleDelete(it),
            className: "px-3 py-1.5 rounded-md text-xs font-bold bg-red-500 text-white hover:bg-red-600",
            children: "حذف"
          }
        )
      ] }, it.id)) })
    ] })
  ] });
}
const STATUS_LABELS = {
  new: {
    label: "جديد",
    cls: "bg-[oklch(0.74_0.14_195)] text-white"
  },
  review: {
    label: "قيد المراجعة",
    cls: "bg-amber-500 text-white"
  },
  received: {
    label: "مُستلم",
    cls: "bg-violet-500 text-white"
  },
  done: {
    label: "مكتمل",
    cls: "bg-emerald-500 text-white"
  }
};
const STATUS_KEYS = ["new", "review", "received", "done"];
function AdminPage() {
  const navigate = useNavigate();
  const [authReady, setAuthReady] = reactExports.useState(false);
  const [session, setSession] = reactExports.useState(null);
  const [isAdmin, setIsAdmin] = reactExports.useState(null);
  const [mode, setMode] = reactExports.useState("signin");
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [busy, setBusy] = reactExports.useState(false);
  const [requests, setRequests] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [search, setSearch] = reactExports.useState("");
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [dateFrom, setDateFrom] = reactExports.useState("");
  const [dateTo, setDateTo] = reactExports.useState("");
  const [selectedId, setSelectedId] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const {
      data: sub
    } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    supabase.auth.getSession().then(({
      data
    }) => {
      setSession(data.session);
      setAuthReady(true);
    });
    return () => sub.subscription.unsubscribe();
  }, []);
  reactExports.useEffect(() => {
    if (!authReady) return;
    if (!session) {
      setIsAdmin(null);
      return;
    }
    (async () => {
      const {
        data,
        error
      } = await supabase.from("user_roles").select("role").eq("user_id", session.user.id).eq("role", "admin").maybeSingle();
      if (error) console.error(error);
      setIsAdmin(!!data);
    })();
  }, [session, authReady]);
  reactExports.useEffect(() => {
    if (!isAdmin) return;
    loadRequests();
    const channel = supabase.channel("service_requests_changes").on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "service_requests"
    }, () => loadRequests()).subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [isAdmin]);
  async function loadRequests() {
    setLoading(true);
    const {
      data,
      error
    } = await supabase.from("service_requests").select("*").order("created_at", {
      ascending: false
    });
    setLoading(false);
    if (error) {
      toast.error("تعذر تحميل الطلبات");
      return;
    }
    setRequests(data ?? []);
  }
  async function handleAuth(e) {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signup") {
        const {
          error
        } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/admin`
          }
        });
        if (error) throw error;
        toast.success("تم إنشاء الحساب. يحتاج المالك إلى منحك صلاحية المشرف.");
      } else {
        const {
          error
        } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        if (error) throw error;
        toast.success("تم تسجيل الدخول");
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "فشل تسجيل الدخول";
      toast.error(msg);
    } finally {
      setBusy(false);
    }
  }
  async function handleLogout() {
    await supabase.auth.signOut();
    toast.success("تم تسجيل الخروج");
  }
  async function updateStatus(id, status) {
    const patch = status === "received" ? {
      status,
      received_by: session?.user.id ?? null,
      received_by_email: session?.user.email ?? null
    } : {
      status,
      received_by: null,
      received_by_email: null
    };
    const {
      error
    } = await supabase.from("service_requests").update(patch).eq("id", id);
    if (error) {
      toast.error("تعذر تحديث الحالة");
      return;
    }
    toast.success("تم التحديث");
    loadRequests();
  }
  async function deleteRequest(id, file_path) {
    if (!confirm("حذف هذا الطلب؟")) return;
    if (file_path) await supabase.storage.from("request-files").remove([file_path]);
    const {
      error
    } = await supabase.from("service_requests").delete().eq("id", id);
    if (error) {
      toast.error("تعذر الحذف");
      return;
    }
    toast.success("تم الحذف");
    if (selectedId === id) setSelectedId(null);
    loadRequests();
  }
  async function downloadFile(path, name) {
    const {
      data,
      error
    } = await supabase.storage.from("request-files").createSignedUrl(path, 60);
    if (error || !data) {
      toast.error("تعذر تنزيل الملف");
      return;
    }
    const a = document.createElement("a");
    a.href = data.signedUrl;
    a.download = name;
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
  const filtered = reactExports.useMemo(() => {
    const q = search.trim().toLowerCase();
    return requests.filter((r) => {
      if (statusFilter !== "all" && r.status !== statusFilter) return false;
      if (dateFrom && new Date(r.created_at) < new Date(dateFrom)) return false;
      if (dateTo) {
        const end = new Date(dateTo);
        end.setHours(23, 59, 59, 999);
        if (new Date(r.created_at) > end) return false;
      }
      if (q) {
        const blob = `${r.full_name} ${r.phone} ${r.service_type ?? ""} ${r.details}`.toLowerCase();
        if (!blob.includes(q)) return false;
      }
      return true;
    });
  }, [requests, search, statusFilter, dateFrom, dateTo]);
  const stats = reactExports.useMemo(() => {
    const counts = {
      new: 0,
      review: 0,
      received: 0,
      done: 0
    };
    const byDay = {};
    const byType = {};
    const now = /* @__PURE__ */ new Date();
    const cutoff = new Date(now);
    cutoff.setDate(cutoff.getDate() - 29);
    for (let i = 0; i < 30; i++) {
      const d = new Date(cutoff);
      d.setDate(cutoff.getDate() + i);
      byDay[d.toISOString().slice(0, 10)] = 0;
    }
    for (const r of requests) {
      counts[r.status] = (counts[r.status] ?? 0) + 1;
      const day = r.created_at.slice(0, 10);
      if (day in byDay) byDay[day]++;
      const t = (r.service_type ?? "غير محدد").trim() || "غير محدد";
      byType[t] = (byType[t] ?? 0) + 1;
    }
    const days = Object.entries(byDay).sort(([a], [b]) => a.localeCompare(b));
    const maxDay = Math.max(1, ...days.map(([, v]) => v));
    const types = Object.entries(byType).sort(([, a], [, b]) => b - a).slice(0, 6);
    const maxType = Math.max(1, ...types.map(([, v]) => v));
    const last7 = days.slice(-7).reduce((a, [, v]) => a + v, 0);
    return {
      counts,
      days,
      maxDay,
      types,
      maxType,
      total: requests.length,
      last7
    };
  }, [requests]);
  function exportCsv() {
    const rows = [["id", "name", "phone", "service_type", "details", "status", "received_by", "created_at", "file_name"], ...filtered.map((r) => [r.id, r.full_name, r.phone, r.service_type ?? "", r.details.replace(/\r?\n/g, " "), r.status, r.received_by_email ?? "", r.created_at, r.file_name ?? ""])];
    const csv = rows.map((row) => row.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob(["\uFEFF" + csv], {
      type: "text/csv;charset=utf-8"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `requests-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success(`تم تصدير ${filtered.length} طلب`);
  }
  if (!authReady) return /* @__PURE__ */ jsxRuntimeExports.jsx(CenterMsg, { msg: "جاري التحميل..." });
  if (!session) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(AuthShell, { onBack: () => navigate({
      to: "/"
    }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-extrabold text-center mb-2", children: "🔐 لوحة المشرفين" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground text-sm mb-6", children: mode === "signin" ? "سجّل دخولك للوصول إلى الطلبات" : "أنشئ حساباً جديداً" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAuth, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-semibold mb-1.5", children: "البريد الإلكتروني" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), className: "w-full px-3 py-2.5 border border-input rounded-md bg-background" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-semibold mb-1.5", children: "كلمة المرور" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", required: true, minLength: 6, value: password, onChange: (e) => setPassword(e.target.value), className: "w-full px-3 py-2.5 border border-input rounded-md bg-background" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: busy, className: "w-full px-4 py-2.5 rounded-lg font-bold text-white bg-[image:var(--grad-accent)] shadow-[var(--shadow-glow)] disabled:opacity-60", children: busy ? "..." : mode === "signin" ? "دخول" : "إنشاء حساب" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMode((m) => m === "signin" ? "signup" : "signin"), className: "block mx-auto mt-4 text-sm text-[var(--primary-2)] hover:underline", children: mode === "signin" ? "ليس لديك حساب؟ أنشئ واحداً" : "لديك حساب؟ سجّل الدخول" })
    ] });
  }
  if (isAdmin === null) return /* @__PURE__ */ jsxRuntimeExports.jsx(CenterMsg, { msg: "جاري التحقق من الصلاحيات..." });
  if (!isAdmin) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(AuthShell, { onBack: () => navigate({
      to: "/"
    }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-center mb-3", children: "⛔ لا تملك صلاحية المشرف" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-center text-muted-foreground mb-2", children: [
        "الحساب: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: session.user.email })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-center text-muted-foreground mb-6", children: "إذا كنت أنت مالك المؤسسة شغّل الأمر التالي مرة واحدة من قاعدة البيانات:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "bg-secondary p-3 rounded text-xs overflow-x-auto text-left", dir: "ltr", children: `INSERT INTO public.user_roles (user_id, role)
VALUES ('${session.user.id}', 'admin');` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleLogout, className: "w-full mt-6 px-4 py-2 rounded-lg border border-input font-bold", children: "تسجيل الخروج" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", dir: "rtl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-[oklch(0.25_0.04_260)] text-white sticky top-0 z-30 shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-5 py-4 flex items-center justify-between flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-extrabold", children: "🔐 لوحة إدارة الطلبات" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/70", children: session.user.email })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-sm font-semibold", children: "← الموقع" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleLogout, className: "px-3 py-1.5 rounded-md bg-red-500 hover:bg-red-600 text-sm font-semibold", children: "خروج" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "max-w-[1400px] mx-auto px-5 py-6 space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "إجمالي الطلبات", value: stats.total }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "آخر 7 أيام", value: stats.last7 }),
        STATUS_KEYS.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: STATUS_LABELS[k].label, value: stats.counts[k] ?? 0, cls: STATUS_LABELS[k].cls }, k)).slice(0, 2)
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(ChartCard, { title: "الطلبات في آخر 30 يوم", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-1 h-32", children: stats.days.map(([day, v]) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col items-center gap-1", title: `${day}: ${v}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-[image:var(--grad-accent)] rounded-t", style: {
            height: `${v / stats.maxDay * 100}%`,
            minHeight: v > 0 ? 2 : 0
          } }) }, day)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] text-muted-foreground mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: stats.days[0]?.[0]?.slice(5) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: stats.days[stats.days.length - 1]?.[0]?.slice(5) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "أكثر الخدمات طلباً", children: stats.types.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "لا توجد بيانات بعد" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: stats.types.map(([name, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: v })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-secondary rounded", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-[image:var(--grad-accent)] rounded", style: {
            width: `${v / stats.maxType * 100}%`
          } }) })
        ] }, name)) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-card border border-border rounded-2xl p-4 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold mb-1", children: "بحث" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: search, onChange: (e) => setSearch(e.target.value), placeholder: "اسم، هاتف، نوع، تفاصيل...", className: "w-full px-3 py-2 border border-input rounded-md bg-background text-sm" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold mb-1", children: "الحالة" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: statusFilter, onChange: (e) => setStatusFilter(e.target.value), className: "w-full px-3 py-2 border border-input rounded-md bg-background text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "الكل" }),
              STATUS_KEYS.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: k, children: STATUS_LABELS[k].label }, k))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold mb-1", children: "من تاريخ" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: dateFrom, onChange: (e) => setDateFrom(e.target.value), className: "w-full px-3 py-2 border border-input rounded-md bg-background text-sm" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold mb-1", children: "إلى تاريخ" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: dateTo, onChange: (e) => setDateTo(e.target.value), className: "w-full px-3 py-2 border border-input rounded-md bg-background text-sm" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            filtered.length,
            " نتيجة"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              setSearch("");
              setStatusFilter("all");
              setDateFrom("");
              setDateTo("");
            }, className: "text-xs px-3 py-1.5 border border-input rounded-md hover:bg-secondary", children: "إعادة ضبط" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: exportCsv, disabled: filtered.length === 0, className: "text-xs px-3 py-1.5 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 disabled:opacity-50", children: "📤 تصدير CSV" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioManager, { userId: session.user.id, userEmail: session.user.email ?? "" }),
      loading && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground py-8", children: "جاري التحميل..." }),
      !loading && filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-16 bg-card rounded-2xl border border-dashed border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "لا توجد طلبات مطابقة." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: filtered.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(RequestCard, { r, onUpdateStatus: updateStatus, onDelete: deleteRequest, onDownload: downloadFile, onOpen: () => setSelectedId(r.id) }, r.id)) })
    ] }),
    selectedId && /* @__PURE__ */ jsxRuntimeExports.jsx(DetailDrawer, { requestId: selectedId, session, onClose: () => setSelectedId(null) })
  ] });
}
function StatCard({
  label,
  value,
  cls
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4", children: [
    cls ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-block px-2.5 py-0.5 rounded-full text-xs ${cls}`, children: label }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-extrabold mt-2", children: value })
  ] });
}
function ChartCard({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-4 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold mb-3 text-sm", children: title }),
    children
  ] });
}
function RequestCard({
  r,
  onUpdateStatus,
  onDelete,
  onDownload,
  onOpen
}) {
  const status = STATUS_LABELS[r.status] ?? STATUS_LABELS.new;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-card border border-border rounded-xl p-4 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-primary block text-base", children: r.full_name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "📱 ",
          r.phone
        ] }),
        r.service_type && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "📂 ",
          r.service_type
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2.5 py-1 rounded-full text-xs ${status.cls}`, children: status.label })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-3 whitespace-pre-wrap line-clamp-3", children: r.details }),
    r.file_path && r.file_name && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => onDownload(r.file_path, r.file_name), className: "mt-3 inline-flex items-center gap-2 text-sm bg-[oklch(0.95_0.03_245)] text-[var(--primary-2)] px-3 py-1.5 rounded-md hover:bg-[oklch(0.92_0.04_245)]", children: [
      "📎 ",
      r.file_name
    ] }),
    r.received_by_email && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-2", children: [
      "مُستلم بواسطة: ",
      r.received_by_email
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: new Date(r.created_at).toLocaleString("ar") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mt-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: r.status, onChange: (e) => onUpdateStatus(r.id, e.target.value), className: "text-sm border border-input rounded-md px-2 py-1.5 bg-background", children: STATUS_KEYS.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: k, children: STATUS_LABELS[k].label }, k)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onOpen, className: "text-sm bg-[var(--primary-2)] text-white px-3 py-1.5 rounded-md hover:opacity-90", children: "📝 ملاحظات وسجل" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onDelete(r.id, r.file_path), className: "text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-md", children: "🗑️ حذف" })
    ] })
  ] });
}
function DetailDrawer({
  requestId,
  session,
  onClose
}) {
  const [notes, setNotes] = reactExports.useState([]);
  const [logs, setLogs] = reactExports.useState([]);
  const [text, setText] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(true);
  const [submitting, setSubmitting] = reactExports.useState(false);
  async function load() {
    setLoading(true);
    const [n, l] = await Promise.all([supabase.from("request_notes").select("*").eq("request_id", requestId).order("created_at", {
      ascending: false
    }), supabase.from("request_activity_log").select("*").eq("request_id", requestId).order("created_at", {
      ascending: false
    })]);
    setLoading(false);
    if (n.error || l.error) {
      toast.error("تعذر تحميل التفاصيل");
      return;
    }
    setNotes(n.data ?? []);
    setLogs(l.data ?? []);
  }
  reactExports.useEffect(() => {
    load();
  }, [requestId]);
  async function addNote() {
    const value = text.trim();
    if (!value) return;
    setSubmitting(true);
    const {
      error
    } = await supabase.from("request_notes").insert({
      request_id: requestId,
      author_id: session.user.id,
      author_email: session.user.email ?? "unknown",
      note: value
    });
    if (!error) {
      await supabase.from("request_activity_log").insert({
        request_id: requestId,
        actor_id: session.user.id,
        actor_email: session.user.email ?? null,
        action: "note_added",
        from_value: null,
        to_value: value.slice(0, 100)
      });
    }
    setSubmitting(false);
    if (error) {
      toast.error("تعذر إضافة الملاحظة");
      return;
    }
    setText("");
    toast.success("تمت إضافة الملاحظة");
    load();
  }
  async function deleteNote(id) {
    if (!confirm("حذف الملاحظة؟")) return;
    const {
      error
    } = await supabase.from("request_notes").delete().eq("id", id);
    if (error) {
      toast.error("تعذر الحذف");
      return;
    }
    load();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/40", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 bottom-0 left-0 w-full sm:w-[480px] bg-background shadow-2xl flex flex-col", dir: "rtl", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b border-border flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold", children: "📝 الملاحظات والسجل" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-2xl text-muted-foreground hover:text-foreground", children: "×" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2 text-sm", children: "ملاحظة جديدة" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: text, onChange: (e) => setText(e.target.value), rows: 3, maxLength: 5e3, placeholder: "اكتب ملاحظتك الداخلية...", className: "w-full px-3 py-2 border border-input rounded-md bg-background text-sm resize-y" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: addNote, disabled: submitting || !text.trim(), className: "mt-2 px-4 py-2 rounded-md font-bold text-white bg-[image:var(--grad-accent)] shadow-[var(--shadow-glow)] disabled:opacity-60 text-sm", children: submitting ? "..." : "إضافة" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold mb-2 text-sm", children: [
          "الملاحظات (",
          notes.length,
          ")"
        ] }),
        loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "جاري التحميل..." }) : notes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "لا توجد ملاحظات." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: notes.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-lg p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm whitespace-pre-wrap", children: n.note }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-2 text-[11px] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              n.author_email,
              " • ",
              new Date(n.created_at).toLocaleString("ar")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => deleteNote(n.id), className: "text-red-500 hover:underline", children: "حذف" })
          ] })
        ] }, n.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold mb-2 text-sm", children: [
          "سجل التغييرات (",
          logs.length,
          ")"
        ] }),
        logs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "لا توجد عمليات مسجّلة بعد." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-2 border-r-2 border-border pr-3", children: logs.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: l.action === "status_change" ? `تغيير الحالة من «${STATUS_LABELS[l.from_value ?? ""]?.label ?? l.from_value}» إلى «${STATUS_LABELS[l.to_value ?? ""]?.label ?? l.to_value}»` : l.action === "note_added" ? "أضاف ملاحظة" : l.action }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
            l.actor_email ?? "غير معروف",
            " • ",
            new Date(l.created_at).toLocaleString("ar")
          ] })
        ] }, l.id)) })
      ] })
    ] })
  ] }) });
}
function CenterMsg({
  msg
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center", dir: "rtl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: msg }) });
}
function AuthShell({
  children,
  onBack
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center px-5 py-10 bg-background", dir: "rtl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md bg-card border border-border rounded-2xl shadow-[var(--shadow-card)] p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onBack, className: "text-sm text-muted-foreground mb-4 hover:text-foreground", children: "← العودة للموقع" }),
    children
  ] }) });
}
export {
  AdminPage as component
};
