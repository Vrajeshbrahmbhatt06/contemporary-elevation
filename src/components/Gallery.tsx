
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);

  const mediaItems = [
    {
      type: "image",
      src: "./assets/family_home2.jpg",
      alt: "Modern custom home",
      title: "Contemporary Family Home"
    },
    {
      type: "image",
      src: "./assets/exterior.jpg",
      alt: "Exterior Elegance",
      title: "Exterior Elegance"
    },
    {
      type: "image",
      src: "./assets/additions2.jpg",
      alt: "Custom Homes & Additions",
      title: "Custom Homes & Additions"
    },
    {
      type: "video",
      src: "./assets/showcase_video.mp4",
      thumbnail: "./assets/showcase_thumbnail2.jpg",
      alt: "The Makeover Project video",
      title: "The Makeover Project"
    },
    {
      type: "image",
      src: "./assets/kitchen1.jpg",
      alt: "Interior renovation",
      title: "Kitchen Renovation"
    },
    {
      type: "image",
      src: "./assets/modern_extension2.jpg",
      alt: "Modern Extension",
      title: "Modern Extension"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedMedia(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
    document.body.style.overflow = 'unset';
  };

  const navigateMedia = (direction: 'prev' | 'next') => {
    if (selectedMedia === null) return;
    
    if (direction === 'prev') {
      setSelectedMedia(selectedMedia === 0 ? mediaItems.length - 1 : selectedMedia - 1);
    } else {
      setSelectedMedia(selectedMedia === mediaItems.length - 1 ? 0 : selectedMedia + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of completed projects that showcase our commitment to excellence and innovation.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {mediaItems.map((item, index) => (
            <div 
              key={index}
              className="break-inside-avoid group cursor-pointer relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              onClick={() => openLightbox(index)}
            >
              <div className="relative">
                <img 
                  src={item.type === 'video' ? item.thumbnail : item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {item.type === 'video' && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-gray-900 ml-1" />
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedMedia !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              onClick={() => navigateMedia('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button 
              onClick={() => navigateMedia('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
              {mediaItems[selectedMedia].type === 'video' ? (
                <video 
                  src={mediaItems[selectedMedia].src}
                  controls
                  autoPlay
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <img 
                  src={mediaItems[selectedMedia].src}
                  alt={mediaItems[selectedMedia].alt}
                  className="max-w-full max-h-full object-contain"
                />
              )}
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <h3 className="text-xl font-semibold mb-2">{mediaItems[selectedMedia].title}</h3>
              <p className="text-sm text-gray-300">
                {selectedMedia + 1} of {mediaItems.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
