export default function useScrollFade() {
  const applyFadeEffect = () => {
    const sections = document.querySelectorAll(".section");
    if (sections.length === 0) {
      console.warn("No elements with class 'section' found.");
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          entry.target.classList.remove("fade-out");
        } else {
          entry.target.classList.remove("fade-in");
          entry.target.classList.add("fade-out");
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      section.classList.add("fade-out"); // Initial state
      observer.observe(section);
    });
  };

  // Run on page load
  if (document.readyState === "complete") {
    applyFadeEffect();
  } else {
    document.addEventListener("DOMContentLoaded", applyFadeEffect);
  }

  // Ensure effect reapplies on dynamic content changes
  const mutationObserver = new MutationObserver(() => {
    applyFadeEffect();
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });
}