import React from 'react';
import { ListFilter, ArrowRight, CheckCircle2, Clock, Lock, Group } from 'lucide-react';

export function Curriculum() {
  const levels = [
    { num: 1, title: '기초 과정', level: '1단계', progress: 85, active: true },
    { num: 2, title: '중급 머신러닝', level: '2단계', progress: 12 },
    { num: 3, title: '심화 자연어 처리', level: '3단계', progress: 0 },
  ];

  const modules = [
    { title: '선형 대수학', status: 'completed' },
    { title: '확률론', status: 'completed' },
    { title: '데이터를 위한 파이썬', status: 'ongoing' },
    { title: '통계적 추론', status: 'locked' },
  ];

  return (
    <div className="space-y-12">
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-primary">AI 전문가를 향한 여정</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl">기초 수학부터 최첨단 신경망 설계까지, 체계적인 성장 로드맵을 제공합니다.</p>
        </div>
        <div className="flex gap-2">
          {['자연어 처리', '컴퓨터 비전', '강화학습'].map(t => (
            <button key={t} className="px-4 py-2 bg-surface-container-high rounded-full text-sm font-semibold hover:bg-secondary-container transition-colors">{t}</button>
          ))}
          <button className="bg-primary text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm font-semibold shadow-lg timeline-glow">
            <ListFilter className="w-4 h-4" /> 전체 주제
          </button>
        </div>
      </section>

      {/* Progress Timeline */}
      <section className="relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-outline-variant -translate-y-1/2 hidden md:block"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {levels.map(l => (
            <div key={l.num} className="space-y-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl border-4 bg-white mx-auto md:mx-0 ${
                l.active ? 'border-secondary-container text-primary timeline-glow' : 'border-outline-variant text-on-surface-variant'
              }`}>
                {l.num}
              </div>
              <div className={`bg-white p-6 rounded-xl border transition-all hover:shadow-lg ${l.active ? 'border-secondary-container' : 'border-outline-variant'}`}>
                <span className={`text-[10px] font-bold uppercase tracking-widest block mb-2 ${l.active ? 'text-secondary' : 'text-on-surface-variant'}`}>{l.level}</span>
                <h3 className="text-xl font-bold text-primary mb-4">{l.title}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-on-surface-variant">진행률</span>
                    <span className={l.active ? 'text-secondary' : 'text-on-surface-variant'}>{l.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className={`h-full ${l.active ? 'bg-secondary-container' : 'bg-outline-variant'}`} style={{ width: `${l.progress}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-outline-variant sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-bold text-primary">1단계 모듈</h4>
              <button className="text-secondary text-xs flex items-center gap-1 hover:underline">
                <Group className="w-3 h-3" /> 활동 현황
              </button>
            </div>
            <div className="space-y-2">
              {modules.map((m, i) => (
                <button 
                  key={i} 
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between transition-all ${
                    m.status === 'ongoing' ? 'bg-primary text-white' : 'hover:bg-surface-container text-on-surface'
                  } ${m.status === 'locked' ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <span className="text-sm font-semibold">{m.title}</span>
                  {m.status === 'completed' && <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-500/20" />}
                  {m.status === 'ongoing' && <Clock className="w-4 h-4" />}
                  {m.status === 'locked' && <Lock className="w-4 h-4" />}
                </button>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-outline-variant space-y-4">
              <h5 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">실시간 학습자</h5>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary-container border border-white" />
                <div className="flex-1 text-xs">
                  <p className="font-bold">이지은 연구원</p>
                  <p className="text-on-surface-variant">NumPy 아키텍처 시청 중</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-secondary-container timeline-glow" />
              </div>
              <button className="w-full py-2 border border-outline-variant rounded-lg text-xs font-bold hover:bg-surface-container">전체 로그 보기</button>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-9 space-y-8">
          <div className="flex items-center justify-between border-b border-outline-variant pb-4">
            <h2 className="text-2xl font-bold text-primary">데이터 과학을 위한 파이썬</h2>
            <span className="px-3 py-1 bg-primary-container text-on-primary-container rounded-full text-xs font-bold">현재 진행 중</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2 group bg-white border border-outline-variant rounded-xl overflow-hidden ai-card-glow">
              <div className="h-48 bg-primary-container relative">
                <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800')] bg-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 to-transparent" />
                <div className="absolute bottom-6 left-6 space-y-2">
                  <span className="px-2 py-0.5 bg-secondary-container text-primary text-[10px] font-bold rounded">핵심 콘텐츠</span>
                  <h3 className="text-2xl font-bold text-white">심화 NumPy 아키텍처</h3>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <p className="text-on-surface-variant text-sm">고성능 데이터 처리를 위한 벡터화 및 브로드캐스팅의 연산 최적화 패턴을 심층 분석합니다.</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="bg-surface-container px-2 py-1 rounded text-[10px] font-bold text-on-surface-variant">34분</span>
                    <span className="bg-surface-container px-2 py-1 rounded text-[10px] font-bold text-on-surface-variant">전문가 과정</span>
                  </div>
                  <button className="text-secondary font-bold text-sm flex items-center gap-1 hover:underline">강의 시청 <ArrowRight className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
