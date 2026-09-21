import Image from "next/image";
import {
  Footer,
  PageIntro,
  SiteHeader,
  Testimonials,
  ButtonLink,
  foodImages,
} from "@/components/site-header";
export default function AboutPage() {
  return (
    <main className="bg-[#f4efe5] text-[#27231f]">
      <SiteHeader />
      <PageIntro
        eyebrow="The Nick's way"
        title="A grill with a point of view."
        image={foodImages.kitchen}
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#b64b35]">
            Our story
          </p>
          <h2 className="font-serif text-5xl leading-none sm:text-6xl">
            Food tastes better
            <br />
            <em className="font-light">when it&apos;s shared.</em>
          </h2>
        </div>
        <div className="max-w-xl text-base leading-8 text-[#625c53]">
          <p>
            Nick&apos;s began with a simple idea: make the kind of food people
            actually crave, in a room that feels like it belongs to the
            neighborhood. Our kitchen is built around live fire, careful
            sourcing, and generous plates.
          </p>
          <p className="mt-6">
            We work with local farmers, bakers, and makers wherever we can.
            Nothing is overworked. Everything gets the time, heat, and attention
            it deserves.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact">Come say hello</ButtonLink>
          </div>
        </div>
      </section>
      <section className="bg-[#e8dfcf] px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2">
          <Image
            src={foodImages.steak}
            alt="Steak fresh from the grill"
            width={800}
            height={650}
            className="h-full min-h-72 object-cover"
          />
          <div className="flex flex-col justify-center p-2 sm:p-10">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#b64b35]">
              Our kitchen
            </p>
            <h2 className="font-serif text-5xl">
              Good ingredients.
              <br />
              Proper technique.
            </h2>
            <p className="mt-6 max-w-md leading-7 text-[#625c53]">
              Our menu changes with the seasons, but our promise stays the same:
              bold, balanced food served with warmth.
            </p>
          </div>
        </div>
      </section>
      <Testimonials />
      <Footer />
    </main>
  );
}
