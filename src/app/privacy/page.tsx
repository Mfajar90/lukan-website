import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Lukan Wind Robotics ApS collects, uses and protects personal data — data controller, legal basis, retention and your rights under the GDPR.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy · Lukan Wind Robotics',
    description:
      'How Lukan Wind Robotics ApS handles personal data under the GDPR — controller, legal basis, retention and your rights.',
    url: '/privacy',
    siteName: 'Lukan Wind Robotics',
    locale: 'en_DK',
    type: 'website',
  },
};

// Keep in sync with the CVR shown in the footer.
const CVR = ''; // TODO: company CVR number

const LAST_UPDATED = '4 July 2026';

export default function PrivacyPage() {
  return (
    <section className="container-page py-20 md:py-28">
      <p className="eyebrow mb-4">Legal</p>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl leading-[1.1]">
        Privacy Policy
      </h1>
      <p className="mt-6 text-sm text-bone/60">Last updated: {LAST_UPDATED}</p>

      <div className="mt-12 max-w-2xl space-y-10">
        <Block title="1. Who we are (data controller)">
          <p>
            This website is operated by <strong>Lukan Wind Robotics ApS</strong>, a
            company registered in Denmark
            {CVR ? <> (CVR no. {CVR})</> : null}, with its registered address at
            Lyshøjen 14B, 8520 Lystrup, Denmark. Lukan Wind Robotics ApS is the
            data controller for the personal data described in this policy.
          </p>
          <p>
            For any question about this policy or your personal data, contact us at{' '}
            <a href="mailto:info@lukan.dk" className="text-lamp hover:underline">
              info@lukan.dk
            </a>
            .
          </p>
        </Block>

        <Block title="2. What personal data we collect">
          <p>We only collect personal data that you choose to give us:</p>
          <ul className="list-disc pl-5 space-y-1.5 marker:text-lamp/60">
            <li>
              <strong>Contact by email.</strong> When you email us (for example
              info@lukan.dk or ops@lukan.dk) we receive your name, email address,
              and whatever you include — such as your role, organisation, site
              locations, turbine models, and the nature of your enquiry.
            </li>
            <li>
              <strong>Technical data.</strong> Our hosting provider automatically
              processes limited technical data (e.g. IP address, browser type,
              and request logs) as part of serving and securing the website.
            </li>
          </ul>
          <p>
            We do not run advertising or analytics trackers, and we do not set
            non-essential cookies. If that changes, we will update this policy and
            ask for your consent first.
          </p>
        </Block>

        <Block title="3. Why we use it, and our legal basis">
          <ul className="list-disc pl-5 space-y-1.5 marker:text-lamp/60">
            <li>
              <strong>To respond to your enquiry and manage our relationship</strong>{' '}
              — legal basis: our legitimate interest in answering prospective and
              existing customers (GDPR Art. 6(1)(f)), or taking steps at your
              request prior to entering a contract (Art. 6(1)(b)).
            </li>
            <li>
              <strong>To operate and secure the website</strong> — legal basis: our
              legitimate interest in a functioning, secure site (Art. 6(1)(f)).
            </li>
            <li>
              <strong>To comply with legal obligations</strong> — for example
              bookkeeping — legal basis: Art. 6(1)(c).
            </li>
          </ul>
        </Block>

        <Block title="4. Who we share it with (processors)">
          <p>
            We use a small number of service providers who process data on our
            behalf under data-processing agreements, including our website host
            (Vercel Inc.) and our email provider. We do not sell your personal
            data. Where a processor is located outside the EU/EEA, transfers are
            covered by appropriate safeguards such as the EU Standard Contractual
            Clauses.
          </p>
        </Block>

        <Block title="5. How long we keep it">
          <p>
            We keep enquiry correspondence only as long as needed to handle your
            request and for our ongoing relationship, after which it is deleted or
            anonymised. Data kept to meet a legal obligation (e.g. accounting
            records) is retained for the period the law requires.
          </p>
        </Block>

        <Block title="6. Your rights">
          <p>Under the GDPR you have the right to:</p>
          <ul className="list-disc pl-5 space-y-1.5 marker:text-lamp/60">
            <li>access the personal data we hold about you;</li>
            <li>have inaccurate data corrected;</li>
            <li>have your data erased (&ldquo;right to be forgotten&rdquo;);</li>
            <li>restrict or object to our processing;</li>
            <li>data portability; and</li>
            <li>
              withdraw consent at any time, where processing is based on consent.
            </li>
          </ul>
          <p>
            To exercise any of these, email{' '}
            <a href="mailto:info@lukan.dk" className="text-lamp hover:underline">
              info@lukan.dk
            </a>
            . We will respond within one month.
          </p>
        </Block>

        <Block title="7. Cookies">
          <p>
            This site does not use analytics, advertising, or other non-essential
            cookies, and it does not display tracking-based content. Only
            strictly-necessary cookies that may be set by our host for security
            are used; these are exempt from consent under the Danish cookie rules.
          </p>
        </Block>

        <Block title="8. Complaints">
          <p>
            If you believe we have handled your personal data unlawfully, you can
            complain to the Danish Data Protection Agency (Datatilsynet), Carl
            Jacobsens Vej 35, 2500 Valby, Denmark —{' '}
            <a
              href="https://www.datatilsynet.dk"
              target="_blank"
              rel="noopener"
              className="text-lamp hover:underline"
            >
              datatilsynet.dk
            </a>
            .
          </p>
        </Block>

        <Block title="9. Changes to this policy">
          <p>
            We may update this policy from time to time. The date at the top shows
            when it was last revised.
          </p>
        </Block>
      </div>
    </section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-bone mb-3">{title}</h2>
      <div className="space-y-3 text-sm text-bone/70 leading-relaxed">{children}</div>
    </div>
  );
}
