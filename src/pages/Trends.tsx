import React from 'react';
import { TrendingUp, ArrowRight, PlayCircle, Clock, Eye, Bookmark, LayoutGrid, List } from 'lucide-react';

export function Trends() {
  return (
    <div className="space-y-16">
      <section className="space-y-2">
        <h1 className="text-4xl font-bold text-primary">최신 트렌드 및 학습 리소스</h1>
        <p className="text-lg text-on-surface-variant">매일 쏟아지는 새로운 AI 논문과 기술 소식을 엄선하여 전해드립니다.</p>
      </section>

      {/* Featured Trend */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2 italic">
            <TrendingUp className="w-8 h-8 text-secondary" /> 실시간 이슈
          </h2>
          <button className="text-secondary font-bold text-sm flex items-center gap-1 hover:underline">전체 보기 <ArrowRight className="w-4 h-4" /></button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <article className="lg:col-span-7 bg-white rounded-xl border border-outline-variant overflow-hidden group ai-card-glow cursor-pointer">
            <div className="h-72 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Trend" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">LLM</span>
                <span className="bg-secondary-container text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase">Hot Issue</span>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs text-on-surface-variant font-bold">OpenAI Blog • 2시간 전</span>
                <h3 className="text-3xl font-bold text-primary leading-tight group-hover:text-secondary transition-colors">차세대 멀티모달 아키텍처의 부상: 비전과 텍스트의 결합</h3>
                <p className="text-on-surface-variant leading-relaxed">이미지 이해 능력과 추론 능력을 극대화한 새로운 멀티모달 모델들의 구조적 혁신이 산업 현장에 미칠 영향력을 분석합니다.</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-outline-variant">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-surface-container" />
                  <span className="text-xs font-bold">김민수 연구원</span>
                </div>
                <Bookmark className="w-5 h-5 text-outline group-hover:text-secondary" />
              </div>
            </div>
          </article>

          <aside className="lg:col-span-5 flex flex-col gap-6">
            {[
              { tag: 'Policy', title: 'EU AI Act 통과에 따른 기업들의 규제 대응 전략', date: '5시간 전', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400' },
              { tag: 'Safety', title: '생성형 AI 시대의 데이터 프라이버시 보호 기술 동향', date: '어제', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400' },
              { tag: 'Vision', title: '자율주행을 위한 실시간 객체 인식 모델 경량화 기법', date: '2일 전', img: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=400' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-outline-variant group ai-card-glow cursor-pointer flex gap-4">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" alt="News" />
                </div>
                <div className="flex flex-col justify-between py-1">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase bg-surface-container px-2 py-0.5 rounded">{item.tag}</span>
                    <h4 className="text-sm font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 leading-tight">{item.title}</h4>
                  </div>
                  <span className="text-[10px] text-on-surface-variant font-bold">{item.date}</span>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>

      {/* Video Content */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2 italic">
            <PlayCircle className="w-8 h-8 text-secondary" /> 비디오 클래스
          </h2>
          <div className="flex gap-2">
            <button className="p-2 border border-outline-variant rounded-full hover:bg-white"><LayoutGrid className="w-5 h-5" /></button>
            <button className="p-2 bg-primary text-white rounded-full"><List className="w-5 h-5" /></button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: '실전 LangChain을 활용한 AI 서비스 구축', level: 'Beginner', views: '12.5k', duration: '12:45', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800' },
            { title: 'Fine-tuning 마스터: Llama-3 최적화 기법', level: 'Expert', views: '8.2k', duration: '24:10', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800' },
            { title: '프롬프트 엔지니어링 101: 비즈니스 활용사례', level: 'Beginner', views: '21.1k', duration: '18:30', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800' },
          ].map((v, i) => (
            <div key={i} className="bg-white border border-outline-variant rounded-xl overflow-hidden group ai-card-glow cursor-pointer">
              <div className="relative aspect-video overflow-hidden">
                <img src={v.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Video" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all bg-black/40">
                  <PlayCircle className="w-16 h-16 text-white" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded">{v.duration}</div>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex justify-between items-center text-[10px] font-bold">
                  <span className="bg-secondary-container/10 text-secondary px-2 py-0.5 rounded uppercase">{v.level}</span>
                  <span className="text-on-surface-variant uppercase flex items-center gap-1"><Eye className="w-3 h-3" /> {v.views}</span>
                </div>
                <h3 className="text-sm font-bold text-primary group-hover:text-secondary transition-colors leading-tight">{v.title}</h3>
                <button className="w-full border-2 border-primary text-primary py-2 rounded font-bold text-xs hover:bg-primary hover:text-white transition-all">강의 시작하기</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
