import {
  Footer,
  PageIntro,
  SiteHeader,
  foodImages,
} from "@/components/site-header";
import menu from "@/data/menu.json";
export default function MenuPage() {
  return (
    <main className="bg-[#f4efe5] text-[#27231f]">
      <SiteHeader />
      <PageIntro eyebrow="Eat well" title="The menu" image={foodImages.grill} />
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <p className="mx-auto mb-14 max-w-xl text-center text-sm leading-6 text-[#625c53]">
          A menu made for lingering. Start small, find your favorite, and leave
          room for something sweet.
        </p>
        <div className="grid gap-14 md:grid-cols-2">
          {menu.categories.map((category) => (
            <section key={category.name}>
              <div className="mb-6 flex items-baseline justify-between border-b-2 border-[#b64b35] pb-3">
                <h2 className="font-serif text-3xl">{category.name}</h2>
                <span className="text-xs uppercase tracking-[0.18em] text-[#b64b35]">
                  Nick&apos;s
                </span>
              </div>
              <div className="flex flex-col gap-7">
                {category.items.map((item) => (
                  <article
                    key={item.name}
                    className="flex items-start justify-between gap-5"
                  >
                    <div>
                      <h3 className="font-serif text-xl">{item.name}</h3>
                      <p className="mt-1 text-sm leading-5 text-[#756e64]">
                        {item.description}
                      </p>
                    </div>
                    <span className="shrink-0 font-serif text-lg text-[#b64b35]">
                      RM{item.price}
                    </span>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
