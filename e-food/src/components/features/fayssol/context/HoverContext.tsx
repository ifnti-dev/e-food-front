// HoverProvider.tsx
import React, { createContext, useState, useContext } from 'react';

interface HoverState {
  isHovered: boolean;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
}

const HoverContext = createContext<HoverState | undefined>(undefined);

export const useHoverContext = () => {
  const context = useContext(HoverContext);
  if (!context) {
    throw new Error('useHoverContext must be used within a HoverProvider');
  }
  return context;
};

export const HoverProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HoverContext.Provider value={{ isHovered, setIsHovered }}>
      {children}
    </HoverContext.Provider>
  );
};
