import { useState, type FC } from "react";

interface HeaderMenuProps {}

const HeaderMenu: FC<HeaderMenuProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-center text-white md:hidden">
      <button onClick={() => setIsOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>

      {isOpen && (
        <div className="bg-bg/70 fixed left-0 top-0 z-10 flex h-screen w-full items-center justify-center backdrop-blur">
          <button onClick={() => setIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute right-6 top-6"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          <nav className="flex flex-col gap-8 text-center text-4xl">
            <a
              onClick={() => setIsOpen(false)}
              href="/"
              className="hover:text-secondary transition"
            >
              Home
            </a>
            <a
              onClick={() => setIsOpen(false)}
              href="/#about"
              className="hover:text-secondary transition"
            >
              About me
            </a>
            <a
              onClick={() => setIsOpen(false)}
              href="/#contact"
              className="hover:text-secondary transition"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HeaderMenu;
