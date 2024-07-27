import { animated } from "react-spring";

const popUpNav: React.FC<{ style?: React.CSSProperties }> = ({style}) => {
    return (
      <animated.div style={style} className="bg-black w-64 h-full absolute right-0">
        <div className="flex flex-col h-full mt-14">
          <a
            href="/"
            className="hover: bg-stone-600 text-white rounded-md mx-3 my-2 text-xl font-medium"
          >
            Home
          </a>
          <a
            href="/"
            className="hover:bg-stone-600 text-white rounded-md mx-3 my-2 text-xl font-medium"
          >
            Meet Maria
          </a>
          <a
            href="/"
            className="hover:bg-stone-600 text-white rounded-md mx-3 my-2 text-xl font-medium"
          >
            Listings
          </a>
          <a
            href="/"
            className="hover:bg-stone-600 text-white rounded-md mx-3 my-2 text-xl font-medium"
          >
            Contact
          </a>
        </div>
      </animated.div>
    );
  };

  export default popUpNav;