'use client';

import { useEffect, useState } from 'react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
  open: boolean;
  type?: ToastType;
  title?: string;
  message: string;
  duration?: number;
  onClose: () => void;
}

const ICONS: Record<ToastType, React.ReactNode> = {
  success: (
    <svg
      className="h-4 w-4 shrink-0 text-emerald-400 light:text-emerald-600"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  ),
  error: (
    <svg
      className="h-4 w-4 shrink-0 text-rose-400 light:text-rose-600"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  ),
  warning: (
    <svg
      className="h-4 w-4 shrink-0 text-amber-400 light:text-amber-600"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </svg>
  ),
  info: (
    <svg
      className="h-4 w-4 shrink-0 text-sky-400 light:text-sky-600"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  ),
};

const BORDER_ACCENT: Record<ToastType, string> = {
  success: 'border-l-emerald-500',
  error: 'border-l-rose-500',
  warning: 'border-l-amber-500',
  info: 'border-l-sky-500',
};

const PROGRESS_COLOR: Record<ToastType, string> = {
  success: 'bg-emerald-500',
  error: 'bg-rose-500',
  warning: 'bg-amber-500',
  info: 'bg-sky-500',
};

export default function Toast({
  open,
  type = 'info',
  title,
  message,
  duration = 5000,
  onClose,
}: ToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!open) return;

    // Deferring a frame lets the browser paint the hidden state first, so the
    // transition actually runs on mount.
    const frame = requestAnimationFrame(() => setVisible(true));

    if (duration <= 0) return () => cancelAnimationFrame(frame);

    const hideTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(hideTimer);
    };
  }, [open, duration, onClose]);

  if (!open) return null;

  return (
    // The overlay is invisible and only centres the card; pointer-events is off
    // so it never blocks the page behind it.
    <div className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div
        role="alert"
        aria-live="assertive"
        className={`pointer-events-auto relative w-full max-w-xs overflow-hidden rounded-lg border border-white/10 border-l-4 bg-container px-3 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.45)] [transition:all_.3s_cubic-bezier(0.16,1,0.3,1)] light:border-slate-200 light:shadow-[0_10px_35px_rgba(0,0,0,0.12)] ${
          BORDER_ACCENT[type]
        } ${
          visible
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-4 scale-95 opacity-0'
        }`}
      >
        <div className="flex items-start gap-2">
          <div className="mt-0.5">{ICONS[type]}</div>

          <div className="min-w-0 flex-1">
            {title && (
              <h4 className="text-smaller font-semibold leading-snug text-title light:text-slate-900">
                {title}
              </h4>
            )}
            <p className="mt-0.5 text-smaller leading-snug text-text-light light:text-slate-600">
              {message}
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setVisible(false);
              setTimeout(onClose, 300);
            }}
            className="-mr-1 rounded p-1 text-text-light transition-colors hover:bg-white/10 hover:text-title light:text-slate-400 light:hover:bg-slate-100 light:hover:text-slate-700"
            aria-label="Close notification"
          >
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {duration > 0 && visible && (
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-black/10 light:bg-slate-100">
            <div
              className={`h-full ${PROGRESS_COLOR[type]}`}
              style={{ animation: `toast-progress ${duration}ms linear forwards` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
