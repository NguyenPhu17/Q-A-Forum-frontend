import { TrashIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const categories = {
  mon: [
    { label: "Toán", value: "toan" },
    { label: "Vật lý", value: "ly" },
    { label: "Hóa học", value: "hoa" },
    { label: "Văn", value: "van" },
    { label: "Sinh học", value: "sinhhoc" },
    { label: "Lịch sử", value: "lichsu" },
    { label: "Địa lý", value: "dialy" },
    { label: "Kinh tế", value: "kinhte" },
  ],
  khoa: [
    { label: "Khoa Tự nhiên", value: "khoatunhien" },
    { label: "Khoa Xã hội", value: "khoaxahoi" },
  ],
  lop: [
    { label: "Lớp 10", value: "lop10" },
    { label: "Lớp 11", value: "lop11" },
    { label: "Lớp 12", value: "lop12" },
  ],
  linhvuc: [
    { label: "Giáo dục", value: "giaoduc" },
  ],
};

const filterLabels = {
  mon: "Môn học",
  khoa: "Khoa",
  lop: "Lớp",
  linhvuc: "Lĩnh vực",
};

export default function FilterPanel({ filters, setFilters, onApply }) {
  const handleChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const clearFilters = () => {
    const cleared = { mon: "", khoa: "", lop: "", linhvuc: "" };
    setFilters(cleared);
    onApply(cleared);
  };

  return (
    <div className="border rounded-lg shadow-md p-6 bg-gray-50 space-y-6 max-w-3xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(categories).map(([key, values]) => (
          <div key={key} className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700 capitalize">
              {filterLabels[key]} 
            </label>
            <select
              value={filters[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              className="border border-gray-300 px-3 py-2 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Chọn {filterLabels[key]} --</option>
              {values.map(({ label, value }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button
          onClick={clearFilters}
          className="flex items-center gap-1 text-sm text-gray-700 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition"
        >
          <TrashIcon className="h-4 w-4" />
          Xóa lọc
        </button>
        <button
          onClick={() => onApply(filters)}
          className="flex items-center gap-1 text-sm text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          <CheckCircleIcon className="h-4 w-4" />
          Áp dụng
        </button>
      </div>
    </div>
  );
}
