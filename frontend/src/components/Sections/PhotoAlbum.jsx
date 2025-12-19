// src/components/Sections/PhotoAlbum.jsx
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2, Download } from 'lucide-react';

const PhotoAlbum = () => {
 
  const [photos, setPhotos] = useState([
    {
      id: 1,
      url: 'https://drive.google.com/file/d/19kVmm4BFHr9dbijGen1SBr2NLLS-QfjA/view?usp=drive_link',
      title: 'Environmental Conservation',
      description: 'Community tree planting initiative',
      category: 'Environment'
    },
    {
      id: 2,
      url: '../../dist/images/Waste management.jpeg',
      title: 'Waste Management',
      description: 'Organizing community clean-up activities',
      category: 'Environment'
    },
    {
      id: 3,
      url: '../../dist/images/Mern stack grad.jpeg',
      title: 'Software Development',
      description: 'Working on web development projects',
      category: 'Technology'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Team Collaboration',
      description: 'Working with development teams',
      category: 'Technology'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Community Engagement',
      description: 'Sensitizing communities on environmental practices',
      category: 'Community'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Project Planning',
      description: 'Strategic planning sessions with stakeholders',
      category: 'Management'
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [loadedPhotos, setLoadedPhotos] = useState({});

  // Auto-play slideshow
  useEffect(() => {
    if (isAutoPlaying && !isModalOpen) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, isModalOpen, photos.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  }, [photos.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
    setIsAutoPlaying(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
    setIsAutoPlaying(true);
  };

  const handleImageLoad = (id) => {
    setLoadedPhotos(prev => ({ ...prev, [id]: true }));
  };

  const downloadPhoto = (photoUrl, photoTitle) => {
    const link = document.createElement('a');
    link.href = photoUrl;
    link.download = `${photoTitle.replace(/\s+/g, '-').toLowerCase()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Categories for filtering
  const categories = ['All', ...new Set(photos.map(photo => photo.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPhotos = activeCategory === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light mb-4">Activity Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Showcasing my work in environmental management and software development
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentIndex(0);
                }}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 border hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
            aria-label="Next photo"
          >
            <ChevronRight size={24} />
          </button>

          {/* Main Carousel Image */}
          <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-105'
                }`}
              >
                {!loadedPhotos[photo.id] && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl"></div>
                )}
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover rounded-2xl"
                  onLoad={() => handleImageLoad(photo.id)}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                  <div className="text-white">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-2">
                      {photo.category}
                    </span>
                    <h3 className="text-2xl font-semibold mb-2">{photo.title}</h3>
                    <p className="text-gray-200">{photo.description}</p>
                  </div>
                </div>
                
                {/* Enlarge Button */}
                <button
                  onClick={() => openModal(photo)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                  aria-label="Enlarge photo"
                >
                  <Maximize2 size={20} className="text-white" />
                </button>
              </div>
            ))}
          </div>

          {/* Thumbnail Strip */}
          <div className="flex justify-center gap-4 mt-8 overflow-x-auto py-4">
            {filteredPhotos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? 'border-black scale-110'
                    : 'border-transparent hover:border-gray-300'
                }`}
                aria-label={`View ${photo.title}`}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </button>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {filteredPhotos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-black'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play toggle */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                isAutoPlaying
                  ? 'bg-green-100 text-green-800 hover:bg-green-200'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause Slideshow' : '▶️ Play Slideshow'}
            </button>
          </div>
        </div>

        {/* Photo Grid (Alternative View) */}
        <div className="mt-20">
          <h3 className="text-2xl font-light mb-8 text-center">Photo Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.slice(0, 6).map((photo) => (
              <div
                key={photo.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 p-6 text-white">
                    <h4 className="text-xl font-semibold mb-2">{photo.title}</h4>
                    <p className="text-gray-200">{photo.description}</p>
                    <button
                      onClick={() => openModal(photo)}
                      className="mt-4 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors text-sm"
                    >
                      View Details
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded-full">
                    {photo.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Full-screen View */}
      {isModalOpen && selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-7xl max-h-[90vh] mx-4">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={32} />
            </button>

            {/* Download button */}
            <button
              onClick={() => downloadPhoto(selectedPhoto.url, selectedPhoto.title)}
              className="absolute -top-12 left-0 text-white hover:text-gray-300 transition-colors z-10 flex items-center gap-2"
              aria-label="Download photo"
            >
              <Download size={20} />
              <span>Download</span>
            </button>

            {/* Modal content */}
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
                />
              </div>
              <div className="lg:w-96 text-white">
                <h3 className="text-3xl font-semibold mb-4">{selectedPhoto.title}</h3>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                    {selectedPhoto.category}
                  </span>
                </div>
                <p className="text-gray-200 text-lg mb-8">{selectedPhoto.description}</p>
                
                {/* Navigation in modal */}
                <div className="flex justify-between items-center mt-8">
                  <button
                    onClick={() => {
                      const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
                      const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
                      setSelectedPhoto(filteredPhotos[prevIndex]);
                    }}
                    className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                  >
                    <ChevronLeft size={24} />
                    Previous
                  </button>
                  
                  <span className="text-gray-300">
                    {filteredPhotos.findIndex(p => p.id === selectedPhoto.id) + 1} / {filteredPhotos.length}
                  </span>
                  
                  <button
                    onClick={() => {
                      const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
                      const nextIndex = (currentIndex + 1) % filteredPhotos.length;
                      setSelectedPhoto(filteredPhotos[nextIndex]);
                    }}
                    className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                  >
                    Next
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoAlbum;
