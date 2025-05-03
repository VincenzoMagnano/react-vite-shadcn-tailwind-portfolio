

const BackgroundSVG = ({ type = 'tech' }) => {
  // Sfondo ondulato
  if (type === 'wavy') {
    return (
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <svg viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f3f4f6" />
              <stop offset="100%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          <rect width="1440" height="600" fill="url(#gradient)" />
          <path className="wavy-animation" fill="#d1d5db" fillOpacity="0.5" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,261.3C672,256,768,224,864,213.3C960,203,1056,213,1152,208C1248,203,1344,181,1392,170.7L1440,160L1440,600L1392,600C1344,600,1248,600,1152,600C1056,600,960,600,864,600C768,600,672,600,576,600C480,600,384,600,288,600C192,600,96,600,48,600L0,600Z" />
          <path className="wavy-animation2" fill="#9ca3af" fillOpacity="0.4" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,208C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,600L1392,600C1344,600,1248,600,1152,600C1056,600,960,600,864,600C768,600,672,600,576,600C480,600,384,600,288,600C192,600,96,600,48,600L0,600Z" />
          <path className="wavy-animation3" fill="#6b7280" fillOpacity="0.3" d="M0,320L48,309.3C96,299,192,277,288,272C384,267,480,277,576,282.7C672,288,768,288,864,277.3C960,267,1056,245,1152,245.3C1248,245,1344,267,1392,277.3L1440,288L1440,600L1392,600C1344,600,1248,600,1152,600C1056,600,960,600,864,600C768,600,672,600,576,600C480,600,384,600,288,600C192,600,96,600,48,600L0,600Z" />
        </svg>
      </div>
    );
  }
  
  // Sfondo griglia
  if (type === 'grid') {
    return (
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
            </pattern>
            <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f9fafb" />
              <stop offset="100%" stopColor="#f3f4f6" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#bg)"/>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle cx="200" cy="180" r="80" fill="#d1d5db" fillOpacity="0.2" />
          <circle cx="800" cy="150" r="120" fill="#9ca3af" fillOpacity="0.2" />
          <circle cx="150" cy="800" r="100" fill="#6b7280" fillOpacity="0.1" />
          <circle cx="850" cy="850" r="150" fill="#4b5563" fillOpacity="0.1" />
        </svg>
      </div>
    );
  }
  
  // Sfondo tech (default)
  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full " preserveAspectRatio="none">
        <defs>
          <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
          </pattern>
          <pattern id="techGrid" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="url(#smallGrid)" />
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#d1d5db" strokeWidth="1" />
          </pattern>
          <linearGradient id="techBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f9fafb" />
            <stop offset="100%" stopColor="#f3f4f6" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#techBg)" />
        <rect width="100%" height="100%" fill="url(#techGrid)" />
        
        {/* Circuit lines */}
        <path className="circuit-line" d="M 200,100 L 200,300 L 400,300 L 400,500 L 600,500 L 600,200 L 800,200" 
              stroke="#6b7280" strokeWidth="2" fill="none" strokeOpacity="0.2" />
        <path className="circuit-line" d="M 100,400 L 300,400 L 300,600 L 500,600 L 500,800 L 700,800 L 700,600 L 900,600" 
              stroke="#6b7280" strokeWidth="2" fill="none" strokeOpacity="0.2" />
        
        {/* Circuit nodes */}
        <circle cx="200" cy="100" r="5" fill="#4b5563" fillOpacity="0.6" />
        <circle cx="200" cy="300" r="5" fill="#4b5563" fillOpacity="0.6" />
        <circle cx="400" cy="300" r="5" fill="#4b5563" fillOpacity="0.6" />
        <circle cx="400" cy="500" r="5" fill="#4b5563" fillOpacity="0.6" />
        <circle cx="600" cy="500" r="5" fill="#4b5563" fillOpacity="0.6" />
        <circle cx="600" cy="200" r="5" fill="#4b5563" fillOpacity="0.6" />
        <circle cx="800" cy="200" r="5" fill="#4b5563" fillOpacity="0.6" />
        <circle cx="100" cy="400" r="5" fill="#4b5563" fillOpacity="0.6" />
        <circle cx="300" cy="400" r="5" fill="#4b5563" fillOpacity="0.6" />
        <circle cx="300" cy="600" r="5" fill="#4b5563" fillOpacity="0.6" />
        <circle cx="500" cy="600" r="5" fill="#4b5563" fillOpacity="0.6" />
        <circle cx="500" cy="800" r="5" fill="#4b5563" fillOpacity="0.6" />
        <circle cx="700" cy="800" r="5" fill="#4b5563" fillOpacity="0.6" />
        <circle cx="700" cy="600" r="5" fill="#4b5563" fillOpacity="0.6" />
        <circle cx="900" cy="600" r="5" fill="#4b5563" fillOpacity="0.6" />
      </svg>
    </div>
  );
};

export default BackgroundSVG;
