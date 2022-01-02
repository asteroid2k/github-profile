import SearchIcon from "../public/icons/search.svg";
import StarIcon from "../public/icons/star.svg";
import XIcon from "../public/icons/x.svg";

type Props = {
  onInput: () => void;
};
const SearchBox: React.FC<Props> = ({ onInput }) => {
  return (
    <div className="max-w-3xl  bg-gray-800 text-gray-400 rounded-xl mx-auto shadow-inner shadow-white/5">
      <form className="px-4 w-full flex items-center gap-2 flex-auto">
        <div className="form-input w-full flex items-center gap-1">
          <span>
            <SearchIcon />
          </span>
          <label htmlFor="username"></label>
          <input
            className="border-transparent w-full flex-auto  bg-transparent text-sm placeholder:text-gray-400 placeholder:text-sm h-14 focus:outline-none focus:ring-0 focus:border-transparent"
            type="search"
            maxLength={64}
            name=""
            id="username"
            placeholder="Search username"
          />
        </div>
        <p>ESC</p>
      </form>
      <ul className="recents max-h-[360px] overflow-y-auto">
        <div className="p-4 font-semibold text-gray-300">
          <p>Recent</p>
        </div>
        {["asteroid2k", "fredhazel", "bruno", "kevamexo", "duboakye"].map(
          (search, index) => (
            <li
              className="px-6 py-4 border-t border-gray-50/10 flex justify-between"
              key={index}
            >
              <p>{search}</p>
              <div>
                <button>
                  <StarIcon />
                </button>
                <button>
                  <XIcon />
                </button>
              </div>
            </li>
          )
        )}
      </ul>
      <div className="p-3 border-t border-gray-50/10"></div>
    </div>
  );
};
export default SearchBox;
