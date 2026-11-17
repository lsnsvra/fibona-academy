import { useState } from 'react'
import {
  ArrowRight, ArrowUpRight, BookOpen, Check, ChevronDown, GraduationCap,
  Instagram, Mail, MapPin, Menu, MessageCircle, Star, Target, Trophy, X,
  Lightbulb, HeartHandshake, Monitor, Users, Sparkles, Quote
} from 'lucide-react'
import TikTok from "./components/Tiktok";

const programs = [
  { n: '01', title: 'Bimbingan Belajar SD', desc: 'Pendampingan materi sekolah, penguatan membaca, menulis, berhitung, dan persiapan evaluasi pembelajaran.', tag: 'SD', icon: BookOpen },
  { n: '02', title: 'Bimbingan Belajar SMP', desc: 'Penguatan pemahaman konsep, latihan soal, pendalaman materi, dan persiapan ujian sekolah.', tag: 'SMP', icon: GraduationCap },
  { n: '03', title: 'Bimbingan Belajar SMA', desc: 'Pendalaman materi akademik, latihan soal intensif, strategi belajar, dan persiapan seleksi perguruan tinggi.', tag: 'SMA', icon: Target },
  { n: '04', title: 'Private Learning', desc: 'Pembelajaran personal yang disesuaikan dengan kebutuhan, kemampuan, dan target belajar siswa.', tag: 'PRIVATE', icon: Users },
  { n: '05', title: 'Prestasi & Olimpiade', desc: 'Pembinaan penalaran, pemecahan masalah, dan kemampuan berpikir tingkat tinggi.', tag: 'ADVANCED', icon: Trophy },
]
const strengths = [
  ['Pembelajaran Terarah', 'Materi disesuaikan dengan kebutuhan dan tingkat kemampuan siswa.', Target],
  ['Tutor Berkualitas', 'Didampingi pengajar yang kompeten dan memiliki semangat mengajar.', GraduationCap],
  ['Metode Interaktif', 'Pembelajaran dibuat aktif, komunikatif, dan menyenangkan.', Lightbulb],
  ['Pendekatan Personal', 'Memperhatikan perkembangan dan karakteristik setiap siswa.', HeartHandshake],
  ['Evaluasi Berkala', 'Memantau perkembangan kemampuan siswa secara berkelanjutan.', Check],
  ['Fleksibilitas Belajar', 'Pilihan pembelajaran online maupun offline sesuai ketersediaan program.', Monitor],
]
const missions = [
  ['F', 'Future Oriented', 'Mempersiapkan pembelajar yang adaptif terhadap masa depan.'],
  ['I', 'Innovative Learning', 'Menciptakan pengalaman belajar yang inovatif dan bermakna.'],
  ['B', 'Brilliant Thinking', 'Mengembangkan pemikiran kritis, logis, dan kreatif.'],
  ['O', 'Outstanding Potential', 'Mengoptimalkan keunikan potensi setiap siswa.'],
  ['N', 'Nurturing Character', 'Menumbuhkan karakter dan kemandirian.'],
  ['A', 'Achievement with Growth', 'Membangun prestasi melalui pertumbuhan berkelanjutan.'],
]
const gallery = [
  { title: 'Belajar dengan Ceria', type: 'Dokumentasi pembelajaran', img: '/images/kegiatan-1.jpg' },
  { title: 'Belajar Interaktif', type: 'Pembelajaran', img: '/images/kegiatan-2.jpg' },
  { title: 'Fokus Mengembangkan Potensi', type: 'Pendampingan belajar', img: '/images/kegiatan-3.jpg' },
  { title: 'Pendampingan Personal', type: 'Kegiatan belajar siswa', img: '/images/kegiatan-4.jpg' },
]
const testimonials = [
  { quote: 'Anak jadi lebih berani bertanya dan mulai menikmati proses belajarnya.', name: 'Orang tua siswa', role: 'Orang tua siswa' },
  { quote: 'Penjelasan materi dibuat bertahap sehingga lebih mudah untuk diikuti.', name: 'Siswa Fibona', role: 'Orang tua siswa' },
  { quote: 'Pendampingan yang personal membantu anak belajar dengan lebih terarah.', name: 'Orang tua siswa', role: 'Orang tua siswa' },
]

const contactInfoStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(145px, 1fr))',
  gap: '24px 16px',
  marginTop: '36px',
}

const contactItemStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '10px',
  minWidth: 0,
  textDecoration: 'none',
  color: 'inherit',
}

const contactIconStyle = {
  color: '#9c7d41',
  flexShrink: 0,
  marginTop: '2px',
}

const contactTextStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
  minWidth: 0,
  overflowWrap: 'anywhere',
}

