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
        color: 0xff2d55,
        backgroundColor: 0x1a0008,
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
      <div className="music-content" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 2,
        padding: '32px 16px',
      }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <img src="/logo.png" alt="Artist Logo" style={{ height: 68, marginBottom: 12, filter: 'drop-shadow(0 0 12px #ff2d55)' }} onError={e => { e.target.style.display = 'none'; }} />
          <h1 style={{ fontFamily: 'Montserrat, monospace', fontWeight: 900, fontSize: 38, color: '#fff', letterSpacing: 2, textShadow: '0 0 32px #ff2d55, 0 0 8px #fff8' }}>STOP TALKING</h1>
          <div style={{ fontSize: 18, color: '#ff2d55', marginTop: 2, marginBottom: 14, fontWeight: 600, textShadow: '0 0 8px #000b' }}>New Album: "Nu Thoughts"</div>
        </div>
        {/* CTA Buttons */}
        {/* Cyberpunk 2077-Style Buttons CSS */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
          .cyberpunk-btn {
            position: relative;
            display: inline-block;
            padding: 10px 32px 10px 32px;
            margin: 0 8px 14px 8px;
            font-family: 'Poppins', 'Montserrat', 'monospace', sans-serif;
            font-size: 18px;
            font-weight: 700;
            letter-spacing: 1.5px;
            color: #fff;
            background: #18181c;
            border: 2.5px solid #ff2d55;
            border-radius: 8px 18px 8px 18px / 18px 8px 18px 8px;
            box-shadow: 0 0 10px #ff2d55cc, 0 0 2px #ff2d5588;
            text-shadow: 0 0 4px #ff2d55cc, 0 0 12px #ff2d55bb;
            overflow: hidden;
            cursor: pointer;
            z-index: 2;
            transition: transform 0.13s, filter 0.18s, box-shadow 0.18s, border-color 0.18s;
            outline: none;
            isolation: isolate;
          }
          .cyberpunk-btn:before {
            content: '';
            position: absolute;
            left: -60%;
            top: 0;
            width: 50%;
            height: 100%;
            background: linear-gradient(100deg,rgba(255,45,85,0.19) 0%,rgba(255,45,85,0.01) 100%);
            transform: skewX(-24deg);
            filter: blur(0.5px);
            transition: left 0.45s cubic-bezier(.4,2,.6,1), opacity 0.28s;
            opacity: 0.65;
            z-index: 3;
          }
          .cyberpunk-btn:hover:before {
            left: 120%;
            opacity: 0.95;
            transition: left 0.45s cubic-bezier(.4,2,.6,1), opacity 0.18s;
          }
          .cyberpunk-btn:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 10%;
            width: 80%;
            height: 2.5px;
            background: linear-gradient(90deg,#ff2d55 0%,#ffb6c1 100%);
            opacity: 0.65;
            border-radius: 1.5px;
            pointer-events: none;
            z-index: 4;
            transition: opacity 0.2s;
          }
          .cyberpunk-btn:hover {
            filter: brightness(1.22) drop-shadow(0 0 8px #ff2d55) drop-shadow(0 0 12px #ff2d55);
            transform: scale(1.025);
            border-color: #ffb6c1;
            box-shadow: 0 0 32px #ff2d55bb, 0 0 18px #ffb6c1cc;
          }
        `}</style>
        <div style={{ display: 'flex', gap: 20, marginBottom: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a className="cyberpunk-btn" href="https://open.spotify.com/artist/6HQYnRM4OzToCYPpVBInuU" target="_blank" rel="noopener noreferrer">Listen</a>
          <a className="cyberpunk-btn" href="https://www.instagram.com/kaytranada" target="_blank" rel="noopener noreferrer">Follow</a>
          <a className="cyberpunk-btn" href="#" onClick={() => {navigator.clipboard.writeText(window.location.href); alert('Link copied!')}}>Share</a>
        </div>
        <style>{`
          .cyberpunk-heading {
            font-family: 'Poppins', 'Montserrat', 'monospace', sans-serif;
            font-weight: 700;
            letter-spacing: 2px;
          }
        `}</style>
        {/* Social Proof */}
        <div style={{ display: 'flex', gap: 18, marginBottom: 18, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          <img src="/spotify-logo.png" alt="Spotify" style={{ height: 32, filter: 'drop-shadow(0 0 8px #1db954)' }} onError={e => { e.target.style.display = 'none'; }} />
          <img src="/applemusic-logo.png" alt="Apple Music" style={{ height: 30, filter: 'drop-shadow(0 0 8px #fff)' }} onError={e => { e.target.style.display = 'none'; }} />
          <img src="/youtube-logo.png" alt="YouTube" style={{ height: 32, filter: 'drop-shadow(0 0 8px #f00)' }} onError={e => { e.target.style.display = 'none'; }} />
          <span style={{ color: '#fff', fontWeight: 600, fontSize: 15, background: '#222b', borderRadius: 12, padding: '4px 14px', marginLeft: 8, textShadow: '0 0 8px #000b' }}>10M+ Streams</span>
        </div>
        {/* Spotify Player */}
        <div style={{
          borderRadius: 18,
          boxShadow: '0 2px 32px #1db95422, 0 0 16px #fff2',
          background: 'rgba(24,24,32,0.65)',
          padding: 18,
          marginBottom: 22,
          maxWidth: 380,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <iframe
            src="https://open.spotify.com/embed/album/1XfR7gh5q0hIK6WPrGgi4D?utm_source=generator"
            width="340"
            height="480"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ borderRadius: 12, boxShadow: '0 2px 16px #1db95433' }}
            title="Spotify Album Player"
          ></iframe>
        </div>
        {/* Shareable Lyric/Quote */}
        <blockquote style={{
          color: '#fff',
          background: 'rgba(40,40,60,0.75)',
          borderLeft: '4px solid #ffe066',
          padding: '16px 22px',
          borderRadius: 10,
          margin: 0,
          fontSize: 18,
          fontStyle: 'italic',
          boxShadow: '0 2px 12px #ffe06622',
          textAlign: 'center',
          maxWidth: 420
        }}>
          "If you're talking, you're not listening."
        </blockquote>
        {/* Social Media Links */}
        <div style={{ display: 'flex', gap: 22, marginTop: 22, justifyContent: 'center', alignItems: 'center' }}>
          <a href="https://twitter.com/kaytranada" target="_blank" rel="noopener noreferrer" style={{ color: '#1da1f2', fontSize: 28, transition: 'transform 0.1s', textShadow: '0 0 8px #1da1f2aa' }}>🐦</a>
          <a href="https://www.instagram.com/kaytranada" target="_blank" rel="noopener noreferrer" style={{ color: '#e1306c', fontSize: 28, transition: 'transform 0.1s', textShadow: '0 0 8px #e1306caa' }}>📸</a>
          <a href="https://www.youtube.com/channel/UCecKAm8B2J5U3rItJg2I7tA" target="_blank" rel="noopener noreferrer" style={{ color: '#ff0000', fontSize: 28, transition: 'transform 0.1s', textShadow: '0 0 8px #ff0000aa' }}>▶️</a>
        </div>
      </div>
    </div>
  );
}
