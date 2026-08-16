export const prPulseDocs = [
  { path: '/docs/pr-pulse', label: 'Introduction' },
  { path: '/docs/pr-pulse/dashboard', label: 'Core Dashboard' },
  { path: '/docs/pr-pulse/personal-views', label: 'Personal Views' },
  { path: '/docs/pr-pulse/team-insights', label: 'Team Insights' },
  { path: '/docs/pr-pulse/filtering-and-search', label: 'Filtering and Search' },
  { path: '/docs/pr-pulse/pr-details', label: 'PR Details and Quick Actions' }
];

export const getAdjacentDocs = (path) => {
  const currentIndex = prPulseDocs.findIndex((doc) => doc.path === path);

  if (currentIndex === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: prPulseDocs[currentIndex - 1] ?? null,
    next: prPulseDocs[currentIndex + 1] ?? null
  };
};
