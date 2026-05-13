import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Camera, Cpu, Cloud, Wifi, Gauge, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technology',
  description: 'How the Lukan 360° crawler inspects wind turbine blades — capture, telemetry, cloud delivery.',
};

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="container-page py-20 md:py-28">
        <p className="eyebrow mb-4">Technology</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl leading-[1.1]">
          A crawler, a camera and a pipeline that never loses a frame.
        </h1>
        <p className="mt-6 text-lg text-bone/70 max-w-2xl leading-relaxed">
          Every Lukan inspection is one continuous chain: the crawler captures, the
          stream lands in the cloud, reviewers flag defects in the portal, and the
          asset owner gets a report with every finding traceable to the exact frame
          it came from.
        </p>
      </section>

      <hr className="hairline" />

      {/* The crawler */}
      <section className="container-page py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow mb-3">The crawler</p>
            <h2 className="text-3xl font-bold tracking-tight">
              Climbs the blade. Sees everything. Reports back.
            </h2>
            <p className="mt-5 text-bone/70 leading-relaxed">
              Our teleoperated crawler attaches to the blade root and travels the
              full length on both sides, recording in 360°. The operator stays on
              the ground, monitoring telemetry and adjusting position from a single
              screen.
            </p>
            <p className="mt-4 text-bone/70 leading-relaxed">
              No ropes. No scaffolding. No technicians at height. Coverage is
              defined by the machine, not by what a person can tolerate on a windy
              day at 90 metres.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <SpecBox label="Capture" value="360° video" />
            <SpecBox label="Telemetry" value="Position + chamber + operator + timestamp baked into stream" />
            <SpecBox label="Operating mode" value="Teleoperated" />
            <SpecBox label="Deployment" value="No scaffold or rope access" />
          </div>
        </div>
      </section>

      <hr className="hairline" />

      {/* The pipeline */}
      <section className="container-page py-20">
        <p className="eyebrow mb-3">The pipeline</p>
        <h2 className="text-3xl font-bold tracking-tight max-w-3xl">
          From the blade to the asset owner&apos;s inbox — without a USB drive in sight.
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <PipelineStep
            icon={Camera}
            n="01"
            title="On-site capture"
            body="Crawler streams 360° video with full telemetry. Local storage as backup."
          />
          <PipelineStep
            icon={Cloud}
            n="02"
            title="Cloud upload"
            body="Recordings land in SharePoint, organised by customer / wind farm / turbine / inspection / blade."
          />
          <PipelineStep
            icon={Cpu}
            n="03"
            title="Cloud portal"
            body="Reviewers flag defects, attach screenshots, classify severity, generate reports — all in one secure portal."
          />
        </div>

        <div className="mt-10">
          <a
            href="https://portal.lukan.dk"
            target="_blank"
            rel="noopener"
            className="btn-ghost"
          >
            See the Cloud Portal <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <hr className="hairline" />

      {/* Why it&apos;s better */}
      <section className="container-page py-20">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Why it&apos;s better</p>
          <h2 className="text-3xl font-bold tracking-tight">
            Faster, safer and more thorough than rope access.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Compare
            icon={Gauge}
            title="Faster"
            body="A full turbine inspected in under a day — independent of weather windows that ground rope crews."
          />
          <Compare
            icon={Lock}
            title="Safer"
            body="Operators on the ground. No fall risk. No weather-based judgement calls about whether a climb is safe."
          />
          <Compare
            icon={Wifi}
            title="More thorough"
            body="Coverage defined by the machine. Findings traceable to the exact frame, with telemetry attached."
          />
        </div>
      </section>

      <hr className="hairline" />

      {/* CTA */}
      <section className="container-page py-20">
        <div className="rounded-3xl border border-bone/10 p-10 md:p-14">
          <h2 className="text-3xl font-bold tracking-tight max-w-2xl">
            Want to see a sample inspection?
          </h2>
          <p className="mt-4 text-bone/70 max-w-xl">
            We can walk you through a recorded inspection, the portal workflow, and
            the report format. Takes about 20 minutes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Request a walkthrough <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function SpecBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-bone/10 bg-bone/[0.02] p-4">
      <p className="text-[10px] uppercase tracking-[0.2em] text-bone/40 mb-1.5">{label}</p>
      <p className="text-sm text-bone leading-snug">{value}</p>
    </div>
  );
}

function PipelineStep({ icon: Icon, n, title, body }: { icon: any; n: string; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-bone/10 bg-bone/[0.02] p-7">
      <div className="flex items-center justify-between mb-5">
        <div className="w-10 h-10 rounded-xl bg-lamp/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-lamp" />
        </div>
        <p className="font-mono text-xs text-lamp/70">{n}</p>
      </div>
      <h3 className="text-base font-semibold text-bone mb-2">{title}</h3>
      <p className="text-sm text-bone/60 leading-relaxed">{body}</p>
    </div>
  );
}

function Compare({ icon: Icon, title, body }: { icon: any; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-bone/10 p-7">
      <Icon className="w-5 h-5 text-lamp mb-4" />
      <h3 className="text-base font-semibold text-bone mb-2">{title}</h3>
      <p className="text-sm text-bone/60 leading-relaxed">{body}</p>
    </div>
  );
}
