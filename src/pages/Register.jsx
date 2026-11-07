
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  UserPlus,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password.length < 8) {
      alert("Mật khẩu phải có ít nhất 8 ký tự.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Mật khẩu xác nhận không khớp.");
      return;
    }

    // Chưa kết nối Supabase: đây mới là giao diện đăng ký.
    alert("Giao diện đăng ký đã sẵn sàng. Bước tiếp theo sẽ kết nối hệ thống tài khoản.");
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md rounded-3xl border border-cyan-400/20 bg-slate-950/80 p-7 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10">
            <UserPlus size={30} className="text-cyan-300" />
          </div>

          <h1 className="text-3xl font-bold text-white">
            Tạo tài khoản
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Tham gia hệ thống HỒNG HẢI MMO
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Họ và tên
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-4">
              <User size={18} className="text-cyan-400" />
              <input
                type="text"
                required
                placeholder="Nhập họ tên"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full bg-transparent py-4 text-white outline-none placeholder:text-slate-500"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Email
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-4">
              <Mail size={18} className="text-cyan-400" />
              <input
                type="email"
                required
                placeholder="Nhập email"
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
                minLength={8}
                placeholder="Ít nhất 8 ký tự"
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

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Xác nhận mật khẩu
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-4">
              <ShieldCheck size={18} className="text-cyan-400" />
              <input
                type="password"
                required
                placeholder="Nhập lại mật khẩu"
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
                className="w-full bg-transparent py-4 text-white outline-none placeholder:text-slate-500"
              />
            </div>
          </div>

          <label className="flex items-start gap-3 text-sm text-slate-400">
            <input type="checkbox" required className="mt-1 accent-cyan-400" />
            <span>
              Tôi đồng ý với điều khoản sử dụng và chính sách bảo mật.
            </span>
          </label>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-bold text-white transition hover:brightness-110"
          >
            <UserPlus size={19} />
            ĐĂNG KÝ TÀI KHOẢN
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Đã có tài khoản?{" "}
          <Link
            to="/login"
            className="font-semibold text-cyan-400 hover:text-cyan-300"
          >
            Đăng nhập
          </Link>
        </p>
      </div>
    </main>
  );
}
