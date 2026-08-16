import React from 'react';
import DocsImage from '../../components/docs/DocsImage';
import DocsLayout from '../../components/docs/DocsLayout';

const FilteringSearchDocs = () => (
  <DocsLayout>
    <h1>Filtering and Search</h1>

    <p>PR Pulse provides filter and sorting controls in the dashboard toolbar.</p>

    <DocsImage src="/images/pulse/filters-bar.png" alt="PR Pulse dashboard filter and search toolbar" />
    <DocsImage src="/images/pulse/author-filter.png" alt="PR Pulse multi-select author filter" />

    <h2>Available Filter Matrix</h2>
    <table>
      <caption>PR Pulse dashboard filters and their current behavior</caption>
      <thead>
        <tr>
          <th scope="col">Filter</th>
          <th scope="col">Behavior</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Keyword</th>
          <td>Matches the pull request title and PR ID, such as #123 or 123.</td>
        </tr>
        <tr>
          <th scope="row">Repository</th>
          <td>Multi-select repository filter.</td>
        </tr>
        <tr>
          <th scope="row">Author</th>
          <td>Multi-select author filter.</td>
        </tr>
        <tr>
          <th scope="row">Status</th>
          <td>Multi-select filter for Active, At Risk, Stuck, and Draft.</td>
        </tr>
        <tr>
          <th scope="row">Age</th>
          <td>Multi-select filter with fixed bands: {'< 24h'}, 24–72h, and {'> 72h'}.</td>
        </tr>
        <tr>
          <th scope="row">Checks</th>
          <td>Single-select filter for Passed, Failed, Pending, and No Checks.</td>
        </tr>
        <tr>
          <th scope="row">Sort</th>
          <td>Single-select sorting mode.</td>
        </tr>
      </tbody>
    </table>

    <h2>Sorting Options</h2>
    <ul>
      <li>Last activity, newest first</li>
      <li>Last activity, oldest first</li>
      <li>Repository, A–Z</li>
      <li>Author, A–Z</li>
    </ul>

    <h2>How Filters Apply</h2>
    <ul>
      <li>Filters can be combined.</li>
      <li>Filter state applies within the active tab: All PRs, My PRs, or My Reviews.</li>
      <li>Search currently targets pull request title and ID, not description or body text.</li>
    </ul>
  </DocsLayout>
);

export default FilteringSearchDocs;
