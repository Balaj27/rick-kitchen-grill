"use client";

import { FormEvent, useState } from "react";
import {
  Footer,
  PageIntro,
  SiteHeader,
  foodImages,
} from "@/components/site-header";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="bg-[#f4efe5] text-[#27231f]">
      <SiteHeader />
      <PageIntro
        eyebrow="Pull up a chair"
        title="Come find us."
        image={foodImages.hero}
      />
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 sm:py-28 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#b64b35]">
            Visit Nick&apos;s
          </p>
          <h2 className="font-serif text-5xl leading-none">
            Let&apos;s make
            <br />
            <em className="font-light">a night of it.</em>
          </h2>
          <div className="mt-10 flex flex-col gap-6 text-sm leading-6 text-[#625c53]">
            <p>
              <strong className="text-[#27231f]">Address</strong>
              <br />
              17G, Jalan Putra Mahkota 7/6b
              <br />
              Putra Heights, 47650 Subang Jaya
              <br />
              Selangor, Malaysia
            </p>
            <p>
              <strong className="text-[#27231f]">Hours</strong>
              <br />
              Monday · 12–2:30pm, 5:30–10pm
              <br />
              Tuesday · Closed
              <br />
              Wednesday · 12–2:30pm, 5:30–10pm
              <br />
              Thursday · 12–2:30pm, 5:30–10pm
              <br />
              Friday · 12–2:30pm, 5:30–10pm
              <br />
              Saturday · 12–2:30pm, 5:30pm–12am
              <br />
              Sunday · 12–2:30pm, 5:30–10pm
            </p>
            <p>
              <strong className="text-[#27231f]">Call</strong>
              <br />
              <a href="tel:+60183814255" className="hover:text-[#b64b35]">
                +60 18-381 4255
              </a>
            </p>
            <p>
              <strong className="text-[#27231f]">Follow along</strong>
              <br />
              <a
                href="https://www.instagram.com/nicksgrillkitchen/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#b64b35]"
              >
                Instagram
              </a>{" "}
              ·{" "}
              <a
                href="https://www.facebook.com/p/Nicks-Grill-Kitchen-61572357404602/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#b64b35]"
              >
                Facebook
              </a>
              <br />
              <a
                href="mailto:hello@nicksgrill.com"
                className="hover:text-[#b64b35]"
              >
                hello@nicksgrill.com
              </a>
            </p>
          </div>
        </div>
        <form onSubmit={submit} className="bg-[#e8dfcf] p-6 sm:p-10">
          <h2 className="font-serif text-3xl">Say hello</h2>
          <p className="mt-2 text-sm text-[#625c53]">
            Questions, celebrations, good ideas — we&apos;re listening.
          </p>
          {sent ? (
            <div className="mt-10 border-l-4 border-[#b64b35] bg-[#f4efe5] p-5 text-sm leading-6">
              Thanks for reaching out. We&apos;ll be in touch soon.
            </div>
          ) : (
            <div className="mt-8 flex flex-col gap-5">
              <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.16em]">
                Your name
                <input
                  required
                  name="name"
                  className="border-b border-[#9e907c] bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none focus:border-[#b64b35]"
                />
              </label>
              <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.16em]">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  className="border-b border-[#9e907c] bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none focus:border-[#b64b35]"
                />
              </label>
              <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.16em]">
                Message
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="resize-none border-b border-[#9e907c] bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none focus:border-[#b64b35]"
                />
              </label>
              <button
                className="mt-3 self-start bg-[#b64b35] px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white hover:bg-[#963a28]"
                type="submit"
              >
                Send message
              </button>
            </div>
          )}
        </form>
      </section>
      <Footer />
    </main>
  );
}
