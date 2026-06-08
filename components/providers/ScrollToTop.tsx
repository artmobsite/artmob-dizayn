"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

export default function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    // Lenis varsa onun instance'ını kullan (smooth scroll bozulmasın)
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  // lenis dependency'yi kasıtlı olarak dışarıda bırakıyoruz:
  // pathname değiştiğinde bir kez çalışması yeterli
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}
