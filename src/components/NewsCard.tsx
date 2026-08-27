import React from 'react';
import Image from 'next/image';

interface NewsCardProps {
  news: any;
}

export default function NewsCard({ news }: NewsCardProps) {
  const dateFormatter = new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition cursor-pointer group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={news.image || 'https://via.placeholder.com/400x300'}
          alt={news.title}
          fill
          className="object-cover group-hover:scale-110 transition"
        />
        <div className="absolute top-4 right-4 bg-accent px-3 py-1 rounded-full text-sm text-white font-bold">
          {news.category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{news.title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{news.description}</p>
        <div className="flex justify-between items-center text-xs text-gray-400">
          <span>{dateFormatter.format(new Date(news.date))}</span>
          <span>👁️ {news.views.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