function Logo({ inverse = false }) {
  return <a className={`logo ${inverse ? 'inverse' : ''}`} href="#home" aria-label="Fibona Academy">
    <img className="logo-image" src="/images/logo-fibona.png" alt="Fibona Academy" />
  </a>
}
function Heading({ label, title, text, light = false }) {
  return <div className={`section-heading ${light ? 'light' : ''}`}>
    <span className="eyebrow">{label}</span><h2>{title}</h2>{text && <p>{text}</p>}
  </div>
}
function App() {
  const [open, setOpen] = useState(false)
  const links = [['Tentang', '#about'], ['Visi & Misi', '#vision'], ['Program', '#programs'], ['Pengajar', '#tutor'], ['Galeri', '#gallery'], ['Kontak', '#contact']]
  const wa = 'https://wa.me/6281937898716'
  const ig = 'https://www.instagram.com/bimbel_fibonaacd/'
  const tiktok = 'https://www.tiktok.com/@fibonaacademy..bi?_r=1&_t=ZS-9BU3QrNch78'

  return <div className="app" id="home">
    <header className="header">
      <div className="container nav">
        <Logo />
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
        <nav className={open ? 'nav-links show' : 'nav-links'}>
          {links.map(([name, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{name}</a>)}
          <a className="nav-button" href={wa} target="_blank" rel="noreferrer">Konsultasi <ArrowUpRight size={16} /></a>
        </nav>
      </div>
    </header>

    <main>
      <section className="hero">
        <div className="hero-pattern pattern-a" /><div className="hero-pattern pattern-b" />
        <div className="container hero-layout">
          <div className="hero-text">
            <span className="hero-kicker"><Sparkles size={15} /> LEARN • GROW • ACHIEVE</span>
            <h1>Small steps,<br /><em>infinite possibilities.</em></h1>
            <p className="hero-desc">Setiap anak punya potensi untuk berkembang. Bersama Fibona Academy, jadikan setiap langkah belajar sebagai awal dari kemungkinan yang lebih besar.</p>
            <div className="hero-buttons"><a href="#programs" className="btn-gold">Jelajahi Program <ArrowRight size={17} /></a><a href="#about" className="btn-outline">Kenali Fibona</a></div>
            <div className="hero-meta"><span className="meta-line" /> Bimbingan belajar untuk SD, SMP, dan SMA</div>
          </div>
          <div className="hero-art">
            <div className="hero-photo"><img src="/images/logo.jpg" alt="LOGO" /></div>
            <div className="hero-float"><span className="float-icon"><BookOpen /></span><span><b>Belajar lebih terarah</b><small>One step at a time</small></span></div>
            <div className="hero-caption">RUANG UNTUK BERTUMBUH <span>✳</span></div>
          </div>
        </div>
        <div className="container hero-bottom"><span>FIBONA ACADEMY</span><span className="bottom-rule" /><span>EST. FOR GROWTH</span></div>
      </section>

      <section className="about section" id="about">
        <div className="container about-layout">
          <div className="about-side"><span className="eyebrow">01 / WHO WE ARE</span><div className="fibonacci-mark">1<span>.</span>1<span>.</span>2<span>.</span>3</div><p>Belajar, berkembang, dan menemukan kemungkinan tanpa batas.</p></div>
          <div className="about-main">
            <Heading label="TENTANG FIBONA ACADEMY" title={<>Ruang belajar untuk mengembangkan <em>potensi terbaik.</em></>} />
            <p className="lead">Fibona Academy merupakan lembaga bimbingan belajar yang hadir sebagai ruang belajar dan pengembangan potensi bagi peserta didik.</p>
            <p>Dengan mengusung semangat belajar yang inovatif, interaktif, dan berorientasi pada perkembangan siswa, Fibona Academy berkomitmen membantu setiap peserta didik mencapai hasil belajar yang optimal.</p>
            <p>Kami percaya bahwa setiap anak memiliki kemampuan dan potensi yang berbeda. Karena itu, pembelajaran tidak hanya berfokus pada pencapaian akademik, tetapi juga membangun kepercayaan diri, kemandirian, kreativitas, serta kemampuan berpikir kritis.</p>
            <p>Melalui pendampingan yang terarah dan metode pembelajaran yang menyenangkan, Fibona Academy ingin menjadi mitra pendidikan yang mendukung perjalanan belajar siswa menuju masa depan yang lebih baik.</p>
          </div>
        </div>
      </section>

      <section className="philosophy">
        <div className="container philosophy-layout">
          <div><span className="eyebrow gold-text">THE MEANING BEHIND OUR NAME</span><h2>Terinspirasi dari pola pertumbuhan <em>Fibonacci.</em></h2></div>
          <div className="philosophy-copy"><p>Nama Fibona terinspirasi dari Barisan Fibonacci, pola bilangan yang menunjukkan perkembangan melalui hubungan antarsuku sebelumnya. Setiap bilangan terbentuk dari penjumlahan dua bilangan sebelumnya sebagai sebuah simbol bahwa pertumbuhan dan keberhasilan merupakan hasil dari proses yang berkesinambungan.</p>
            <div className="meaning-grid"><div><b>01 / GROWTH</b><span>Setiap siswa memiliki kesempatan untuk terus berkembang.</span></div><div><b>02 / PROGRESS</b><span>Setiap langkah kecil dalam belajar merupakan bagian dari kemajuan.</span></div><div><b>03 / EXCELLENCE</b><span>Proses pembelajaran diarahkan untuk mencapai potensi dan prestasi terbaik.</span></div></div>
          </div>
        </div>
      </section>

      <section className="vision section" id="vision">
        <div className="container">
          <Heading label="02 / OUR DIRECTION" title="Bertumbuh dengan arah dan tujuan." text="Visi dan misi menjadi landasan kami dalam mendampingi perjalanan belajar setiap siswa." />
          <div className="vision-grid">
            <article className="vision-card"><div className="vision-icon"><Target /></div><span className="text-2xl md:text-2xl font-bold">VISI KAMI</span><h3>Menjadi lembaga bimbingan belajar yang berorientasi pada pertumbuhan berkelanjutan.</h3><p>Dalam mengembangkan potensi, membangun kemampuan akademik, dan mengantarkan setiap peserta didik menuju pencapaian terbaik melalui proses pembelajaran yang bertahap, terarah, dan bermakna.</p><span className="watermark">F</span></article>
            <article className="mission-card"><span className="text-2xl md:text-2xl font-bold">MISI FIBONA</span><h3>Enam nilai dalam nama kami.</h3><div className="mission-list">{missions.map(([letter, title, desc]) => <div className="mission-row" key={letter}><span>{letter}</span><div><b>{title}</b><small>{desc}</small></div></div>)}</div></article>
          </div>
        </div>
      </section>

      <section className="programs section" id="programs">
        <div className="container">
          <div className="program-heading"><Heading label="03 / LEARNING PROGRAMS" title={<>Program yang mengikuti kebutuhan <em>belajarmu.</em></>} text="Pilihan pendampingan belajar untuk mendukung kebutuhan akademik dan pengembangan potensi siswa." /><span className="program-stamp">LEARN<br/>AT YOUR<br/>OWN PACE</span></div>
          <div className="program-grid">{programs.map(({n,title,desc,tag,icon:Icon}) => <article className="program-card" key={n}><div className="program-card-top"><span>{n}</span><span className="program-tag">{tag}</span></div><div className="program-icon"><Icon /></div><h3>{title}</h3><p>{desc}</p><a href={wa} target="_blank" rel="noreferrer" aria-label={`Tanya ${title}`}><ArrowUpRight /></a></article>)}</div>
          <div className="program-note"><span>PROGRAM BELAJAR</span><p>Fokus pembelajaran mencakup semua mata pelajaran dan persiapan ujian TKA. Tersedia pilihan kelas reguler dan private.</p></div>
        </div>
      </section>

      <section className="advantages section">
        <div className="container">
          <div className="center-heading"><Heading label="WHY FIBONA ACADEMY" title={<>Bukan hanya belajar, tetapi <em>bertumbuh.</em></>} text="Kami berupaya menghadirkan pengalaman belajar yang memperhatikan proses dan kebutuhan setiap siswa." /></div>
          <div className="advantage-grid">{strengths.map(([title,desc,Icon],i) => <article className="advantage" key={title}><span className="advantage-number">0{i+1}</span><div className="advantage-icon"><Icon /></div><h3>{title}</h3><p>{desc}</p></article>)}</div>
        </div>
      </section>

      <section className="tutor section" id="tutor">
        <div className="container tutor-layout">
          <div className="tutor-image-wrap"><div className="tutor-image"><img src="/images/eullis.jpg" alt="Eullis Sholehah, pengajar Fibona Academy" /></div><div className="tutor-photo-label">MEET YOUR EDUCATOR</div><div className="tutor-quote">“Mendampingi setiap langkah kecil menuju kemajuan.”</div></div>
          <div className="tutor-content"><span className="eyebrow">04 / OUR EDUCATOR</span><h2>Kenali sosok di balik <em>proses belajar.</em></h2><p className="lead">Pendamping belajar yang hadir untuk membantu siswa memahami materi dan mengembangkan potensinya.</p><div className="tutor-info"><span className="tiny-label">PENGAJAR FIBONA ACADEMY</span><h3>Eullis Sholehah</h3><p><MapPin size={16}/> Yogyakarta, Indonesia</p></div><p className="tutor-bio">Mendampingi siswa dalam proses belajar dengan pendekatan yang terarah, interaktif, dan memperhatikan kebutuhan masing-masing anak.</p></div>
        </div>
      </section>

      <section className="testimonials section">
        <div className="container"><div className="testimonial-heading"><Heading label="KIND WORDS" title={<>Setiap kemajuan layak <em>dirayakan.</em></>} text="Cerita dan pengalaman belajar bersama Fibona Academy." /></div>
          <div className="testimonial-grid">{testimonials.map((t,i)=><article className="testimonial-card" key={i}><Quote className="quote-icon"/><div className="stars">{[1,2,3,4,5].map(n=><Star key={n} size={13} fill="currentColor"/>)}</div><p>“{t.quote}”</p><div className="testimonial-person"><span className="avatar">{t.name.startsWith('Siswa')?'S':'O'}</span><span><b>{t.name}</b><small>{t.role}</small></span></div></article>)}</div>
        </div>
      </section>

      <section className="gallery section" id="gallery">
        <div className="container"><div className="gallery-head"><Heading label="05 / GALLERY" title={<>Momen kecil dalam perjalanan <em>belajar.</em></>} text="Dokumentasi aktivitas dan suasana pembelajaran Fibona Academy." /><span className="gallery-count">01 — 04 / DOKUMENTASI</span></div>
          <div className="gallery-grid">{gallery.map((g,i)=><article className={`gallery-card g${i+1}`} key={g.title}><img src={g.img} alt={g.title}/><div className="gallery-overlay"><small>{g.type}</small><h3>{g.title}</h3></div></article>)}</div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="container contact-panel"><div className="contact-watermark">F</div><div className="contact-text"><span className="eyebrow gold-text">06 / GET IN TOUCH</span><h2>Siap memulai langkah <em>belajarmu?</em></h2><p>Hubungi Fibona Academy untuk informasi program, jadwal, dan layanan bimbingan belajar.</p></div><a className="contact-button" href={wa} target="_blank" rel="noreferrer"><MessageCircle size={19}/> Hubungi via WhatsApp <ArrowUpRight size={17}/></a></div>
        <div className="container contact-info" style={contactInfoStyle}>
          <div style={contactItemStyle}>
            <MapPin size={22} style={contactIconStyle} />
            <span style={contactTextStyle}><b>Lokasi</b><small>Yogyakarta, Indonesia</small></span>
          </div>
          <div style={contactItemStyle}>
            <Monitor size={22} style={contactIconStyle} />
            <span style={contactTextStyle}><b>Metode pembelajaran</b><small>Online dan offline sesuai ketersediaan program</small></span>
          </div>
          <a href={wa} target="_blank" rel="noreferrer" style={contactItemStyle}>
            <MessageCircle size={22} style={contactIconStyle} />
            <span style={contactTextStyle}><b>WhatsApp</b><small>0819-3789-8716</small></span>
          </a>
          <a href={ig} target="_blank" rel="noreferrer" style={contactItemStyle}>
            <Instagram size={22} style={contactIconStyle} />
            <span style={contactTextStyle}><b>Instagram</b><small>@bimbel_fibonaacd</small></span>
          </a>
          <div style={contactItemStyle}>
            <TikTok size={22} style={contactIconStyle} />
            <span style={contactTextStyle}><b>TikTok</b><small>@fibonaacademy..bi</small></span>
          </div>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="container footer-top">
        <div><Logo inverse/><p>Small steps, infinite possibilities.<br/>Bertumbuh bersama, satu langkah setiap waktu.</p></div>
        <div className="footer-links"><b>Jelajahi</b>{links.map(([name,href])=><a href={href} key={href}>{name}</a>)}</div>
        <div className="footer-links">
          <b>Hubungi kami</b>
          <a href={wa} target="_blank" rel="noreferrer"><MessageCircle size={15}/> 0819-3789-8716</a>
          <span><MapPin size={15}/> Yogyakarta, Indonesia</span>
          <a href={ig} target="_blank" rel="noreferrer"><Instagram size={15}/> @bimbel_fibonaacd</a>
          <a href={tiktok} target="_blank" rel="noreferrer"><TikTok size={15}/> @fibonaacademy..bi</a>
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Fibona Academy. All rights reserved.</span><span>SMALL STEPS, INFINITE POSSIBILITIES</span></div>
    </footer>
  </div>
}
export default App