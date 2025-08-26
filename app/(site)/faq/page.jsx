import { faq } from "../../../data/faq";
export const metadata = { title: "שאלות נפוצות" };
export default function FAQPage(){
  return (
    <div className="grid gap-6">
      <div className="card"><h1 className="text-2xl font-bold mb-2">שאלות נפוצות</h1><p className="text-slate-300">תשובות קצרות לשאלות שחוזרות הרבה.</p></div>
      <div className="grid gap-3">{faq.map((q,i)=>(<div key={i} className="card"><div className="font-semibold mb-1">{q.q}</div><div className="text-slate-300 text-sm">{q.a}</div></div>))}</div>
    </div>
  );
}