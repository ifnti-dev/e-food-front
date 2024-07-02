// ModalProvider.tsx
import React, { createContext, useState, useContext } from 'react';

interface ModalStat {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalStat | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
};

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modal, setModal] = useState(false);

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
};
