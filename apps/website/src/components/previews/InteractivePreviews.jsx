import React from 'react';
import { Search } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// PR Pulse – Dashboard Preview
// ─────────────────────────────────────────────────────────────────────────────

const prs = [
  { id: '1842', title: 'Refactor release gate checks',     repo: 'platform-api',  author: 'Alice Freeman', status: 'Active',  checks: 'succeeded', age: '4h'  },
  { id: '1837', title: 'Harden terraform validation step', repo: 'iac-core',       author: 'Bob Smith',    status: 'At Risk', checks: 'pending',   age: '31h' },
  { id: '1829', title: 'Fix reviewer assignment drift',    repo: 'web-client',     author: 'Charlie Day',  status: 'Stuck',   checks: 'failed',    age: '82h' },
];

const checkStyle = {
  succeeded: { icon: '✓', cls: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
  pending:   { icon: '○', cls: 'text-amber-600 bg-amber-50 border-amber-100' },
  failed:    { icon: '✗', cls: 'text-rose-600 bg-rose-50 border-rose-100' },
};

const staleBar   = { Active: 'bg-emerald-500', 'At Risk': 'bg-amber-500', Stuck: 'bg-rose-500' };
const statusText = { Active: 'text-emerald-600', 'At Risk': 'text-amber-600', Stuck: 'text-rose-600' };
const statusDot  = { Active: 'bg-emerald-500',   'At Risk': 'bg-amber-500',   Stuck: 'bg-rose-500'  };

export const PulseDashboardPreview = () => (
  <div className="bg-[#f8f9fa] p-4 rounded-xl border border-slate-200 text-[#333] shadow-inner">
    {/* Header */}
    <div className="flex items-center justify-between mb-4 px-1">
      <div>
        <h3 className="text-base font-bold text-slate-900 leading-tight">PR Pulse</h3>
        <p className="text-[11px] text-slate-500 font-medium uppercase tracking-tight">Project-wide Pull Requests</p>
      </div>
      <div className="h-7 px-3 rounded bg-white border border-slate-300 text-slate-600 text-xs font-semibold flex items-center shadow-sm">
        ↻ Refresh
      </div>
    </div>

    {/* Health strip + reviewer chips */}
    <div className="flex items-center gap-3 mb-4 px-1 flex-wrap">
      <div className="flex items-center gap-0 bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm divide-x divide-slate-100">
        <div className="flex items-center gap-1.5 px-3 py-1.5">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-xs font-bold text-slate-800">17</span>
          <span className="text-[10px] font-semibold text-slate-400 uppercase">Fresh</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5">
          <div className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="text-xs font-bold text-slate-800">5</span>
          <span className="text-[10px] font-semibold text-slate-400 uppercase">Aging</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5">
          <div className="w-2 h-2 rounded-full bg-rose-500" />
          <span className="text-xs font-bold text-slate-800">2</span>
          <span className="text-[10px] font-semibold text-slate-400 uppercase">Critical</span>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-2 py-1.5 shadow-sm">
        <span className="text-[10px] font-bold text-slate-400 uppercase">Reviewers</span>
        <div className="flex -space-x-1.5">
          {['AF', 'BS', 'CD', 'EJ'].map((ini, i) => (
            <div key={ini} className="relative">
              <div className="w-6 h-6 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[9px] font-bold text-slate-500 shadow-sm">{ini}</div>
              {i === 0 && <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-rose-500 border-2 border-white flex items-center justify-center text-[7px] text-white font-bold">5</div>}
            </div>
          ))}
          <div className="w-6 h-6 rounded-full bg-slate-50 border-2 border-white flex items-center justify-center text-[9px] font-bold text-slate-400 shadow-sm">+2</div>
        </div>
      </div>
    </div>

    {/* Tab bar */}
    <div className="flex border-b border-slate-200 mb-3 px-1">
      <div className="px-3 py-2 text-xs font-bold text-blue-600 border-b-2 border-blue-600">All PRs <span className="ml-1 px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded-full text-[10px]">24</span></div>
      <div className="px-3 py-2 text-xs font-semibold text-slate-400">My PRs <span className="ml-1 px-1.5 py-0.5 bg-slate-50 text-slate-300 rounded-full text-[10px]">3</span></div>
      <div className="px-3 py-2 text-xs font-semibold text-slate-400">My Reviews <span className="ml-1 px-1.5 py-0.5 bg-slate-50 text-slate-300 rounded-full text-[10px]">8</span></div>
    </div>

    {/* Data grid */}
    <div className="bg-white rounded border border-slate-200 overflow-hidden shadow-sm mx-1">
      <table className="w-full text-left text-xs border-collapse">
        <thead className="bg-[#fafbfc] border-b border-slate-200 text-slate-500 uppercase text-[10px] font-bold tracking-wider">
          <tr>
            <th className="w-1 p-0" />
            <th className="px-3 py-2 border-r border-slate-100">ID</th>
            <th className="px-3 py-2 border-r border-slate-100">Title</th>
            <th className="px-3 py-2 border-r border-slate-100 text-center">Checks</th>
            <th className="px-3 py-2 border-r border-slate-100">Status</th>
            <th className="px-3 py-2">Age</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {prs.map(pr => (
            <tr key={pr.id} className="hover:bg-slate-50 transition-colors">
              <td className={`w-1 p-0 ${staleBar[pr.status]}`} />
              <td className="px-3 py-2.5 font-semibold text-blue-600">#{pr.id}</td>
              <td className="px-3 py-2.5 max-w-[160px]">
                <div className="font-semibold text-slate-800 truncate leading-tight">{pr.title}</div>
                <div className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                  <span className="bg-slate-50 px-1 rounded border border-slate-200">{pr.repo}</span>
                  <span>·</span>
                  <span>{pr.author}</span>
                </div>
              </td>
              <td className="px-3 py-2.5 text-center">
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-bold ${checkStyle[pr.checks].cls}`}>
                  <span>{checkStyle[pr.checks].icon}</span>
                  {pr.checks === 'succeeded' ? '12/12' : pr.checks === 'pending' ? '4/12' : 'Failed'}
                </span>
              </td>
              <td className="px-3 py-2.5">
                <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase ${statusText[pr.status]}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${statusDot[pr.status]}`} />
                  {pr.status}
                </span>
              </td>
              <td className="px-3 py-2.5 text-slate-400 italic text-[11px]">{pr.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// PR Pulse – Health Preview (staleness classification)
// ─────────────────────────────────────────────────────────────────────────────

const healthItems = [
  { label: 'Active',  val: '< 24h',      desc: 'Flowing at healthy velocity', count: 17,
    bar: 'bg-emerald-500', ring: 'bg-emerald-50', num: 'text-emerald-700',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-100', left: 'bg-emerald-500' },
  { label: 'At Risk', val: '24 – 72h',   desc: 'Needs attention soon',        count: 5,
    bar: 'bg-amber-500',   ring: 'bg-amber-50',   num: 'text-amber-700',
    badge: 'bg-amber-50 text-amber-700 border-amber-100',       left: 'bg-amber-500'   },
  { label: 'Stuck',   val: '> 72h',      desc: 'Blocked — act now',           count: 2,
    bar: 'bg-rose-500',    ring: 'bg-rose-50',    num: 'text-rose-700',
    badge: 'bg-rose-50 text-rose-700 border-rose-100',          left: 'bg-rose-500'    },
];

export const PulseHealthPreview = () => (
  <div className="w-full flex flex-col gap-4 py-4">
    {healthItems.map(item => (
      <div key={item.label} className="bg-white border border-slate-200 rounded-xl shadow-sm flex items-center gap-4 p-4 relative overflow-hidden">
        <div className={`absolute top-0 left-0 bottom-0 w-1 ${item.left}`} />
        <div className={`w-11 h-11 rounded-full ${item.ring} flex items-center justify-center flex-shrink-0`}>
          <span className={`text-lg font-bold ${item.num}`}>{item.count}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-slate-900 text-sm">{item.label}</span>
            <span className={`text-[9px] px-1.5 py-0.5 rounded border font-bold uppercase tracking-wide ${item.badge}`}>{item.val}</span>
          </div>
          <p className="text-[11px] text-slate-500">{item.desc}</p>
        </div>
        <div className="w-16 flex-shrink-0">
          <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
            <div className={`h-full rounded-full ${item.bar}`} style={{ width: `${Math.round((item.count / 24) * 100)}%` }} />
          </div>
        </div>
      </div>
    ))}
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// PR Pulse – Filter & Search Preview
// ─────────────────────────────────────────────────────────────────────────────

const filteredPrs = [
  { id: '1842', title: 'Refactor release gate checks',     repo: 'platform-api', author: 'Alice Freeman', status: 'Active',  age: '4h'  },
  { id: '1831', title: 'Add retry logic to deploy pipeline', repo: 'platform-api', author: 'Alice Freeman', status: 'Active',  age: '18h' },
  { id: '1818', title: 'Update CODEOWNERS for api module',  repo: 'platform-api', author: 'Alice Freeman', status: 'At Risk', age: '41h' },
];

export const PulseTriagePreview = () => (
  <div className="bg-[#f8f9fa] p-4 rounded-xl border border-slate-200 shadow-inner w-full">
    {/* Filter bar */}
    <div className="bg-white border border-slate-200 rounded-lg px-3 py-2 mb-3 flex items-center gap-2 flex-wrap shadow-sm">
      <div className="flex items-center gap-1.5 text-slate-400">
        <Search size={13} />
        <span className="text-xs text-slate-300">Search PRs…</span>
      </div>
      <div className="ml-auto flex items-center gap-1.5 flex-wrap">
        <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-2 py-0.5 text-[10px] font-bold">
          Repo: platform-api <span className="text-blue-400 ml-0.5 cursor-pointer">×</span>
        </span>
        <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-2 py-0.5 text-[10px] font-bold">
          Author: Alice <span className="text-blue-400 ml-0.5 cursor-pointer">×</span>
        </span>
        <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-500 border border-slate-200 rounded-full px-2 py-0.5 text-[10px] font-semibold cursor-pointer hover:bg-slate-200">
          + Status
        </span>
        <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-500 border border-slate-200 rounded-full px-2 py-0.5 text-[10px] font-semibold cursor-pointer hover:bg-slate-200">
          + Age
        </span>
      </div>
    </div>

    {/* Results summary */}
    <div className="flex items-center justify-between px-1 mb-2">
      <span className="text-[11px] text-slate-500 font-medium">
        <span className="font-bold text-slate-800">3</span> pull requests matching your filters
      </span>
      <span className="text-[10px] text-slate-400 font-medium">Sort: Last activity ↓</span>
    </div>

    {/* Filtered rows */}
    <div className="bg-white rounded border border-slate-200 overflow-hidden shadow-sm">
      <table className="w-full text-left text-xs border-collapse">
        <thead className="bg-[#fafbfc] border-b border-slate-200">
          <tr>
            <th className="w-1 p-0" />
            <th className="px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wide border-r border-slate-100">ID</th>
            <th className="px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wide border-r border-slate-100">Title</th>
            <th className="px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wide border-r border-slate-100">Status</th>
            <th className="px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Age</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {filteredPrs.map(pr => (
            <tr key={pr.id} className="hover:bg-slate-50 transition-colors">
              <td className={`w-1 p-0 ${pr.status === 'At Risk' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
              <td className="px-3 py-2.5 font-semibold text-blue-600">#{pr.id}</td>
              <td className="px-3 py-2.5 max-w-[160px]">
                <div className="font-semibold text-slate-800 truncate leading-tight">{pr.title}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{pr.author}</div>
              </td>
              <td className="px-3 py-2.5">
                <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase ${pr.status === 'At Risk' ? 'text-amber-600' : 'text-emerald-600'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${pr.status === 'At Risk' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                  {pr.status}
                </span>
              </td>
              <td className="px-3 py-2.5 text-slate-400 italic text-[11px]">{pr.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Footer hint */}
    <p className="text-[10px] text-slate-400 text-center mt-3">
      Combined filters apply instantly — no page reload required
    </p>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// PR Pulse – Reviewer Load Balancer Preview
// ─────────────────────────────────────────────────────────────────────────────

const reviewers = [
  { name: 'Alice Freeman', count: 5, max: 5, barCls: 'bg-rose-500',    label: 'text-rose-600'    },
  { name: 'Bob Smith',     count: 2, max: 5, barCls: 'bg-emerald-500', label: 'text-emerald-600' },
  { name: 'Charlie Day',   count: 4, max: 5, barCls: 'bg-amber-500',   label: 'text-amber-600'   },
  { name: 'Eve Johnson',   count: 1, max: 5, barCls: 'bg-emerald-500', label: 'text-emerald-600' },
];

export const PulseReviewerPreview = () => (
  <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-6 w-full">
    {/* Dialog header */}
    <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
      <span className="text-xs font-bold tracking-widest uppercase text-slate-800">Reviewer Load</span>
      <span className="text-xs text-blue-600 font-semibold">Project Avg: 3.0 PRs</span>
    </div>

    {/* Reviewer rows */}
    <div className="flex flex-col gap-4">
      {reviewers.map(r => (
        <div key={r.name}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-sm font-bold text-slate-800">{r.name}</span>
            <span className={`text-sm font-bold ${r.label}`}>{r.count} Active</span>
          </div>
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${r.barCls}`}
              style={{ width: `${Math.round((r.count / r.max) * 100)}%` }}
            />
          </div>
        </div>
      ))}
    </div>

    {/* Health check footer */}
    <p className="text-xs text-blue-600 italic text-center mt-5 pt-4 border-t border-slate-100">
      Health Check: Eve Johnson is available to pick up new reviews.
    </p>
  </div>
);
