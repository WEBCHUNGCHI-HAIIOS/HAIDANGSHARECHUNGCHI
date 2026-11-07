
import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Wallet,
  Plus,
  Search,
  ShieldCheck,
  Settings,
  Menu,
} from "lucide-react";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("overview");
  const [search, setSearch] = useState("");

  const menuItems = [
    { id: "overview", label: "Tổng quan", icon: LayoutDashboard },
    { id: "products", label: "Sản phẩm", icon: Package },
    { id: "orders", label: "Đơn hàng", icon: ShoppingCart },
    { id: "customers", label: "Khách hàng", icon: Users },
    { id: "wallet", label: "Giao dịch", icon: Wallet },
    { id: "settings", label: "Cài đặt", icon: Settings },
  ];

  const stats = [
    { label: "Tổng doanh thu", value: "0 VNĐ", icon: Wallet },
    { label: "Sản phẩm", value: "0", icon: Package },
    { label: "Đơn hàng", value: "0", icon: ShoppingCart },
    { label: "Khách hàng", value: "0", icon: Users },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "products":
        return (
          <section>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-bold">Quản lý sản phẩm</h2>
              <button
                onClick={() =>
                  alert("Chức năng thêm sản phẩm sẽ được kết nối cơ sở dữ liệu sau.")
                }
                className="flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 font-bold text-slate-950"
              >
                <Plus size={18} />
                Thêm sản phẩm
              </button>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center text-slate-400">
              Chưa có sản phẩm được tải từ cơ sở dữ liệu.
            </div>
          </section>
        );

      case "orders":
        return (
          <section>
            <h2 className="mb-5 text-xl font-bold">Quản lý đơn hàng</h2>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center text-slate-400">
              Chưa có đơn hàng.
            </div>
          </section>
        );

      case "customers":
        return (
          <section>
            <h2 className="mb-5 text-xl font-bold">Quản lý khách hàng</h2>
            <div className="mb-4 flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4">
              <Search size={18} className="text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Tìm khách hàng..."
                className="w-full bg-transparent py-3 text-white outline-none"
              />
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center text-slate-400">
              Chưa có dữ liệu khách hàng.
            </div>
          </section>
        );

      case "wallet":
        return (
          <section>
            <h2 className="mb-5 text-xl font-bold">Quản lý giao dịch</h2>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center text-slate-400">
              Chưa có giao dịch.
            </div>
          </section>
        );

      case "settings":
        return (
          <section>
            <h2 className="mb-5 text-xl font-bold">Cài đặt hệ thống</h2>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="font-semibold">HỒNG HẢI MMO</p>
              <p className="mt-2 text-sm text-slate-400">
                Phiên bản giao diện ban đầu. Cấu hình hệ thống sẽ được kết nối
                sau.
              </p>
            </div>
          </section>
        );

      default:
        return (
          <section>
            <h2 className="mb-5 text-xl font-bold">Tổng quan hệ thống</h2>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-sm text-slate-400">
                        {stat.label}
                      </span>
                      <Icon size={22} className="text-cyan-400" />
                    </div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="font-bold">Hoạt động gần đây</h3>
              <p className="mt-3 text-sm text-slate-400">
                Hoạt động sẽ hiển thị sau khi kết nối dữ liệu thật.
              </p>
            </div>
          </section>
        );
    }
  };

  return (
    <main className="min-h-screen px-4 py-8 text-white">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold tracking-widest text-cyan-400">
              HỒNG HẢI MMO
            </p>
            <h1 className="mt-2 text-3xl font-bold">Trang quản trị</h1>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-400">
            <ShieldCheck size={18} />
            Giao diện quản trị
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
          <aside className="h-fit rounded-2xl border border-slate-800 bg-slate-950 p-3">
            <div className="mb-3 flex items-center gap-2 px-3 py-3 text-sm font-bold text-slate-400">
              <Menu size={18} />
              MENU QUẢN TRỊ
            </div>

            <nav className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const active = activeTab === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition ${
                      active
                        ? "bg-cyan-500/15 text-cyan-300"
                        : "text-slate-400 hover:bg-slate-900 hover:text-white"
                    }`}
                  >
                    <Icon size={19} />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </aside>

          <div className="min-w-0 rounded-2xl border border-slate-800 bg-slate-950 p-5 sm:p-7">
            {renderContent()}
          </div>
        </div>
      </div>
    </main>
  );
}
