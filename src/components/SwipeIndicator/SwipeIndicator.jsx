import React from 'react';

const SwipeIndicator = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center pointer-events-none animate-fade-out">
      <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-2">
        <span className="text-white/60 text-xs">Swipe</span>
        <div className="w-6 h-6 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white/40 border-l-transparent rounded-full animate-spin"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <ion-icon name="arrow-forward-outline" class="text-white/60 animate-slide-right"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwipeIndicator;
