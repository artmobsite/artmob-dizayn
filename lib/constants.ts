export const BRAND = {
  name: "ARTMOB",
  displayName: "ARTMOB DİZAYN",
  tagline: "Mimari Ahşap Yüzey Sistemleri",
  description:
    "Mimari ahşap yüzey fabrikası. Duvardan tavana entegre sistemler, özel kaplamalı mimari yüzeyler ve lüks iç mekan yapısal çözümleri.",
  since: "1982'den Beri",
  email: "proje@artmobdizayn.com",
  phone: "+90 312 263 4040",
  address: "Önder, Demirhendek Cd. No:163/2\n06160 Altındağ / Ankara",
  city: "Ankara · Türkiye",
};

export const NAV_LINKS = [
  { label: "Sistemler", href: "/sistemler" },
  { label: "Materyaller", href: "/materyaller" },
  { label: "Projeler", href: "/projeler" },
  { label: "İletişim", href: "/iletisim" },
];

export const HERO = {
  eyebrow: ["Mimari Yüzey Sistemleri", "2025", "Özel Tasarım"],
  scrollLabel: "Kaydır",
  atelierLabel: "Fabrika",
  productRef: "Sistem.",
  productLabel: "Duvar Paneli · 2025",
  productName: "Entegre Ahşap Duvar Sistemi",
  ctaPrimary: "Projeleri Keşfet",
  ctaSecondary: "Mimari Felsefe",
};

const UNSPLASH = "https://images.unsplash.com/photo-";

export const SYSTEMS = [
  {
    id: "01",
    slug: "entegre-duvar-panelleri",
    name: "Entegre Duvar Panelleri",
    category: "Mimari Paneller",
    description:
      "Tabandan tavana ahşap duvar kaplama sistemleri. Duman meşesi ve koyu ceviz yüzey seçenekleri ile monolitik mimari form.",
    gradient: "from-[#3C2E22] via-[#2C1E14] to-[#1C100A]",
    image: "/images/sistem-01-duvar-panelleri.jpg",
  },
  {
    id: "02",
    slug: "gizli-depolama-panelleri",
    name: "Gizli Depolama Sistemleri",
    category: "Entegre Kabin",
    description:
      "Duvarla tamamen bütünleşen gizli kapak ve saklama sistemleri. Görünmez mükemmellik.",
    gradient: "from-[#2A2420] via-[#1E1A16] to-[#141010]",
    image: "/images/sistem-02-gizli-depolama.jpg",
  },
  {
    id: "03",
    slug: "avm-duvar-uygulamalari",
    name: "AVM Duvar Uygulamaları",
    category: "Ticari Mimari",
    description:
      "Büyük ölçekli ticari mekânlar için özel tasarım mimari duvar yüzeyleri. Otel, showroom ve kurumsal projeler.",
    gradient: "from-[#1E1C18] via-[#16140F] to-[#0E0C08]",
    image: "/images/sistem-03-avm-duvar.jpg",
  },
  {
    id: "04",
    slug: "yuzer-mimari-formlar",
    name: "Yüzer Mimari Formlar",
    category: "Özel Yapılar",
    description:
      "Duvara monteli mimari yapılar, yüzer konsol ve entegre aydınlatma sistemleri.",
    gradient: "from-[#28201A] via-[#1C1612] to-[#120E0A]",
    image: "/images/sistem-04-yuzer-formlar.jpg",
  },
];

