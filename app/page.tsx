"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState({ d: "00", h: "00", m: "00", s: "00" });

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

  // 🔥 BI-WEEKLY TIMER (timezone safe)
  useEffect(() => {
    const start = new Date("2026-04-02T00:00:00Z"); // change start
    const duration = 14 * 24 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const cycle = Math.floor((now - start.getTime()) / duration);
      const end = start.getTime() + (cycle + 1) * duration;

      const diff = end - now;

      setTime({
        d: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        h: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        m: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0"),
        s: String(Math.floor((diff / 1000) % 60)).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 20, textAlign: "center" }}>

      {/* TITLE */}
      <h1 style={{ fontSize: 70, fontWeight: 800 }}>
        $500 Leaderboard
      </h1>

      <p style={{ opacity: 0.6 }}>Bi-Weekly Event</p>

      {/* CTA */}
      <p style={{ marginTop: 10 }}>
        Click to join 👉{" "}
        <a
          href="https://b.site/r/sutchyyy"
          target="_blank"
          className="glow-link"
        >
          BSITE
        </a>
      </p>

      {/* TOP 3 */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
        gap: 20,
        marginTop: 50
      }}>
        {[1, 0, 2].map((i, idx) => {
          const u = users[i];
          const isFirst = i === 0;

          return (
            <div key={idx}
              className={`glass ${isFirst ? "gold" : ""}`}
              style={{
                width: isFirst ? 260 : 200,
                padding: 20,
                borderRadius: 20,
                transform: isFirst ? "scale(1.1)" : "scale(1)"
              }}>
              <h3>#{i + 1}</h3>
              <p>{u.name}</p>

              <h2 style={{ color: isFirst ? "gold" : "white" }}>
                ${u.wager}
              </h2>

              {/* PRIZE */}
              <p style={{ opacity: 0.7 }}>
                Prize: ${u.prize}
              </p>
            </div>
          );
        })}
      </div>

      {/* TIMER */}
      <div style={{ marginTop: 50 }}>
        <h3>TIME LEFT</h3>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 10
        }}>
          {[time.d, time.h, time.m, time.s].map((t, i) => (
            <div key={i}
              className="glass"
              style={{ padding: "15px 20px", borderRadius: 10 }}>
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* TOP 10 */}
      <div style={{
        marginTop: 60,
        maxWidth: 700,
        marginInline: "auto"
      }}>
        {users.map((u, i) => (
          <div key={i}
            className="glass"
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: 15,
              borderRadius: 12,
              marginBottom: 10
            }}>
            <span>#{i + 1} {u.name}</span>
            <span>${u.wager}</span>
            <span style={{ opacity: 0.7 }}>
              ${u.prize || "-"}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}