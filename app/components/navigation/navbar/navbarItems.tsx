import { FaSearch } from "react-icons/fa";
const navbarItems = [
  {
    link: "/posts",
    element: <p>Posts</p>,
  },
  {
    link: "/tags",
    element: <p>Tags</p>,
  },
  {
    link: "/about",
    element: <p>About</p>,
  },
  {
    link: "/search",
    element: (
      <div className=" translate-y-0.5">
        <FaSearch size={20} />
      </div>
    ),
  },
];
export default navbarItems;
