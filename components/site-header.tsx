import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 bg-[#211d19]/78 text-white shadow-lg backdrop-blur-sm">
      <div className="border-b border-white/10 bg-[#161411]/70 px-5 py-2 text-center text-[10px] uppercase tracking-[0.2em] text-white/65">
        Monday, Wednesday–Sunday · 12–2:30pm, 5:30pm until late{" "}
        <span className="mx-3 text-[#e6b34a]">•</span> +60 18-381 4255
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 lg:px-10">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          aria-label="Nick's Grill & Kitchen home"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WPul7NQWgZNbi3sYx59l9Mg5Onaq34.png"
            alt="Nick's Grill & Kitchen logo"
            width={48}
            height={48}
            className="size-10 rounded-full border border-[#e6b34a]/70 object-cover sm:size-12"
          />
          <span className="hidden text-[11px] font-semibold uppercase leading-tight tracking-[0.18em] sm:block">
            Nick&apos;s Grill
            <br />
            <span className="font-normal tracking-[0.1em]">&amp; Kitchen</span>
          </span>
        </Link>
        <nav
          className="flex min-w-0 items-center gap-3 overflow-x-auto text-[10px] font-semibold uppercase tracking-[0.12em] sm:gap-5 lg:gap-7"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="whitespace-nowrap transition-colors hover:text-[#e6b34a]"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="whitespace-nowrap transition-colors hover:text-[#e6b34a]"
          >
            About
          </Link>
          <Link
            href="/menu"
            className="whitespace-nowrap transition-colors hover:text-[#e6b34a]"
          >
            Menu
          </Link>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-sm bg-[#b64b35] px-3 py-2 text-white transition-colors hover:bg-[#963a28]"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1e1d1a] px-6 py-14 text-[#f5f0e6]">
      <div className="mx-auto grid max-w-7xl gap-10 border-b border-white/15 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-3"
            aria-label="Nick's Grill & Kitchen home"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WPul7NQWgZNbi3sYx59l9Mg5Onaq34.png"
              alt="Nick's Grill & Kitchen logo"
              width={56}
              height={56}
              className="size-12 rounded-full border border-[#e6b34a]/70 object-cover"
            />
            <span className="text-sm font-semibold uppercase leading-tight tracking-[0.18em]">
              Nick&apos;s Grill
              <br />
              <span className="font-normal tracking-[0.1em]">
                &amp; Kitchen
              </span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-6 text-white/55">
            Good food. Properly grilled.
            <br />
            Made for gathering.
          </p>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#e6b34a]">
            Find us
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/70">
            17G, Jalan Putra Mahkota 7/6b
            <br />
            Putra Heights, 47650 Subang Jaya
            <br />
            Selangor, Malaysia
            <br />
            <a href="tel:+60183814255" className="hover:text-white">
              +60 18-381 4255
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#e6b34a]">
            Hours
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/70">
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
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#e6b34a]">
            Follow along
          </h2>
          <div className="mt-4 flex gap-5 text-sm">
            <a
              href="https://www.instagram.com/nicksgrillkitchen/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#efc4a4]"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/p/Nicks-Grill-Kitchen-61572357404602/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#efc4a4]"
            >
              Facebook
            </a>
          </div>
          <a
            href="mailto:hello@nickspillandkitchen.com"
            className="mt-4 block text-sm text-white/60 hover:text-white"
          >
            hello@nicksgrill.com
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 pt-6 text-[10px] uppercase tracking-[0.18em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Nick&apos;s Grill &amp; Kitchen</span>
        <span>Reservations · Catering · Private dining</span>
      </div>
    </footer>
  );
}

export const foodImages = {
  hero: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1800&q=85",
  steak:
    "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=85",
  kitchen:
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=85",
  salad:
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85",
  grill:
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=85",
};

export function PageIntro({
  eyebrow,
  title,
  image,
  imageClassName = "",
  sectionClassName = "",
}: {
  eyebrow: string;
  title: string;
  image: string;
  imageClassName?: string;
  sectionClassName?: string;
}) {
  return (
    <section className={`relative flex min-h-[46vh] items-end overflow-hidden bg-[#28231e] px-6 pb-14 pt-32 text-white sm:min-h-[55vh] sm:pb-20 ${sectionClassName}`}>
      <Image
        src={image}
        alt=""
        fill
        priority
        className={`object-cover opacity-55 ${imageClassName}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#201c18] via-[#201c18]/20 to-black/20" />
      <div className="relative mx-auto w-full max-w-7xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#e6b34a]">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] sm:text-7xl">
          {title}
        </h1>
      </div>
    </section>
  );
}

export const ButtonLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="inline-flex items-center justify-center bg-[#b64b35] px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#963a28]"
  >
    {children}
  </Link>
);

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#30271f] px-6 py-24 text-center text-white sm:py-32">
      <Image
        src="https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=1800&q=85"
        alt="Fresh tomatoes and herbs at the market"
        fill
        className="object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-[#241b17]/60" />
      <div className="relative mx-auto max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e6b34a]">
          From the table
        </p>
        <h2 className="mt-4 font-serif text-5xl sm:text-7xl">Testimonials</h2>
        <div className="mx-auto mt-8 max-w-2xl">
          <p className="font-serif text-2xl italic leading-relaxed text-[#f5eee1] sm:text-3xl">
            “The kind of place you tell your friends about, then bring them back
            to next week.”
          </p>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-[#efc4a4]">
            — Maya R., regular since day one
          </p>
        </div>
        <div className="mt-12 grid gap-8 text-left sm:grid-cols-3">
          <blockquote className="border-t border-white/30 pt-4">
            <p className="font-serif text-xl">
              “Perfectly grilled, genuinely warm.”
            </p>
            <cite className="mt-3 block text-xs not-italic uppercase tracking-widest text-white/60">
              Alex P.
            </cite>
          </blockquote>
          <blockquote className="border-t border-white/30 pt-4">
            <p className="font-serif text-xl">
              “A neighborhood gem with serious flavor.”
            </p>
            <cite className="mt-3 block text-xs not-italic uppercase tracking-widest text-white/60">
              Jordan K.
            </cite>
          </blockquote>
          <blockquote className="border-t border-white/30 pt-4">
            <p className="font-serif text-xl">
              “Come hungry. Stay for dessert.”
            </p>
            <cite className="mt-3 block text-xs not-italic uppercase tracking-widest text-white/60">
              Sam T.
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
