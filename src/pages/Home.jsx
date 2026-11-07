
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Zap,
  Headset,
  ArrowRight,
  Gamepad2,
  Users,
  Globe,
  Smartphone,
  Sparkles,
} from "lucide-react";

import Planet3D from "../components/Planet3D";
import ProductCard from "../components/ProductCard";

const categories = [
  {
    name: "Tài khoản Game",
    description: "Các sản phẩm game được phép chuyển nhượng",
    icon: Gamepad2,
    color: "#8b5cff",
  },
  {
    name: "Dịch vụ MMO",
    description: "Dịch vụ kỹ thuật số và công cụ trực tuyến",
    icon: Zap,
    color: "#35cfff",
  },
  {
    name: "Mạng xã hội",
    description: "Dịch vụ mạng xã hội hợp lệ",
    icon: Users,
    color: "#ff65ae",
  },
  {
    name: "Phần mềm số",
    description: "Sản phẩm và tiện ích kỹ thuật số",
    icon: Globe,
    color: "#5ce6a7",
  },
  {
    name: "Dịch vụ Mobile",
    description: "Các tiện ích dành cho thiết bị di động",
    icon: Smartphone,
    color: "#ffb65c",
  },
];

const featuredProducts = [
  {
    id: "demo-1",
    name: "Gói dịch vụ kỹ thuật số mẫu",
    category: "Dịch vụ số",
    description: "Sản phẩm minh họa. Thông tin và giá sẽ được cập nhật.",
    price: 99000,
    status: "Sản phẩm mẫu",
  },
  {
    id: "demo-2",
    name: "Gói tiện ích trực tuyến",
    category: "Tiện ích",
    description: "Sản phẩm minh họa dành cho cửa hàng.",
    price: 149000,
    status: "Sản phẩm mẫu",
  },
  {
    id: "demo-3",
    name: "Gói hỗ trợ kỹ thuật số",
    category: "Hỗ trợ",
    description: "Dịch vụ minh họa, chưa mở bán.",
    price: 199000,
    status: "Sản phẩm mẫu",
  },
];

