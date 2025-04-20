import Link from 'next/link';
import Image from 'next/image';

const folders = [
  {
    name: 'music',
    icon: '/folder-grey.png',
    style: { left: '15%', top: '35%' },
    href: 'music.html',
  },
  {
    name: 'store',
    icon: '/folder-black.png',
    style: { left: '55%', top: '12%' },
    href: 'store.html',
  },
  {
    name: 'nu thoughts',
    icon: '/folder-yellow.png',
    style: { left: '65%', top: '60%' },
    href: 'nu-thoughts.html',
  },
  {
    name: 'tour',
    icon: '/folder-grey.png',
    style: { left: '90%', top: '7%' },
    href: 'tour.html',
  },
];

import { useRef, useEffect, useState } from 'react';

// Countdown Timer to next Friday 6pm
function CountdownToNextFriday() {
  const [timeLeft, setTimeLeft] = useState(getTimeToNextFriday());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeToNextFriday());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  if (!timeLeft) return null;
  return (
    <div style={{
      color: '#fff',
      background: 'rgba(24,0,20,0.7)',
      border: '2px solid #ff2d55',
      borderRadius: 12,
      fontFamily: 'Poppins, Montserrat, monospace',
      fontWeight: 700,
      fontSize: 22,
      marginBottom: 32,
      padding: '12px 32px',
      letterSpacing: 2,
      boxShadow: '0 0 14px #ff2d55bb',
      textShadow: '0 0 8px #ff2d55',
      display: 'inline-block',
      zIndex: 3
    }}>
      <span style={{ color: '#ff2d55', fontWeight: 900, marginRight: 16 }}>Next Update</span>
      <span style={{ color: '#fff', fontWeight: 700 }}>
        {`${timeLeft.dd} ${timeLeft.yy} ${timeLeft.mm} ${timeLeft.hr}HR ${timeLeft.min}m ${timeLeft.sec}s`}
      </span>
    </div>
  );
}

function getTimeToNextFriday() {
  const now = new Date();
  let next = new Date(now);
  next.setHours(18, 0, 0, 0); // 6pm
  // 5 = Friday
  let dayDiff = (5 - now.getDay() + 7) % 7;
  if (dayDiff === 0 && now.getHours() >= 18) dayDiff = 7;
  next.setDate(now.getDate() + dayDiff);
  // Format: DD YY MM HR HR mm ss
  const diff = next - now;
  if (diff <= 0) return null;
  const totalSec = Math.floor(diff / 1000);
  const sec = totalSec % 60;
  const min = Math.floor(totalSec / 60) % 60;
  const hr = Math.floor(totalSec / 3600) % 24;
  const dd = Math.floor(totalSec / 86400);
  const yy = next.getFullYear();
  const mm = String(next.getMonth() + 1).padStart(2, '0');
  return {
    dd: String(dd).padStart(2, '0'),
    yy,
    mm,
    hr: String(hr).padStart(2, '0'),
    min: String(min).padStart(2, '0'),
    sec: String(sec).padStart(2, '0'),
  };
}

export default function Home() {
  const vantaRef = useRef(null);
  useEffect(() => {
    let vantaEffect;
    // Dynamically import VANTA if running in browser
    if (typeof window !== 'undefined') {
      const loadVanta = async () => {
        if (!window.VANTA) {
          await import('../public/vanta.universe.min.js');
        }
        if (window.VANTA && window.VANTA.UNIVERSE && vantaRef.current) {
          vantaEffect = window.VANTA.UNIVERSE({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 800.00,
            minWidth: 800.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xff2d55,
            backgroundColor: 0x050005,
            size: 1.8,
            spacing: 1.2,
            chaos: 2.5,
            backgroundAlpha: 1.0,
            particleCount: 1.2,
            speed: 1.2,
            showDots: true,
            showLines: false,
          });
        }
      };
      loadVanta();
    }
    return () => { if (vantaEffect && vantaEffect.destroy) vantaEffect.destroy(); };
  }, []);

  return (
    <div
      ref={vantaRef}
      id="cyberpunk-vanta-bg"
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at center, #18000b 0%, #050005 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Fog/Vignette Overlay */}
      <div style={{
        pointerEvents: 'none',
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        background: 'radial-gradient(ellipse at 60% 40%, #ff2d5533 0%, #000 80%)',
        opacity: 0.6,
        mixBlendMode: 'screen',
        filter: 'blur(16px)'
      }} />
      {/* Cyberpunk Red Button CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
        .cyberpunk-btn {
          position: relative;
          display: inline-block;
          padding: 10px 32px 10px 32px;
          margin: 0 8px 14px 8px;
          font-family: 'Poppins', 'Montserrat', 'monospace', sans-serif;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 2px;
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
      {/* Main Content */}
      <main style={{ position: 'relative', zIndex: 2, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{
          fontFamily: 'Poppins, Montserrat, monospace',
          fontSize: 52,
          color: '#fff',
          letterSpacing: 3,
          textShadow: '0 0 18px #ff2d55, 0 0 32px #000',
          marginBottom: 18,
          fontWeight: 700,
          textTransform: 'uppercase',
        }}>Stop Talking</h1>
        <div style={{ color: '#ff2d55', fontSize: 22, fontWeight: 700, marginBottom: 38, textShadow: '0 0 12px #ff2d55bb' }}>
          After Hours Era Portal
        </div>
        {/* Countdown Timer */}
        <CountdownToNextFriday />
        {/* Folder Links */}
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}>
          {folders.map((folder) => (
            <a key={folder.name} href={folder.href} className="cyberpunk-btn">{folder.name}</a>
          ))}
        </div>
        {/* Social Links Bottom */}
        <footer style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', fontSize: 13, color: '#ff2d55', display: 'flex', gap: '22px', alignItems: 'center', fontWeight: 700, textShadow: '0 0 10px #ff2d55aa', zIndex: 10 }}>
          <a href="https://www.instagram.com/official.jbe/" target="_blank" rel="noopener noreferrer" className="cyberpunk-btn">Instagram</a>
          <a href="https://www.facebook.com/JBEWORLDWIDE/" target="_blank" rel="noopener noreferrer" className="cyberpunk-btn">Facebook</a>
          <a href="https://www.youtube.com/channel/UCP2lwBLzvExEM_ORdkGOXzg" target="_blank" rel="noopener noreferrer" className="cyberpunk-btn">YouTube</a>
        </footer>
      </main>
      <footer style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', fontSize: 13, color: '#ff2d55', display: 'flex', gap: '22px', alignItems: 'center', fontWeight: 700, textShadow: '0 0 10px #ff2d55aa', zIndex: 10 }}>
        <a href="https://www.instagram.com/official.jbe/" target="_blank" rel="noopener noreferrer" style={{ color: '#ff2d55', textDecoration: 'none', transition: 'color 0.16s' }}>Instagram</a>
        <a href="https://www.facebook.com/JBEWORLDWIDE/" target="_blank" rel="noopener noreferrer" style={{ color: '#ff2d55', textDecoration: 'none', transition: 'color 0.16s' }}>Facebook</a>
        <a href="https://www.youtube.com/channel/UCP2lwBLzvExEM_ORdkGOXzg" target="_blank" rel="noopener noreferrer" style={{ color: '#ff2d55', textDecoration: 'none', transition: 'color 0.16s' }}>YouTube</a>
      </footer>
    </div>
  );
}

