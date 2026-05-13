import type { Metadata } from 'next';
import { Mail, MapPin, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Lukan Wind Robotics — blade inspection campaigns, technology questions, partnerships.',
};

export default function ContactPage() {
  return (
    <section className="container-page py-20 md:py-28">
      <p className="eyebrow mb-4">Contact</p>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl leading-[1.1]">
        Tell us about your fleet — we&apos;ll come back fast.
      </h1>
      <p className="mt-6 text-lg text-bone/70 max-w-2xl leading-relaxed">
        Whether it&apos;s a campaign scoping call, a technology walkthrough, or a
        partnership conversation, email is the fastest way to reach us.
      </p>

      <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-3xl">
        <ContactCard
          icon={Mail}
          label="General enquiries"
          value="info@lukan.dk"
          href="mailto:info@lukan.dk"
        />
        <ContactCard
          icon={Mail}
          label="Inspection campaigns"
          value="ops@lukan.dk"
          href="mailto:ops@lukan.dk"
        />
        <ContactCard
          icon={MapPin}
          label="Where we are"
          value="Denmark"
        />
        <ContactCard
          icon={ExternalLink}
          label="Cloud Portal (customers)"
          value="portal.lukan.dk"
          href="https://portal.lukan.dk"
          external
        />
      </div>

      <div className="mt-16 rounded-3xl border border-bone/10 p-8 md:p-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-bone mb-3">What helps us answer fast</h2>
        <p className="text-sm text-bone/60 leading-relaxed">
          When you write, a one-paragraph summary works wonders. Useful things to
          mention:
        </p>
        <ul className="mt-5 space-y-2 text-sm text-bone/70">
          <li>· Your role / organisation</li>
          <li>· Site location(s) and turbine model(s)</li>
          <li>· What kind of inspection you&apos;re after (annual, warranty, post-event)</li>
          <li>· Rough timing — &ldquo;next month&rdquo; or &ldquo;sometime this year&rdquo; both help</li>
        </ul>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: any;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <>
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-4 h-4 text-lamp" />
        <p className="text-[10px] uppercase tracking-[0.25em] text-bone/40">{label}</p>
      </div>
      <p className="text-lg text-bone font-medium">{value}</p>
    </>
  );

  if (!href) {
    return <div className="rounded-2xl border border-bone/10 bg-bone/[0.02] p-6">{inner}</div>;
  }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener' : undefined}
      className="rounded-2xl border border-bone/10 bg-bone/[0.02] p-6 hover:border-lamp/30 transition-colors block"
    >
      {inner}
    </a>
  );
}
