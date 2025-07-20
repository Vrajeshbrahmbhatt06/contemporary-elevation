
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);

  const mediaItems = [
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
      alt: "Modern custom home exterior",
      title: "Contemporary Family Home"
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
      alt: "Glass building detail",
      title: "Architectural Details"
    },
    {
      type: "video",
      src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
      alt: "Construction process video",
      title: "Build Process Showcase"
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
      alt: "Modern building facade",
      title: "Commercial Addition"
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
      alt: "Interior renovation",
      title: "Kitchen Renovation"
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
      alt: "Architectural angles",
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
