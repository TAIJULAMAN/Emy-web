import React from 'react';

export default function AskEmy() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      
      {/* Repeated top section */}
      <div className="border border-orange-brand/20 rounded-[12px] bg-[#fff7ed] text-[#7a3b00] p-[13px_14px] mb-[14px] text-[13px] leading-[1.45] font-bold">
        This admin page reads the same browser data saved by EMY sign up, business profile, products, posts, notifications, Ask EMY, and customer actions. It does not pretend disconnected setup sections are working.
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_170px_auto] gap-[10px] mb-[14px]">
        <input 
          className="w-full border border-line rounded-[10px] bg-white text-navy outline-none p-[10px_11px] text-[13px] font-semibold focus:border-orange-brand/50 focus:ring-2 focus:ring-orange-brand/20 transition-all" 
          placeholder="Search connected records..." 
        />
        <select className="w-full border border-line rounded-[10px] bg-white text-navy outline-none p-[10px_11px] text-[13px] font-semibold appearance-none cursor-pointer focus:border-orange-brand/50 focus:ring-2 focus:ring-orange-brand/20 transition-all">
          <option value="">All statuses</option>
          <option>pending</option>
          <option>approved</option>
          <option>active</option>
          <option>reported</option>
          <option>draft</option>
        </select>
        <button className="min-h-[34px] h-[36px] rounded-[999px] border border-line bg-white text-navy inline-flex items-center justify-center px-[12px] text-[12px] font-extrabold hover:bg-slate-50 transition-colors self-end md:self-auto">
          Refresh
        </button>
      </div>

      <div className="border border-line rounded-[12px] bg-white overflow-hidden shadow-[0_10px_24px_rgba(16,24,40,0.04)] mb-[14px]">
        <div className="min-h-[50px] flex flex-wrap items-center justify-between gap-[12px] border-b border-line bg-[#fbfcff] p-[12px_14px]">
          <div>
            <h2 className="m-0 text-navy text-[15px] leading-[1.1] font-black">Cloud admin console</h2>
            <p className="m-0 mt-1 text-muted text-[12px] leading-[1.3] font-semibold">Firebase identities, customers, businesses, profile images, posts, videos, storage rows, and raw Firestore records.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="min-h-[34px] rounded-[999px] border border-line bg-white text-navy inline-flex items-center justify-center px-3 text-[12px] font-extrabold hover:bg-slate-50 transition-colors">Refresh cloud</button>
            <button className="min-h-[34px] rounded-[999px] border border-orange-brand bg-orange-brand text-white inline-flex items-center justify-center px-3 text-[12px] font-extrabold hover:bg-[#e65c00] transition-colors">Show all</button>
          </div>
        </div>
        <div className="p-[14px]">
          <div className="border border-line rounded-[10px] bg-[#f8fafc] p-[10px] mb-[10px] text-[#344054] text-[12.5px] font-bold">
            Sign in first, then open this admin page with the EMY admin account.
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[12px] mb-[10px]">
            {['PEOPLE', 'AUTH USERS', 'CONTENT', 'RAW STORAGE'].map(label => (
              <div key={label} className="border border-line rounded-[10px] bg-white p-[14px]">
                <small className="block text-muted text-[10px] uppercase tracking-widest font-black">{label}</small>
                <strong className="block mt-2 text-navy text-[24px] leading-none font-black">0</strong>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 mb-[10px]">
            {['all', 'identities', 'people', 'content', 'storage', 'analytics'].map((tag, i) => (
              <span key={tag} className={`min-h-[22px] rounded-[999px] inline-flex items-center px-[9px] text-[10px] font-extrabold border ${i === 0 ? 'bg-orange-50 border-orange-brand/30 text-orange-700' : 'bg-[#eef2f7] border-transparent text-[#475467]'}`}>
                {tag}
              </span>
            ))}
          </div>

          <div className="border border-dashed border-line rounded-[10px] bg-[#fbfcff] text-muted p-[26px] text-center text-[13px] font-bold">
            No cloud records match this filter yet. Sign in as the admin account, then press Refresh cloud.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[12px] mb-[14px]">
        {[
          { label: 'CUSTOMER ACCOUNTS', val: '1', desc: 'Customer signups and customer profile records.' },
          { label: 'BUSINESS ACCOUNTS', val: '1', desc: 'Business signups and business profile records.' },
          { label: 'NEEDS REVIEW', val: '0', desc: 'Pending, reported, draft, or verify status.' },
          { label: 'LOCAL DATA KEYS', val: '98', desc: 'EMY browser storage keys connected to this admin.' },
        ].map((metric, i) => (
          <div key={i} className="border border-line rounded-[12px] bg-white p-[14px] shadow-[0_10px_24px_rgba(16,24,40,0.04)]">
            <small className="block text-muted text-[11px] uppercase tracking-[0.06em] font-black">{metric.label}</small>
            <strong className="block mt-[8px] text-navy text-[28px] leading-none font-black">{metric.val}</strong>
            <span className="block mt-[7px] text-[#667085] text-[12px] leading-[1.35] font-semibold">{metric.desc}</span>
          </div>
        ))}
      </div>

      {/* Main Ask EMY layout */}
      <div className="border border-line rounded-[12px] bg-white overflow-hidden shadow-[0_10px_24px_rgba(16,24,40,0.04)]">
        <div className="min-h-[50px] border-b border-line bg-[#fbfcff] p-[12px_14px]">
          <h2 className="m-0 text-navy text-[15px] leading-[1.1] font-black">Ask EMY backend</h2>
          <p className="m-0 mt-1 text-muted text-[11.5px] leading-[1.3] font-semibold">Save provider keys on this computer, then test OpenAI, OpenRouter, or DeepSeek.</p>
        </div>
        
        <div className="p-[14px] md:p-[20px]">
          
          {/* Top Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[12px] mb-[24px]">
            <div className="border border-line rounded-[10px] bg-white p-[14px] shadow-sm flex flex-col justify-between">
              <small className="block text-muted text-[10px] uppercase tracking-widest font-black mb-[8px]">SELECTED PROVIDER</small>
              <strong className="block text-navy text-[13px] font-black mb-[12px]">local-fallback</strong>
              <div className="flex">
                <span className="inline-flex items-center px-[8px] py-[2px] rounded-[4px] bg-[#fff7ed] text-[#b54708] text-[10px] font-black uppercase tracking-wide">Fallback</span>
              </div>
            </div>

            <div className="border border-line rounded-[10px] bg-white p-[14px] shadow-sm flex flex-col justify-between">
              <small className="block text-muted text-[10px] uppercase tracking-widest font-black mb-[8px]">OPENAI</small>
              <strong className="block text-navy text-[13px] font-black mb-[12px]">No key saved</strong>
              <div className="flex">
                <span className="inline-flex items-center px-[8px] py-[2px] rounded-[4px] bg-white text-[#e02424] text-[10px] font-black uppercase tracking-wide">Missing</span>
              </div>
            </div>

            <div className="border border-line rounded-[10px] bg-white p-[14px] shadow-sm flex flex-col justify-between">
              <small className="block text-muted text-[10px] uppercase tracking-widest font-black mb-[8px]">OPENAI MODEL</small>
              <strong className="block text-navy text-[13px] font-black mb-[12px]">gpt-5.4</strong>
              <div className="flex">
                <span className="inline-flex items-center px-[8px] py-[2px] rounded-[4px] bg-[#f1f5f9] text-[#475467] text-[10px] font-black uppercase tracking-wide">Active model</span>
              </div>
            </div>

            <div className="border border-line rounded-[10px] bg-white p-[14px] shadow-sm flex flex-col justify-between">
              <small className="block text-muted text-[10px] uppercase tracking-widest font-black mb-[8px]">OTHER PROVIDERS</small>
              <div className="block text-navy text-[13px] font-black mb-[12px] leading-[1.4]">
                <div>OpenRouter: not saved</div>
                <div>DeepSeek: not saved</div>
              </div>
              <div className="flex">
                <span className="inline-flex items-center px-[8px] py-[2px] rounded-[4px] bg-[#f1f5f9] text-[#475467] text-[10px] font-black uppercase tracking-wide">Optional</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-[32px]">
            
            {/* Forms Column */}
            <div className="flex flex-col gap-[16px]">
              
              <div>
                <label className="block text-navy text-[13px] font-black mb-[2px]">Default provider</label>
                <input 
                  type="text" 
                  defaultValue="openai"
                  className="w-full border border-line rounded-[8px] bg-white text-navy font-bold p-[10px_12px] text-[13px] outline-none focus:border-orange-brand/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-navy text-[13px] font-black mb-[2px]">OpenAI model</label>
                <p className="text-muted text-[10px] font-semibold mb-[8px]">Recommended for Ask EMY: gpt-5.4. Faster/cheaper options: gpt-5.4-mini or gpt-5.4-nano. Highest quality: gpt-5.5.</p>
                <input 
                  type="text" 
                  defaultValue="gpt-5.4"
                  className="w-full border border-line rounded-[8px] bg-white text-navy font-bold p-[10px_12px] text-[13px] outline-none focus:border-orange-brand/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-navy text-[13px] font-black mb-[2px]">OpenAI API key</label>
                <p className="text-muted text-[10px] font-semibold mb-[8px]">No OpenAI key is saved yet. Paste a key here only when you want to replace the backend key.</p>
                <input 
                  type="text" 
                  placeholder="Leave blank to keep saved key"
                  className="w-full border border-line rounded-[8px] bg-white text-navy font-bold p-[10px_12px] text-[13px] outline-none focus:border-orange-brand/50 transition-colors placeholder:text-[#94a3b8] placeholder:font-semibold"
                />
              </div>

              <div>
                <label className="block text-navy text-[13px] font-black mb-[2px]">OpenRouter model</label>
                <input 
                  type="text" 
                  defaultValue="deepseek/deepseek-chat-v3-0324:free"
                  className="w-full border border-line rounded-[8px] bg-white text-navy font-bold p-[10px_12px] text-[13px] outline-none focus:border-orange-brand/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-navy text-[13px] font-black mb-[2px]">OpenRouter API key</label>
                <input 
                  type="text" 
                  placeholder="Leave blank to keep saved key"
                  className="w-full border border-line rounded-[8px] bg-white text-navy font-bold p-[10px_12px] text-[13px] outline-none focus:border-orange-brand/50 transition-colors placeholder:text-[#94a3b8] placeholder:font-semibold"
                />
              </div>

              <div>
                <label className="block text-navy text-[13px] font-black mb-[2px]">DeepSeek model</label>
                <input 
                  type="text" 
                  defaultValue="deepseek-chat"
                  className="w-full border border-line rounded-[8px] bg-white text-navy font-bold p-[10px_12px] text-[13px] outline-none focus:border-orange-brand/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-navy text-[13px] font-black mb-[2px]">DeepSeek API key</label>
                <input 
                  type="text" 
                  placeholder="Leave blank to keep saved key"
                  className="w-full border border-line rounded-[8px] bg-white text-navy font-bold p-[10px_12px] text-[13px] outline-none focus:border-orange-brand/50 transition-colors placeholder:text-[#94a3b8] placeholder:font-semibold"
                />
              </div>

            </div>

            {/* Notes Column */}
            <div>
              <label className="block text-navy text-[13px] font-black mb-[8px]">Notes</label>
              <textarea 
                className="w-full h-[220px] border border-line rounded-[8px] bg-[#fbfcff] text-navy font-mono font-medium p-[12px] text-[12px] outline-none focus:border-orange-brand/50 transition-colors resize-none shadow-inner"
                defaultValue="OpenAI gpt-5.4 is the Ask EMY default."
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-end gap-[8px] mt-[24px] pt-[20px] border-t border-line">
            <button className="min-h-[30px] rounded-[6px] border border-orange-brand bg-white text-orange-brand inline-flex items-center justify-center px-[14px] text-[11.5px] font-extrabold hover:bg-[#fff7ed] transition-colors shadow-sm">
              Save settings
            </button>
            <button className="min-h-[30px] rounded-[6px] border border-line bg-white text-navy inline-flex items-center justify-center px-[14px] text-[11.5px] font-extrabold hover:bg-slate-50 transition-colors shadow-sm">
              Check status
            </button>
            <button className="min-h-[30px] rounded-[6px] border border-line bg-white text-navy inline-flex items-center justify-center px-[14px] text-[11.5px] font-extrabold hover:bg-slate-50 transition-colors shadow-sm">
              Test selected
            </button>
            <button className="min-h-[30px] rounded-[6px] border border-line bg-white text-navy inline-flex items-center justify-center px-[14px] text-[11.5px] font-extrabold hover:bg-slate-50 transition-colors shadow-sm">
              Test OpenAI
            </button>
            <button className="min-h-[30px] rounded-[6px] border border-line bg-white text-navy inline-flex items-center justify-center px-[14px] text-[11.5px] font-extrabold hover:bg-slate-50 transition-colors shadow-sm">
              Test OpenRouter
            </button>
            <button className="min-h-[30px] rounded-[6px] border border-line bg-white text-navy inline-flex items-center justify-center px-[14px] text-[11.5px] font-extrabold hover:bg-slate-50 transition-colors shadow-sm">
              Test DeepSeek
            </button>
          </div>

          {/* Console Log Block */}
          <div className="mt-[20px] border border-line rounded-[8px] bg-[#f8fafc] p-[16px]">
            <pre className="m-0 font-mono text-[11px] leading-[1.6] text-navy font-semibold whitespace-pre-wrap">
{`Provider: local-fallback
OpenAI key: not saved
OpenAI model: gpt-5.4
OpenRouter key: not saved
DeepSeek key: not saved`}
            </pre>
          </div>

        </div>
      </div>
      
    </div>
  )
}
