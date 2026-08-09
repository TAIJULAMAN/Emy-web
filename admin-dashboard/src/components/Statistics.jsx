import React from 'react';

export default function Statistics() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      
      {/* Repeated top section from Overview */}
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

      {/* 3 Growth Charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] mb-[14px]">
        {/* Growth by day */}
        <div className="border border-line rounded-[12px] bg-white overflow-hidden shadow-[0_10px_24px_rgba(16,24,40,0.04)]">
          <div className="min-h-[50px] border-b border-line bg-[#fbfcff] p-[12px_14px]">
            <h2 className="m-0 text-navy text-[14px] leading-[1.1] font-black">Growth by day</h2>
            <p className="m-0 mt-1 text-muted text-[11.5px] leading-[1.3] font-semibold">Connected records added across the last 7 days.</p>
          </div>
          <div className="p-[14px] pt-[20px]">
            <div className="flex items-end gap-[7px] min-h-[180px] border border-line rounded-[12px] bg-gradient-to-b from-white to-[#fbfcff] p-[16px_10px_10px]">
              {[
                { label: 'Mon', val: 0 }, { label: 'Tue', val: 0 }, { label: 'Wed', val: 0 }, 
                { label: 'Thu', val: 0 }, { label: 'Fri', val: 0 }, { label: 'Sat', val: 0 }, { label: 'Sun', val: 10 }
              ].map((d, i) => (
                <div key={i} className="flex-1 flex flex-col items-center justify-end gap-[7px]">
                  <span 
                    className="block w-full rounded-t-[8px] rounded-b-[3px] bg-gradient-to-b from-blue-brand to-[#72b7ff] shadow-[0_10px_18px_rgba(21,112,239,0.13)] transition-all"
                    style={{ height: d.val > 0 ? `${(d.val / 10) * 120}px` : '8px', minHeight: '8px' }}
                  />
                  <div className="text-center">
                    <b className="block text-navy text-[12px] leading-none font-black">{d.val}</b>
                    <small className="block text-[#667085] text-[10px] leading-[1.15] font-extrabold mt-1">{d.label}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Growth by week */}
        <div className="border border-line rounded-[12px] bg-white overflow-hidden shadow-[0_10px_24px_rgba(16,24,40,0.04)]">
          <div className="min-h-[50px] border-b border-line bg-[#fbfcff] p-[12px_14px]">
            <h2 className="m-0 text-navy text-[14px] leading-[1.1] font-black">Growth by week</h2>
            <p className="m-0 mt-1 text-muted text-[11.5px] leading-[1.3] font-semibold">Connected records grouped across the last 6 weeks.</p>
          </div>
          <div className="p-[14px] pt-[20px]">
            <div className="flex items-end gap-[7px] min-h-[180px] border border-line rounded-[12px] bg-gradient-to-b from-white to-[#fbfcff] p-[16px_10px_10px]">
              {[
                { label: 'W38', val: 0 }, { label: 'W39', val: 0 }, { label: 'W40', val: 0 }, 
                { label: 'W41', val: 0 }, { label: 'W42', val: 0 }, { label: 'W43', val: 10 }
              ].map((d, i) => (
                <div key={i} className="flex-1 flex flex-col items-center justify-end gap-[7px]">
                  <span 
                    className="block w-full rounded-t-[8px] rounded-b-[3px] bg-gradient-to-b from-blue-brand to-[#72b7ff] shadow-[0_10px_18px_rgba(21,112,239,0.13)] transition-all"
                    style={{ height: d.val > 0 ? `${(d.val / 10) * 120}px` : '8px', minHeight: '8px' }}
                  />
                  <div className="text-center">
                    <b className="block text-navy text-[12px] leading-none font-black">{d.val}</b>
                    <small className="block text-[#667085] text-[10px] leading-[1.15] font-extrabold mt-1">{d.label}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Growth by year */}
        <div className="border border-line rounded-[12px] bg-white overflow-hidden shadow-[0_10px_24px_rgba(16,24,40,0.04)]">
          <div className="min-h-[50px] border-b border-line bg-[#fbfcff] p-[12px_14px]">
            <h2 className="m-0 text-navy text-[14px] leading-[1.1] font-black">Growth by year</h2>
            <p className="m-0 mt-1 text-muted text-[11.5px] leading-[1.3] font-semibold">Longer-term platform growth across recent years.</p>
          </div>
          <div className="p-[14px] pt-[20px]">
            <div className="flex items-end gap-[7px] min-h-[180px] border border-line rounded-[12px] bg-gradient-to-b from-white to-[#fbfcff] p-[16px_10px_10px]">
              {[
                { label: '2022', val: 0 }, { label: '2023', val: 0 }, { label: '2024', val: 0 }, 
                { label: '2025', val: 0 }, { label: '2026', val: 10 }
              ].map((d, i) => (
                <div key={i} className="flex-1 flex flex-col items-center justify-end gap-[7px]">
                  <span 
                    className="block w-full rounded-t-[8px] rounded-b-[3px] bg-gradient-to-b from-blue-brand to-[#72b7ff] shadow-[0_10px_18px_rgba(21,112,239,0.13)] transition-all"
                    style={{ height: d.val > 0 ? `${(d.val / 10) * 120}px` : '8px', minHeight: '8px' }}
                  />
                  <div className="text-center">
                    <b className="block text-navy text-[12px] leading-none font-black">{d.val}</b>
                    <small className="block text-[#667085] text-[10px] leading-[1.15] font-extrabold mt-1">{d.label}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Platform shape & Admin health */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[14px] mb-[14px]">
        {/* Platform shape */}
        <div className="border border-line rounded-[12px] bg-white overflow-hidden shadow-[0_10px_24px_rgba(16,24,40,0.04)]">
          <div className="min-h-[50px] border-b border-line bg-[#fbfcff] p-[12px_14px]">
            <h2 className="m-0 text-navy text-[14px] leading-[1.1] font-black">Platform shape</h2>
            <p className="m-0 mt-1 text-muted text-[11.5px] leading-[1.3] font-semibold">Customers, businesses, content, and notifications currently visible to admin.</p>
          </div>
          <div className="p-[14px]">
            <div className="flex items-end gap-[10px] min-h-[220px] border border-line rounded-[12px] bg-gradient-to-b from-white to-[#fbfcff] p-[18px_12px_10px]">
              {[
                { label: 'Customer accounts', val: 1 },
                { label: 'Business accounts', val: 1 },
                { label: 'Products', val: 6 },
                { label: 'Posts', val: 0 },
                { label: 'Notifications', val: 0 }
              ].map((d, i) => (
                <div key={i} className="flex-1 flex flex-col items-center justify-end gap-[8px]">
                  <span 
                    className="block w-full rounded-t-[8px] rounded-b-[3px] bg-gradient-to-b from-orange-brand to-[#ff9f43] shadow-[0_10px_18px_rgba(255,106,0,0.16)] transition-all"
                    style={{ height: d.val > 0 ? `${(d.val / 6) * 140}px` : '8px', minHeight: '8px' }}
                  />
                  <div className="text-center">
                    <b className="block text-navy text-[13px] leading-none font-black">{d.val}</b>
                    <small className="block text-[#667085] text-[11px] leading-[1.2] font-extrabold mt-1">{d.label}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Admin health */}
        <div className="border border-line rounded-[12px] bg-white overflow-hidden shadow-[0_10px_24px_rgba(16,24,40,0.04)]">
          <div className="min-h-[50px] border-b border-line bg-[#fbfcff] p-[12px_14px]">
            <h2 className="m-0 text-navy text-[14px] leading-[1.1] font-black">Admin health</h2>
            <p className="m-0 mt-1 text-muted text-[11.5px] leading-[1.3] font-semibold">What needs your attention right now.</p>
          </div>
          <div className="p-[14px] flex flex-col gap-[10px]">
            {[
              { title: 'Approved or active records', pct: '80%', desc: '8 of 10 connected records are active or approved.', fill: 'w-[80%]' },
              { title: 'Review load', pct: '0%', desc: '0 records need review, approval, or checking.', fill: 'w-0' },
              { title: 'Connected source coverage', pct: '60%', desc: '12 of 20 expected local sources have saved data.', fill: 'w-[60%]' },
              { title: 'Content coverage', pct: '80%', desc: '8 content records are feeding customer-facing pages.', fill: 'w-[80%]' },
            ].map((item, i) => (
              <div key={i} className="border border-line rounded-[10px] bg-white p-[11px] flex flex-col gap-[8px]">
                <div className="flex justify-between gap-[10px] text-navy text-[13px] font-black">
                  <span>{item.title}</span>
                  <span>{item.pct}</span>
                </div>
                <div className="h-[9px] rounded-full bg-[#eef2f7] overflow-hidden">
                  <span className={`block h-full rounded-full bg-gradient-to-r from-blue-brand to-[#5aa7ff] ${item.fill}`}></span>
                </div>
                <div className="text-[#667085] text-[12px] leading-[1.35] font-semibold">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Operational totals & Status mix */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[14px]">
        {/* Operational totals */}
        <div className="border border-line rounded-[12px] bg-white overflow-hidden shadow-[0_10px_24px_rgba(16,24,40,0.04)]">
          <div className="min-h-[50px] border-b border-line bg-[#fbfcff] p-[12px_14px]">
            <h2 className="m-0 text-navy text-[14px] leading-[1.1] font-black">Operational totals</h2>
            <p className="m-0 mt-1 text-muted text-[11.5px] leading-[1.3] font-semibold">The numbers you need before making admin decisions.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] border-collapse text-left">
              <thead>
                <tr>
                  <th className="border-b border-line bg-[#f8fafc] text-[#667085] text-[10.5px] uppercase tracking-[0.06em] font-black p-[10px_9px]">Metric</th>
                  <th className="border-b border-line bg-[#f8fafc] text-[#667085] text-[10.5px] uppercase tracking-[0.06em] font-black p-[10px_9px]">Value</th>
                  <th className="border-b border-line bg-[#f8fafc] text-[#667085] text-[10.5px] uppercase tracking-[0.06em] font-black p-[10px_9px]">Meaning</th>
                  <th className="border-b border-line bg-[#f8fafc] text-[#667085] text-[10.5px] uppercase tracking-[0.06em] font-black p-[10px_9px]">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { m: 'People records', v: '2', mean: 'Customers, signups, and business profiles' },
                  { m: 'Customer accounts', v: '1', mean: 'Customer signups and customer profile records' },
                  { m: 'Business accounts', v: '1', mean: 'Business signups and business profile records' },
                  { m: 'Content records', v: '8', mean: 'Products, posts, clips, jobs, events, notifications' },
                  { m: 'Pending/review records', v: '', mean: 'Needs admin action' },
                  { m: 'Saved data keys', v: '89', mean: 'Local EMY storage connected to this admin' },
                  { m: 'Snapshots saved', v: '', mean: 'Manual backend snapshots in this browser' },
                ].map((row, i) => (
                  <tr key={i} className="text-[#344054] text-[12.5px] leading-[1.35] font-semibold border-b border-line last:border-0">
                    <td className="p-[10px_9px]">{row.m}</td>
                    <td className="p-[10px_9px]">{row.v}</td>
                    <td className="p-[10px_9px]">{row.mean}</td>
                    <td className="p-[10px_9px]">
                      <div className="flex gap-[7px]">
                        <button className="min-h-[28px] rounded-[999px] border border-line bg-white text-navy inline-flex items-center justify-center gap-[6px] px-[9px] text-[11px] font-extrabold hover:bg-slate-50">
                          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[14px] h-[14px] fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"><path d="M8 6h10v10M18 6 7 17"/><path d="M6 8v10h10"/></svg>
                          Open
                        </button>
                        <button className="min-h-[28px] rounded-[999px] border border-line bg-white text-navy inline-flex items-center justify-center gap-[6px] px-[9px] text-[11px] font-extrabold hover:bg-slate-50">
                          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[14px] h-[14px] fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"><path d="M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5Z"/><path d="M12 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"/></svg>
                          Details
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Status mix */}
        <div className="border border-line rounded-[12px] bg-white overflow-hidden shadow-[0_10px_24px_rgba(16,24,40,0.04)]">
          <div className="min-h-[50px] border-b border-line bg-[#fbfcff] p-[12px_14px]">
            <h2 className="m-0 text-navy text-[14px] leading-[1.1] font-black">Status mix</h2>
            <p className="m-0 mt-1 text-muted text-[11.5px] leading-[1.3] font-semibold">Approved work compared with admin workload and saved data.</p>
          </div>
          <div className="p-[14px]">
            <div className="flex items-end gap-[10px] min-h-[260px] border border-line rounded-[12px] bg-gradient-to-b from-white to-[#fbfcff] p-[18px_12px_10px]">
              {[
                { label: 'Approved/active', val: 8 },
                { label: 'Needs review', val: 0 },
                { label: 'Data keys', val: 89 },
                { label: 'Snapshots', val: 0 }
              ].map((d, i) => (
                <div key={i} className="flex-1 flex flex-col items-center justify-end gap-[8px]">
                  <span 
                    className="block w-full rounded-t-[8px] rounded-b-[3px] bg-gradient-to-b from-orange-brand to-[#ff9f43] shadow-[0_10px_18px_rgba(255,106,0,0.16)] transition-all"
                    style={{ height: d.val > 0 ? `${(d.val / 89) * 180}px` : '8px', minHeight: '8px' }}
                  />
                  <div className="text-center">
                    <b className="block text-navy text-[13px] leading-none font-black">{d.val}</b>
                    <small className="block text-[#667085] text-[11px] leading-[1.2] font-extrabold mt-1">{d.label}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

