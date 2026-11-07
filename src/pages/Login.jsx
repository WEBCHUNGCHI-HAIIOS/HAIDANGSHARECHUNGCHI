
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn, Mail, Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Chưa kết nối Supabase: đây mới là giao diện đăng nhập.
    alert("Giao diện đã sẵn sàng. Bước tiếp theo sẽ kết nối hệ thống đăng nhập.");
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md rounded-3xl border border-cyan-400/20 bg-slate-950/80 p-7 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10">
            <LogIn size={30} className="text-cyan-300" />
          </div>

          <h1 className="text-3xl font-bold text-white">
            Đăng nhập
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Chào mừng bạn trở lại HỒNG HẢI MMO
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Email
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-4">
              <Mail size={18} className="text-cyan-400" />

              <input
                type="email"
                required
                placeholder="Nhập email của bạn"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full bg-transparent py-4 text-white outline-none placeholder:text-slate-500"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Mật khẩu
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-4">
              <Lock size={18} className="text-cyan-400" />

              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Nhập mật khẩu"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                className="w-full bg-transparent py-4 text-white outline-none placeholder:text-slate-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-slate-400"
                aria-label="Hiện hoặc ẩn mật khẩu"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-cyan-400 hover:text-cyan-300"
            >
              Quên mật khẩu?
            </Link>
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-bold text-white transition hover:brightness-110"
          >
            <LogIn size={19} />
            ĐĂNG NHẬP
          </button>
        </form>

        <div className="my-6 flex items-center gap-3 text-xs text-slate-500">
          <div className="h-px flex-1 bg-slate-800" />
          HOẶC
          <div className="h-px flex-1 bg-slate-800" />
        </div>

        <p className="text-center text-sm text-slate-400">
          Chưa có tài khoản?{" "}
          <Link
            to="/register"
            className="font-semibold text-cyan-400 hover:text-cyan-300"
          >
            Đăng ký ngay
          </Link>
        </p>

        <div className="mt-7 flex items-center justify-center gap-2 text-xs text-slate-500">
          <ShieldCheck size={15} className="text-emerald-400" />
          Bảo mật tài khoản và thông tin khách hàng
        </div>
      </div>
    </main>
  );
}
