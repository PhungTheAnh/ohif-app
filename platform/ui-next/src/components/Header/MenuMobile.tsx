'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import './style.css';

export default function CustomScrollbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    'Trang chủ',
    'Đơn tiếp',
    'Ngoại trú',
    'Xét nghiệm',
    'CĐHA',
    'PTTT',
    'Quản lý',
    'Báo cáo',
    'Danh mục',
    'Hệ thống',
    'Trợ giúp',
    'Cấu hình',
    'Tài khoản',
  ];

  return (
    <div className="p-10">
      <h2 className="mb-4 text-xl font-bold">Custom Scrollbar Demo</h2>

      <div className="flex gap-4">
        <div>
          <h3 className="mb-2 font-medium">Dropdown with Custom Scrollbar</h3>
          <DropdownMenu
            open={open}
            onOpenChange={setOpen}
          >
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="border-none bg-teal-700 text-white hover:bg-teal-800"
              >
                Menu <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="custom-scrollbar-dropdown w-56 border-none bg-teal-700 text-white">
              <div className="scrollbar-container">
                {menuItems.map((item, index) => (
                  <DropdownMenuItem
                    key={index}
                    className="cursor-pointer focus:bg-teal-600 focus:text-white"
                  >
                    {item}
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="w-64">
          <h3 className="mb-2 font-medium">Scrollable Content</h3>
          <div className="h-80 overflow-y-auto rounded-md border bg-gray-50 p-4">
            <div className="space-y-4">
              {Array.from({ length: 20 }).map((_, i) => (
                <p key={i}>Scrollable content item {i + 1}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
