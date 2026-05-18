import React from 'react';
import { ArrowRight, PlayCircle, Users, School, Calendar, Megaphone, Video, Check, Sparkles } from 'lucide-react';

export function Dashboard() {
  const stats = [
    { icon: Users, label: '활성 학습자', value: '1,248' },
    { icon: School, label: '완료한 코스', value: '84' },
    { icon: Calendar, label: '예정된 세미나', value: '12' },
  ];

  const events = [
    { month: '10월', day: '24', title: '생성형 AI의 윤리', time: '14:00 - 15:30', location: '가상 라운지' },
    { month: '10월', day: '27', title: 'RLHF 워크숍', time: '10:00 - 12:00', location: '402호 랩실' },
    { month: '11월', day: '02', title: '이달의 데모 데이', time: '16:00 - 18:00', location: '메인 홀' },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-primary-container p-12 rounded-xl border border-outline-variant flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
        <div className="flex-1 space-y-6 relative z-10">
          <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full">멤버 업데이트</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">반가워요, AI 개척자님!</h1>
          <p className="text-lg text-on-primary-container max-w-xl">
            오늘의 주제: <span className="text-secondary-container font-bold underline decoration-2 underline-offset-4">생성형 AI 트렌드</span>. 
            디퓨전 모델의 구조적 혁신과 트랜스포머의 효율적 최적화 기법을 알아보세요.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-[0_0_15px_rgba(0,212,253,0.3)] transition-all">트렌드 탐색하기</button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">일일 브리핑</button>
          </div>
        </div>
        <div className="w-full md:w-1/3 aspect-square relative hidden lg:block">
          <div className="absolute inset-0 bg-secondary-container/20 blur-3xl rounded-full"></div>
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" 
            alt="AI Visual" 
            className="w-full h-full object-cover rounded-xl border border-white/10 shadow-2xl relative z-10"
          />
        </div>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-outline-variant flex flex-col items-center text-center ai-card-glow">
                <stat.icon className="w-8 h-8 text-secondary mb-3" />
                <span className="text-3xl font-bold text-primary">{stat.value}</span>
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Featured Course */}
          <div className="bg-white border border-outline-variant rounded-xl overflow-hidden flex flex-col lg:flex-row ai-card-glow">
            <div className="lg:w-2/5 min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4628c6bb5?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover"
                alt="Course"
              />
            </div>
            <div className="p-8 lg:w-3/5 flex flex-col justify-center space-y-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold text-primary">인공신경망의 기초</h2>
                  <p className="text-on-surface-variant">딥러닝의 핵심 수학적 원리와 구현 기법 마스터</p>
                </div>
                <span className="bg-secondary-container/10 text-secondary px-3 py-1 rounded-full text-xs font-bold">진행 중</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold">전체 진척도</span>
                  <span className="text-secondary font-bold">65%</span>
                </div>
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-secondary-container" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div className="flex gap-4 pt-2">
                <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-container transition-all">학습 계속하기</button>
                <button className="text-secondary font-bold flex items-center hover:underline">
                  강의 계획서 <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Announcements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-outline-variant rounded-xl ai-card-glow group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
                  <Megaphone className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">커뮤니티</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">신규 LLM 스터디 그룹</h3>
              <p className="text-on-surface-variant text-sm mb-4">매주 월요일 오후 6시. Llama-3 미세 조정 및 배포 최적화 스터디를 시작합니다.</p>
              <button className="text-secondary font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                그룹 참여하기 <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="p-6 bg-white border border-outline-variant rounded-xl ai-card-glow group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
                  <Video className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">리소스</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">PyTorch 세미나 아카이브</h3>
              <p className="text-on-surface-variant text-sm mb-4">"PyTorch 분산 학습 환경 구축" 지난 세미나 녹화본이 업로드되었습니다.</p>
              <button className="text-secondary font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                영상 시청하기 <PlayCircle className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>

        <aside className="md:col-span-4 space-y-8">
          {/* Events */}
          <div className="bg-white border border-outline-variant rounded-xl p-6 space-y-6 shadow-sm">
            <div className="flex justify-between items-center pb-2">
              <h3 className="text-xl font-bold text-primary">예정된 이벤트</h3>
              <Calendar className="w-5 h-5 text-on-surface-variant" />
            </div>
            <div className="space-y-6">
              {events.map((event, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-14 bg-surface-container rounded-lg border border-outline-variant flex flex-col items-center justify-center group-hover:bg-secondary-container transition-all">
                    <span className="text-[10px] font-bold text-on-surface-variant group-hover:text-primary">{event.month}</span>
                    <span className="text-xl font-bold text-primary group-hover:text-primary">{event.day}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary group-hover:text-secondary transition-colors">{event.title}</h4>
                    <p className="text-xs text-on-surface-variant">{event.time} • {event.location}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full py-3 border border-outline-variant rounded-lg font-bold text-on-surface-variant hover:bg-surface-container transition-all">모든 이벤트 보기</button>
          </div>

          {/* Learning Path */}
          <div className="bg-primary-container p-8 rounded-xl border border-outline-variant relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">나의 학습 경로</h3>
                <p className="text-on-primary-container text-sm">NLP & LLM 마스터 코스</p>
              </div>
              <div className="space-y-4">
                {[
                  { label: '토큰화 기초', done: true },
                  { label: '어텐션 메커니즘', active: true },
                  { label: 'LoRA 미세 조정', pending: true },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                      step.done ? 'bg-secondary-container border-secondary-container' : 
                      step.active ? 'border-secondary-container' : 
                      'border-outline'
                    }`}>
                      {step.done && <Check className="w-4 h-4 text-primary" />}
                      {step.active && <div className="w-2 h-2 bg-secondary-container rounded-full timeline-glow"></div>}
                    </div>
                    <span className={`text-sm ${step.active ? 'text-white font-bold' : 'text-on-primary-container'}`}>
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 opacity-10">
              <Sparkles className="w-24 h-24 text-secondary-container" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
