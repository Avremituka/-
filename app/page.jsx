import Link from "next/link";
import AuthGate from "../components/AuthGate";

export default function HomePage(){
  return (
    <div className="grid gap-6">
      <div className="card">
        <h1 className="text-3xl font-bold mb-2">ברוך הבא! 👋</h1>
        <p className="text-slate-300 mb-4">זהו האתר שלך ללמידה פשוטה ומעשית להשקעה במדדים.</p>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/landing" className="btn">דף נחיתה</Link>
          <Link href="/learn" className="btn-secondary">התחל את ה־20 יום</Link>
          <Link href="/dashboard" className="btn-secondary">דשבורד</Link>
          <AuthGate />
        </div>
      </div>
    </div>
  );
}
