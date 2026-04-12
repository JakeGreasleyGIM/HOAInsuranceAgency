import { useEffect } from "react";

/**
 * Observes all elements with class "reveal" and adds "revealed"
 * when they enter the viewport. Call once in App.
 */
export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    function observe() {
      document.querySelectorAll(".reveal:not(.revealed)").forEach((el) => {
        observer.observe(el);
      });
    }

    // Observe on first render + after route transitions
    observe();
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);
}
