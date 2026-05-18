import React from 'react';
import { Trophy, BarChart2, MoreVertical, Sparkles, CheckCircle2 } from 'lucide-react';

export function Members() {
  const directory = [
    { name: 'Julianne Davies', role: '제품 디자인', city: '런던', tags: ['Gen UI', 'NLP'], initial: 'JD' },
    { name: 'Robert Kwok', role: '엔지니어링', city: '싱가포르', tags: ['MLOps', 'Scale'], initial: 'RK' },
    { name: 'Sasha Higgins', role: '데이터 사이언스', city: '뉴욕', tags: ['Deep Learning', 'Py'], initial: 'SH' },
    { name: 'Amara Okafor', role: '마케팅', city: '라고스', tags: ['Copywriting', 'Ethic'], initial: 'AO' },
  ];

  return (
    <div className="space-y-16">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-primary">명예의 전당</h1>
            <p className="text-lg text-on-surface-variant">가장 활발하게 기여하고 성장하고 있는 이달의 학습자들입니다.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map(rank => (
              <div key={rank} className={`bg-white p-6 rounded-xl border relative overflow-hidden group cursor-pointer ai-card-glow ${rank === 1 ? 'border-secondary-container' : 'border-outline-variant'}`}>
                {rank === 1 && <Trophy className="absolute top-2 right-2 text-secondary-container w-6 h-6" />}
                <div className="w-16 h-16 rounded-full bg-surface-container-high mb-4 border-2 border-white shadow-sm" />
                <h3 className="text-lg font-bold text-primary mb-1">{rank === 1 ? 'Elena R.' : rank === 2 ? 'Marcus C.' : 'Sarah J.'}</h3>
                <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${rank === 1 ? 'text-secondary' : 'text-on-surface-variant'}`}>{rank}위 • {3000 - rank * 250} XP</p>
                <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden mb-4">
                  <div className={`h-full ${rank === 1 ? 'bg-secondary-container' : 'bg-outline-variant'}`} style={{ width: `${100 - rank * 10}%` }} />
                </div>
                <button className="text-[10px] font-bold text-secondary flex items-center gap-1 group-hover:underline">활동 대시보드 <BarChart2 className="w-3 h-3" /></button>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-4 bg-primary-container p-8 rounded-xl text-white flex flex-col justify-between overflow-hidden relative shadow-2xl">
          <div className="space-y-4 relative z-10">
            <h2 className="text-3xl font-bold leading-tight">미래를<br />설계하세요</h2>
            <p className="text-on-primary-container text-sm leading-relaxed">이미 1,200명 이상의 전문가들이 본인만의 AI 역량을 강화하고 있습니다. 지금 가입하여 독점 혜택을 누리세요.</p>
            <ul className="space-y-3 pt-4">
              {['독점 실무 워크숍', '프리미엄 리소스 라이브러리', '전문가 1:1 멘토링'].map(f => (
                <li key={f} className="flex items-center gap-2 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-secondary-container" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <button className="w-full bg-secondary-container text-primary font-bold py-4 rounded-lg mt-8 hover:brightness-110 active:scale-95 transition-all text-sm relative z-10">멤버 신청하기</button>
          <div className="absolute -bottom-10 -right-10 opacity-10">
            <Sparkles className="w-48 h-48 text-secondary-container" />
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-primary">멤버 디렉토리</h2>
            <p className="text-on-surface-variant">사내 모든 도메인의 AI 전문가 및 학습자들과 연결해 보세요.</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-outline-variant rounded-lg text-xs font-bold hover:bg-white transition-all">부서별 필터</button>
            <button className="px-4 py-2 border border-outline-variant rounded-lg text-xs font-bold hover:bg-white transition-all">XP 순 정렬</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {directory.map((m, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-outline-variant group ai-card-glow">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-container text-white font-bold flex items-center justify-center text-lg">{m.initial}</div>
                <button className="p-1 text-outline hover:text-secondary"><MoreVertical className="w-5 h-5" /></button>
              </div>
              <div className="space-y-1 mb-6">
                <h4 className="text-lg font-bold text-primary mb-1">{m.name}</h4>
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">{m.role} • {m.city}</p>
              </div>
              <div className="flex flex-wrap gap-1 mb-8">
                {m.tags.map(t => (
                  <span key={t} className="px-2 py-0.5 bg-surface-container text-[8px] font-bold text-on-surface-variant rounded uppercase">{t}</span>
                ))}
              </div>
              <button className="w-full border border-primary py-2.5 rounded font-bold text-xs text-primary group-hover:bg-primary group-hover:text-white transition-all">프로필 보기</button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white p-12 rounded-xl border border-outline-variant max-w-2xl mx-auto shadow-sm space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-primary">멤버 가입 신청</h2>
          <p className="text-sm text-on-surface-variant">당신의 AI 성장 여정은 여기서 시작됩니다.</p>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary uppercase tracking-wider px-1">성함</label>
              <input className="w-full p-4 bg-surface rounded border border-outline-variant focus:border-secondary-container focus:ring-1 focus:ring-secondary-container outline-none text-sm transition-all" placeholder="예: 홍길동" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary uppercase tracking-wider px-1">사번</label>
              <input className="w-full p-4 bg-surface rounded border border-outline-variant focus:border-secondary-container focus:ring-1 focus:ring-secondary-container outline-none text-sm transition-all" placeholder="예: EMP-0000" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-primary uppercase tracking-wider px-1">전문분야</label>
            <select className="w-full p-4 bg-surface rounded border border-outline-variant focus:border-secondary-container focus:ring-1 focus:ring-secondary-container outline-none text-sm transition-all appearance-none cursor-pointer">
              <option>데이터 사이언스</option>
              <option>소프트웨어 엔지니어링</option>
              <option>제품 디자인</option>
              <option>마케팅/기획</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-primary uppercase tracking-wider px-1">가입 동기</label>
            <textarea className="w-full p-4 bg-surface rounded border border-outline-variant focus:border-secondary-container focus:ring-1 focus:ring-secondary-container outline-none text-sm transition-all min-h-[120px]" placeholder="학습 목표와 기대사항을 자유롭게 작성해 주세요." />
          </div>
          <button className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:shadow-xl transition-all shadow-md active:scale-[0.98]">신청서 제출하기</button>
        </form>
      </section>
    </div>
  );
}