export const MATERIALS = [
  {
    name: "Duman Meşesi",
    origin: "Avrupa Ormanları",
    description:
      "Fumed meşe işlemiyle elde edilen dramatik koyu renk tonu. Her levha benzersiz damar yapısıyla benzersizdir.",
    bg: "from-[#3C2E1E] to-[#1E1208]",
    texture:
      "repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.03) 8px, rgba(255,255,255,0.03) 9px)",
    image: `${UNSPLASH}1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=85`,
  },
  {
    name: "Koyu Amerikan Cevizi",
    origin: "Kuzey Amerika",
    description:
      "Sıcak kahverengi tonu ve güçlü damar yapısıyla mimari mekânlara ağırlık ve sıcaklık katar.",
    bg: "from-[#5C3E28] to-[#3C2010]",
    texture:
      "repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, transparent 1px, transparent 14px)",
    image: "/images/materyal-koyu-ceviz.jpg",
  },
  {
    name: "Mat Lake Yüzey",
    origin: "Fabrikamız",
    description:
      "Doğal ahşap üzerine mükemmel mat bitiş. Yüzey pürüzsüzlüğü ve ışığı emen mat doku.",
    bg: "from-[#1E1E1E] to-[#0A0A0A]",
    texture:
      "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04) 1px, transparent 1px)",
    image: "/images/materyal-mat-lake.jpg",
  },
  {
    name: "Ham Beton Dokulu Panel",
    origin: "Türkiye Fabrikası",
    description:
      "Beton görünümlü yüzey kaplaması. Endüstriyel lüks estetiği, mimari sertlik.",
    bg: "from-[#3C3830] to-[#1E1A14]",
    texture:
      "repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, transparent 1px, transparent 5px)",
    image: "/images/materyal-ham-beton.jpg",
  },
  {
    name: "Bronz Profil Sistemi",
    origin: "Brescia, İtalya",
    description:
      "Fırçalanmış bronz profiller ve bağlantı sistemleri. Ahşap panelleri tamamlayan metalik çizgi.",
    bg: "from-[#C9A84C] to-[#9B7B2E]",
    texture:
      "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, transparent 1px, transparent 4px)",
    image: "/images/materyal-bronz-profil.jpg",
  },
];

export const PHILOSOPHY = [
  {
    id: "01",
    title: "Duvarlar Konuşur",
    body: "Her duvar yüzeyi bir ifade biçimidir. Ahşabın damarları, mat lakın ışığı yutan yüzeyi ve gizli aydınlatmanın yarattığı gölgeler — bunlar mekânın sessiz dilidir. Her projeyi, mekânın anlatısını tamamlayacak şekilde tasarlıyoruz.",
  },
  {
    id: "02",
    title: "Görünmez Mükemmellik",
    body: "En iyi mimari yüzey, fark edilmeden hissedilen yüzeydir. Derzsiz geçişler, gizli kapaklar, kusursuz düz yüzeyler — bu görünmez mükemmellik, mekânın sizi nasıl hissettirdiğinin temelini oluşturur.",
  },
  {
    id: "03",
    title: "Kalıcı Mimari Değer",
    body: "Mobilya değişir; duvarlar kalır. Bu sorumluluğu her projede taşıyoruz. Onlarca yıl boyunca güzelliğini koruyacak malzemeler, detaylar ve oranlar seçiyoruz. Bir mimari yapı değeri inşa ediyoruz.",
  },
];

