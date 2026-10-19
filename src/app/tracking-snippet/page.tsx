"use client";

import { useState } from "react";
import Link from "next/link";

const SITE_KEY = "sk_e6570481733df40e954becbace8e22b5fc73";
const SNIPPET = `<script async src="https://t-leados.mohsindesigns.com/leados.js" data-site-key="${SITE_KEY}" data-collector="https://t-leados.mohsindesigns.com"></script>`;

function CopyField({ value, mono = true }: { value: string; mono?: boolean }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard API unavailable; nothing to do
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`group relative w-full text-left rounded-xl bg-brand-light dark:bg-[#1e1e2e] border border-brand-zinc-200/80 dark:border-white/10 px-4 py-3 ${
        mono ? "font-mono" : ""
      } text-sm text-black dark:text-white overflow-x-auto hover:border-brand-blue/40 dark:hover:border-brand-yellow/40 transition-colors duration-200`}
    >
      <span className="block whitespace-pre-wrap break-all pr-16">{value}</span>
      <span className="absolute top-1/2 right-3 -translate-y-1/2 text-xs font-sans font-medium text-brand-zinc-500 dark:text-brand-zinc-400 group-hover:text-brand-blue dark:group-hover:text-brand-yellow transition-colors duration-200">
        {copied ? "Copied!" : "Copy"}
      </span>
    </button>
  );
}

export default function TrackingSnippetPage() {
  return (
    <main className="relative bg-white dark:bg-[#080710] py-24 md:py-32 min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="rounded-[2.5rem] border border-brand-zinc-200/80 dark:border-white/10 bg-white dark:bg-[#12121e] p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(3,6,172,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
          <h1 className="text-lg font-semibold font-heading text-black dark:text-white">
            Install the tracking snippet
          </h1>

          <div className="mt-8">
            <p className="text-xs font-medium uppercase tracking-wide text-brand-zinc-500 dark:text-brand-zinc-400">
              Site key
            </p>
            <div className="mt-2">
              <CopyField value={SITE_KEY} />
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xs font-medium uppercase tracking-wide text-brand-zinc-500 dark:text-brand-zinc-400">
              Paste before the closing head tag
            </p>
            <div className="mt-2">
              <CopyField value={SNIPPET} />
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-brand-zinc-200/80 dark:border-white/10 pt-6">
            <div className="flex flex-wrap items-center gap-5 text-sm font-medium">
              <Link
                href="/"
                className="text-brand-blue dark:text-brand-yellow hover:underline underline-offset-4"
              >
                ← All projects
              </Link>
              <Link
                href="#"
                className="text-brand-blue dark:text-brand-yellow hover:underline underline-offset-4"
              >
                View analytics →
              </Link>
              <Link
                href="#"
                className="text-brand-blue dark:text-brand-yellow hover:underline underline-offset-4"
              >
                Site audit →
              </Link>
            </div>

            <button
              type="button"
              className="rounded-full border border-brand-zinc-200/80 dark:border-white/10 bg-white dark:bg-[#1e1e2e] px-5 py-2 text-sm font-medium text-black dark:text-white hover:border-brand-blue/40 dark:hover:border-brand-yellow/40 transition-colors duration-200"
            >
              Archive project
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
