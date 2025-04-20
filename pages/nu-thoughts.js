import Image from 'next/image';
import Link from 'next/link';


const poemLines = [
  'He liked her.',
  'Stayed quiet.',
  'Someone else didn’t.',
  'He lost her—mostly to himself.',
  '',
  'उसे पसंद था।',
  'कुछ बोला नहीं।',
  'कोई और बोल गया।',
  'वो खुद से हार गया।',
  '',
  'அவள பிடிச்சவள்.',
  'சும்மா இருந்தான்.',
  'மற்றவன் பேசினான்.',
  'தோத்தது அவனாலே.',
  '',
  'ఆమెను ఇష్టపడ్డాడు.',
  'ఎప్పటికీ చెప్పలేదు.',
  'ఇంకొకడు చెప్పేశాడు.',
  'అతను తన వల్లే ఓడిపోయాడు.',
  '',
  'അവളെ ഇഷ്ടപ്പെട്ടു.',
  'പറഞ്ഞില്ല.',
  'മറ്റൊരാൾ പറഞ്ഞു.',
  'അവൻ തന്നെ തോറ്റു.',
  '',
  'كان يحبها.',
  'ما قال شي.',
  'غيره قال.',
  'وخسرها بنفسه.'
];

export default function NuThoughts() {
  return (
    <div style={{ minHeight: '100vh', background: '#111', color: '#fff', fontFamily: 'monospace', padding: 0, margin: 0 }}>
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '20px 0 0 32px', fontSize: 13, color: '#ccc' }}>
        <Link href="/" style={{ color: '#ccc', textDecoration: 'none', marginRight: 16, fontSize: 18 }}>&#8592;</Link>
        <span style={{ letterSpacing: '0.07em', fontSize: 11 }}>august 20 2021</span>
      </div>
      {/* Poem lines, static */}
      <div style={{ maxWidth: 480, marginLeft: 32, marginTop: 18, fontSize: 13, lineHeight: 1.5, whiteSpace: 'pre-wrap' }}>
        {poemLines.join('\n')}
      </div>
      {/* Image at bottom */}
      <div style={{ width: 240, margin: '48px 32px 0', filter: 'grayscale(1)' }}>
        <Image src="/image.jpg" alt="poem image" width={240} height={120} style={{ objectFit: 'cover', borderRadius: 4 }} />
      </div>
    </div>
  );
}
