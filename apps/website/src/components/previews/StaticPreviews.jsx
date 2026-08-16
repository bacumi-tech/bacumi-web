import React from 'react';

const pulseRows = [
  { id: '#1842', title: 'Refactor release gate checks', repo: 'platform-api', age: '6h', status: 'Active' },
  { id: '#1837', title: 'Harden terraform validation step', repo: 'iac-core', age: '31h', status: 'At Risk' },
  { id: '#1829', title: 'Fix reviewer assignment drift', repo: 'web-client', age: '82h', status: 'Stuck' },
];

const statusClass = {
  Active: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'At Risk': 'bg-amber-50 text-amber-700 border-amber-200',
  Stuck: 'bg-rose-50 text-rose-700 border-rose-200',
};

export const PulseStaticPreview = () => (
  <div className="rounded-xl border border-surface-border bg-white p-5 shadow-sm">
    <div className="mb-4 flex flex-wrap items-center gap-2">
      <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">All PRs</span>
      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">My PRs</span>
      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">My Reviews</span>
      <span className="ml-auto rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">Preview Data</span>
    </div>
    <div className="mb-4 grid grid-cols-3 gap-2 text-xs">
      <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
        <p className="text-slate-500">Fresh</p>
        <p className="text-base font-semibold text-slate-800">17</p>
      </div>
      <div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2">
        <p className="text-amber-700">Aging</p>
        <p className="text-base font-semibold text-amber-700">5</p>
      </div>
      <div className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2">
        <p className="text-rose-700">Critical</p>
        <p className="text-base font-semibold text-rose-700">2</p>
      </div>
    </div>
    <div className="overflow-hidden rounded-lg border border-slate-200">
      <table className="w-full text-left text-xs">
        <thead className="bg-slate-50 text-slate-600">
          <tr>
            <th className="px-3 py-2 font-semibold">PR</th>
            <th className="px-3 py-2 font-semibold">Repo</th>
            <th className="px-3 py-2 font-semibold">Age</th>
            <th className="px-3 py-2 font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          {pulseRows.map((row) => (
            <tr key={row.id} className="border-t border-slate-100">
              <td className="px-3 py-2 text-slate-700">
                <p className="font-semibold text-slate-900">{row.id}</p>
                <p className="truncate text-slate-500">{row.title}</p>
              </td>
              <td className="px-3 py-2 text-slate-600">{row.repo}</td>
              <td className="px-3 py-2 text-slate-600">{row.age}</td>
              <td className="px-3 py-2">
                <span className={`rounded-full border px-2 py-1 text-[11px] font-semibold ${statusClass[row.status]}`}>
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
