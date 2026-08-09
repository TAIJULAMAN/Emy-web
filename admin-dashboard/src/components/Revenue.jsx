import React from 'react';

export default function Revenue() {
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

      {/* Row 1: Primary Metrics */}
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

      {/* Row 2: Revenue Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[12px] mb-[14px]">
        {[
          { label: 'Business plans', val: '1', desc: 'Free, Pro, and future package records.' },
          { label: 'Subscriptions', val: '1', desc: 'Recurring business access when payments are connected.' },
          { label: 'Featured and ads', val: '2', desc: 'Featured listings and ad placements.' },
          { label: 'Invoices', val: '1', desc: 'Business invoice placeholders or saved billing rows.' },
        ].map((metric, i) => (
          <div key={i} className="border border-line rounded-[12px] bg-white p-[14px] shadow-[0_10px_24px_rgba(16,24,40,0.04)]">
            <small className="block text-navy text-[13px] font-black">{metric.label}</small>
            <strong className="block mt-[6px] text-orange-brand text-[24px] leading-none font-black">{metric.val}</strong>
            <span className="block mt-[8px] text-[#667085] text-[12px] leading-[1.35] font-semibold">{metric.desc}</span>
          </div>
        ))}
      </div>

      {/* Main Table: Revenue and plan placeholder */}
      <div className="border border-line rounded-[12px] bg-white overflow-hidden shadow-[0_10px_24px_rgba(16,24,40,0.04)]">
        
        <div className="min-h-[50px] border-b border-line bg-[#fbfcff] p-[12px_14px]">
          <h2 className="m-0 text-navy text-[15px] leading-[1.1] font-black">Revenue and plan placeholder</h2>
          <p className="m-0 mt-1 text-muted text-[11.5px] leading-[1.3] font-semibold">Ready for business plans, subscriptions, featured listings, ads, and invoices even before payments are live.</p>
        </div>

        <div className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr>
                  <th className="border-b border-line bg-white text-[#667085] text-[10.5px] uppercase tracking-[0.06em] font-black p-[10px_14px]">Item</th>
                  <th className="border-b border-line bg-white text-[#667085] text-[10.5px] uppercase tracking-[0.06em] font-black p-[10px_14px]">Type</th>
                  <th className="border-b border-line bg-white text-[#667085] text-[10.5px] uppercase tracking-[0.06em] font-black p-[10px_14px]">Amount</th>
                  <th className="border-b border-line bg-white text-[#667085] text-[10.5px] uppercase tracking-[0.06em] font-black p-[10px_14px]">Status</th>
                  <th className="border-b border-line bg-white text-[#667085] text-[10.5px] uppercase tracking-[0.06em] font-black p-[10px_14px]">Source</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: 'Free business profile', type: 'Business plan', amount: '0', status: 'placeholder', source: 'Plan placeholder' },
                  { item: 'Pro business tools', type: 'Subscription', amount: 'TBD', status: 'not connected', source: 'Future billing' },
                  { item: 'Featured listing', type: 'Featured listing', amount: 'TBD', status: 'not connected', source: 'Future promotion' },
                  { item: 'Local ad campaign', type: 'Ad campaign', amount: 'TBD', status: 'not connected', source: 'Future ads' },
                  { item: 'Business invoice', type: 'Invoice', amount: 'TBD', status: 'not connected', source: 'Future invoices' },
                ].map((row, i) => (
                  <tr key={i} className="text-[#344054] text-[12.5px] leading-[1.35] font-semibold border-b border-line last:border-0 hover:bg-[#fbfcff] transition-colors">
                    <td className="p-[14px] font-bold text-navy">{row.item}</td>
                    <td className="p-[14px] font-bold text-navy">{row.type}</td>
                    <td className="p-[14px] font-bold text-navy">{row.amount}</td>
                    <td className="p-[14px]">
                      <span className="inline-flex items-center px-[6px] py-[2px] rounded-[999px] border border-[#fedf89] bg-[#fff7ed] text-[#b54708] text-[9.5px] font-black uppercase tracking-wide">
                        {row.status}
                      </span>
                    </td>
                    <td className="p-[14px]">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
      
    </div>
  )
}
