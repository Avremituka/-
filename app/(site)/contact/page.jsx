import { site } from "../../../lib/site";
export const metadata = { title: "צור קשר" };
export default function ContactPage(){
  return (
    <div className="grid gap-6">
      <div className="card"><h1 className="text-2xl font-bold mb-2">צור קשר</h1><p className="text-slate-300">שאלות? נשמח לשמוע.</p></div>
      <div className="card grid gap-4">
        <div><div className="text-sm text-slate-300">אימייל</div><a className="btn" href={`mailto:${site.contactEmail}`}>שלח מייל</a></div>
        <div><div className="text-sm text-slate-300">וואטסאפ</div><a className="btn-secondary" target="_blank" href={`https://wa.me/${site.whatsapp.replace('+','').replace('-','').replace(' ','')}`}>פתח וואטסאפ</a></div>
      </div>
    </div>
  );
}