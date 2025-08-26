import Link from "next/link";
import { site } from "../../../lib/site";

export const metadata = { title: "דף נחיתה" };

export default function Landing(){
  return (
    <div className="grid gap-8">
      <section className="hero">
        <div className="title">תיק השקעות פסיבי. פשוט.</div>
        <p className="subtitle">מסלול לימוד קצר בעברית — 20 ימים מ"אפס" לתיק השקעות במדדים. בלי רעש. בלי בלבול.</p>
        <div className="actions">
          <Link href="/learn" className="btn">מתחילים עכשיו</Link>
          <a className="btn-secondary" href={`https://wa.me/${site.whatsapp.replace('+','').replace('-','').replace(' ','')}`} target="_blank">שאלה מהירה בוואטסאפ</a>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        <div className="card"><h3 className="font-semibold mb-1">קצר ותכל’ס</h3><p className="text-slate-300 text-sm">10–20 דק׳ ביום. משימות קטנות שמתקדמות באמת.</p></div>
        <div className="card"><h3 className="font-semibold mb-1">שפה פשוטה</h3><p className="text-slate-300 text-sm">הסברים בעברית ברורה. אין צורך בידע מוקדם.</p></div>
        <div className="card"><h3 className="font-semibold mb-1">שגרה נכונה</h3><p className="text-slate-300 text-sm">DCA, איזון תקופתי, לא להתרגש מכותרות.</p></div>
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold mb-2">למי זה מתאים?</h2>
        <ul className="list-disc pr-6 space-y-1 text-slate-300">
          <li>למי שרוצה להתחיל להשקיע במדדים ולא יודע מאיפה להתחיל.</li>
          <li>למי שמחפש מסלול פשוט, תכליתי וממושמע.</li>
          <li>למי שרוצה הדרכה בעברית עם צעדים ברורים ויישומיים.</li>
        </ul>
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold mb-2">מה יוצא לי מזה?</h2>
        <ul className="list-disc pr-6 space-y-1 text-slate-300">
          <li>תיק השקעות בסיסי לטווח ארוך (ETF/ים נבחר/ים).</li>
          <li>שגרה חודשית: הפקדה, בדיקה, איזון.</li>
          <li>ביטחון ודיוק—פחות לחץ מכותרות, יותר פעולה שיטתית.</li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/learn" className="btn">התחל את ה־20 יום</Link>
          <Link href="/faq" className="btn-secondary">יש לי עוד שאלות</Link>
        </div>
      </section>
    </div>
  );
}
