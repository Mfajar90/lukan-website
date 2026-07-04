import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Lukan Wind Robotics — Detect. Quantify. Act.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0A0A0A',
          color: '#F1ECDF',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#FFB84D',
          }}
        >
          Lukan Wind Robotics
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, maxWidth: 900 }}>
            Inspect your blades from the office.
          </div>
          <div style={{ fontSize: 34, color: 'rgba(241,236,223,0.7)' }}>
            Robots and software for internal wind turbine blade inspection.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: 30 }}>
          <span style={{ color: '#FFB84D' }}>Detect.</span>
          <span style={{ color: '#FFB84D' }}>Quantify.</span>
          <span style={{ color: '#FFB84D' }}>Act.</span>
          <span style={{ color: 'rgba(241,236,223,0.5)', marginLeft: 'auto' }}>
            Detectra · Quantra · Fenestra
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
