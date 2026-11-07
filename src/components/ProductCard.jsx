
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Eye,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function ProductCard({ product }) {
  if (!product) return null;

  const {
    id,
    name,
    title,
    image,
    price = 0,
    oldPrice,
    category = "Sản phẩm số",
    status = "Còn hàng",
    description = "",
  } = product;

  const productName = name || title || "Sản phẩm chưa có tên";

  const formatPrice = (value) =>
    Number(value).toLocaleString("vi-VN") + "đ";

  return (
    <>
      <style>{`
        .hh-product-card {
          position: relative;
          overflow: hidden;
          background: linear-gradient(
            145deg,
            rgba(17, 30, 65, 0.95),
            rgba(8, 14, 34, 0.98)
          );
          border: 1px solid rgba(90, 145, 255, 0.2);
          border-radius: 17px;
          transition: 0.3s ease;
        }

        .hh-product-card:hover {
          transform: translateY(-7px);
          border-color: rgba(75, 205, 255, 0.7);
          box-shadow: 0 15px 40px rgba(35, 100, 255, 0.18);
        }

        .hh-product-image {
          position: relative;
          height: 190px;
          overflow: hidden;
          background: linear-gradient(135deg, #101e48, #25134d);
        }

        .hh-product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .hh-product-card:hover .hh-product-image img {
          transform: scale(1.07);
        }

        .hh-product-placeholder {
          height: 100%;
          display: grid;
          place-items: center;
          color: #65cfff;
        }

        .hh-product-status {
          position: absolute;
          top: 12px;
          left: 12px;
          padding: 6px 10px;
          border-radius: 7px;
          background: rgba(5, 15, 35, 0.85);
          color: #65e6b0;
          border: 1px solid rgba(65, 220, 160, 0.35);
          font-size: 11px;
          font-weight: 700;
        }

        .hh-product-category {
          position: absolute;
          bottom: 12px;
          left: 12px;
          padding: 6px 10px;
          border-radius: 7px;
          background: rgba(20, 100, 255, 0.85);
          color: white;
          font-size: 11px;
        }

        .hh-product-content {
          padding: 17px;
        }

        .hh-product-name {
          color: #f2f6ff;
          font-size: 15px;
          font-weight: 800;
          margin: 0 0 9px;
          min-height: 38px;
          line-height: 1.4;
        }

        .hh-product-description {
          color: #8798b8;
          font-size: 12px;
          line-height: 1.6;
          height: 38px;
          overflow: hidden;
          margin-bottom: 15px;
        }

        .hh-product-price-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 15px;
        }

        .hh-product-price {
          color: #55d7ff;
          font-size: 18px;
          font-weight: 900;
        }

        .hh-product-old-price {
          display: block;
          color: #71809b;
          font-size: 11px;
          text-decoration: line-through;
          margin-top: 3px;
        }

        .hh-product-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 9px;
        }

        .hh-product-btn {
          min-height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          border-radius: 9px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          transition: 0.2s;
        }

        .hh-product-detail {
          color: #a9dfff;
          border: 1px solid rgba(80, 160, 255, 0.35);
          background: rgba(40, 100, 200, 0.1);
        }

        .hh-product-buy {
          color: white;
          background: linear-gradient(110deg, #176bff, #873cff);
        }

        .hh-product-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.15);
        }
      `}</style>

      <article className="hh-product-card">
        <div className="hh-product-image">
          {image ? (
            <img src={image} alt={productName} loading="lazy" />
          ) : (
            <div className="hh-product-placeholder">
              <Zap size={55} />
            </div>
          )}

          <span className="hh-product-status">{status}</span>

          <span className="hh-product-category">
            {category}
          </span>
        </div>

        <div className="hh-product-content">
          <h3 className="hh-product-name">
            {productName}
          </h3>

          <p className="hh-product-description">
            {description || "Thông tin sản phẩm sẽ được cập nhật."}
          </p>

          <div className="hh-product-price-row">
            <div>
              <div className="hh-product-price">
                {formatPrice(price)}
              </div>

              {oldPrice && (
                <span className="hh-product-old-price">
                  {formatPrice(oldPrice)}
                </span>
              )}
            </div>

            <ShieldCheck size={21} color="#55d7ff" />
          </div>

          <div className="hh-product-buttons">
            <Link
              to={`/product/${id}`}
              className="hh-product-btn hh-product-detail"
            >
              <Eye size={15} />
              Chi tiết
            </Link>

            <Link
              to={`/product/${id}`}
              className="hh-product-btn hh-product-buy"
            >
              <ShoppingCart size={15} />
              Xem hàng
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
