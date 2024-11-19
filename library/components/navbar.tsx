"use client";

import { useState, useEffect } from "react";
import { AppLogoComponent } from "@/Molecules/Atoms/Logo.Atom";
import { sizeEnum } from "@/library/enum/common.enum";

import { Settings, BellIcon, Search } from "lucide-react";

export const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  // useEffect(() => {
  //   let timeoutId: NodeJS.Timeout;

  //   const handleScroll = () => {
  //     // Clear the timeout on every scroll event
  //     clearTimeout(timeoutId);

  //     timeoutId = setTimeout(() => {
  //       const currentScrollTop = window.scrollY;

  //       if (currentScrollTop > lastScrollTop) {
  //         // If scrolling down, set navbar as sticky
  //         setIsSticky(true);
  //       } else if (currentScrollTop === 0) {
  //         // If back at top, reset sticky state
  //         setIsSticky(false);
  //       }

  //       setLastScrollTop(currentScrollTop);
  //     }, 100); // 100ms debounce delay for smoother updates
  //   };

  //   // Add scroll event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup event listener on unmount
  //   return () => {
  //     clearTimeout(timeoutId);
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [lastScrollTop]);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky class based on scroll position
      setIsSticky(window.scrollY > 0);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full min-w-screen px-3 py-1 bg-secondaryBg flex items-center justify-between transition-transform duration-300 shadow-md ${
        isSticky ? "sticky top-0 z-10" : "relative"
      }`}
    >
      <AppLogoComponent companyNameColor="lightBlack" size={sizeEnum.MEDIUM} />
      <section className="flex items-center justify-end gap-3">
        <Search className="bg-secondary text-white p-1.5 rounded-full text-2xl w-8 h-8 cursor-pointer" />
        <BellIcon className="bg-secondary text-white p-1.5 rounded-full text-2xl w-8 h-8 cursor-pointer" />
        <Settings className="bg-secondary text-white p-1.5 rounded-full text-2xl w-8 h-8 cursor-pointer" />
      </section>
    </nav>
  );
};
