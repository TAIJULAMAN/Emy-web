import React from 'react';

export default function SavedData() {
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

      {/* Main layout Sections */}
      
      {/* 1. Temporary media migration */}
      <div className="border border-line rounded-[12px] bg-white overflow-hidden shadow-[0_10px_24px_rgba(16,24,40,0.04)] mb-[14px]">
        <div className="min-h-[50px] flex flex-wrap items-center justify-between gap-[12px] border-b border-line bg-[#fbfcff] p-[12px_14px]">
          <div>
            <h2 className="m-0 text-navy text-[15px] leading-[1.1] font-black">Temporary media migration</h2>
            <p className="m-0 mt-1 text-muted text-[11.5px] leading-[1.3] font-semibold">Moves old browser saved post, product, clip, job, and event media into uploaded media storage. Old browser copies are kept until you remove this tool.</p>
          </div>
          <div className="flex flex-wrap gap-[8px]">
            <button className="min-h-[30px] rounded-[6px] border border-line bg-white text-navy inline-flex items-center justify-center px-[12px] text-[11px] font-extrabold hover:bg-slate-50 transition-colors">
              Scan only
            </button>
            <button className="min-h-[30px] rounded-[6px] border border-orange-brand bg-white text-orange-brand inline-flex items-center justify-center px-[12px] text-[11px] font-extrabold hover:bg-orange-50 transition-colors">
              Upload old browser media
            </button>
          </div>
        </div>
        <div className="p-[14px] flex flex-col gap-[10px]">
          
          <div className="border border-line rounded-[8px] p-[12px]">
            <h3 className="m-0 text-navy text-[12.5px] font-black mb-[4px]">Status</h3>
            <p className="m-0 text-[#475467] text-[11.5px] font-semibold">Migration. Refs: 0. Uploaded: 0. Records: 0. Missing old media: 0. Failed: 0. Updated records: 0. Updated storage keys: 0.</p>
          </div>
          
          <div className="border border-line rounded-[8px] p-[12px]">
            <h3 className="m-0 text-navy text-[12.5px] font-black mb-[4px]">Already mapped</h3>
            <p className="m-0 text-[#475467] text-[11.5px] font-semibold">0 old media refs already have uploaded URLs saved in the migration map.</p>
          </div>
          
          <div className="border border-line rounded-[8px] p-[12px]">
            <h3 className="m-0 text-navy text-[12.5px] font-black mb-[4px]">Safety</h3>
            <p className="m-0 text-[#475467] text-[11.5px] font-semibold">This updates saved records only after each media upload succeeds. It does not delete the old browser media blobs.</p>
          </div>

        </div>
      </div>

      {/* 2. Saved EMY data */}
      <div className="border border-line rounded-[12px] bg-white overflow-hidden shadow-[0_10px_24px_rgba(16,24,40,0.04)] mb-[14px]">
        <div className="min-h-[50px] flex flex-wrap items-center justify-between gap-[12px] border-b border-line bg-[#fbfcff] p-[12px_14px]">
          <div>
            <h2 className="m-0 text-navy text-[15px] leading-[1.1] font-black">Saved EMY data</h2>
            <p className="m-0 mt-1 text-muted text-[11.5px] leading-[1.3] font-semibold">Profiles, uploaded media, and connected demo records shown before the raw data.</p>
          </div>
          <button className="min-h-[30px] rounded-[6px] border border-orange-brand bg-orange-brand text-white inline-flex items-center justify-center px-[16px] text-[11px] font-extrabold hover:bg-[#e65c00] transition-colors">
            Export JSON
          </button>
        </div>
        
        <div className="p-[14px] bg-[#f8fafc]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[12px]">
            
            <div className="border border-line rounded-[10px] bg-white p-[16px] shadow-[0_2px_8px_rgba(16,24,40,0.02)] flex flex-col">
              <h3 className="m-0 text-navy text-[14px] font-black mb-[6px]">Profile records</h3>
              <p className="m-0 text-[#475467] text-[11.5px] font-semibold leading-[1.4] mb-[16px] flex-1">Customer and business identity data saved by the demo backend.</p>
              <div className="flex">
                <span className="inline-flex items-center px-[8px] py-[2px] rounded-[4px] bg-[#ecfdf3] text-[#027a48] text-[10px] font-black uppercase tracking-wide">2 profiles</span>
              </div>
            </div>

            <div className="border border-line rounded-[10px] bg-white p-[16px] shadow-[0_2px_8px_rgba(16,24,40,0.02)] flex flex-col">
              <h3 className="m-0 text-navy text-[14px] font-black mb-[6px]">Activities and uploads</h3>
              <p className="m-0 text-[#475467] text-[11.5px] font-semibold leading-[1.4] mb-[16px] flex-1">Business content and customer activity grouped into smaller admin lists.</p>
              <div className="flex">
                <span className="inline-flex items-center px-[8px] py-[2px] rounded-[4px] bg-[#ecfdf3] text-[#027a48] text-[10px] font-black uppercase tracking-wide">20 records</span>
              </div>
            </div>

            <div className="border border-line rounded-[10px] bg-white p-[16px] shadow-[0_2px_8px_rgba(16,24,40,0.02)] flex flex-col">
              <h3 className="m-0 text-navy text-[14px] font-black mb-[6px]">Storage keys</h3>
              <p className="m-0 text-[#475467] text-[11.5px] font-semibold leading-[1.4] mb-[16px] flex-1">Raw EMY keys still available for support and debugging.</p>
              <div className="flex">
                <span className="inline-flex items-center px-[8px] py-[2px] rounded-[4px] bg-[#eff8ff] text-blue-brand text-[10px] font-black uppercase tracking-wide">98 keys</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Real profiles */}
      <div className="border border-line rounded-[12px] bg-white overflow-hidden shadow-[0_10px_24px_rgba(16,24,40,0.04)] mb-[14px]">
        <div className="min-h-[50px] border-b border-line bg-[#fbfcff] p-[12px_14px]">
          <h2 className="m-0 text-navy text-[15px] leading-[1.1] font-black">Real profiles</h2>
          <p className="m-0 mt-1 text-muted text-[11.5px] leading-[1.3] font-semibold">Customer and business records with real profile pictures when uploaded.</p>
        </div>
        
        <div className="p-[14px] bg-[#f8fafc]">
          <div className="mb-[14px]">
            <label className="block text-muted text-[10px] uppercase tracking-widest font-black mb-[6px]">Search Profiles</label>
            <div className="flex gap-[8px]">
              <input 
                className="flex-1 border border-line rounded-[8px] bg-white text-navy outline-none p-[8px_11px] text-[13px] font-semibold focus:border-blue-brand/50 transition-all" 
                placeholder="Name, ID, email, phone, role, or status..." 
              />
              <div className="shrink-0 rounded-[8px] border border-line bg-white text-navy flex items-center justify-center px-[12px] text-[11px] font-bold shadow-sm">
                2 profiles
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[14px]">
            
            {/* Reusing Customer Card layout from People tab */}
            <div className="border border-line rounded-[12px] bg-white overflow-hidden shadow-[0_2px_8px_rgba(16,24,40,0.02)] flex flex-col">
              <div className="h-[120px] bg-[#fef6e5] relative shrink-0">
                <div className="absolute left-[16px] bottom-[-24px] w-[64px] h-[64px] rounded-full border-[4px] border-white bg-white overflow-hidden shadow-sm flex items-center justify-center">
                  <div className="w-[48px] h-[48px] bg-[#f1f5f9] rounded-[8px] border border-line"></div>
                </div>
              </div>
              <div className="p-[16px] pt-[36px] flex-1 flex flex-col">
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

                <div className="mt-[16px] flex flex-wrap gap-[6px] mb-[20px]">
                  <span className="inline-flex items-center px-[8px] py-[2px] rounded-[4px] bg-[#ecfdf3] text-[#027a48] text-[10.5px] font-black uppercase tracking-wide">active</span>
                  <span className="inline-flex items-center px-[8px] py-[2px] rounded-[4px] bg-[#eff8ff] text-blue-brand text-[10.5px] font-black uppercase tracking-wide">Customer account / business owner</span>
                </div>

                <div className="mt-auto flex flex-wrap justify-end gap-[8px] pt-[16px] border-t border-line">
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

            {/* Reusing Business Card layout from People tab */}
            <div className="border border-line rounded-[12px] bg-white overflow-hidden shadow-[0_2px_8px_rgba(16,24,40,0.02)] flex flex-col">
              <div className="h-[120px] bg-[#fef6e5] relative shrink-0">
                <div className="absolute left-[16px] bottom-[-24px] w-[64px] h-[64px] rounded-[12px] border-[4px] border-white bg-white overflow-hidden shadow-sm flex items-center justify-center">
                  <div className="w-[48px] h-[48px] bg-[#344054] rounded-[8px] flex items-center justify-center text-white text-[10px] font-bold">Img</div>
                </div>
              </div>
              <div className="p-[16px] pt-[36px] flex-1 flex flex-col">
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

                <div className="mt-[16px] flex flex-wrap gap-[6px] mb-[20px]">
                  <span className="inline-flex items-center px-[8px] py-[2px] rounded-[4px] bg-[#ecfdf3] text-[#027a48] text-[10.5px] font-black uppercase tracking-wide">active</span>
                  <span className="inline-flex items-center px-[8px] py-[2px] rounded-[4px] bg-[#eff8ff] text-blue-brand text-[10.5px] font-black uppercase tracking-wide">Business profile page</span>
                </div>

                <div className="mt-auto flex flex-wrap justify-end gap-[8px] pt-[16px] border-t border-line">
                  <button className="min-h-[30px] rounded-[6px] border border-line bg-white text-navy inline-flex items-center gap-[6px] px-[12px] text-[11px] font-extrabold hover:bg-slate-50 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-[12px] h-[12px] fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                    Open
                  </button>
                  <button className="min-h-[30px] rounded-[6px] border border-line bg-white text-navy inline-flex items-center gap-[6px] px-[12px] text-[11px] font-extrabold hover:bg-slate-50 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-[12px] h-[12px] fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                    Details
                  </button>
                  <button className="min-h-[30px] rounded-[6px] border border-[#fef0f0] bg-[#fff5f5] text-[#e02424] inline-flex items-center gap-[6px] px-[12px] text-[11px] font-extrabold hover:bg-[#ffebeB] transition-colors">
                    <svg viewBox="0 0 24 24" className="w-[12px] h-[12px] fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/></svg>
                    Delete business
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* 4. Activity and uploaded content */}
      <div className="border border-line rounded-[12px] bg-white overflow-hidden shadow-[0_10px_24px_rgba(16,24,40,0.04)] mb-[14px]">
        <div className="min-h-[50px] border-b border-line bg-[#fbfcff] p-[12px_14px]">
          <h2 className="m-0 text-navy text-[15px] leading-[1.1] font-black">Activity and uploaded content</h2>
          <p className="m-0 mt-1 text-muted text-[11.5px] leading-[1.3] font-semibold">Business records and customer actions are separated into compact sections.</p>
        </div>
        
        <div className="p-[14px] bg-[#f8fafc]">
          <div className="mb-[14px]">
            <label className="block text-muted text-[10px] uppercase tracking-widest font-black mb-[6px]">Search Activity</label>
            <div className="flex gap-[8px]">
              <input 
                className="flex-1 border border-line rounded-[8px] bg-white text-navy outline-none p-[8px_11px] text-[13px] font-semibold focus:border-blue-brand/50 transition-all" 
                placeholder="Name, ID, email, business, product, post, clip, source..." 
              />
              <div className="shrink-0 rounded-[8px] border border-line bg-white text-navy flex items-center justify-center px-[12px] text-[11px] font-bold shadow-sm">
                20 records
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[14px]">
            
            {/* Customer activity list */}
            <div className="border border-line rounded-[10px] bg-white overflow-hidden shadow-sm">
              <div className="flex items-center justify-between p-[12px_14px] border-b border-line bg-white">
                <div>
                  <h3 className="m-0 text-navy text-[13px] font-black">Customer activity</h3>
                  <p className="m-0 mt-[2px] text-muted text-[11px] font-semibold">Notifications, comments, reposts, saved items, and customer actions.</p>
                </div>
                <span className="text-[10px] font-black text-[#027a48] bg-[#ecfdf3] px-[6px] py-[2px] rounded-[4px]">12</span>
              </div>
              
              <div className="flex flex-col h-[350px] overflow-y-auto">
                {[
                  { title: 'EMY BusinessProfileDraft', sub: 'Uploaded image | emyBusinessProfileDraft', icon: 'bg-slate-700' },
                  { title: 'EMY CustomerAvatar', sub: 'Uploaded image | emyCustomerAvatar', icon: 'bg-slate-100' },
                  { title: 'EMY CustomerAvatarSrc', sub: 'Uploaded image | emyCustomerAvatarSrc', icon: 'bg-slate-100' },
                  { title: 'EMY CustomerPhoto', sub: 'Uploaded image | emyCustomerPhoto', icon: 'bg-slate-100' },
                  { title: 'EMY CustomerPhotoSrc', sub: 'Uploaded image | emyCustomerPhotoSrc', icon: 'bg-slate-100' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-[12px] p-[12px_14px] border-b border-line last:border-0 hover:bg-[#fbfcff] transition-colors">
                    <div className={`w-[40px] h-[40px] rounded-[8px] border border-line shrink-0 ${item.icon}`}></div>
                    <div className="flex-1 min-w-0">
                      <h4 className="m-0 text-navy text-[12px] font-black truncate">{item.title}</h4>
                      <p className="m-0 mt-[2px] text-[#475467] text-[10.5px] font-semibold truncate">{item.sub}</p>
                      <div className="mt-[6px] flex gap-[6px]">
                        <span className="text-[9px] font-black uppercase text-blue-brand bg-[#eff8ff] px-[6px] py-[1px] rounded-[4px]">image</span>
                        <span className="text-[9px] font-black uppercase text-[#027a48] bg-[#ecfdf3] px-[6px] py-[1px] rounded-[4px]">saved</span>
                      </div>
                    </div>
                    <button className="min-h-[26px] shrink-0 rounded-[6px] border border-line bg-white text-navy inline-flex items-center gap-[4px] px-[10px] text-[10px] font-extrabold hover:bg-slate-50 transition-colors">
                      <svg viewBox="0 0 24 24" className="w-[10px] h-[10px] fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                      Details
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Business activity list */}
            <div className="border border-line rounded-[10px] bg-white overflow-hidden shadow-sm">
              <div className="flex items-center justify-between p-[12px_14px] border-b border-line bg-white">
                <div>
                  <h3 className="m-0 text-navy text-[13px] font-black">Business activity</h3>
                  <p className="m-0 mt-[2px] text-muted text-[11px] font-semibold">Products, posts, clips, jobs, events, and business media.</p>
                </div>
                <span className="text-[10px] font-black text-[#027a48] bg-[#ecfdf3] px-[6px] py-[2px] rounded-[4px]">8</span>
              </div>
              
              <div className="flex flex-col h-[350px] overflow-y-auto">
                {[
                  { title: 'ss', sub: 'HONEY SHOP | £2,222,222.00 | emyBusinessProducts', icon: 'bg-slate-100' },
                  { title: 'dd gjhkbkjbjk jnj oj jon pjnhbuyb h luolnihh ibun hbbid', sub: 'HONEY SHOP | £43.00 | emyBusinessProducts', icon: 'bg-slate-50' },
                  { title: 'dddd', sub: 'HONEY SHOP | £4.00 | emyBusinessProducts', icon: 'bg-slate-700' },
                  { title: 'sss', sub: 'HONEY SHOP | £4,444.00 | emyBusinessProducts', icon: 'bg-orange-500' },
                  { title: 'face', sub: 'HONEY SHOP | £2.00 | emyBusinessProducts', icon: 'bg-slate-50' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-[12px] p-[12px_14px] border-b border-line last:border-0 hover:bg-[#fbfcff] transition-colors">
                    <div className={`w-[40px] h-[40px] rounded-[8px] border border-line shrink-0 flex items-center justify-center ${item.icon}`}>
                      {index === 0 && <span className="text-[8px] font-bold text-muted">Image ref</span>}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="m-0 text-navy text-[12px] font-black truncate">{item.title}</h4>
                      <p className="m-0 mt-[2px] text-[#475467] text-[10.5px] font-semibold truncate">{item.sub}</p>
                      <div className="mt-[6px] flex gap-[6px]">
                        <span className="text-[9px] font-black uppercase text-blue-brand bg-[#eff8ff] px-[6px] py-[1px] rounded-[4px]">product</span>
                        <span className="text-[9px] font-black uppercase text-[#027a48] bg-[#ecfdf3] px-[6px] py-[1px] rounded-[4px]">active</span>
                      </div>
                    </div>
                    <button className="min-h-[26px] shrink-0 rounded-[6px] border border-line bg-white text-navy inline-flex items-center gap-[4px] px-[10px] text-[10px] font-extrabold hover:bg-slate-50 transition-colors">
                      <svg viewBox="0 0 24 24" className="w-[10px] h-[10px] fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                      Details
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 5. Raw JSON (Footer section) */}
      <div className="min-h-[46px] flex items-center border border-line rounded-[12px] bg-white px-[14px] shadow-sm cursor-pointer hover:border-[#cbd5e1] transition-colors">
        <span className="text-navy text-[13px] font-black">Raw JSON</span>
      </div>

    </div>
  )
}
