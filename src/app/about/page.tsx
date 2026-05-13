import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Mail, Target, Lightbulb, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Lukan Wind Robotics — a Danish robotics company building 360° crawler inspection systems for wind turbine blades.',
};

export default function AboutPage() {
  return (
    <>
      <section className="container-page py-20 md:py-28">
        <p className="eyebrow mb-4">About</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl leading-[1.1]">
          A small Danish robotics team with a clear bias toward inspection done right.
        </h1>
        <p className="mt-6 text-lg text-bone/70 max-w-2xl leading-relaxed">
          Lukan Wind Robotics was founded to retire one of the most thankless jobs
          in renewables: sending people up ropes to look at blades. We build
          crawler robots, write the cloud software that goes with them, and run
          inspection campaigns end-to-end for asset owners.
        </p>
      </section>

      <hr className="hairline" />

      <section className="container-page py-20">
        <div className="grid md:grid-cols-3 gap-6">
          <ValueCard
            icon={Target}
            title="Inspection-grade, not demo-grade"
            body="Every finding is traceable to the exact frame. Every report is auditable. The cloud portal is the source of truth — not a folder on someone's laptop."
          />
          <ValueCard
            icon={Shield}
            title="Operators on the ground"
            body="If we wouldn't send a colleague up the rope on a given day, we won't send a person at all. The crawler doesn't care about the weather window."
          />
          <ValueCard
            icon={Lightbulb}
            title="Software where it matters"
            body="A great robot without great software is half a product. The portal, the AI-assisted review, the reporting — they're all part of the deliverable."
          />
        </div>
      </section>

      <hr className="hairline" />

      <section className="container-page py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow mb-3">Where we work</p>
            <h2 className="text-3xl font-bold tracking-tight">
              Engineered in Denmark. Deployed wherever the asset is.
            </h2>
            <p className="mt-5 text-bone/70 leading-relaxed">
              Our base is in Denmark, but our crawlers travel. Whether
              it&apos;s North Sea offshore, onshore Iberia, or a remote Asian
              site, we mobilise where you need us. The cloud delivery means your
              team never has to be on site to get the data back.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-bone/60">
              <MapPin className="w-4 h-4" />
              <span>Denmark · operating worldwide</span>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-3">Why &ldquo;Lukan&rdquo;?</p>
            <h2 className="text-3xl font-bold tracking-tight">
              Light wherever the asset is.
            </h2>
            <p className="mt-5 text-bone/70 leading-relaxed">
              Inspection is, fundamentally, about seeing. Bringing light to a
              surface that&apos;s 90 metres in the air, in a place humans
              shouldn&apos;t be standing — and making sense of what you see, so
              the next decision is the right one. That&apos;s the work.
            </p>
          </div>
        </div>
      </section>

      <hr className="hairline" />

      <section className="container-page py-24">
        <div className="rounded-3xl border border-bone/10 p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
            Want to know more? Get in touch.
          </h2>
          <p className="mt-4 text-bone/70 max-w-xl">
            Whether you&apos;re an asset owner, an OEM, or a journalist —
            we&apos;re happy to talk.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Contact us <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="mailto:info@lukan.dk" className="btn-ghost">
              <Mail className="w-3.5 h-3.5" /> info@lukan.dk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function ValueCard({ icon: Icon, title, body }: { icon: any; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-bone/10 bg-bone/[0.02] p-7">
      <div className="w-10 h-10 rounded-xl bg-lamp/10 flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-lamp" />
      </div>
      <h3 className="text-lg font-semibold text-bone">{title}</h3>
      <p className="mt-3 text-sm text-bone/60 leading-relaxed">{body}</p>
    </div>
  );
}
