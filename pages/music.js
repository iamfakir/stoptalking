import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

export default function Music() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x00a8ff,
        backgroundColor: 0x03000a,
        points: 12.0,
        maxDistance: 24.0,
        spacing: 18.0
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div ref={vantaRef} style={{
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      zIndex: 0,
      overflow: 'hidden',
    }}>
      <div className="music-content">
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <img src="/logo.png" alt="Artist Logo" style={{ height: 68, marginBottom: 12, filter: 'drop-shadow(0 0 12px #00a8ff)' }} onError={e => { e.target.style.display = 'none'; }} />
          <h1 style={{ fontWeight: 900, fontSize: 38, color: '#fff', letterSpacing: 2, textShadow: '0 0 32px #00a8ff, 0 0 8px #fff8' }}>STOP TALKING</h1>
          <div style={{ fontSize: 18, color: '#00a8ff', marginTop: 2, marginBottom: 14, fontWeight: 600, textShadow: '0 0 8px #000b' }}>New Album: "Nu Thoughts"</div>
        </div>
        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: 20, marginBottom: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a className="cyberpunk-btn" href="https://open.spotify.com/artist/6HQYnRM4OzToCYPpVBInuU" target="_blank" rel="noopener noreferrer">Listen</a>
          <a className="cyberpunk-btn" href="https://www.instagram.com/kaytranada" target="_blank" rel="noopener noreferrer">Follow</a>
          <a className="cyberpunk-btn" href="#" onClick={() => {navigator.clipboard.writeText(window.location.href); alert('Link copied!')}}>Share</a>
        </div>
        {/* Social Proof */}
        <div style={{ display: 'flex', gap: 18, marginBottom: 18, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          <img src="/spotify-logo.png" alt="Spotify" style={{ height: 32, filter: 'drop-shadow(0 0 8px #1db954)' }} onError={e => { e.target.style.display = 'none'; }} />
          <img src="/applemusic-logo.png" alt="Apple Music" style={{ height: 30, filter: 'drop-shadow(0 0 8px #00a8ff)' }} onError={e => { e.target.style.display = 'none'; }} />
          <img src="/youtube-logo.png" alt="YouTube" style={{ height: 32, filter: 'drop-shadow(0 0 8px #ff0000)' }} onError={e => { e.target.style.display = 'none'; }} />
          <span style={{ color: '#fff', fontWeight: 600, fontSize: 15, background: '#222b', borderRadius: 12, padding: '4px 14px', marginLeft: 8, textShadow: '0 0 8px #000b' }}>10M+ Streams</span>
        </div>
        {/* Spotify Player */}
        <div className="spotify-player-container">
          <iframe
            src="https://open.spotify.com/embed/album/1XfR7gh5q0hIK6WPrGgi4D?utm_source=generator"
            width="340"
            height="480"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ borderRadius: 12, boxShadow: '0 2px 16px #00a8ff33' }}
            title="Spotify Album Player"
          ></iframe>
        </div>
        {/* Shareable Lyric/Quote */}
        <blockquote className="music-blockquote">
          "If you're talking, you're not listening."
        </blockquote>
        {/* Social Media Links */}
        <div style={{ display: 'flex', gap: 22, marginTop: 22, justifyContent: 'center', alignItems: 'center' }}>
          <a href="https://twitter.com/kaytranada" target="_blank" rel="noopener noreferrer" style={{ color: '#00a8ff', fontSize: 28, transition: 'transform 0.1s', textShadow: '0 0 8px #00a8ffaa' }}>🐦</a>
          <a href="https://www.instagram.com/kaytranada" target="_blank" rel="noopener noreferrer" style={{ color: '#ffcb6b', fontSize: 28, transition: 'transform 0.1s', textShadow: '0 0 8px #ffcb6baa' }}>📸</a>
          <a href="https://www.youtube.com/channel/UCecKAm8B2J5U3rItJg2I7tA" target="_blank" rel="noopener noreferrer" style={{ color: '#00a8ff', fontSize: 28, transition: 'transform 0.1s', textShadow: '0 0 8px #00a8ffaa' }}>▶️</a>
        </div>
      </div>
    </div>
  );
}
