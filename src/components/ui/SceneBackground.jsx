/**
 * SceneBackground
 * Fixed full-screen background layer:
 *  1. Deep #05080c base
 *  2. Four slowly-floating glowing orbs (blue, purple, teal, indigo)
 *  3. Fine dot-grid overlay
 *  4. SVG noise grain texture
 *  5. Radial vignette to keep edges dark
 */
export default function SceneBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        backgroundColor: '#05080c',
        pointerEvents: 'none',
      }}
    >
      {/* ── Orb 1 · large blue · top-left ─────────────── */}
      <div
        className="animate-orb-1"
        style={{
          position: 'absolute',
          top: '-15%',
          left: '-10%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 40% 40%, rgba(79,142,255,0.22) 0%, rgba(79,142,255,0.06) 50%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* ── Orb 2 · medium purple · top-right ─────────── */}
      <div
        className="animate-orb-2"
        style={{
          position: 'absolute',
          top: '5%',
          right: '-12%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 60% 40%, rgba(124,92,252,0.2) 0%, rgba(124,92,252,0.05) 55%, transparent 72%)',
          filter: 'blur(55px)',
        }}
      />

      {/* ── Orb 3 · teal · center-bottom ──────────────── */}
      <div
        className="animate-orb-3"
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '30%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 50% 50%, rgba(0,212,170,0.13) 0%, rgba(0,212,170,0.04) 55%, transparent 72%)',
          filter: 'blur(70px)',
        }}
      />

      {/* ── Orb 4 · deep indigo · bottom-right ────────── */}
      <div
        className="animate-orb-4"
        style={{
          position: 'absolute',
          bottom: '-8%',
          right: '5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 50% 60%, rgba(100,60,220,0.18) 0%, rgba(100,60,220,0.05) 55%, transparent 72%)',
          filter: 'blur(65px)',
        }}
      />

      {/* ── Dot grid ──────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.4,
        }}
      />

      {/* ── Horizontal scan line (subtle) ─────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(255,255,255,0.018) 31px, rgba(255,255,255,0.018) 32px)',
        }}
      />

      {/* ── SVG noise grain ───────────────────────────── */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.055,
        }}
      >
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.72"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      {/* ── Radial vignette (keeps edges dark) ────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(5,8,12,0.75) 100%)',
        }}
      />

      {/* ── Top edge glow line ────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background:
            'linear-gradient(90deg, transparent 0%, rgba(79,142,255,0.4) 30%, rgba(124,92,252,0.4) 70%, transparent 100%)',
        }}
      />
    </div>
  );
}