export default function Home() {
  return (
    <>
      <style>{`
        .hh-home {
          width: 100%;
          overflow: hidden;
        }

        .hh-hero {
          max-width: 1400px;
          min-height: 570px;
          margin: auto;
          padding: 70px 5%;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 35px;
        }

        .hh-hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 14px;
          color: #63d7ff;
          background: rgba(35, 120, 255, 0.12);
          border: 1px solid rgba(70, 160, 255, 0.3);
          border-radius: 30px;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 25px;
        }

        .hh-hero h1 {
          color: white;
          font-family: Orbitron, sans-serif;
          font-size: clamp(32px, 5vw, 59px);
          line-height: 1.2;
          margin: 0 0 22px;
          font-weight: 900;
        }

        .hh-hero h1 span {
          background: linear-gradient(100deg, #42d8ff, #8c6bff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hh-hero-description {
          max-width: 550px;
          color: #a0aecb;
          font-size: 15px;
          line-height: 1.9;
          margin-bottom: 30px;
        }

        .hh-hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
        }

        .hh-hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 14px 21px;
          border-radius: 11px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          transition: 0.25s;
        }

        .hh-hero-primary {
          color: white;
          background: linear-gradient(110deg, #176bff, #933cff);
          box-shadow: 0 8px 30px rgba(70, 90, 255, 0.3);
        }

        .hh-hero-secondary {
          color: #b9dfff;
          border: 1px solid rgba(80, 170, 255, 0.35);
          background: rgba(30, 70, 140, 0.15);
        }

        .hh-hero-btn:hover {
          transform: translateY(-4px);
          filter: brightness(1.15);
        }

        .hh-hero-visual {
          width: 100%;
          min-height: 390px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .hh-section {
          max-width: 1400px;
          margin: auto;
          padding: 55px 5%;
        }

        .hh-section-heading {
          text-align: center;
          margin-bottom: 35px;
        }

        .hh-section-heading span {
          color: #56d6ff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .hh-section-heading h2 {
          color: white;
          font-size: clamp(23px, 4vw, 34px);
          margin: 12px 0;
          font-weight: 900;
        }

        .hh-section-heading p {
          color: #8798b8;
          font-size: 13px;
          line-height: 1.8;
        }

        .hh-category-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        .hh-category-card {
          min-height: 170px;
          padding: 23px 17px;
          border-radius: 15px;
          text-align: center;
          text-decoration: none;
          background: linear-gradient(
            145deg,
            rgba(19, 35, 75, 0.9),
            rgba(8, 15, 37, 0.95)
          );
          border: 1px solid rgba(85, 140, 255, 0.17);
          transition: 0.3s;
        }

        .hh-category-card:hover {
          transform: translateY(-6px);
          border-color: rgba(75, 200, 255, 0.65);
          box-shadow: 0 12px 30px rgba(30, 100, 255, 0.15);
        }

        .hh-category-icon {
          width: 52px;
          height: 52px;
          margin: 0 auto 15px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          background: rgba(70, 120, 255, 0.13);
        }

        .hh-category-card h3 {
          color: white;
          font-size: 13px;
          margin: 0 0 9px;
        }

        .hh-category-card p {
          color: #8393b2;
          font-size: 11px;
          line-height: 1.6;
          margin: 0;
        }

        .hh-product-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .hh-benefits {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .hh-benefit {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 22px;
          border-radius: 14px;
          background: rgba(18, 35, 75, 0.65);
          border: 1px solid rgba(85, 140, 255, 0.17);
        }

        .hh-benefit-icon {
          color: #5bd8ff;
          flex-shrink: 0;
        }

        .hh-benefit h3 {
          color: white;
          font-size: 14px;
          margin: 0 0 8px;
        }

        .hh-benefit p {
          color: #8e9db9;
          font-size: 12px;
          line-height: 1.7;
          margin: 0;
        }

        .hh-home-cta {
          margin: 35px 5% 70px;
          padding: 45px 25px;
          border-radius: 20px;
          text-align: center;
          background: linear-gradient(
            110deg,
            rgba(20, 75, 180, 0.3),
            rgba(100, 40, 180, 0.25)
          );
          border: 1px solid rgba(80, 150, 255, 0.25);
        }

        .hh-home-cta h2 {
          color: white;
          font-size: 25px;
          margin: 0 0 12px;
        }

        .hh-home-cta p {
          color: #a2b2cf;
          font-size: 13px;
          line-height: 1.8;
          margin-bottom: 22px;
        }

        @media (max-width: 900px) {
          .hh-category-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .hh-hero {
            min-height: auto;
            grid-template-columns: 1fr;
            padding-top: 55px;
            text-align: center;
          }

          .hh-hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .hh-hero-buttons {
            justify-content: center;
          }

          .hh-hero-visual {
            min-height: 300px;
          }
        }

        @media (max-width: 650px) {
          .hh-category-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .hh-product-grid {
            grid-template-columns: 1fr;
          }

          .hh-benefits {
            grid-template-columns: 1fr;
          }

          .hh-section {
            padding: 40px 18px;
          }
        }
      `}</style>

      <main className="hh-home">
        <section className="hh-hero">
          <div>
            <div className="hh-hero-tag">
              <Sparkles size={15} />
              HỆ SINH THÁI DỊCH VỤ SỐ
            </div>

            <h1>
              KHÁM PHÁ
              <br />
              THẾ GIỚI <span>MMO</span>
            </h1>

            <p className="hh-hero-description">
              Chào mừng bạn đến với HỒNG HẢI MMO —
              nền tảng giới thiệu và giao dịch sản phẩm số,
              dịch vụ trực tuyến cùng các tiện ích công nghệ.
            </p>

            <div className="hh-hero-buttons">
              <Link to="/shop" className="hh-hero-btn hh-hero-primary">
                Khám phá cửa hàng
                <ArrowRight size={17} />
              </Link>

              <Link to="/register" className="hh-hero-btn hh-hero-secondary">
                Tạo tài khoản
              </Link>
            </div>
          </div>

          <div className="hh-hero-visual">
            <Planet3D />
          </div>
        </section>

        <section className="hh-section">
          <div className="hh-section-heading">
            <span>OUR CATEGORIES</span>
            <h2>Danh mục dịch vụ</h2>
            <p>Khám phá các nhóm sản phẩm và dịch vụ kỹ thuật số.</p>
          </div>

          <div className="hh-category-grid">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  to="/shop"
                  className="hh-category-card"
                  key={category.name}
                >
                  <div className="hh-category-icon">
                    <Icon size={27} color={category.color} />
                  </div>

                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="hh-section">
          <div className="hh-section-heading">
            <span>FEATURED PRODUCTS</span>
            <h2>Sản phẩm nổi bật</h2>
            <p>
              Các sản phẩm mẫu để hoàn thiện giao diện.
              Chưa phải hàng hóa đang được mở bán.
            </p>
          </div>

          <div className="hh-product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 30 }}>
            <Link to="/shop" className="hh-hero-btn hh-hero-secondary">
              Xem toàn bộ cửa hàng
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <section className="hh-section">
          <div className="hh-section-heading">
            <span>WHY HONG HAI MMO</span>
            <h2>Trải nghiệm giao dịch minh bạch</h2>
            <p>
              Ưu tiên bảo mật, thông tin rõ ràng và hỗ trợ khách hàng.
            </p>
          </div>

          <div className="hh-benefits">
            <div className="hh-benefit">
              <ShieldCheck size={30} className="hh-benefit-icon" />
              <div>
                <h3>Minh bạch thông tin</h3>
                <p>
                  Hiển thị rõ mô tả, giá bán và điều kiện
                  của từng sản phẩm.
                </p>
              </div>
            </div>

            <div className="hh-benefit">
              <Zap size={30} className="hh-benefit-icon" />
              <div>
                <h3>Trải nghiệm hiện đại</h3>
                <p>
                  Giao diện tối ưu cho máy tính và điện thoại.
                </p>
              </div>
            </div>

            <div className="hh-benefit">
              <Headset size={30} className="hh-benefit-icon" />
              <div>
                <h3>Hỗ trợ khách hàng</h3>
                <p>
                  Có khu vực tiếp nhận câu hỏi và xử lý yêu cầu
                  khi hệ thống được cấu hình.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="hh-home-cta">
          <h2>Sẵn sàng khám phá HỒNG HẢI MMO?</h2>
          <p>
            Tạo tài khoản để trải nghiệm các tính năng của nền tảng.
          </p>

          <Link to="/register" className="hh-hero-btn hh-hero-primary">
            Bắt đầu ngay
            <ArrowRight size={17} />
          </Link>
        </section>
      </main>
    </>
  );
}
