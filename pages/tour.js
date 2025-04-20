export default function Tour() {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      position: 'relative',
      overflow: 'hidden',
      background: '#111',
    }}>
      <div style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        background: `url('/tour-bg.png') center center / cover no-repeat fixed`,
        opacity: 0.18,
        filter: 'brightness(0.7) grayscale(1)',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textShadow: '0 2px 10px #000',
      }}>
        <h1 style={{ fontFamily: 'monospace', fontWeight: 'bold', fontSize: 32, marginBottom: 24 }}>Tour Page</h1>
        {/* Add your page content here */}
      </div>
    </div>
  );
}
