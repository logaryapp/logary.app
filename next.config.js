/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Logary Web Ayarları */
  eslint: {
    // Build sırasında ESLint hataları olsa bile yayına devam etmesini sağlar
    ignoreDuringBuilds: true,
  },
  typescript: {
    // TypeScript hataları build'i durdurmasın (hızlı canlıya çıkış için)
    ignoreBuildErrors: true,
  },
  // Eğer özel resim alanları veya external domainler kullanıyorsan buraya ekleyebiliriz
  images: {
    unoptimized: true, // Statik görsellerin Vercel'de sorunsuz yüklenmesi için
  },
};

module.exports = nextConfig;