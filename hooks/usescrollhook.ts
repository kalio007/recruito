import { useEffect } from "react";

const useAutoHideScrollbar = (): void => {
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout | undefined;

    const handleScroll = () => {
      // Show the scrollbar
      document.body.classList.remove("hide-scrollbar");

      // Clear the existing timeout
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // Set a timeout to hide the scrollbar
      scrollTimeout = setTimeout(() => {
        document.body.classList.add("hide-scrollbar");
      }, 1000); // Adjust the delay as needed
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup the event listener
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);
};

export default useAutoHideScrollbar;
