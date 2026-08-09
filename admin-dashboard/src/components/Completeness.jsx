import React from 'react';

export default function Completeness() {
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
          { label: 'LOCAL DATA KEYS', val: '89', desc: 'EMY browser storage keys connected to this admin.' },
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
        
        {/* Header */}
        <div className="min-h-[50px] border-b border-line bg-[#fbfcff] p-[12px_14px]">
          <h2 className="m-0 text-navy text-[15px] leading-[1.1] font-black">Business profile completeness</h2>
          <p className="m-0 mt-1 text-muted text-[11.5px] leading-[1.3] font-semibold">Each business gets a score for name, phone, email, category, location, logo, cover media, products, posts, and clips.</p>
        </div>

        <div className="p-[14px]">
          {/* Business review block (Same as Approvals) */}
          <div className="border border-line rounded-[12px] bg-white overflow-hidden mb-[20px]">
            <div className="p-[16px] relative">
              
              {/* Top Header */}
              <div className="pr-[70px]">
                <h3 className="m-0 text-navy text-[16px] leading-[1.1] font-black uppercase tracking-wide">HONEY SHOP</h3>
                <p className="m-0 mt-[4px] text-[#344054] text-[13px] font-bold">test.customer@emy.local | w</p>
                
                <div className="flex gap-2 mt-[8px]">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-[4px] bg-[#ecfdf3] text-[#027a48] text-[10px] font-black">active</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-[4px] bg-[#eff8ff] text-blue-brand text-[10px] font-black">Business profile page</span>
                </div>
              </div>

              {/* Circular Score Indicator */}
              <div className="absolute top-[16px] right-[16px] w-[54px] h-[54px] rounded-full flex items-center justify-center bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="15" fill="none" className="stroke-[#eef2f7]" strokeWidth="4" />
                  <circle cx="18" cy="18" r="15" fill="none" className="stroke-[#039855]" strokeWidth="4" strokeDasharray="94.2" strokeDashoffset={94.2 - (94.2 * 0.73)} strokeLinecap="round" />
                </svg>
                <span className="absolute text-navy text-[13px] font-black">73%</span>
              </div>

              {/* Criteria Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-[8px] mt-[20px]">
                {[
                  { label: 'Business name', state: 'Ready' },
                  { label: 'Email', state: 'Ready' },
                  { label: 'Phone', state: 'Missing' },
                  { label: 'Category', state: 'Ready' },
                  { label: 'Location', state: 'Ready' },
                  { label: 'Profile image', state: 'Missing' },
                  { label: 'Cover photo/video', state: 'Ready' },
                  { label: 'Description', state: 'Ready' },
                  { label: 'Products', state: 'Ready' },
                  { label: 'Posts', state: 'Missing' },
                  { label: 'Clips', state: 'Ready' }
                ].map((item, i) => (
                  <div key={i} className={`rounded-[6px] border px-[10px] py-[8px] ${item.state === 'Ready' ? 'bg-[#f6fef9] border-[#a6f4c5]' : 'bg-[#fff7ed] border-[#fedf89]'}`}>
                    <span className={`block text-[11px] font-black leading-tight ${item.state === 'Ready' ? 'text-[#05603a]' : 'text-[#b54708]'}`}>{item.label}</span>
                    <span className={`block text-[10px] font-extrabold leading-tight mt-0.5 ${item.state === 'Ready' ? 'text-[#05603a]' : 'text-[#b54708]'}`}>{item.state}</span>
                  </div>
                ))}
              </div>

              {/* Note Input */}
              <textarea 
                className="w-full border border-line rounded-[8px] mt-[16px] bg-white text-navy outline-none p-[12px] text-[13px] font-semibold focus:border-orange-brand/50 focus:ring-2 focus:ring-orange-brand/20 transition-all resize-none h-[64px]"
                placeholder="Admin note for this approval..."
              />
            </div>

            {/* Card Footer Actions */}
            <div className="flex flex-wrap items-center justify-end gap-[8px] bg-[#f8fafc] border-t border-line p-[12px_16px]">
              <button className="min-h-[28px] rounded-[6px] border border-line bg-white text-navy inline-flex items-center gap-[4px] px-[8px] text-[11px] font-extrabold hover:bg-slate-50">
                <svg viewBox="0 0 24 24" className="w-[12px] h-[12px] fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                Open profile
              </button>
              <button className="min-h-[28px] rounded-[6px] border border-line bg-white text-navy inline-flex items-center gap-[4px] px-[8px] text-[11px] font-extrabold hover:bg-slate-50">
                <svg viewBox="0 0 24 24" className="w-[12px] h-[12px] fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                Details
              </button>
              <button className="min-h-[28px] rounded-[6px] border border-[#a6f4c5] bg-[#f6fef9] text-[#05603a] inline-flex items-center gap-[4px] px-[8px] text-[11px] font-extrabold hover:bg-[#ecfdf3]">
                <svg viewBox="0 0 24 24" className="w-[12px] h-[12px] fill-none stroke-current stroke-[3px] stroke-linecap-round stroke-linejoin-round"><path d="M20 6 9 17l-5-5"/></svg>
                Approved
              </button>
              <button className="min-h-[28px] rounded-[6px] border border-line bg-white text-[#475467] inline-flex items-center gap-[4px] px-[8px] text-[11px] font-extrabold hover:bg-slate-50">
                <svg viewBox="0 0 24 24" className="w-[12px] h-[12px] fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                Reject
              </button>
              <button className="min-h-[28px] rounded-[6px] border border-line bg-white text-[#475467] inline-flex items-center gap-[4px] px-[8px] text-[11px] font-extrabold hover:bg-slate-50">
                <svg viewBox="0 0 24 24" className="w-[12px] h-[12px] fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"><path d="M20 6 9 17l-5-5"/></svg>
                Save note
              </button>
              <button className="min-h-[28px] rounded-[6px] border border-[#fecaca] bg-[#fff1f2] text-[#be123c] inline-flex items-center gap-[4px] px-[8px] text-[11px] font-extrabold hover:bg-[#ffe4e6]">
                <svg viewBox="0 0 24 24" className="w-[12px] h-[12px] fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"><path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                Delete business
              </button>
            </div>
          </div>

          {/* Completeness Table */}
          <div className="overflow-x-auto -mx-[14px] px-[14px]">
            <table className="w-full min-w-[600px] border-collapse text-left">
              <thead>
                <tr>
                  <th className="border-b border-line bg-white text-[#667085] text-[10.5px] uppercase tracking-[0.06em] font-black p-[10px_9px]">Business</th>
                  <th className="border-b border-line bg-white text-[#667085] text-[10.5px] uppercase tracking-[0.06em] font-black p-[10px_9px]">Score</th>
                  <th className="border-b border-line bg-white text-[#667085] text-[10.5px] uppercase tracking-[0.06em] font-black p-[10px_9px]">Missing fields</th>
                  <th className="border-b border-line bg-white text-[#667085] text-[10.5px] uppercase tracking-[0.06em] font-black p-[10px_9px]">Status</th>
                  <th className="border-b border-line bg-white text-[#667085] text-[10.5px] uppercase tracking-[0.06em] font-black p-[10px_9px]">Source</th>
                  <th className="border-b border-line bg-white text-[#667085] text-[10.5px] uppercase tracking-[0.06em] font-black p-[10px_9px]">Open</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-[#344054] text-[12.5px] leading-[1.35] font-semibold hover:bg-[#fbfcff] transition-colors">
                  <td className="p-[14px_9px] font-bold text-navy uppercase">HONEY SHOP</td>
                  <td className="p-[14px_9px] font-bold">73%</td>
                  <td className="p-[14px_9px]">Phone, Profile image, Posts</td>
                  <td className="p-[14px_9px]">
                    <span className="inline-flex items-center px-[6px] py-[2px] rounded-[4px] bg-[#ecfdf3] text-[#027a48] text-[10.5px] font-black">active</span>
                  </td>
                  <td className="p-[14px_9px] text-[#667085]">Business profile page</td>
                  <td className="p-[14px_9px]">
                    <a href="#" className="font-bold text-navy underline underline-offset-2 hover:text-orange-brand">Open</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
      
    </div>
  )
}
