
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  ShoppingBag,
  Wallet,
  ClipboardList,
  User,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Trang chủ", path: "/", icon: Home },
    { name: "Cửa hàng", path: "/shop", icon: ShoppingBag },
    { name: "Ví của tôi", path: "/wallet", icon: Wallet },
    { name: "Đơn hàng", path: "/orders", icon: ClipboardList },
    { name: "Quản trị", path: "/admin", icon: ShieldCheck },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style>{`
        .hh-navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          background: rgba(5, 10, 28, 0.88);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(80, 150, 255, 0.18);
        }

        .hh-nav-inner {
          max-width: 1400px;
          min-height: 76px;
          margin: auto;
          padding: 0 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .hh-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: white;
          font-family: Orbitron, sans-serif;
          font-weight: 900;
          font-size: 19px;
          white-space: nowrap;
        }

        .hh-logo-icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          color: white;
          background: linear-gradient(135deg, #176bff, #a13bff);
          box-shadow: 0 0 22px rgba(55, 110, 255, 0.45);
        }

        .hh-logo span {
          color: #50cfff;
        }

        .hh-nav-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .hh-nav-link {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 11px 13px;
          color: #aebbd4;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          border-radius: 10px;
          transition: 0.25s;
        }

        .hh-nav-link:hover,
        .hh-nav-link.active {
          color: #61d8ff;
          background: rgba(45, 125, 255, 0.13);
        }

        .hh-nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .hh-auth-btn {
          padding: 11px 17px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          color: white;
          border: 1px solid rgba(90, 150, 255, 0.35);
          transition: 0.25s;
        }

        .hh-auth-btn:hover {
          border-color: #50cfff;
          color: #50cfff;
        }

        .hh-register-btn {
          background: linear-gradient(110deg, #176bff, #923cff);
          border: none;
          box-shadow: 0 0 18px rgba(75, 90, 255, 0.3);
        }

        .hh-register-btn:hover {
          color: white;
          transform: translateY(-2px);
        }

        .hh-menu-toggle {
          display: none;
          border: 0;
          background: transparent;
          color: white;
          cursor: pointer;
        }

        @media (max-width: 1000px) {
          .hh-nav-inner {
            min-height: 68px;
          }

          .hh-nav-links {
            gap: 0;
          }

          .hh-nav-link {
            padding: 10px 8px;
            font-size: 12px;
          }
        }

        @media (max-width: 760px) {
          .hh-nav-inner {
            padding: 0 18px;
          }

          .hh-menu-toggle {
            display: block;
          }

          .hh-nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            padding: 15px 18px;
            background: rgba(5, 10, 28, 0.98);
            border-bottom: 1px solid rgba(80, 150, 255, 0.2);
            flex-direction: column;
            align-items: stretch;
          }

          .hh-nav-links.open {
            display: flex;
          }

          .hh-nav-link {
            padding: 14px;
            font-size: 14px;
          }

          .hh-nav-actions {
            display: none;
          }

          .hh-logo {
            font-size: 15px;
          }

          .hh-logo-icon {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>

      <header className="hh-navbar">
        <div className="hh-nav-inner">
          <Link to="/" className="hh-logo" onClick={closeMenu}>
            <div className="hh-logo-icon">
              <Zap size={23} />
            </div>
            HỒNG HẢI <span>MMO</span>
          </Link>

          <nav className={`hh-nav-links ${menuOpen ? "open" : ""}`}>
            {links.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `hh-nav-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  <Icon size={16} />
                  {item.name}
                </NavLink>
              );
            })}
          </nav>

          <div className="hh-nav-actions">
            <Link to="/login" className="hh-auth-btn">
              Đăng nhập
            </Link>

            <Link
              to="/register"
              className="hh-auth-btn hh-register-btn"
            >
              Đăng ký
            </Link>
          </div>

          <button
            className="hh-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Mở menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>
    </>
  );
}
