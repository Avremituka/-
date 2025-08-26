"use client";
import { db } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
const LS_KEY = "learning_progress_v1";
export function getLocalProgress(){ if (typeof window === "undefined") return {completedDays:[]}; try{ return JSON.parse(localStorage.getItem(LS_KEY)) || {completedDays:[]} } catch{ return {completedDays:[]} } }
export function setLocalProgress(p){ if (typeof window !== "undefined") localStorage.setItem(LS_KEY, JSON.stringify(p)); }
export async function getRemoteProgress(uid){ if (!db || !uid) return null; const ref = doc(db, "progress", uid); const snap = await getDoc(ref); return snap.exists()? snap.data() : null; }
export async function setRemoteProgress(uid, p){ if (!db || !uid) return; const ref = doc(db, "progress", uid); await setDoc(ref, {...p, updatedAt: new Date().toISOString()}, { merge: true }); }
export function mergeProgress(localP, remoteP){ if (!remoteP) return localP || {completedDays:[]}; const set = new Set([...(localP?.completedDays||[]), ...(remoteP?.completedDays||[])]); return { completedDays: Array.from(set).sort((a,b)=>a-b) }; }
