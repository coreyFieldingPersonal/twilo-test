export const observer = (onObserve) =>
  new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const intersecting = entry.isIntersecting

        if (intersecting) {
          onObserve(entry)
        }
      })
    },
    {
      rootMargin: "100% 100% 100% 100%",
      threshold: 0.5,
    }
  )
