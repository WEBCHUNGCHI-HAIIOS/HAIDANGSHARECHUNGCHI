
import { useState } from "react";
import {
  Package,
  Search,
  Clock,
  CheckCircle,
  XCircle,
  ShoppingBag,
  RefreshCw,
} from "lucide-react";

export default function Orders() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Dữ liệu mẫu. Đơn hàng thật sẽ lấy từ Supabase.
  const orders = [];

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order.id
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" || order.status === filter;

    return matchesSearch && matchesFilter;
  });

  const statusInfo = {
    pending: {
      label: "Chờ xử lý",
      icon: Clock,
      color: "text-yellow-400",
    },
    completed: {
      label: "Hoàn thành",
      icon: CheckCircle,
      color: "text-emerald-400",
    },
    cancelled: {
      label: "Đã hủy",
      icon: XCircle,
      color: "text-red-400",
    },
  };

  return (
    <main className="min-h-screen px-4 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-semibold tracking-widest text-cyan-400">
            HỒNG HẢI MMO
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Đơn hàng của tôi
          </h1>

          <p className="mt-2 text-slate-400">
            Theo dõi và quản lý các đơn hàng của bạn.
          </p>
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
            <Package className="mb-3 text-cyan-400" size={25} />
            <p className="text-sm text-slate-400">Tổng đơn hàng</p>
            <p className="mt-1 text-2xl font-bold">0</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
            <Clock className="mb-3 text-yellow-400" size={25} />
            <p className="text-sm text-slate-400">Đang xử lý</p>
            <p className="mt-1 text-2xl font-bold">0</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
            <CheckCircle className="mb-3 text-emerald-400" size={25} />
            <p className="text-sm text-slate-400">Đã hoàn thành</p>
            <p className="mt-1 text-2xl font-bold">0</p>
          </div>
        </div>

        <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row">
            <h2 className="text-xl font-bold">Danh sách đơn hàng</h2>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-3">
                <Search size={18} className="text-slate-400" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Tìm mã đơn..."
                  className="w-full bg-transparent py-3 text-sm text-white outline-none"
                />
              </div>

              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-sm text-white outline-none"
              >
                <option value="all">Tất cả đơn</option>
                <option value="pending">Chờ xử lý</option>
                <option value="completed">Hoàn thành</option>
                <option value="cancelled">Đã hủy</option>
              </select>
            </div>
          </div>

          {filteredOrders.length === 0 ? (
            <div className="py-16 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-400/10">
                <ShoppingBag size={35} className="text-cyan-400" />
              </div>

              <h3 className="text-xl font-bold">
                Chưa có đơn hàng
              </h3>

              <p className="mx-auto mt-2 max-w-sm text-sm text-slate-400">
                Các đơn hàng bạn đặt sẽ xuất hiện tại đây sau khi hệ thống
                được kết nối dữ liệu thật.
              </p>

              <a
                href="/shop"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-400"
              >
                <RefreshCw size={17} />
                Khám phá cửa hàng
              </a>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredOrders.map((order) => {
                const status = statusInfo[order.status];
                const StatusIcon = status.icon;

                return (
                  <div
                    key={order.id}
                    className="flex flex-col justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4 sm:flex-row sm:items-center"
                  >
                    <div>
                      <p className="font-bold">{order.id}</p>
                      <p className="mt-1 text-sm text-slate-400">
                        {order.product}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <span className="font-semibold">
                        {order.total.toLocaleString("vi-VN")} VNĐ
                      </span>

                      <span className={`flex items-center gap-2 text-sm ${status.color}`}>
                        <StatusIcon size={17} />
                        {status.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
