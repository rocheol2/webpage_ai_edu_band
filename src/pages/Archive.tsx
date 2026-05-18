import React from 'react';
import { Brain, ArrowRight, HelpCircle, MessageSquare, FileText, Presentation, Download, Eye, Star, Sparkles, Mail } from 'lucide-react';

export function Archive() {
  const projects = [
    { title: '시맨틱 검색 엔진 v2', desc: '벡터 정밀도 향상을 통한 사내 문서 검색 고도화 로컬 LLM 프로젝트', category: 'NLP', level: '고급', author: '제인 도', abbr: 'JD', date: '2일 전', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800' },
    { title: '실시간 이상 징후 탐지', desc: 'YOLOv8 기반 하드웨어 제조 라인 구조적 결함 식별 프로토타입', category: 'Vision', level: '중급', author: '알렉스 S.', abbr: 'AS', date: '5일 전', img: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div className="space-y-12">
      <section className="space-y-2">
        <h1 className="text-4xl font-bold text-primary">활동 아카이브</h1>
        <p className="text-lg text-on-surface-variant max-w-2xl">우리의 집단 지성이 모이는 곳. 프로젝트 성과부터 커뮤니티 지식까지 한눈에 확인하세요.</p>
      </section>

      <div className="flex flex-wrap gap-2 border-b border-outline-variant pb-6">
        {['전체 활동', '프로젝트', '발표 자료', '질의응답'].map((cat, i) => (
          <button key={cat} className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
            i === 0 ? 'bg-primary text-white shadow-lg' : 'text-on-surface-variant hover:bg-surface-container'
          }`}>{cat}</button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-12">
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-primary">프로젝트 쇼케이스</h2>
              <button className="text-secondary text-sm font-bold flex items-center gap-1 hover:underline">전체 보기 <ArrowRight className="w-4 h-4" /></button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((p, i) => (
                <div key={i} className="bg-white rounded-xl border border-outline-variant overflow-hidden ai-card-glow group">
                  <div className="h-48 overflow-hidden">
                    <img src={p.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Project" />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex gap-2">
                      <span className="bg-surface-container px-2 py-0.5 rounded text-[10px] font-bold text-on-surface-variant uppercase">{p.category}</span>
                      <span className="bg-secondary-container/10 text-secondary px-2 py-0.5 rounded text-[10px] font-bold uppercase">{p.level}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors leading-tight">{p.title}</h3>
                    <p className="text-sm text-on-surface-variant line-clamp-2">{p.desc}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-outline-variant">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary-container text-white text-[10px] font-bold flex items-center justify-center">{p.abbr}</div>
                        <span className="text-xs font-bold text-primary">{p.author}</span>
                      </div>
                      <span className="text-xs text-on-surface-variant">{p.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-primary">세미나 발표 자료</h2>
            <div className="bg-white border border-outline-variant rounded-xl overflow-hidden divide-y divide-outline-variant">
              {[
                { title: '트랜스포머 아키텍처의 미래', author: '첸 박사', date: '2024.10.14', type: 'pdf' },
                { title: '실전 RLHF 가이드라인', author: '엔지니어링 팀', date: '2024.10.08', type: 'slides' },
                { title: '생성형 AI의 윤리적 제약', author: '윤리 위원회', date: '2024.09.29', type: 'pdf' },
              ].map((item, i) => (
                <div key={i} className="p-4 flex items-center justify-between hover:bg-surface-container transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-surface-container rounded flex items-center justify-center text-primary group-hover:bg-secondary-container transition-colors">
                      {item.type === 'pdf' ? <FileText className="w-5 h-5" /> : <Presentation className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary">{item.title}</h4>
                      <p className="text-xs text-on-surface-variant">{item.author} • {item.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-secondary hover:bg-secondary-container/10 rounded-full"><Eye className="w-5 h-5" /></button>
                    <button className="p-2 text-secondary hover:bg-secondary-container/10 rounded-full"><Download className="w-5 h-5" /></button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-primary-container p-8 rounded-xl text-white space-y-6 relative overflow-hidden shadow-xl">
            <div className="relative z-10 space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2 italic"><Sparkles className="w-5 h-5" /> 궁금한 점이 있나요?</h3>
              <p className="text-on-primary-container text-sm leading-relaxed">준비된 멘토들과 동료들에게 질문을 남겨보세요. AI 기반 맞춤형 정보 추천 서비스도 제공됩니다.</p>
              <button className="w-full bg-secondary-container text-primary font-bold py-3 rounded-lg hover:shadow-[0_0_15px_rgba(0,212,253,0.5)] transition-all">토론 시작하기</button>
            </div>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #00d2fd 1px, transparent 0)', backgroundSize: '24px 24px' }} />
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest px-2">인기 질문</h3>
            {[
              { q: '의료 데이터셋 fine-tuning 시 가중치 동결 최적화 기법은?', a: 12, date: '1시간 전' },
              { q: '다중 문서 RAG 환경에서 중복 정보 제거 로직 구현', a: 8, date: '4시간 전' },
            ].map((q, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-outline-variant hover:border-secondary-container transition-all cursor-pointer group">
                <div className="flex gap-3 mb-3">
                  <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <h4 className="text-sm font-bold text-primary group-hover:text-secondary transition-colors leading-snug">{q.q}</h4>
                </div>
                <div className="flex justify-between items-center text-[10px] font-bold text-on-surface-variant">
                  <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> 답변 {q.a}개</span>
                  <span>{q.date}</span>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
