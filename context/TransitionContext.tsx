'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface TransitionContextType {
  isActive: boolean;
  startTransition: (href: string) => void;
  endTransition: () => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const startTransition = (href: string) => {
    // If navigating to the same page or a hash on the same page, do not animate
    if (
      href === pathname || 
      href.startsWith(`${pathname}#`) || 
      (pathname === '/' && href.startsWith('/#'))
    ) {
      router.push(href);
      return;
    }

    // Navigate instantly without video
    router.push(href);
  };

  const endTransition = () => {};

  return (
    <TransitionContext.Provider value={{ isActive: false, startTransition, endTransition }}>
      {children}
    </TransitionContext.Provider>
  );
}

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
};
