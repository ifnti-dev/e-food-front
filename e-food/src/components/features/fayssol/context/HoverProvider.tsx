import React, { createContext, useState, useContext } from 'react';
import HoverContext from './HoverContextTypes';

export const HoverProvider = ({ children }:any) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const value = {
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
  };

  return <HoverContext.Provider value={value}>{children}</HoverContext.Provider>;
};
