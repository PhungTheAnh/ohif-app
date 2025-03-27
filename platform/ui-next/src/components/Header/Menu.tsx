import React, { useEffect, useState } from 'react';
import IconDropDown from './IconDropDown';
import axios from 'axios';
import { Enums } from '@ohif/core';
import './style.css';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  image: string;
  imageBg: string | null;
  faIcon: string | null;
  url: string;
  sort: number;
  status: number;
  createdAt: string | null;
  updatedAt: string | null;
  menuSeconds: MenuItem[]; // Mảng con, cùng kiểu với chính nó (nếu có menu cấp 2)
}

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const [listMenu, setListmenu] = useState<MenuItem[]>([]);
  const [showSubmenu, setShowSubmenu] = useState(
    listMenu.length > 0 && listMenu.map(item => item.menuSeconds.length > 0)
  );

  const getMenu = async () => {
    const res = await axios.get(`${Enums.TimingEnum.URL}/api/Menu`);
    if (res.status === 200 && res.data.message === 'success') {
      setListmenu(res.data.data);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);
  return (
    <div className="header-mobile z-50 h-full w-full text-white">
      {/*menu desktop */}
      <div className="absolute top-1/2 left-[200px] h-8 -translate-y-1/2">
        <nav className="mx-4 flex h-full flex-row items-center justify-between text-sm lg:mx-0">
          <div className="flex flex-row">
            <ul className="hidden divide-x divide-gray-300 lg:flex lg:flex-row">
              {listMenu.length > 0 &&
                listMenu.map((item: MenuItem, index: number) => {
                  return (
                    <div
                      key={index}
                      className="px-2"
                    >
                      {item.menuSeconds.length > 0 ? (
                        <div className="group relative transition duration-300 ease-in-out">
                          <div className="flex flex-row items-center">
                            <li className="">{item.name}</li>
                            <div className="h-5 w-5">
                              <IconDropDown />
                            </div>
                          </div>
                          {/* hover */}
                          <div className="bg-secondary-dark border-secondary-light absolute right-0 z-50 mt-2 hidden cursor-pointer whitespace-nowrap rounded-md border text-[16px] text-white shadow-lg transition duration-300 ease-in-out group-hover:block">
                            <div className="absolute -top-5 h-8 w-32 bg-transparent"></div>
                            <div className="p-2">
                              <div className="absolute left-6 -top-[1px] h-0 w-0 rotate-45">
                                <div
                                  className="absolute h-3 w-3"
                                  style={{
                                    transform: 'translate(-50%, -50%)',
                                    borderTop: '1px solid rgb(64, 66, 175)',
                                    borderLeft: '1px solid rgb(64, 66, 175)',
                                    backgroundColor: '#015e70',
                                  }}
                                ></div>
                              </div>
                              {item.menuSeconds.map((sub, idx) => (
                                <a
                                  key={idx}
                                  className="block px-2 py-1 text-sm hover:text-[#5ACCE6]"
                                  role="menuitem"
                                  href={Enums.TimingEnum.HOST + sub.url}
                                >
                                  {sub.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <li className="">
                          <a
                            className="cursor-pointer border-b-2 border-transparent no-underline hover:border-white"
                            href={Enums.TimingEnum.HOST + item.url}
                          >
                            {item.name}
                          </a>
                        </li>
                      )}
                    </div>
                  );
                })}
            </ul>
          </div>
        </nav>
      </div>

      {/* right */}
      <div className="absolute right-[50px] top-1/2 flex -translate-y-1/2 select-none items-center">
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="relative cursor-pointer rounded-full p-2 text-lg text-white transition-colors duration-100 hover:bg-[#01778e] lg:hidden"
        >
          {showMenu ? 'X' : 'Menu'}
          <div className="absolute right-0 top-[40px]">
            {/*menu mobile */}
            <div className="custom-scrollbar-dropdown bg-secondary-dark w-56 overflow-y-auto rounded-lg border text-white shadow-lg lg:hidden">
              {showMenu && (
                <div className="scrollbar-container p-4">
                  <ul className="space-y-2 lg:hidden">
                    {listMenu.map((item: MenuItem, index: number) => {
                      return (
                        <>
                          {item.menuSeconds.length > 0 ? (
                            <li
                              key={index}
                              className="group cursor-pointer"
                            >
                              <div
                                className="flex w-fit items-center"
                                onClick={() => {
                                  setShowSubmenu(prev =>
                                    prev.map((item, idx: number) => (idx === index ? !item : item))
                                  );
                                }}
                              >
                                <li className="">{item.name}</li>
                                <div className="h-5 w-5">
                                  <IconDropDown />
                                </div>
                              </div>
                              {/* click */}
                              {showSubmenu[index] && (
                                <div className="pt-2">
                                  {item.menuSeconds.map((sub, idx) => (
                                    <a
                                      key={idx}
                                      className="block px-2 py-1 text-sm text-white hover:text-white"
                                      role="menuitem"
                                      href={Enums.TimingEnum.HOST + sub.url}
                                    >
                                      {sub.name}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </li>
                          ) : (
                            <li className="mr-5">
                              <a
                                className="cursor-pointer border-b-2 border-transparent no-underline hover:border-indigo-500"
                                href={Enums.TimingEnum.HOST + item.url}
                              >
                                {item.name}
                              </a>
                            </li>
                          )}
                        </>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
