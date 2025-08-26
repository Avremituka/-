"use client";
import { program } from "../../../data/program";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { auth, firebaseAvailable } from "../../../lib/firebase";
import { getLocalProgress, setLocalProgress, getRemoteProgress, setRemoteProgress, mergeProgress } from "../../../lib/progress";

export default function DayPage(){
  const params = useParams();
  const router = useRouter();
  const dayNum = Number(params.day);
  const day = useMemo(() => program.find(d => d.day === dayNum), [dayNum]);

  const [completed, setCompleted] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    let unsub = null;
    const init = async (u) => {
      setUser(u);
      const local = getLocalProgress();
      if (u) {
        const remote = await getRemoteProgress(u.uid);
        const merged = mergeProgress(local, remote);
        setCompleted(merged.completedDays);
        await setRemoteProgress(u.uid, merged);
        setLocalProgress(merged);
      } else {
        setCompleted(local.completedDays);
      }
    };
    if (firebaseAvailable) unsub = auth.onAuthStateChanged(init); else init(null);
    return () => unsub && unsub();
  }, []);

  if (!day) {
    return (
      <div className="card">
        <div className="text-lg font-semibold mb-2">לא נמצא</div>
        <Link className="btn" href="/learn">חזרה לרשימה</Link>
      </div>
    );
  }

  const isDone = completed.includes(dayNum);

  async function toggleComplete(){
    let next = new Set(completed);
    if (isDone) next.delete(dayNum); else next.add(dayNum);
    const updated = { completedDays: Array.from(next).sort((a,b)=>a-b) };
    setCompleted(updated.completedDays);
    setLocalProgress(updated);
    if (user) await setRemoteProgress(user.uid, updated);
  }
  function goNext(){
    const idx = program.findIndex(d => d.day === dayNum);
    if (idx >= 0 && idx < program.length - 1) router.push(`/learn/${program[idx+1].day}`);
    else router.push("/dashboard");
  }
  function goPrev(){
    const idx = program.findIndex(d => d.day === dayNum);
    if (idx > 0) router.push(`/learn/${program[idx-1].day}`);
    else router.push("/learn");
  }

  return (
    <div className="grid gap-6">
      <div className="card">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-2xl font-bold">יום {day.day}: {day.title}</h1>
          <span className={`badge ${isDone ? "bg-green-700" : "bg-slate-700"}`}>{isDone ? "הושלם" : "בתהליך"}</span>
        </div>
        <p className="text-slate-300 mt-2">{day.summary}</p>
      </div>
      <div className="card">
        <h2 className="text-lg font-semibold mb-2">משימות להיום</h2>
        <ul className="list-disc pr-6 space-y-2 text-slate-200">
          {day.tasks.map((t,i)=><li key={i}>{t}</li>)}
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <button className="btn-secondary" onClick={goPrev}>יום קודם</button>
        <button className="btn" onClick={toggleComplete}>{isDone ? "בטל סימון 'הושלם'" : "סמן כהושלם"}</button>
        <button className="btn-secondary" onClick={goNext}>הבא</button>
        <Link href="/learn" className="ml-auto btn-secondary">חזרה לרשימה</Link>
      </div>
    </div>
  );
}
