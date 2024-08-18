import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import navbarItems from "../navbar/navbarItems";

const MoblieNavbar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (
    <>
      <div
        className="sidebar-container fixed w-full h-1/5 overflow-hidden justify-center  grid pt-[120px] left-0 z-10"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <button className="absolute right-0 p-5" onClick={toggle}>
          {/* Close icon */}
          <IoMdClose className="text-white" size={40} />
        </button>

        <ul className="sidebar-nav text-center leading-relaxed text-xl">
          {navbarItems.map((item) => (
            <li key={`m-${item.link}`}>
              <Link href={item.link}>{item.element}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MoblieNavbar;
