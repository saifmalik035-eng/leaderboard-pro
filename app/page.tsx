"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState({ d: "00", h: "00", m: "00", s: "00" });

  // 🕒 Bi-weekly timer (auto timezone safe)
  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 14);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) return;

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setTime({
        d: String(d).padStart(2, "0"),
        h: String(h).padStart(2, "0"),
        m: String(m).padStart(2, "0"),
        s: String(s).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const users = [
    { name: "SUTCHY", wager: 27500, prize: 225 },
    { name: "SHAJ", wager: 17500, prize: 100 },
    { name: "SAIF", wager: 10000, prize: 45 },
    { name: "ED", wager: 7000, prize: 30 },
    { name: "Player1", wager: 3000, prize: 0 },
    { name: "Player2", wager: 2500, prize: 0 },
    { name: "Player3", wager: 2000, prize: 0 },
    { name: "Player4", wager: 1500, prize: 0 },
    { name: "Player5", wager: 1200, prize: 0 },
    { name: "Player6", wager: 900, prize: 0 },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">

      {/* TITLE */}
      <h1 className="text-5xl font-bold text-yellow-400 mb-2">
        $500 Leaderboard
      </h1>

      <p className="opacity-60 mb-4">Bi-Weekly Event</p>

      {/* CLICK CTA */}
      <a
        href="https://b.site/r/sutchyyy"
        target="_blank"
        className="text-yellow-400 font-semibold hover:underline mb-8"
      >
        Click to join BSite 🔥
      </a>

      {/* TOP 3 */}
      <div className="flex gap-6 mb-10">
        {users.slice(0, 3).map((u, i) => (
          <div
            key={i}
            className={`p-6 rounded-xl border ${
              i === 0
                ? "border-yellow-400 shadow-[0_0_30px_gold]"
                : "border-gray-700"
            }`}
          >
            <h2 className="text-lg">#{i + 1}</h2>
            <p className="text-xl font-bold">{u.name}</p>
            <p className="text-yellow-400">${u.wager}</p>
            <p className="text-sm opacity-70">Prize: ${u.prize}</p>
          </div>
        ))}
      </div>

      {/* TIMER */}
      <div className="flex gap-4 mb-10">
        {[time.d, time.h, time.m, time.s].map((t, i) => (
          <div key={i} className="bg-gray-900 px-4 py-2 rounded">
            {t}
          </div>
        ))}
      </div>

      {/* TOP 10 */}
      <div className="w-full max-w-xl">
        {users.map((u, i) => (
          <div
            key={i}
            className="flex justify-between bg-gray-900 p-3 rounded mb-2"
          >
            <span>
              #{i + 1} {u.name}
            </span>
            <span>${u.wager}</span>
            <span className="text-yellow-400">${u.prize}</span>
          </div>
        ))}
      </div>
    </div>
  );
}