import React from "react";

const InputForm: React.FC = () => {
  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thông tin đã được ghi nhận!");
      }}
    >
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Họ và tên</label>
        <input
          type="text"
          name="name"
          required
          className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Nhập họ tên của bạn"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Số điện thoại</label>
        <input
          type="tel"
          name="phone"
          required
          className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Nhập số Zalo/Điện thoại"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white font-semibold py-2 rounded-lg hover:opacity-90 transition"
      >
        Đăng ký trải nghiệm Brows AI
      </button>
    </form>
  );
};

export default InputForm;
