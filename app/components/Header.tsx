// app/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { RiDeleteBack2Line } from "react-icons/ri";
import { CgCloseR } from "react-icons/cg";

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">

                {/* 왼쪽 섹션: 뒤로가기 버튼과 사용자 정보 */}
                <div className="flex items-center space-x-4">
                    <Link to="/back">
                        <button className="my-custom-button p-2 rounded-full bg-gray-700 dark:bg-gray-900 text-white hover:bg-gray-600 dark:hover:bg-gray-700">
                            <RiDeleteBack2Line size={20} />
                        </button>
                    </Link>

                    <Link to="/about" className="flex items-center space-x-2 bg-gray-700 dark:bg-gray-900 text-white rounded-full px-4 py-3 w-60 h-10 justify-between">
                        {/* 사용자 아바타 (임시 플레이스홀더) */}
                        <div className="h-6 w-6 bg-blue-400 rounded-full flex items-center justify-center text-xs text-black">AV</div>
                        <span>User정보칸</span>
                        <span className="font-bold">50</span>
                    </Link>
                </div>

                {/* 오른쪽 섹션: 네비게이션 아이템 - 캡슐 형태 세분화 */}
                <nav>
                    {/* ul에 w-[640px]로 전체 너비를 지정합니다.*/}
                    <ul className="flex w-[640px] gap-0 h-10 rounded-full bg-gray-900 dark:bg-gray-900 items-center overflow-hidden border border-gray-500">
                        {/* 각 li에 w-1/4 (25%)를 직접 적용합니다. */}
                        <li className="w-1/4">
                            <Link to="/alarm" className="w-full h-full flex items-center justify-center px-6 py-3 bg-yellow-400 text-gray-900 font-bold hover:bg-yellow-500 dark:bg-yellow-500 dark:text-gray-900 dark:hover:bg-yellow-600 rounded-l-full">
                                알림
                            </Link>
                        </li>
                        <li className="w-1/4">
                            <Link to="/schedule" className="w-full h-full flex items-center justify-center px-4 py-3 bg-gray-700 text-gray-300 hover:text-blue-600 dark:hover:text-gray-400 hover:bg-gray-600">
                                일정
                            </Link>
                        </li>
                        <li className="w-1/4">
                            <Link to="/footprint" className="w-full h-full flex items-center justify-center px-4 py-3 bg-gray-700 text-gray-300 hover:text-blue-600 dark:hover:text-gray-400 hover:bg-gray-600">
                                발자취
                            </Link>
                        </li>
                        <li className="w-1/4">
                            <Link to="/ropenet" className="w-full h-full flex items-center justify-center px-4 py-3 bg-gray-700 text-gray-300 hover:text-blue-600 dark:hover:text-gray-400 hover:bg-gray-600 rounded-r-full">
                                로프넷 레벨
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;