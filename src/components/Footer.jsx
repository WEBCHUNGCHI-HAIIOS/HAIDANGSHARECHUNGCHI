
import { Link } from "react-router-dom";
import {
  Zap,
  ShieldCheck,
  Headset,
  Facebook,
  MessageCircle,
  Mail,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <style>{`
        .hh-footer {
          position: relative;
          margin-top: 80px;
          padding: 65px 5% 25px;
          background: linear-gradient(
            180deg,
            rgba(10, 20, 48, 0.7),
            #050918
          );
          border-top: 1px solid rgba(75, 150, 255, 0.2);
          overflow: hidden;
        }

        .hh-footer::before {
          content: "";
          position: absolute;
          width: 450px;
          height: 250px;
          top: -180px;
          left: 50%;
          transform: translateX(-50%);
          background: #285cff;
          filter: blur(120px);
          opacity: 0.16;
          pointer-events: none;
        }

        .hh-footer-grid {
          position: relative;
          max-width: 1300px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 40px;
        }

        .hh-footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: Orbitron, sans-serif;
          font-size: 20px;
          font-weight: 900;
          color: white;
          margin-bottom: 20px;
        }

        .hh-footer-logo span {
          color: #51cfff;
        }

        .hh-footer-icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: linear-gradient(135deg, #176bff, #963bff);
        }

        .hh-footer-description {
          color: #8e9bb8;
          font-size: 13px;
          line-height: 1.9;
          max-width: 330px;
        }

        .hh-footer h3 {
          color: white;
          font-size: 15px;
          margin: 5px 0 22px;
        }

        .hh-footer-links {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .hh-footer-links a {
          width: fit-content;
          color: #8e9bb8;
          text-decoration: none;
          font-size: 13px;
          transition: 0.2s;
        }

        .hh-footer-links a:hover {
          color: #51cfff;
          transform: translateX(4px);
        }

        .hh-footer-contact {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          color: #9cabc8;
          font-size: 13px;
        }

        .hh-footer-contact svg {
          color: #51cfff;
          flex-shrink: 0;
        }

        .hh-footer-features {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }

        .hh-footer-feature {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px 12px;
          border-radius: 9px;
          border: 1px solid rgba(80, 150, 255, 0.2);
          color: #9bb3d8;
          font-size: 11px;
        }

        .hh-footer-feature svg {
          color: #51cfff;
        }

        .hh-footer-bottom {
          position: relative;
          max-width: 1300px;
          margin: 45px auto 0;
          padding-top: 23px;
          border-top: 1px solid rgba(130, 160, 210, 0.13);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          color: #687794;
          font-size: 12px;
        }

        .hh-back-top {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #51cfff;
          background: transparent;
          border: 1px solid rgba(80, 150, 255, 0.3);
          border-radius: 8px;
          padding: 9px 12px;
          cursor: pointer;
        }

        @media (max-width: 850px) {
          .hh-footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 35px 20px;
          }
        }

        @media (max-width: 520px) {
          .hh-footer {
            padding: 45px 20px 20px;
          }

          .hh-footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .hh-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <footer className="hh-footer">
        <div className="hh-footer-grid">
          <div>
            <div className="hh-footer-logo">
              <div className="hh-footer-icon">
                <Zap size={23} />
              </div>
              HỒNG HẢI <span>MMO</span>
            </div>

            <p className="hh-footer-description">
              Nền tảng giao dịch sản phẩm số và dịch vụ MMO.
              Hướng tới trải nghiệm hiện đại, minh bạch và
              hỗ trợ khách hàng tận tâm.
            </p>

            <div className="hh-footer-features">
              <div className="hh-footer-feature">
                <ShieldCheck size={15} />
                Giao dịch minh bạch
              </div>

              <div className="hh-footer-feature">
                <Headset size={15} />
                Hỗ trợ khách hàng
              </div>
            </div>
          </div>

          <div>
            <h3>Khám phá</h3>
            <div className="hh-footer-links">
              <Link to="/">Trang chủ</Link>
              <Link to="/shop">Cửa hàng</Link>
              <Link to="/wallet">Ví tài khoản</Link>
              <Link to="/orders">Đơn hàng</Link>
            </div>
          </div>

          <div>
            <h3>Thông tin</h3>
            <div className="hh-footer-links">
              <Link to="/terms">Điều khoản dịch vụ</Link>
              <Link to="/privacy">Chính sách bảo mật</Link>
              <Link to="/refund">Chính sách hoàn tiền</Link>
              <Link to="/support">Trung tâm hỗ trợ</Link>
            </div>
          </div>

          <div>
            <h3>Liên hệ hỗ trợ</h3>

            <div className="hh-footer-contact">
              <MessageCircle size={17} />
              <span>Trung tâm hỗ trợ khách hàng</span>
            </div>

            <div className="hh-footer-contact">
              <Mail size={17} />
              <span>Email hỗ trợ sẽ được cập nhật</span>
            </div>

            <div className="hh-footer-contact">
              <Facebook size={17} />
              <span>Kênh mạng xã hội sẽ được cập nhật</span>
            </div>
          </div>
        </div>

        <div className="hh-footer-bottom">
          <span>
            © {new Date().getFullYear()} HỒNG HẢI MMO.
            Bản quyền thuộc về chủ sở hữu.
          </span>

          <button className="hh-back-top" onClick={scrollToTop}>
            <ArrowUp size={15} />
            Lên đầu trang
          </button>
        </div>
      </footer>
    </>
  );
}
