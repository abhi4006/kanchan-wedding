"use client";

import { useEffect, useState } from "react";

const WEDDING_TIME = new Date("2026-07-03T19:00:00+05:30").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTimeLeft(): TimeLeft | null {
  const difference = WEDDING_TIME - Date.now();

  if (difference <= 0) return null;

  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60)
  };
}

function formatNumber(value: number | undefined) {
  return value === undefined ? "--" : String(value).padStart(2, "0");
}

export function WeddingCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null | undefined>();

  useEffect(() => {
    const updateCountdown = () => setTimeLeft(calculateTimeLeft());

    updateCountdown();
    const timer = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="countdown-panel" aria-label="विवाह की उलटी गिनती">
      {timeLeft === null ? (
        <p className="countdown-arrived">मंगल बेला आ गई है</p>
      ) : (
        <>
          <p>शुभ विवाह तक</p>
        <div className="countdown-grid" aria-live="off">
          <span>
            <strong>{formatNumber(timeLeft?.days)}</strong>
            <small>दिन</small>
          </span>
          <span>
            <strong>{formatNumber(timeLeft?.hours)}</strong>
            <small>घंटे</small>
          </span>
          <span>
            <strong>{formatNumber(timeLeft?.minutes)}</strong>
            <small>मिनट</small>
          </span>
          <span>
            <strong>{formatNumber(timeLeft?.seconds)}</strong>
            <small>सेकंड</small>
          </span>
        </div>
        </>
      )}
    </section>
  );
}
