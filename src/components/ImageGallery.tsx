import React from 'react';
import { motion } from 'motion/react';

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <>
      {/* Horizontal Scroll Layout */}
      <div className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 no-scrollbar scroll-smooth">
        {images.map((src, index) => (
            <motion.div
              key={index}
              className="shrink-0 snap-center first:ml-0 last:mr-0 relative overflow-hidden border-2 border-slate-700 bg-slate-800 w-[85vw] sm:w-[450px] aspect-[4/3] rounded-lg"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.opacity = '0';
                  (e.target as HTMLImageElement).parentElement!.classList.add('flex', 'items-center', 'justify-center');
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-sm font-medium z-0 text-center px-4 -z-10">
                等待上傳圖檔 {src}
              </div>
            </motion.div>
        ))}
      </div>
    </>
  );
}
