import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 	max-w-full">
      <div className="flex items-center justify-between px-4 py-2 mx-auto max-w-[1080px]">
        <div className="text-white text-lg font-bold">Logo</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/home" className="text-white">
                Trang chủ
              </a>
            </li>
            <li>
              <a href="/search" className="text-white">
                Tìm kiếm công việc
              </a>
            </li>
            <li>
              <a href="/companies" className="text-white">
                Công Ty
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white">
                Liên hệ
              </a>
            </li>
            <li>
              <a href="/create-cv" className="text-white">
                Tạo CV
              </a>
            </li>
            <li>
              <a href="/login" className="text-white">
                Đăng nhập
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
