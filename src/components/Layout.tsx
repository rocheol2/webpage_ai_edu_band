import React from 'react';
import { Search, Bell, Settings, ListFilter, ArrowRight, CheckCircle2, Clock, Lock, Group, PlayCircle, Code, ExternalLink, Download, Brain, BookOpen, Sparkles, Pencil, User, Users, Calendar, Megaphone, Video, Trophy, BarChart2, MoreVertical, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const navItems: { id: Page; label: string }[] = [
    { id: 'dashboard', label: '대시보드' },
    { id: 'curriculum', label: '커리큘럼' },
    { id: 'archive', label: '아카이브' },
    { id: 'trends', label: '트렌드 & 리소스' },
    { id: 'members', label: '멤버' },
  ];

  return (
    <header className="bg-white border-b border-outline-variant sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <span 
            className="text-2xl font-bold text-primary cursor-pointer tracking-tight"
            onClick={() => setCurrentPage('dashboard')}
          >
            AI Learning Club
          </span>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-semibold transition-all pb-1 border-b-2 ${
                  currentPage === item.id
                    ? 'text-secondary border-secondary'
                    : 'text-on-surface-variant border-transparent hover:text-primary hover:border-outline-variant'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant">
            <Search className="w-4 h-4 text-on-surface-variant mr-2" />
            <input
              type="text"
              placeholder="검색..."
              className="bg-transparent border-none outline-none text-sm w-48"
            />
          </div>
          <button className="p-2 hover:bg-surface-container-low rounded-full transition-all">
            <Bell className="w-5 h-5 text-on-surface-variant" />
          </button>
          <button className="p-2 hover:bg-surface-container-low rounded-full transition-all">
            <Settings className="w-5 h-5 text-on-surface-variant" />
          </button>
          <div className="w-10 h-10 rounded-full border border-outline-variant overflow-hidden cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-outline-variant mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
          <span className="text-xl font-bold text-primary tracking-tight">AI Learning Club</span>
          <p className="text-sm text-on-surface-variant opacity-80">© 2024 AI Learning Club. 내부 교육용 리소스입니다.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">사내 주소록</a>
          <a href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">지원 센터</a>
          <a href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">학습 가이드라인</a>
          <a href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">개인정보 처리방침</a>
        </div>
      </div>
    </footer>
  );
}
