import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Mail, Target, Lightbulb, Shield } from 'lucide-react';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Lukan Wind Robotics — Danish robotics company building autonomous internal blade inspection crawlers. Aalborg / Copenhagen.',
};

export default function AboutPage() {
  return (
    <>
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <p className="eyebrow mb-4">About</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            A small Danish robotics team with a clear bias toward inspection done right.
          </h1>
          <p className="mt-6 text-lg text-bone/70 max-w-2xl leading-relaxed">
            Lukan Wind Robotics builds the only autonomous crawler robot that
            fits through a standard 90&nbsp;mm blade inspection port. We design
            the hardware, write the on-board software, and run pilot inspections
            end-to-end for the customers shaping our roadmap.
          </p>
        </Reveal>
      </section>

      <hr className="hairline" />

      <section className="container-page py-20">
        <div className="grid md:grid-cols-3 gap-6">
          <Reveal delay={0.0}>
            <ValueCard
              icon={Target}
              title="Inspection-grade, not demo-grade"
              body="Every finding traces back to the exact frame. Every report is auditable. The recordings live on-board the crawler &mdash; not in someone&apos;s downloads folder."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ValueCard
              icon={Shield}
              title="Operators on the ground"
              body="If a job is too risky for a human on a given day, we don&apos;t send a human at all. The crawler does the work that used to happen inside the blade."
            />
          </Reveal>
          <Reveal delay={0.2}>
            <ValueCard
              icon={Lightbulb}
              title="Software where it matters"
              body="A great robot without great software is half a product. The browser UI, the AI-assisted review, the structured exports &mdash; they&apos;re part of the deliverable."
            />
          </Reveal>
        </div>
      </section>

      <hr className="hairline" />

      <section className="container-page py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <Reveal>
            <p className="eyebrow mb-3">Where we are</p>
            <h2 className="text-3xl font-bold tracking-tight">
              Engineered in Denmark. Deployed wherever the blade is.
            </h2>
            <p className="mt-5 text-bone/70 leading-relaxed">
              We&apos;re based across Aalborg and Copenhagen, with deep links
              into the Danish wind cluster &mdash; including ongoing
              collaboration with DTU on internal-damage AI. Customers and
              pilots span Northern Europe; our crawlers travel where the
              turbines are.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-bone/60">
              <MapPin className="w-4 h-4" />
              <span>Aalborg &middot; Copenhagen &middot; operating across Europe</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow mb-3">Why &ldquo;Lukan&rdquo;?</p>
            <h2 className="text-3xl font-bold tracking-tight">
              Light wherever the asset is.
            </h2>
            <p className="mt-5 text-bone/70 leading-relaxed">
              Inspection is, fundamentally, about seeing. Bringing light into
              the inside of a blade &mdash; into a chamber sealed against
              everything but the manufacturer, the wind, and time. Making sense
              of what we find so the next decision is the right one.
              That&apos;s the work.
            </p>
          </Reveal>
        </div>
      </section>

      <hr className="hairline" />

      <Reveal>
        <section className="container-page py-24">
          <div className="rounded-3xl border border-bone/10 p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
              Operator, OEM, university, or investor &mdash; come say hi.
            </h2>
            <p className="mt-4 text-bone/70 max-w-xl">
              We&apos;re always interested in talking with people building or
              maintaining wind assets, or backing the companies that do.
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
      </Reveal>
    </>
  );
}

function ValueCard({ icon: Icon, title, body }: { icon: any; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-bone/10 bg-bone/[0.02] p-7 h-full">
      <div className="w-10 h-10 rounded-xl bg-lamp/10 flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-lamp" />
      </div>
      <h3 className="text-lg font-semibold text-bone">{title}</h3>
      <p className="mt-3 text-sm text-bone/60 leading-relaxed">{body}</p>
    </div>
  );
}
