'use client';

import React, { createContext, useContext, useState } from 'react';

interface RFQContextType {
  isOpen: boolean;
  openRFQ: () => void;
  closeRFQ: () => void;
}

const RFQContext = createContext<RFQContextType | undefined>(undefined);

export function RFQProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openRFQ = () => setIsOpen(true);
  const closeRFQ = () => setIsOpen(false);

  return (
    <RFQContext.Provider value={{ isOpen, openRFQ, closeRFQ }}>
      {children}
    </RFQContext.Provider>
  );
}

export function useRFQ() {
  const context = useContext(RFQContext);
  if (context === undefined) {
    throw new Error('useRFQ must be used within an RFQProvider');
  }
  return context;
}
