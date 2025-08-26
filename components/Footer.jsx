import Link from "next/link";
import { site } from "../lib/site";
export default function Footer(){
  return (
    <footer className="mt-12 border-t border-slate-800">
      <div className="container py-8 grid md:grid-cols-3 gap-6 text-slate-300">
        <div>
          <div className="font-semibold text-white mb-2">{site.name}</div>
          <p className="text-sm">{site.description}</p>
        </div>
        <div>
          <div className="font-semibold text-white mb-2">ניווט</div>
          <ul className="space-y-1">
            <li><Link href="/landing">דף נחיתה</Link></li>
            <li><Link href="/learn">תהליך 20 יום</Link></li>
            <li><Link href="/faq">שאלות נפוצות</Link></li>
            <li><Link href="/contact">צור קשר</Link></li>
            <li><Link href="/legal/terms">תנאי שימוש</Link></li>
            <li><Link href="/legal/privacy">מדיניות פרטיות</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white mb-2">יצירת קשר</div>
          <ul className="space-y-1">
            <li>אימייל: <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></li>
            <li>וואטסאפ: <a href={`https://wa.me/${site.whatsapp.replace('+','').replace('-','').replace(' ','')}`} target="_blank">שלח הודעה</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 pb-8">© {new Date().getFullYear()} {site.name}. כל הזכויות שמורות.</div>
    </footer>
  );
}
