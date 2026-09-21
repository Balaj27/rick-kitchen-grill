import Image from "next/image";
import {
  ButtonLink,
  Footer,
  SiteHeader,
  Testimonials,
  foodImages,
} from "@/components/site-header";

export default function HomePage() {
  return (
    <main className="bg-[#f4efe5] text-[#27231f]">
      <SiteHeader />
      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-[#29231f] px-6 pb-16 pt-32 text-white sm:pb-24">
        <Image
          src="/hero.jpeg"
          alt="A beautifully grilled steak dinner at Nick's"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1713] via-[#1c1713]/20 to-black/20" />
        <div className="relative mx-auto w-full max-w-7xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#e6b34a]">
            Neighborhood grill · Since 2012
          </p>
          <h1 className="max-w-4xl font-serif text-6xl leading-[0.88] sm:text-8xl md:text-9xl">
            Big flavor.
            <br />
            <em className="font-light text-[#efc4a4]">Honest fire.</em>
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <ButtonLink href="/menu">Explore the menu</ButtonLink>
            <span className="text-sm text-white/75">
              Open Monday, Wednesday — Sunday
              <br />
              12–2:30pm · 5:30pm until late
            </span>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-10">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#b64b35]">
            Welcome to Nick&apos;s
          </p>
          <h2 className="font-serif text-5xl leading-[0.95] sm:text-6xl">
            A little smoke,
            <br />
            <em className="font-light">a lot of heart.</em>
          </h2>
          <p className="mt-7 max-w-md text-base leading-7 text-[#625c53]">
            We&apos;re a neighborhood grill built around good produce, open
            flames, and the kind of food that makes you want to stay for one
            more round.
          </p>
          <div className="mt-8">
            <ButtonLink href="/about">Our story</ButtonLink>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="/3.jpeg"
            alt="Friends sharing grilled food around a table"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-[#e6b34a] px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#27231f]">
            Made over fire
          </div>
        </div>
      </section>
      <section className="bg-[#e8dfcf] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#b64b35]">
                Worth coming hungry for
              </p>
              <h2 className="font-serif text-5xl">The good stuff</h2>
            </div>
            <ButtonLink href="/menu">View full menu</ButtonLink>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            <Feature
              image="/1.jpeg"
              title="Prime cuts"
              text="Simple seasoning. Serious char."
            />
            <Feature
              image="/2.jpeg"
              title="Fresh sides"
              text="Color, crunch, and a little acid."
            />
            <Feature
              image={foodImages.kitchen}
              title="Made in-house"
              text="From our kitchen to your table."
            />
          </div>
        </div>
      </section>
      <Testimonials />
      <Footer />
    </main>
  );
}
function Feature({
  image,
  title,
  text,
}: {
  image: string;
  title: string;
  text: string;
}) {
  return (
    <article className="group">
      <div className="relative aspect-[1.15] overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-5 font-serif text-3xl">{title}</h3>
      <p className="mt-1 text-sm text-[#625c53]">{text}</p>
    </article>
  );
}
