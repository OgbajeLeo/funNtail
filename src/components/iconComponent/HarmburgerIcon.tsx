interface HarmburgerIconProps {
  isOpen?: boolean;
}

const HarmburgerIcon = ({ isOpen = false }: HarmburgerIconProps) => {
  return (
    <div className="w-8 h-8 flex items-center justify-center">
      {isOpen ? (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18M6 6L18 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        // Hamburger icon
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.666 22.6668H25.3327M6.66602 16.0002H25.3327M14.666 9.3335H25.3327"
            stroke="#1E293B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export default HarmburgerIcon;
