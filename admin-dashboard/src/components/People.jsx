import React from 'react';

export default function People() {
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[14px]">
        
        {/* Customer accounts column */}
        <div className="border border-line rounded-[12px] bg-white overflow-hidden shadow-[0_10px_24px_rgba(16,24,40,0.04)] self-start">
          <div className="min-h-[50px] border-b border-line bg-[#fbfcff] p-[12px_14px]">
            <h2 className="m-0 text-navy text-[15px] leading-[1.1] font-black">Customer accounts</h2>
            <p className="m-0 mt-1 text-muted text-[11.5px] leading-[1.3] font-semibold">Profile photos, contact details, role, visibility, and Firebase identity.</p>
          </div>
          
          <div className="p-[14px] bg-[#f8fafc]">
            <div className="mb-[14px]">
              <label className="block text-muted text-[10px] uppercase tracking-widest font-black mb-[6px]">Search</label>
              <div className="flex gap-[8px]">
                <input 
                  className="flex-1 border border-line rounded-[8px] bg-white text-navy outline-none p-[8px_11px] text-[13px] font-semibold focus:border-blue-brand/50 transition-all" 
                  placeholder="Search Customer" 
                />
                <div className="shrink-0 rounded-[8px] border border-line bg-white text-navy flex items-center justify-center px-[12px] text-[11.5px] font-bold">
                  1 total
                </div>
              </div>
            </div>

            {/* Customer Card */}
            <div className="border border-line rounded-[12px] bg-white overflow-hidden shadow-[0_2px_8px_rgba(16,24,40,0.02)] mb-[10px]">
              <div className="h-[120px] bg-[#fef6e5] relative">
                {/* Simulated Avatar Placeholder */}
                <div className="absolute left-[16px] bottom-[-24px] w-[64px] h-[64px] rounded-full border-[4px] border-white bg-white overflow-hidden shadow-sm flex items-center justify-center">
                  <div className="w-[48px] h-[48px] bg-[#f1f5f9] rounded-[8px] border border-line"></div>
                </div>
              </div>
              <div className="p-[16px] pt-[36px]">
                <div className="mb-[12px]">
                  <span className="inline-flex items-center gap-[6px] px-[8px] py-[3px] rounded-[999px] bg-[#eff8ff] text-blue-brand text-[10px] font-black uppercase tracking-wide">
                    <span className="w-[6px] h-[6px] rounded-full bg-blue-brand"></span>
                    Customer + business owner
                  </span>
                </div>
                <h3 className="m-0 text-navy text-[18px] font-black">EMY</h3>
                <p className="m-0 mt-[2px] text-[#475467] text-[12px] font-bold">test.customer@emy.local</p>
                
                <div className="mt-[16px] grid grid-cols-[100px_1fr] gap-y-[8px] text-[12px]">
                  <div className="text-[#667085] font-black uppercase tracking-wider text-[10px]">Role</div>
                  <div className="text-navy font-bold">Customer + business owner</div>
                  
                  <div className="text-[#667085] font-black uppercase tracking-wider text-[10px]">Email</div>
                  <div className="text-navy font-bold">test.customer@emy.local</div>
                  
                  <div className="text-[#667085] font-black uppercase tracking-wider text-[10px]">Status</div>
                  <div className="text-navy font-bold">active</div>
                  
                  <div className="text-[#667085] font-black uppercase tracking-wider text-[10px]">Source</div>
                  <div className="text-navy font-bold">Customer account / business owner</div>
                  
                  <div className="text-[#667085] font-black uppercase tracking-wider text-[10px]">Business<br/>Account</div>
                  <div className="text-blue-brand font-black underline decoration-blue-brand/30 underline-offset-2">HONEY SHOP</div>
                </div>

                <div className="mt-[16px] flex flex-wrap gap-[6px]">
                  <span className="inline-flex items-center px-[8px] py-[2px] rounded-[4px] bg-[#ecfdf3] text-[#027a48] text-[10.5px] font-black uppercase tracking-wide">active</span>
                  <span className="inline-flex items-center px-[8px] py-[2px] rounded-[4px] bg-[#eff8ff] text-blue-brand text-[10.5px] font-black uppercase tracking-wide">Customer account / business owner</span>
                </div>

                <div className="mt-[20px] flex flex-wrap justify-end gap-[8px] pt-[16px] border-t border-line">
                  <button className="min-h-[30px] rounded-[6px] border border-line bg-white text-navy inline-flex items-center gap-[6px] px-[12px] text-[11px] font-extrabold hover:bg-slate-50 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-[12px] h-[12px] fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                    Open
                  </button>
                  <button className="min-h-[30px] rounded-[6px] border border-line bg-white text-navy inline-flex items-center gap-[6px] px-[12px] text-[11px] font-extrabold hover:bg-slate-50 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-[12px] h-[12px] fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                    Details
                  </button>
                  <button className="min-h-[30px] rounded-[6px] border border-[#fef0f0] bg-[#fff5f5] text-[#e02424] inline-flex items-center gap-[6px] px-[12px] text-[11px] font-extrabold hover:bg-[#ffebeB] transition-colors">
                    <svg viewBox="0 0 24 24" className="w-[12px] h-[12px] fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/></svg>
                    Delete customer
                  </button>
                </div>
              </div>
            </div>

            <div className="min-h-[46px] flex items-center border border-line rounded-[12px] bg-white px-[14px] shadow-sm cursor-pointer hover:border-[#cbd5e1] transition-colors">
              <span className="text-navy text-[13px] font-black">Technical customer table</span>
            </div>
          </div>
        </div>

        {/* Business accounts column */}
        <div className="border border-line rounded-[12px] bg-white overflow-hidden shadow-[0_10px_24px_rgba(16,24,40,0.04)] self-start">
          <div className="min-h-[50px] border-b border-line bg-[#fbfcff] p-[12px_14px]">
            <h2 className="m-0 text-navy text-[15px] leading-[1.1] font-black">Business accounts</h2>
            <p className="m-0 mt-1 text-muted text-[11.5px] leading-[1.3] font-semibold">Business profile image, contact details, review status, and owner data.</p>
          </div>
          
          <div className="p-[14px] bg-[#f8fafc]">
            <div className="mb-[14px]">
              <label className="block text-muted text-[10px] uppercase tracking-widest font-black mb-[6px]">Search</label>
              <div className="flex gap-[8px]">
                <input 
                  className="flex-1 border border-line rounded-[8px] bg-white text-navy outline-none p-[8px_11px] text-[13px] font-semibold focus:border-orange-brand/50 transition-all" 
                  placeholder="Search Business" 
                />
                <div className="shrink-0 rounded-[8px] border border-line bg-white text-navy flex items-center justify-center px-[12px] text-[11.5px] font-bold">
                  1 total
                </div>
              </div>
            </div>

            {/* Business Card */}
            <div className="border border-line rounded-[12px] bg-white overflow-hidden shadow-[0_2px_8px_rgba(16,24,40,0.02)] mb-[10px]">
              <div className="h-[120px] bg-[#fef6e5] relative">
                {/* Simulated Business Avatar Placeholder */}
                <div className="absolute left-[16px] bottom-[-24px] w-[64px] h-[64px] rounded-[12px] border-[4px] border-white bg-white overflow-hidden shadow-sm flex items-center justify-center">
                  <div className="w-[48px] h-[48px] bg-[#344054] rounded-[8px] flex items-center justify-center text-white text-[10px] font-bold">Img</div>
                </div>
              </div>
              <div className="p-[16px] pt-[36px]">
                <div className="mb-[12px]">
                  <span className="inline-flex items-center gap-[6px] px-[8px] py-[3px] rounded-[999px] bg-[#fff7ed] text-[#b54708] text-[10px] font-black uppercase tracking-wide">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#f97316]"></span>
                    Business account
                  </span>
                </div>
                <h3 className="m-0 text-navy text-[18px] font-black">HONEY SHOP</h3>
                <p className="m-0 mt-[2px] text-[#475467] text-[12px] font-bold">test.customer@emy.local</p>
                
                <div className="mt-[16px] grid grid-cols-[100px_1fr] gap-y-[8px] text-[12px]">
                  <div className="text-[#667085] font-black uppercase tracking-wider text-[10px]">Role</div>
                  <div className="text-navy font-bold">Business account</div>
                  
                  <div className="text-[#667085] font-black uppercase tracking-wider text-[10px]">Email</div>
                  <div className="text-navy font-bold">test.customer@emy.local</div>
                  
                  <div className="text-[#667085] font-black uppercase tracking-wider text-[10px]">Status</div>
                  <div className="text-navy font-bold">active</div>
                  
                  <div className="text-[#667085] font-black uppercase tracking-wider text-[10px]">Source</div>
                  <div className="text-navy font-bold">Business profile page</div>
                </div>

                <div className="mt-[16px] flex flex-wrap gap-[6px]">
                  <span className="inline-flex items-center px-[8px] py-[2px] rounded-[4px] bg-[#ecfdf3] text-[#027a48] text-[10.5px] font-black uppercase tracking-wide">active</span>
                  <span className="inline-flex items-center px-[8px] py-[2px] rounded-[4px] bg-[#eff8ff] text-blue-brand text-[10.5px] font-black uppercase tracking-wide">Business profile page</span>
                </div>

                <div className="mt-[20px] flex flex-wrap justify-end gap-[8px] pt-[16px] border-t border-line">
                  <button className="min-h-[30px] rounded-[6px] border border-line bg-white text-navy inline-flex items-center gap-[6px] px-[12px] text-[11px] font-extrabold hover:bg-slate-50 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-[12px] h-[12px] fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                    Open
                  </button>
                  <button className="min-h-[30px] rounded-[6px] border border-line bg-white text-navy inline-flex items-center gap-[6px] px-[12px] text-[11px] font-extrabold hover:bg-slate-50 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-[12px] h-[12px] fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                    Details
                  </button>
                  <button className="min-h-[30px] rounded-[6px] border border-[#fef0f0] bg-[#fff5f5] text-[#e02424] inline-flex items-center gap-[6px] px-[12px] text-[11px] font-extrabold hover:bg-[#ffebeB] transition-colors">
                    <svg viewBox="0 0 24 24" className="w-[12px] h-[12px] fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/></svg>
                    Delete business
                  </button>
                </div>
              </div>
            </div>

            <div className="min-h-[46px] flex items-center border border-line rounded-[12px] bg-white px-[14px] shadow-sm cursor-pointer hover:border-[#cbd5e1] transition-colors">
              <span className="text-navy text-[13px] font-black">Technical business table</span>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}
