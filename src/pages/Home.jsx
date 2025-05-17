import { useState } from "react";
import SearchBar from "../components/SearchBar";
import PostList from "../components/PostList";
import FilterPanel from "../components/FilterPanel";
import postsData from "../data/posts";
import { FunnelIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [filteredPosts, setFilteredPosts] = useState(postsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({
    mon: "",
    khoa: "",
    lop: "",
    linhvuc: "",
  });

  const keywordToTag = {
    "toán": "toan",
    "giải tích": "giaitich",
    "đại số": "daiso",
    "hóa học": "hoahoc",
    "vật lý": "vatly",
    "văn học": "vanhoc",
    "sinh học": "sinhhoc",
    "lịch sử": "lichsu",
    "địa lý": "dialy",
    "kinh tế": "kinhte"
  };

  const mapKeywordToTag = (query) => {
    const keyword = query.toLowerCase().trim();
    return keywordToTag[keyword] || null;
  };

  const [isFilterActive, setIsFilterActive] = useState(false);

  const filterPosts = (query, filters) => {
    const lower = query.toLowerCase();
    const mappedTag = mapKeywordToTag(lower);

    const result = postsData.filter((post) => {
      const matchesText =
        post.title.toLowerCase().includes(lower) ||
        post.author.toLowerCase().includes(lower);

      const matchesKeywordTag = mappedTag
        ? post.tags.includes(mappedTag)
        : false;

      const matchesQuery = matchesText || matchesKeywordTag;

      const matchesFilters = Object.entries(filters).every(([key, val]) =>
        val === "" ? true : post.tags.includes(val)
      );

      return matchesQuery && matchesFilters;
    });

    setFilteredPosts(result);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterPosts(query, filters);
  };

  const handleApplyFilters = (appliedFilters) => {
    setFilters(appliedFilters);
    filterPosts(searchQuery, appliedFilters);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">

      <div className="w-full max-w-3xl mx-auto flex items-center gap-2 mt-4">
        <div className="flex-1">
          <SearchBar onSearch={handleSearch} />
        </div>
        <button
          onClick={() => {
            setShowFilter(!showFilter);
            setIsFilterActive(!isFilterActive);
          }}
          className={`flex items-center gap-1 px-3 py-2 border rounded-md transition ${isFilterActive ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'} hover:${isFilterActive ? 'bg-blue-600' : 'bg-gray-100'}`}
        >
          <FunnelIcon className="h-5 w-5" />
          <span className="hidden sm:inline">Bộ lọc</span>
        </button>
      </div>

      {showFilter && (
        <div className="mt-4">
          <FilterPanel
            filters={filters}
            setFilters={setFilters}
            onApply={handleApplyFilters}
          />
        </div>
      )}

      <div className="flex items-center my-6">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-4 text-gray-500 font-medium whitespace-nowrap">Danh sách bài viết</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      <PostList posts={filteredPosts} />
    </div>
  );
}
