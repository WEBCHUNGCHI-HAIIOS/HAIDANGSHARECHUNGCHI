
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, ShoppingBag, X } from "lucide-react";
import ProductCard from "../components/ProductCard";

const sampleProducts = [
  {
    id: "demo-1",
    name: "Gói dịch vụ kỹ thuật số mẫu",
    category: "Dịch vụ MMO",
    description: "Sản phẩm minh họa cho cửa hàng.",
    price: 99000,
    status: "Sản phẩm mẫu",
  },
  {
    id: "demo-2",
    name: "Gói tiện ích trực tuyến",
    category: "Phần mềm số",
    description: "Gói tiện ích kỹ thuật số minh họa.",
    price: 149000,
    status: "Sản phẩm mẫu",
  },
  {
    id: "demo-3",
    name: "Gói hỗ trợ kỹ thuật số",
    category: "Dịch vụ MMO",
    description: "Dịch vụ minh họa, chưa mở bán.",
    price: 199000,
    status: "Sản phẩm mẫu",
  },
  {
    id: "demo-4",
    name: "Dịch vụ Mobile mẫu",
    category: "Dịch vụ Mobile",
    description: "Tiện ích mẫu dành cho thiết bị di động.",
    price: 79000,
    status: "Sản phẩm mẫu",
  },
  {
    id: "demo-5",
    name: "Sản phẩm Game hợp lệ",
    category: "Tài khoản Game",
    description: "Sản phẩm minh họa, chỉ dành cho giao dịch được phép.",
    price: 249000,
    status: "Sản phẩm mẫu",
  },
  {
    id: "demo-6",
    name: "Gói tiện ích mạng xã hội",
    category: "Mạng xã hội",
    description: "Dịch vụ minh họa dành cho nền tảng trực tuyến.",
    price: 129000,
    status: "Sản phẩm mẫu",
  },
];

const categoryList = [
  "Tất cả",
  "Tài khoản Game",
  "Dịch vụ MMO",
  "Mạng xã hội",
  "Phần mềm số",
  "Dịch vụ Mobile",
];

export default function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tất cả");
  const [sort, setSort] = useState("newest");

  const filteredProducts = useMemo(() => {
    let result = sampleProducts.filter((product) => {
      const keyword = search.trim().toLowerCase();

      const matchesSearch =
        product.name.toLowerCase().includes(keyword) ||
        product.category.toLowerCase().includes(keyword) ||
        product.description.toLowerCase().includes(keyword);

      const matchesCategory =
        category === "Tất cả" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sort === "low") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [search, category, sort]);

  const clearFilters = () => {
    setSearch("");
    setCategory("Tất cả");
    setSort("newest");
  };

  return (
    <>
      <style>{`
        .hh-shop {
          max-width: 1400px;
          min-height: 70vh;
          margin: auto;
          padding: 55px 5%;
        }

        .hh-shop-heading {
          text-align: center;
          margin-bottom: 38px;
        }

        .hh-shop-heading span {
          color: #54d6ff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .hh-shop-heading h1 {
          color: white;
          font-size: clamp(27px, 4vw, 40px);
          margin: 13px 0;
        }

        .hh-shop-heading p {
          color: #8d9cba;
          font-size: 13px;
          line-height: 1.8;
        }

        .hh-shop-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
          flex-wrap: wrap;
        }

        .hh-search-box {
          flex: 1;
          min-width: 220px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 15px;
          min-height: 48px;
          background: rgba(15, 29, 63, 0.8);
          border: 1px solid rgba(85, 150, 255, 0.23);
          border-radius: 11px;
          color: #54d6ff;
        }

        .hh-search-box input {
          width: 100%;
          background: transparent;
          outline: none;
          border: none;
          color: white;
          font-size: 13px;
        }

        .hh-search-box input::placeholder {
          color: #7486a7;
        }

        .hh-sort-select {
          min-height: 48px;
          padding: 0 15px;
          color: #c9dcf5;
          background: #101d3c;
          border: 1px solid rgba(85, 150, 255, 0.23);
          border-radius: 11px;
          outline: none;
        }

        .hh-category-filters {
          display: flex;
          gap: 9px;
          overflow-x: auto;
          padding: 5px 0 17px;
          margin-bottom: 20px;
        }

        .hh-category-filter {
          flex-shrink: 0;
          padding: 10px 15px;
          color: #9eacc8;
          background: rgba(17, 32, 68, 0.8);
          border: 1px solid rgba(80, 145, 255, 0.2);
          border-radius: 9px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 700;
          transition: 0.2s;
        }

        .hh-category-filter.active,
        .hh-category-filter:hover {
          color: white;
          background: linear-gradient(110deg, #176bff, #803cff);
          border-color: transparent;
        }

        .hh-shop-result {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 20px;
          color: #91a2c0;
          font-size: 12px;
        }

        .hh-clear-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #65d5ff;
          background: transparent;
          border: 0;
          cursor: pointer;
          font-size: 12px;
        }

        .hh-shop-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .hh-shop-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 65px 20px;
          color: #91a2c0;
          background: rgba(15, 29, 63, 0.5);
          border: 1px dashed rgba(85, 150, 255, 0.3);
          border-radius: 15px;
        }

        .hh-shop-empty svg {
          color: #54d6ff;
          margin-bottom: 12px;
        }

        @media (max-width: 850px) {
          .hh-shop-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .hh-shop {
            padding: 40px 17px;
          }

          .hh-shop-grid {
            grid-template-columns: 1fr;
          }

          .hh-shop-toolbar {
            flex-direction: column;
            align-items: stretch;
          }

          .hh-sort-select {
            width: 100%;
          }
        }
      `}</style>

      <main className="hh-shop">
        <div className="hh-shop-heading">
          <span>HONG HAI DIGITAL MARKETPLACE</span>
          <h1>Cửa hàng sản phẩm số</h1>
          <p>
            Tìm kiếm và khám phá các sản phẩm, dịch vụ
            kỹ thuật số trên HỒNG HẢI MMO.
          </p>
        </div>

        <div className="hh-shop-toolbar">
          <div className="hh-search-box">
            <Search size={19} />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Bạn đang tìm sản phẩm gì?"
            />
          </div>

          <select
            className="hh-sort-select"
            value={sort}
            onChange={(event) => setSort(event.target.value)}
          >
            <option value="newest">Mới nhất</option>
            <option value="low">Giá thấp đến cao</option>
            <option value="high">Giá cao đến thấp</option>
          </select>
        </div>

        <div className="hh-category-filters">
          {categoryList.map((item) => (
            <button
              key={item}
              className={`hh-category-filter ${
                category === item ? "active" : ""
              }`}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="hh-shop-result">
          <span>
            <ShoppingBag
              size={15}
              style={{ verticalAlign: "middle", marginRight: 6 }}
            />
            Tìm thấy {filteredProducts.length} sản phẩm mẫu
          </span>

          <button className="hh-clear-btn" onClick={clearFilters}>
            <X size={14} />
            Xóa bộ lọc
          </button>
        </div>

        <div className="hh-shop-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="hh-shop-empty">
              <ShoppingBag size={38} />
              <h3>Không tìm thấy sản phẩm</h3>
              <p>Thử từ khóa khác hoặc thay đổi danh mục.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
