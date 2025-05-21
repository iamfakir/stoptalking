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
    <div className="countdown-timer">
      <span className="countdown-highlight">Next Update</span>
      <span className="countdown-time">
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
            color: 0x00a8ff,
            backgroundColor: 0x03000a,
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
    >
      {/* Animated Fog/Vignette Overlay */}
      <div className="vanta-overlay" />
      {/* Main Content */}
      <main>
        <h1>Stop Talking</h1>
        <div className="subtitle">
          After Hours Era Portal
        </div>
        {/* Countdown Timer */}
        <CountdownToNextFriday />
        {/* Folder Links */}
        <div className="folder-links-container">
          {folders.map((folder) => (
            <a key={folder.name} href={folder.href} className="cyberpunk-btn">{folder.name}</a>
          ))}
        </div>
        {/* Social Links Bottom */}
        <footer className="main-footer">
          <a href="https://www.instagram.com/official.jbe/" target="_blank" rel="noopener noreferrer" className="cyberpunk-btn">Instagram</a>
          <a href="https://www.facebook.com/JBEWORLDWIDE/" target="_blank" rel="noopener noreferrer" className="cyberpunk-btn">Facebook</a>
          <a href="https://www.youtube.com/channel/UCP2lwBLzvExEM_ORdkGOXzg" target="_blank" rel="noopener noreferrer" className="cyberpunk-btn">YouTube</a>
        </footer>
      </main>
      <footer className="bottom-social-links">
        <a href="https://www.instagram.com/official.jbe/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.facebook.com/JBEWORLDWIDE/" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.youtube.com/channel/UCP2lwBLzvExEM_ORdkGOXzg" target="_blank" rel="noopener noreferrer">YouTube</a>
      </footer>
    </div>
  );
}

