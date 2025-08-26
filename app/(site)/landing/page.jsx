export const metadata = { title: "עמוד נחיתה" };

export default function Landing() {
  return (
    <div className="grid gap-8">
      <section className="card text-center">
        <h1 className="text-4xl font-bold mb-3">לומדים להשקיע — פשוט</h1>
        <p className="text-slate-300 max-w-2xl mx-auto">
          קורס בן 20 ימים, צעד־אחר־צעד, להקמה וניהול של תיק השקעות במדדים. בלי ז׳רגון,
          עם משימות יומיות קצרות ותבניות עבודה.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="/learn" className="btn">התחל עכשיו</a>
          <a href="/dashboard" className="btn-secondary">צפה בהתקדמות</a>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        <div className="card">
          <h3 className="font-semibold mb-1">פשוט בעברית</h3>
          <p className="text-slate-300 text-sm">הסברים ברורים עם דוגמאות מעשיות.</p>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-1">20 ימים קצרים</h3>
          <p className="text-slate-300 text-sm">משימות של 10–20 דקות ביום.</p>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-1">מעקב והטמעה</h3>
          <p className="text-slate-300 text-sm">דשבורד התקדמות ושגרות חודשיות.</p>
        </div>
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold mb-2">מה מקבלים?</h2>
        <ul className="list-disc pr-6 space-y-2 text-slate-200">
          <li>תהליך מלא להקמת תיק מדדים</li>
          <li>צ׳ק־ליסטים ותבניות פעולה</li>
          <li>הנחיות ברוקר, מס ותפעול</li>
        </ul>
      </section>
    </div>
  );
}
