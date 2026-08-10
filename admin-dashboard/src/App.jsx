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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col lg:grid lg:grid-cols-[260px_minmax(0,1fr)] bg-slate-50 text-slate-900 font-sans">
      
      {/* Mobile Header (Only visible on small screens) */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-orange-500 text-white font-black text-sm shadow-sm">
            M
          </span>
          <strong className="text-slate-900 text-sm font-black tracking-tight">EMY Admin</strong>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-200 active:bg-slate-100 transition-colors"
        >
          {isMobileMenuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Sidebar Overlay (Mobile) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden transition-opacity" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 h-[100dvh] w-[260px] bg-white border-r border-slate-200 z-50 transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl lg:shadow-none
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="hidden lg:flex items-center gap-3 p-6 shrink-0 border-b border-slate-100 bg-white">
          <span className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600 text-white font-black text-lg shadow-md">
            M
          </span>
          <div>
            <strong className="block text-slate-900 text-base leading-tight font-black tracking-tight">EMY Admin</strong>
            <span className="block mt-1 text-slate-400 text-[10px] uppercase tracking-widest font-bold">Connected Backend</span>
          </div>
        </div>
        
        {/* Mobile menu header */}
        <div className="flex lg:hidden items-center justify-between p-4 border-b border-slate-100 shrink-0 bg-white">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600 text-white font-black text-sm shadow-md">
              M
            </span>
            <strong className="text-slate-900 text-sm font-black">Menu</strong>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200">
             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar bg-white">
          {tabs.map((tab) => {
            const isActive = activeTab.id === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab);
                  setIsMobileMenuOpen(false);
                }}
                className={`
                  w-full min-h-[44px] rounded-xl flex items-center justify-between gap-3 px-3.5 text-left text-[13px] font-bold transition-all
                  ${isActive 
                    ? 'bg-orange-50 text-orange-700 shadow-sm ring-1 ring-orange-200/50' 
                    : 'bg-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }
                `}
              >
                <span>{tab.label}</span>
                {tab.badge !== '' && (
                  <small className={`min-w-[24px] h-[24px] rounded-full flex items-center justify-center text-[10px] font-black ${isActive ? 'bg-white text-orange-700 shadow-sm' : 'bg-slate-100 text-slate-500'}`}>
                    {tab.badge}
                  </small>
                )}
              </button>
            )
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="min-w-0 flex flex-col flex-1 relative">
        <header className="sticky top-[65px] lg:top-0 z-20 min-h-[72px] flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 bg-white/80 backdrop-blur-md px-5 lg:px-8 py-4">
          <div>
            <h1 className="m-0 text-slate-900 text-2xl leading-none font-black tracking-tight">{activeTab.label}</h1>
            <p className="m-0 mt-1.5 text-slate-500 text-[13px] font-medium">{activeTab.desc}</p>
          </div>
          <div className="flex flex-wrap gap-2.5 justify-start md:justify-end items-center shrink-0">
            <a href="#" className="h-9 rounded-xl border border-slate-200 bg-white text-slate-700 inline-flex items-center justify-center px-3.5 text-xs font-bold no-underline hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">Customer app</a>
            <a href="#" className="h-9 rounded-xl border border-slate-200 bg-white text-slate-700 inline-flex items-center justify-center px-3.5 text-xs font-bold no-underline hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">Business profile</a>
            <button className="h-9 rounded-xl bg-slate-900 text-white inline-flex items-center justify-center px-4 text-xs font-bold hover:bg-slate-800 transition-all shadow-md">Sync cloud data</button>
            <button className="h-9 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white inline-flex items-center justify-center px-4 text-xs font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-md">Save snapshot</button>
          </div>
        </header>
        
        <section className="p-4 md:p-6 lg:p-8 flex-1 overflow-auto bg-slate-50">
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
            <div className="border border-dashed border-slate-300 rounded-2xl bg-white p-12 text-center flex flex-col items-center justify-center max-w-lg mx-auto mt-10">
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 mb-4">
                 <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="text-slate-700 font-bold text-lg">{activeTab.label}</h3>
              <p className="text-slate-500 text-sm mt-1 mb-4">This section is coming soon.</p>
              <button 
                onClick={() => setActiveTab(tabs[0])}
                className="h-9 px-4 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-colors"
              >
                Return to Overview
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Add a global style block for the custom scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background: #94a3b8;
        }
      `}} />
    </div>
  )
}
