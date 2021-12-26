import React, { useEffect, useState } from "react";
import { classNames } from "../utilis/ClassName";

export const ScrollToTop = () => {
    const [isvisibale, setIsvisible] = useState(false);

    const toggleVisibility = () => {
        
        if (window.pageYOffset > 100) {
            setIsvisible(true);
        }
        else {
            setIsvisible(false);
        }
    }
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
          window.removeEventListener("scroll", toggleVisibility);
        };
    },[])

    return (
      <div className="fixed bottom-2 right-2">
        <button
          type="button"
          onClick={scrollTop}
          className={classNames(
            isvisibale ? "opacity-100" : "opacity-0",
            "inline-flex items-center p-3 rounded-full shadow-sm text-white bg-gray-500 transition-opacity hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
    );
}


















