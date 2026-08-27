import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darker border-t border-accent/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4 font-serif">Reino Misterioso</h3>
            <p className="text-gray-400 text-sm">Tu plataforma de casos sin resolver, paranormal e historias inexplicables del mundo.</p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Navegación</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/"><span className="hover:text-accent transition cursor-pointer">Inicio</span></Link></li>
              <li><Link href="/noticias"><span className="hover:text-accent transition cursor-pointer">Noticias</span></Link></li>
              <li><Link href="/videos"><span className="hover:text-accent transition cursor-pointer">Videos</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/privacidad"><span className="hover:text-accent transition cursor-pointer">Privacidad</span></Link></li>
              <li><Link href="/terminos"><span className="hover:text-accent transition cursor-pointer">Términos</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-accent transition">🎵 TikTok</a>
              <a href="#" className="text-gray-400 hover:text-accent transition">▶️ YouTube</a>
            </div>
          </div>
        </div>

        <div className="border-t border-accent/20 pt-8">
          <p className="text-gray-400 text-center text-sm">
            © {currentYear} Reino Misterioso. Todos los derechos reservados. | Sin marca de agua - 100% Tuyo
          </p>
        </div>
      </div>
    </footer>
  );
}
