import { useState } from "react";
import debounce from "lodash.debounce";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"; 

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  const debouncedSearch = debounce((value) => {
    onSearch(value);
  }, 300);

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
      </div>

      <input
        type="text"
        className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base leading-none"
        placeholder="Tìm kiếm bài viết theo tiêu đề, người đăng, ..."
        value={query}
        onChange={handleChange}
        style={{ boxSizing: "border-box" }} 
      />
    </div>
  );
}
