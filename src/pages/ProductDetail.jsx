
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ShoppingCart,
  ShieldCheck,
  Package,
  ArrowLeft,
  CheckCircle,
  Info,
} from "lucide-react";

const products = [
  {
    id: "demo-1",
    name: "Gói dịch vụ kỹ thuật số mẫu",
    category: "Dịch vụ MMO",
    description: "Sản phẩm minh họa cho cửa hàng HỒNG HẢI MMO.",
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

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((item) => item.id === id);

  const formatPrice = (value) =>
    Number(value).toLocaleString("vi-VN") + "đ";

  if (!product) {
    return (
      <main style={{
        minHeight: "65vh",
        display: "grid",
        placeItems: "center",
        padding: 25,
        color: "white",
        textAlign: "center",
      }}>
        <div>
          <h2>Không tìm thấy sản phẩm</h2>
          <p style={{ color: "#94a3b8" }}>
            Sản phẩm có thể đã bị xóa hoặc chưa được đăng.
          </p>
          <Link to="/shop" style={{ color: "#55d7ff" }}>
            Quay lại cửa hàng
          </Link>
        </div>
      </main>
    );
  }

  const total = product.price * quantity;

  return (
    <>
      <style>{`
        .hh-detail {
          max-width: 1150px;
          margin: auto;
          padding: 50px 5%;
          color: white;
          min-height: 70vh;
        }

        .hh-detail-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #66d7ff;
          text-decoration: none;
          font-size: 13px;
          margin-bottom: 30px;
        }

        .hh-detail-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .hh-detail-image {
          min-height: 390px;
          display: grid;
          place-items: center;
          border-radius: 18px;
          background: linear-gradient(135deg, #142653, #27134c);
          border: 1px solid rgba(90, 150, 255, 0.25);
        }

        .hh-detail-image svg {
          color: #63d5ff;
          filter: drop-shadow(0 0 25px rgba(65, 170, 255, 0.45));
        }

        .hh-detail-category {
          display: inline-block;
          padding: 7px 11px;
          border-radius: 7px;
          color: #65d8ff;
          background: rgba(45, 120, 255, 0.14);
          font-size: 12px;
          margin-bottom: 17px;
        }

        .hh-detail-info h1 {
          font-size: clamp(24px, 4vw, 35px);
          line-height: 1.35;
          margin: 0 0 15px;
        }

        .hh-detail-description {
          color: #9aaac7;
          font-size: 14px;
          line-height: 1.9;
          margin-bottom: 25px;
        }

        .hh-detail-price {
          color: #59d9ff;
          font-size: 29px;
          font-weight: 900;
          margin-bottom: 20px;
        }

        .hh-detail-status {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #64e6ae;
          font-size: 13px;
          margin-bottom: 22px;
        }

        .hh-detail-quantity {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 23px;
          color: #aab9d4;
          font-size: 13px;
        }

        .hh-detail-quantity input {
          width: 85px;
          padding: 11px;
          color: white;
          background: #101e40;
          border: 1px solid rgba(80, 150, 255, 0.3);
          border-radius: 8px;
          outline: none;
        }

        .hh-detail-total {
          display: flex;
          justify-content: space-between;
          padding: 17px 0;
          margin-bottom: 18px;
          border-top: 1px solid rgba(130, 160, 210, 0.18);
          color: #a5b4d0;
          font-size: 14px;
        }

        .hh-detail-total strong {
          color: #62d9ff;
          font-size: 18px;
        }

        .hh-detail-buy {
          width: 100%;
          min-height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: white;
          background: linear-gradient(110deg, #176bff, #873cff);
          border: 0;
          border-radius: 11px;
          font-size: 14px;
          font-weight: 800;
          text-decoration: none;
          cursor: pointer;
        }

        .hh-detail-notice {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 20px;
          padding: 14px;
          border-radius: 10px;
          background: rgba(45, 120, 255, 0.09);
          color: #a4b5d2;
          font-size: 12px;
          line-height: 1.7;
        }

        @media (max-width: 750px) {
          .hh-detail-layout {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .hh-detail-image {
            min-height: 260px;
          }
        }
      `}</style>

      <main className="hh-detail">
        <Link to="/shop" className="hh-detail-back">
          <ArrowLeft size={16} />
          Quay lại cửa hàng
        </Link>

        <div className="hh-detail-layout">
          <div className="hh-detail-image">
            <Package size={105} />
          </div>

          <div className="hh-detail-info">
            <span className="hh-detail-category">
              {product.category}
            </span>

            <h1>{product.name}</h1>

            <p className="hh-detail-description">
              {product.description}
            </p>

            <div className="hh-detail-price">
              {formatPrice(product.price)}
            </div>

            <div className="hh-detail-status">
              <CheckCircle size={17} />
              {product.status}
            </div>

            <div className="hh-detail-quantity">
              <label htmlFor="quantity">Số lượng:</label>

              <input
                id="quantity"
                type="number"
                min="1"
                max="99"
                value={quantity}
                onChange={(event) => {
                  const value = Number(event.target.value);
                  setQuantity(
                    Math.min(99, Math.max(1, value || 1))
                  );
                }}
              />
            </div>

            <div className="hh-detail-total">
              <span>Tổng tiền tạm tính</span>
              <strong>{formatPrice(total)}</strong>
            </div>

            <Link to="/login" className="hh-detail-buy">
              <ShoppingCart size={18} />
              Đăng nhập để đặt hàng
            </Link>

            <div className="hh-detail-notice">
              <Info size={18} />
              Đây là dữ liệu minh họa. Sản phẩm chưa được mở bán
              và chưa phát sinh giao dịch thật.
            </div>

            <div className="hh-detail-notice">
              <ShieldCheck size={18} />
              Chỉ giao dịch các sản phẩm số hợp pháp và những
              tài khoản được phép chuyển nhượng theo điều khoản
              của nền tảng liên quan.
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