export const PROJECTS = [
  {
    id: "PR-001",
    slug: "bogaz-rezidansi",
    name: "Boğaz Rezidansı",
    category: "Konut Mimari",
    location: "Beşiktaş, İstanbul",
    description:
      "720 m² dubleks daire için tabandan tavana duman meşesi duvar sistemi ve entegre gizli depolama çözümleri.",
    gradient: "from-[#2C2018] to-[#14100A]",
    image: "/images/proje-bogaz-rezidansi.jpg",
  },
  {
    id: "PR-002",
    slug: "otel-lobi-duvari",
    name: "Otel Lobi Duvarı",
    category: "Ticari Uygulama",
    location: "Nişantaşı, İstanbul",
    description:
      "Otel lobisi için 18 metre yüksekliğinde bronz profilli ceviz duvar yüzey sistemi.",
    gradient: "from-[#2A2420] to-[#12100A]",
    image: `${UNSPLASH}1560347876-aeef00ee58a1?auto=format&fit=crop&w=800&q=85`,
  },
  {
    id: "PR-003",
    slug: "kurumsal-showroom",
    name: "Kurumsal Showroom",
    category: "Showroom Tasarımı",
    location: "Levent, İstanbul",
    description:
      "550 m² showroom alanı için mat lake ve entegre duvar-kabin sistemi. Bronz detaylı profil çerçeveleme.",
    gradient: "from-[#1E1C18] to-[#0E0C08]",
    image: `${UNSPLASH}1618219944342-824e40a13285?auto=format&fit=crop&w=800&q=85`,
  },
  {
    id: "PR-004",
    slug: "mustakil-villa",
    name: "Müstakil Villa",
    category: "Lüks Konut",
    location: "Zekeriyaköy, İstanbul",
    description:
      "1.200 m² villa için özel boyutlu ahşap panel sistemleri, gizli kapılar ve entegre aydınlatma.",
    gradient: "from-[#3C2E22] to-[#1A120A]",
    image: "/images/proje-mustakil-villa.jpg",
  },
  {
    id: "PR-005",
    slug: "sanat-galerisi",
    name: "Sanat Galerisi",
    category: "Kültürel Mekan",
    location: "Karaköy, İstanbul",
    description:
      "Galeri için beyaz mat lake ve siyah ahşap kontrast duvar sistemleri. Sanatı ön plana çıkaran mimari yüzey.",
    gradient: "from-[#1A1A1A] to-[#0A0A0A]",
    image: "/images/proje-sanat-galerisi.jpg",
  },
  {
    id: "PR-006",
    slug: "premium-ofis-kati",
    name: "Premium Ofis Katı",
    category: "Kurumsal Mimari",
    location: "Etiler, İstanbul",
    description:
      "Yönetim katı için mat lake panel sistemleri ve gizli toplantı odası entegrasyonu.",
    gradient: "from-[#2A2620] to-[#14120A]",
    image: `${UNSPLASH}1497366216548-37526070297c?auto=format&fit=crop&w=800&q=85`,
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "ARTMOB'un duvar sistemleri, projemizin mimari kimliğini tamamen tanımladı. Duman meşesi kaplamalar ve entegre aydınlatma, mekânı bir yüzey değil, bir mimari deneyim haline getirdi.",
    author: "Arif Sağlam",
    title: "Kurucu Ortak, AS Mimarlık — İstanbul",
  },
  {
    quote:
      "Büyük ölçekli AVM uygulamalarında bile kalite ve hassasiyet düzeyi hiç değişmiyor. Bu tutarlılık, lüks projelerde paha biçilmez bir güvencedir.",
    author: "Sophie Leclerc",
    title: "İç Mimarlık Direktörü, Atelier L — Paris",
  },
  {
    quote:
      "Gizli kapı sistemi tam anlamıyla görünmez. Bu seviyede detay işçiliği — dünyada çok az yer bunu başarabilir. Her zaman ARTMOB'u tercih edeceğiz.",
    author: "Kenji Watanabe",
    title: "Koleksiyoner ve Girişimci, Tokyo",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Proje süreciniz nasıl işliyor?",
    answer:
      "Önce mekânınızı ziyaret eder, mimari gereksinimlerinizi ve estetik tercihinizi dinleriz. 3D görselleştirme ve malzeme örnekleriyle sunum yaparız. Onayın ardından üretim başlar; teslimata kadar projenizi adım adım takip ederiz.",
  },
  {
    question: "Minimum proje boyutu var mı?",
    answer:
      "Her ölçekte projeyle çalışıyoruz. Tek bir oda duvarından otel lobisine kadar. Özel tasarım sistemler için minimum 30 m² yüzey alanı öneriyoruz. Bu boyutun altında hazır panel sistemlerimiz daha uygun olabilir.",
  },
  {
    question: "Farklı ahşap türleri ve yüzey işlemleri belirtebilir miyim?",
    answer:
      "Evet. Duman meşesi, Amerikan cevizi, beyaz meşe, siyah boyalı ve mat lake dahil onlarca yüzey seçeneği sunuyoruz. Renk kartlarımız ve fiziksel malzeme örnekleriyle Fabrikamızde sunum yapıyoruz.",
  },
  {
    question: "Gizli kapı ve depolama sistemleri nasıl çalışıyor?",
    answer:
      "Duvar yüzeyiyle tamamen bütünleşen gizli kapılar, manyetik ya da piston mekanizmalı açılım sistemleriyle çalışır. Kapı yüzeyi aynı panel kaplama ile bitirilir; duvar tek bir bütün gibi görünür.",
  },
  {
    question: "Büyük ölçekli ticari projeler için çalışıyor musunuz?",
    answer:
      "Evet. İstanbul başta olmak üzere 12 şehirde 200'den fazla ticari ve konut projesi tamamladık. Portföyümüzü Fabrikamızde veya dijital olarak paylaşabiliriz.",
  },
];
