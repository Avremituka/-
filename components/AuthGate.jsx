"use client";
import { useEffect, useState } from "react";
import { auth, provider, signInWithPopup, signOut, firebaseAvailable } from "../lib/firebase";

export default function AuthGate(){
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!firebaseAvailable) { setReady(true); return; }
    const unsub = auth.onAuthStateChanged(u => { setUser(u); setReady(true); });
    return () => unsub && unsub();
  }, []);

  if (!ready) return <div className="text-sm text-slate-300">טוען...</div>;

  if (!firebaseAvailable) {
    return <div className="badge">מצב אורח — להתחברות הוסף משתני Firebase.</div>;
  }
  if (!user) {
    return (
      <button className="btn" onClick={async () => {
        try { await signInWithPopup(auth, provider); }
        catch(e){ alert("שגיאה בהתחברות: " + e.message); }
      }}>כניסה עם Google</button>
    );
  }
  return (
    <div className="flex items-center gap-3">
      <span className="badge">מחובר: {user.displayName || user.email}</span>
      <button className="btn-secondary" onClick={() => signOut(auth)}>התנתק</button>
    </div>
  );
}
