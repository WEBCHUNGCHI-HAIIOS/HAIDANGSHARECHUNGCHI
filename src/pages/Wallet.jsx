
import { useState } from "react";
import {
  Wallet as WalletIcon,
  PlusCircle,
  ArrowDownCircle,
  ArrowUpCircle,
  History,
  ShieldCheck,
} from "lucide-react";

const transactions = [
  {
    id: 1,
    title: "Chưa có giao dịch",
    date: "Giao dịch sẽ xuất hiện tại đây",
    amount: 0,
    type: "info",
  },
];

export default function Wallet() {
  const [amount, setAmount] = useState("");

  const handleDeposit = (e) => {
    e.preventDefault();

    const value = Number(amount);

    if (!Number.isFinite(value) || value < 10000) {
      alert("Số tiền nạp tối thiểu là 10.000 VNĐ.");
      return;
    }

    alert(
      "Yêu cầu nạp tiền đã được ghi nhận ở giao diện demo. Hệ thống thanh toán sẽ được tích hợp ở bước sau."
    );
  };

  return (
    <main className="min-h-screen px-4 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-semibold tracking-widest text-cyan-400">
            HỒNG HẢI MMO
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Ví tài khoản
          </h1>

          <p className="mt-2 text-slate-400">
            Quản lý số dư và theo dõi giao dịch của bạn.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-blue-950 to-slate-950 p-7 shadow-xl shadow-cyan-950/20">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Số dư hiện tại</span>
              <WalletIcon className="text-cyan-400" size={28} />
            </div>

            <h2 className="mt-6 text-4xl font-bold text-white">
              0 <span className="text-xl text-cyan-400">VNĐ</span>
            </h2>

            <p className="mt-3 text-sm text-slate-400">
              Số dư sẽ hiển thị sau khi đăng nhập và kết nối dữ liệu thật.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={() =>
                  document.getElementById("deposit-form")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-bold text-slate-950 hover:bg-cyan-400"
              >
                <PlusCircle size={18} />
                Nạp tiền
              </button>

              <button
                disabled
                className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-slate-500"
              >
                <ArrowUpCircle size={18} />
                Rút tiền
              </button>
            </div>
          </section>

          <section
            id="deposit-form"
            className="rounded-3xl border border-slate-800 bg-slate-950/80 p-7"
          >
            <div className="mb-5 flex items-center gap-3">
              <ArrowDownCircle className="text-emerald-400" size={25} />
              <h2 className="text-xl font-bold">Tạo yêu cầu nạp tiền</h2>
            </div>

            <form onSubmit={handleDeposit}>
              <label className="mb-2 block text-sm text-slate-300">
                Số tiền muốn nạp (VNĐ)
              </label>

              <input
                type="number"
                min="10000"
                step="1000"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Ví dụ: 100000"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-4 text-white outline-none focus:border-cyan-400"
              />

              <div className="mt-4 grid grid-cols-3 gap-2">
                {[50000, 100000, 200000].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setAmount(String(value))}
                    className="rounded-lg border border-slate-700 px-2 py-3 text-sm text-slate-300 hover:border-cyan-400 hover:text-cyan-300"
                  >
                    {value.toLocaleString("vi-VN")}
                  </button>
                ))}
              </div>

              <button
                type="submit"
                className="mt-5 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-bold text-white hover:brightness-110"
              >
                TẠO YÊU CẦU NẠP
              </button>
            </form>

            <div className="mt-5 flex items-start gap-2 text-xs text-slate-500">
              <ShieldCheck size={16} className="shrink-0 text-emerald-400" />
              Không chuyển tiền vào tài khoản cá nhân khi chưa có hướng dẫn
                  thanh toán chính thức từ hệ thống.
            </div>
          </section>
        </div>

        <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
          <div className="mb-5 flex items-center gap-3">
            <History size={23} className="text-cyan-400" />
            <h2 className="text-xl font-bold">Lịch sử giao dịch</h2>
          </div>

          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4"
            >
              <div>
                <p className="font-semibold">{transaction.title}</p>
                <p className="mt-1 text-sm text-slate-500">
                  {transaction.date}
                </p>
              </div>

              <span className="text-sm text-slate-400">
                {transaction.amount.toLocaleString("vi-VN")} VNĐ
              </span>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
