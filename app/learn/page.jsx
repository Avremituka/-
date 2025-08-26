"use client";
import Link from "next/link";
import { program } from "../../data/program";
import { useEffect, useState } from "react";
import { auth, firebaseAvailable } from "../../lib/firebase";
import { getLocalProgress, setLocalProgress, getRemoteProgress, setRemoteProgress, mergeProgress } from "../../lib/progress";

export default function LearnList(){
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    let unsub = null;
    const init = async (u) => {
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

  return (
    <div className="grid gap-6">
      <div className="card">
        <h1 className="text-2xl font-bold mb-2">תהליך 20 יום</h1>
        <p className="text-slate-300">סמן ימים שהושלמו ועבור בין התכנים בקצב שלך.</p>
      </div>
      <div className="grid gap-3">
        {program.map((d) => {
          const done = completed.includes(d.day);
          return (
            <Link key={d.day} href={`/learn/${d.day}`} className="card block hover:bg-slate-800">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-lg font-semibold">יום {d.day}: {d.title}</div>
                  <div className="text-slate-300 text-sm">{d.summary}</div>
                </div>
                <div className={`badge ${done ? "bg-green-700" : "bg-slate-700"}`}>{done ? "הושלם" : "עדיין לא"}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
