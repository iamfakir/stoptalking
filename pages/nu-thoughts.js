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
    <div className="nu-thoughts-container">
      {/* Top bar */}
      <div className="nu-thoughts-top-bar">
        <Link href="/" className="nu-thoughts-back-link">&#8592;</Link>
        <span className="nu-thoughts-date">august 20 2021</span>
      </div>
      {/* Poem lines, static */}
      <div className="nu-thoughts-poem">
        {poemLines.join('\n')}
      </div>
      {/* Image at bottom */}
      <div className="nu-thoughts-image-container">
        <Image src="/image.jpg" alt="poem image" width={240} height={120} style={{ objectFit: 'cover', borderRadius: 4 }} />
      </div>
    </div>
  );
}
