import React from 'react';

export default function CustomerActivity() {
  
  // Generating mock activity data to simulate the long list in the screenshot
  const generateMockActivity = (count) => {
    const activities = [
      { action: 'Viewed business profile', detail: 'HONEY SHOP', time: '2 mins ago', type: 'view' },
      { action: 'Searched for', detail: '"hair salon near me"', time: '15 mins ago', type: 'search' },
      { action: 'Saved a clip', detail: 'From "Tech Innovators"', time: '1 hour ago', type: 'save' },
      { action: 'Liked a post', detail: 'By "Local Cafe"', time: '2 hours ago', type: 'like' },
      { action: 'Updated profile', detail: 'Changed profile image', time: '3 hours ago', type: 'update' },
      { action: 'Viewed product', detail: 'Organic Honey 500g', time: '5 hours ago', type: 'view' },
      { action: 'Signed up', detail: 'New customer account created', time: '1 day ago', type: 'signup' },
    ];
    
    const result = [];
    for(let i = 0; i < count; i++) {
      const randomActivity = activities[Math.floor(Math.random() * activities.length)];
      result.push({
        id: i,
        user: `customer_${Math.floor(Math.random() * 9000) + 1000}@emy.local`,
        ...randomActivity
      });
    }
    return result;
  };

  const activityData = generateMockActivity(50); // Generating a long list to match the screenshot density

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
          <h2 className="m-0 text-navy text-[15px] leading-[1.1] font-black">Customer activity log</h2>
          <p className="m-0 mt-1 text-muted text-[11.5px] leading-[1.3] font-semibold">Recent customer actions, views, searches, and engagement events across the platform.</p>
        </div>

        <div className="p-0">
          <div className="flex flex-col">
            {activityData.map((item) => (
              <div key={item.id} className="flex items-start gap-[12px] p-[12px_14px] border-b border-line last:border-0 hover:bg-[#fbfcff] transition-colors">
                
                {/* Icon/Avatar Placeholder */}
                <div className="w-[32px] h-[32px] rounded-full bg-[#f1f5f9] border border-line flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[12px] font-black text-muted uppercase">
                    {item.user.charAt(0)}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-[8px]">
                    <span className="text-navy text-[13px] font-bold truncate">{item.user}</span>
                    <span className="text-muted text-[11px] font-semibold whitespace-nowrap">{item.time}</span>
                  </div>
                  <div className="mt-[2px] flex items-center gap-[6px] flex-wrap">
                    <span className="text-[#344054] text-[12.5px] font-semibold">{item.action}</span>
                    <span className="inline-flex items-center px-[6px] py-[2px] rounded-[4px] bg-[#eff8ff] border border-[#b2ddff] text-blue-brand text-[10px] font-black truncate max-w-[200px]">
                      {item.detail}
                    </span>
                  </div>
                  
                  {/* Simulate the small blocks/pills seen in some rows in the screenshot */}
                  {(item.type === 'view' || item.type === 'search') && (
                    <div className="mt-[8px] flex gap-[4px] flex-wrap">
                      <div className="h-[20px] w-[30px] rounded-[4px] bg-[#f1f5f9] border border-line"></div>
                      <div className="h-[20px] w-[40px] rounded-[4px] bg-[#f1f5f9] border border-line"></div>
                      <div className="h-[20px] w-[25px] rounded-[4px] bg-[#f1f5f9] border border-line"></div>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
      
    </div>
  )
}
