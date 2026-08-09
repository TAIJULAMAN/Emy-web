import { useState } from 'react'
import Overview from './components/Overview'
import Statistics from './components/Statistics'
import Approvals from './components/Approvals'
import Journey from './components/Journey'
import Completeness from './components/Completeness'
import Services from './components/Services'
import CustomerActivity from './components/CustomerActivity'
import Moderation from './components/Moderation'
import SearchAnalytics from './components/SearchAnalytics'
import Revenue from './components/Revenue'
import Audit from './components/Audit'
import ReviewQueue from './components/ReviewQueue'
import People from './components/People'
import Content from './components/Content'
import HomeBanner from './components/HomeBanner'
import SavedData from './components/SavedData'
import AskEmy from './components/AskEmy'

const tabs = [
  { id: 'overview', label: 'Overview', desc: 'Whole site pulse', badge: 10 },
  { id: 'statistics', label: 'Statistics', desc: 'Everything important in one view', badge: 0 },
  { id: 'approvals', label: 'Approvals', desc: 'Business approval center', badge: 1 },
  { id: 'journey', label: 'User journey', desc: 'Signup to approval funnel', badge: 5 },
  { id: 'completeness', label: 'Completeness', desc: 'Business profile quality scores', badge: 1 },
  { id: 'services', label: 'Services', desc: 'EMY service provider profiles', badge: 0 },
  { id: 'customerActivity', label: 'Customer activity', desc: 'Customer actions and engagement', badge: 265 },
  { id: 'moderation', label: 'Moderation', desc: 'Content and report queue', badge: 2 },
  { id: 'analytics', label: 'Search & Ask EMY', desc: 'Search and AI usage', badge: 4 },
  { id: 'revenue', label: 'Revenue / plans', desc: 'Plans, ads, invoices', badge: 5 },
  { id: 'audit', label: 'Audit log', desc: 'Admin notes and actions', badge: 0 },
  { id: 'review', label: 'Review queue', desc: 'Items that need admin action', badge: 0 },
  { id: 'people', label: 'People', desc: 'Customers and businesses', badge: 2 },
  { id: 'content', label: 'Content', desc: 'Products, posts, clips, jobs, events', badge: 8 },
  { id: 'banner', label: 'Home banner', desc: 'Customer home campaign banner', badge: 0 },
  { id: 'data', label: 'Saved data', desc: 'Raw connected storage', badge: 89 },
  { id: 'ai', label: 'Ask EMY', desc: 'AI backend status', badge: '' }
];

export default function App() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] bg-bg text-ink font-sans">
      
      {/* Sidebar */}
      <aside className="border-r border-line bg-white p-4 pb-4 lg:border-b-0 border-b">
        <div className="flex items-center gap-2.5 px-1.5 pb-4 mb-2">
          <span className="w-9 h-9 rounded-[10px] flex items-center justify-center bg-orange-brand text-white font-black text-lg">
            M
          </span>
          <div>
            <strong className="block text-navy text-[15px] leading-[1.1] font-bold">EMY Admin</strong>
            <span className="block mt-[3px] text-muted text-xs font-semibold">Connected backend view</span>
          </div>
        </div>
        
        <nav className="grid gap-1.5 lg:grid-cols-1 grid-cols-3 sm:grid-cols-4">
          {tabs.map((tab) => {
            const isActive = activeTab.id === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`
                  w-full min-h-[42px] rounded-[10px] flex items-center justify-between gap-2.5 px-2.5 text-left text-[13px] font-extrabold border transition-colors
                  ${isActive 
                    ? 'bg-orange-50 border-orange-brand/30 text-orange-700' 
                    : 'bg-transparent border-transparent text-[#344054] hover:bg-slate-50 hover:border-line'
                  }
                `}
              >
                <span>{tab.label}</span>
                {tab.badge !== '' && (
                  <small className={`min-w-[24px] h-[22px] rounded-full flex items-center justify-center text-[11px] font-black ${isActive ? 'bg-white text-orange-700' : 'bg-[#eef2f7] text-[#475467]'}`}>
                    {tab.badge}
                  </small>
                )}
              </button>
            )
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="min-w-0 flex flex-col">
        <header className="sticky top-0 z-10 min-h-[68px] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line bg-white/92 backdrop-blur-[12px] px-[18px] py-3">
          <div>
            <h1 className="m-0 text-navy text-[22px] leading-[1.1] font-black">{activeTab.label}</h1>
            <p className="m-0 mt-1 text-muted text-[13px] leading-[1.35] font-semibold">{activeTab.desc}</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-start sm:justify-end items-center">
            <a href="#" className="h-[34px] rounded-full border border-line bg-white text-navy inline-flex items-center justify-center px-3 text-xs font-extrabold no-underline hover:bg-slate-50">Customer app</a>
            <a href="#" className="h-[34px] rounded-full border border-line bg-white text-navy inline-flex items-center justify-center px-3 text-xs font-extrabold no-underline hover:bg-slate-50">Business profile</a>
            <button className="h-[34px] rounded-full border border-orange-brand bg-orange-brand text-white inline-flex items-center justify-center px-3 text-xs font-extrabold hover:bg-[#e65c00]">Save snapshot</button>
            <button className="h-[34px] rounded-full border border-line bg-white text-navy inline-flex items-center justify-center px-3 text-xs font-extrabold hover:bg-slate-50">Sync cloud data</button>
          </div>
        </header>
        
        <section className="p-[18px] flex-1 overflow-auto">
          {activeTab.id === 'overview' && <Overview />}
          {activeTab.id === 'statistics' && <Statistics />}
          {activeTab.id === 'approvals' && <Approvals />}
          {activeTab.id === 'journey' && <Journey />}
          {activeTab.id === 'completeness' && <Completeness />}
          {activeTab.id === 'services' && <Services />}
          {activeTab.id === 'customerActivity' && <CustomerActivity />}
          {activeTab.id === 'moderation' && <Moderation />}
          {activeTab.id === 'analytics' && <SearchAnalytics />}
          {activeTab.id === 'revenue' && <Revenue />}
          {activeTab.id === 'audit' && <Audit />}
          {activeTab.id === 'review' && <ReviewQueue />}
          {activeTab.id === 'people' && <People />}
          {activeTab.id === 'content' && <Content />}
          {activeTab.id === 'banner' && <HomeBanner />}
          {activeTab.id === 'data' && <SavedData />}
          {activeTab.id === 'ai' && <AskEmy />}
          {activeTab.id !== 'overview' && activeTab.id !== 'statistics' && activeTab.id !== 'approvals' && activeTab.id !== 'journey' && activeTab.id !== 'completeness' && activeTab.id !== 'services' && activeTab.id !== 'customerActivity' && activeTab.id !== 'moderation' && activeTab.id !== 'analytics' && activeTab.id !== 'revenue' && activeTab.id !== 'audit' && activeTab.id !== 'review' && activeTab.id !== 'people' && activeTab.id !== 'content' && activeTab.id !== 'banner' && activeTab.id !== 'data' && activeTab.id !== 'ai' && (
            <div className="border border-line rounded-xl bg-white p-8 text-center text-muted font-bold">
              {activeTab.label} - Coming Soon
            </div>
          )}
        </section>
      </main>

    </div>
  )
}
