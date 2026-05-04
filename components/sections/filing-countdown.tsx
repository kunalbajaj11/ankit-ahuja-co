"use client";

import { useEffect, useMemo, useState } from "react";

type FilingCountdownProps = {
  title: string;
  description: string;
  endAt: string;
  timeZone: string;
};

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
};

function getRemaining(endMs: number, nowMs: number): Remaining {
  const diff = endMs - nowMs;
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }
  const seconds = Math.floor(diff / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return { days, hours, minutes, seconds: secs, expired: false };
}

export function FilingCountdown({ title, description, endAt, timeZone }: FilingCountdownProps) {
  const endMs = useMemo(() => new Date(endAt).getTime(), [endAt]);
  const [remaining, setRemaining] = useState<Remaining>(() =>
    getRemaining(endMs, Date.now()),
  );

  useEffect(() => {
    const tick = () => setRemaining(getRemaining(endMs, Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [endMs]);

  const formatter = useMemo(
    () =>
      new Intl.DateTimeFormat("en-IN", {
        timeZone,
        dateStyle: "medium",
        timeStyle: "short",
      }),
    [timeZone],
  );

  const deadlineLabel = useMemo(() => {
    const d = new Date(endAt);
    return Number.isNaN(d.getTime()) ? "" : formatter.format(d);
  }, [endAt, formatter]);

  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold text-primary">{title}</h2>
          <p className="mt-2 text-sm text-slate-700">{description}</p>
          {deadlineLabel ? (
            <p className="mt-3 text-xs font-medium text-slate-600">
              Target reference: {deadlineLabel} ({timeZone})
            </p>
          ) : null}
        </div>

        {remaining.expired ? (
          <p className="max-w-md text-sm text-slate-800">
            <span className="font-semibold">This reminder date has passed.</span>{" "}
            Reach out and we will map the next statutory dates that apply to your registrations and
            return types.
          </p>
        ) : (
          <div
            className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
            role="timer"
            aria-live="polite"
            aria-label="Time remaining until reference deadline"
          >
            {(
              [
                ["Days", remaining.days],
                ["Hours", remaining.hours],
                ["Minutes", remaining.minutes],
                ["Seconds", remaining.seconds],
              ] as const
            ).map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-amber-100 bg-white px-3 py-4 text-center shadow-sm"
              >
                <p className="text-2xl font-bold tabular-nums text-primary sm:text-3xl">
                  {String(value).padStart(2, "0")}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
