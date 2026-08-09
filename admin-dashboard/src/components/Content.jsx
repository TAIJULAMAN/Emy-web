import React from 'react';

export default function Content() {
  
  const mockContent = [
    { title: 'ss', shop: 'HONEY SHOP', meta: '£2,222,222.00 | emyBusinessProducts', tags: [{label: 'product', color: 'blue'}, {label: 'active', color: 'green'}, {label: 'emyBusinessProducts', color: 'blue'}], bg: 'bg-[#f1f5f9]', imgText: 'Image ref' },
    { title: 'dd gjhkbkjbjk jnj oj jon pjnhbuyb h luolnihh ibun hbbid', shop: 'HONEY SHOP', meta: '£43.00 | emyBusinessProducts', tags: [{label: 'product', color: 'blue'}, {label: 'active', color: 'green'}, {label: 'emyBusinessProducts', color: 'blue'}], bg: 'bg-[#e2e8f0]' },
    { title: 'dddd', shop: 'HONEY SHOP', meta: '£4.00 | emyBusinessProducts', tags: [{label: 'product', color: 'blue'}, {label: 'active', color: 'green'}, {label: 'emyBusinessProducts', color: 'blue'}], bg: 'bg-slate-700', pause: true },
    { title: 'sss', shop: 'HONEY SHOP', meta: '£4,444.00 | emyBusinessProducts', tags: [{label: 'product', color: 'blue'}, {label: 'active', color: 'green'}, {label: 'emyBusinessProducts', color: 'blue'}], bg: 'bg-orange-500' },
    { title: 'face', shop: 'HONEY SHOP', meta: '£2.00 | emyBusinessProducts', tags: [{label: 'product', color: 'blue'}, {label: 'active', color: 'green'}, {label: 'emyBusinessProducts', color: 'blue'}], bg: 'bg-[#f8fafc]' },
    { title: 'ddaas', shop: 'HONEY SHOP', meta: '£33.00 | emyBusinessProducts', tags: [{label: 'product', color: 'blue'}, {label: 'active', color: 'green'}, {label: 'emyBusinessProducts', color: 'blue'}], bg: 'bg-[#f1f5f9]' },
    { title: 'New clip', shop: 'HONEY SHOP', meta: 'emyBusinessClips', tags: [{label: 'clip', color: 'blue'}, {label: 'published', color: 'orange'}, {label: 'emyBusinessClips', color: 'blue'}], bg: 'bg-gray-900' },
    { title: 'New clip', shop: 'HONEY SHOP', meta: 'emyBusinessClips', tags: [{label: 'clip', color: 'blue'}, {label: 'published', color: 'orange'}, {label: 'emyBusinessClips', color: 'blue'}], bg: 'bg-gray-800' }
  ];

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

      {/* Main layout */}
      <div className="border border-line rounded-[12px] bg-white overflow-hidden shadow-[0_10px_24px_rgba(16,24,40,0.04)]">
        <div className="min-h-[50px] border-b border-line bg-[#fbfcff] p-[12px_14px]">
          <h2 className="m-0 text-navy text-[15px] leading-[1.1] font-black">Content connected to customer pages</h2>
          <p className="m-0 mt-1 text-muted text-[11.5px] leading-[1.3] font-semibold">Products, posts, clips, jobs, events, and notifications with uploaded media first.</p>
        </div>
        
        <div className="p-[14px] bg-[#f8fafc]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[12px]">
            {mockContent.map((item, index) => (
              <div key={index} className="flex border border-line rounded-[12px] bg-white overflow-hidden shadow-[0_2px_8px_rgba(16,24,40,0.02)] min-h-[220px]">
                
                {/* Left side Image area */}
                <div className={`w-[110px] shrink-0 relative flex items-center justify-center ${item.bg}`}>
                  {item.imgText && (
                    <span className="text-[11px] font-bold text-muted px-2 text-center">{item.imgText}</span>
                  )}
                  {item.pause && (
                    <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-[999px] px-3 py-1 shadow-sm text-[11px] font-black text-navy">
                      Pause
                    </div>
                  )}
                </div>

                {/* Right side Content */}
                <div className="flex-1 p-[14px] flex flex-col">
                  <div className="flex-1">
                    <h3 className="m-0 text-navy text-[13px] font-black leading-[1.3] line-clamp-3 mb-[6px]">{item.title}</h3>
                    <div className="text-[#344054] text-[11.5px] font-semibold leading-[1.4] mb-[10px]">
                      {item.shop} <span className="text-[#94a3b8]">|</span> {item.meta}
                    </div>
                    
                    <div className="flex flex-wrap gap-[6px] mb-[12px]">
                      {item.tags.map((tag, tIndex) => (
                        <span 
                          key={tIndex} 
                          className={`inline-flex items-center px-[6px] py-[2px] rounded-[4px] text-[10px] font-black uppercase tracking-wide
                            ${tag.color === 'blue' ? 'bg-[#eff8ff] text-blue-brand' : ''}
                            ${tag.color === 'green' ? 'bg-[#ecfdf3] text-[#027a48]' : ''}
                            ${tag.color === 'orange' ? 'bg-[#fff7ed] text-[#b54708]' : ''}
                          `}
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-[6px] mt-auto">
                    <button className="h-[26px] rounded-[6px] border border-line bg-white text-navy inline-flex items-center gap-[4px] px-[10px] text-[10px] font-extrabold hover:bg-slate-50 transition-colors">
                      <svg viewBox="0 0 24 24" className="w-[11px] h-[11px] fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                      Open
                    </button>
                    <button className="h-[26px] rounded-[6px] border border-line bg-white text-navy inline-flex items-center gap-[4px] px-[10px] text-[10px] font-extrabold hover:bg-slate-50 transition-colors">
                      <svg viewBox="0 0 24 24" className="w-[11px] h-[11px] fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                      Details
                    </button>
                    <button className="h-[26px] rounded-[6px] border border-line bg-white text-navy inline-flex items-center gap-[4px] px-[10px] text-[10px] font-extrabold hover:bg-slate-50 transition-colors">
                      <svg viewBox="0 0 24 24" className="w-[11px] h-[11px] fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                      Hide
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
          
          <div className="mt-[14px] min-h-[46px] flex items-center border border-line rounded-[12px] bg-white px-[14px] shadow-sm cursor-pointer hover:border-[#cbd5e1] transition-colors">
            <span className="text-navy text-[13px] font-black">Technical content table</span>
          </div>

        </div>
      </div>
      
    </div>
  )
}
