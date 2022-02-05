import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="grid place-items-center py-8">
      <div className="flex justify-around nav-width">
        <div className="flex">
          <svg
            width="14"
            height="26"
            viewBox="0 0 14 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 1H8.04348V19.4825C7.20586 20.3943 6.62458 20.4058 5.43478 19.4825V13.2269C4.06481 13.2311 3.08458 13.2307 1 13.2269V22.3259C5.91393 25.7497 8.55913 26.0303 13 22.3259V1Z"
              fill="#DD919F"
              stroke="black"
              strokeWidth="0.5"
            />
          </svg>
          <h2 className="text-white font-bold text-xl ml-4">Japanese Study</h2>
        </div>

        <section className="flex">
          <a className="text-white font-medium text-l ml-8" href="#">
            Home
          </a>
          <a className="text-white font-medium text-l ml-8" href="#">
            Lessons
          </a>
          <a className="text-white font-medium text-l ml-8" href="#">
            About us
          </a>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
