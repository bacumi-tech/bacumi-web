import React from 'react';
import { Link } from 'react-router-dom';
import DocsLayout from '../../components/docs/DocsLayout';

const TreefoldDocs = () => (
  <DocsLayout product="treefold">
    <h1>Treefold Documentation</h1>

    <p>
      <strong>Treefold</strong> is a free Azure DevOps extension that exports an Azure Boards query to a
      clean, styled Excel workbook (<code>.xlsx</code>) with the hierarchy intact. It is coming soon to the
      Visual Studio Marketplace and is not yet available to install.
    </p>

    <h2>What Treefold Does</h2>
    <ul>
      <li>Rebuilds the tree exactly as your query shows it, as indentation or as a level column.</li>
      <li>Writes a frozen, filterable header row.</li>
      <li>Turns rich-text fields, such as descriptions and acceptance criteria, into readable text instead of raw HTML.</li>
      <li>Shows identity fields as display names and writes dates as real Excel dates in your own time zone.</li>
      <li>Links each row&apos;s ID back to the work item in Azure DevOps.</li>
      <li>Remembers your column and layout choices per query.</li>
    </ul>

    <h2>Where to Find It</h2>
    <p>
      Once Treefold is published and installed in your organization, it adds an{' '}
      <strong>Export to Excel (Treefold)</strong> action to the toolbar menu of Azure Boards query results.
      There is no separate page to open and no account to create.
    </p>

    <h2>How to Use It</h2>
    <ol>
      <li>Open a flat or tree query in <strong>Boards → Queries</strong>.</li>
      <li>Choose <strong>Export to Excel (Treefold)</strong> from the query results toolbar menu.</li>
      <li>Pick the columns to include, whether the hierarchy is shown as indentation or a level column, and whether rich text is converted to readable text.</li>
      <li>Start the export. Treefold builds the workbook in your browser and downloads it to your computer.</li>
    </ol>
    <p>Your choices are saved, so the next export of the same query starts with them.</p>

    <h2>Permissions and Privacy</h2>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Detail</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Scope</td>
          <td>
            <code>vso.work</code>: read-only access to work items and queries. Treefold never changes a work item.
          </td>
        </tr>
        <tr>
          <td>Where data goes</td>
          <td>
            Queries and work items are read from your Azure DevOps organization with your own sign-in. The
            workbook is generated in your browser and saved locally. Nothing is sent to Bacumi.
          </td>
        </tr>
        <tr>
          <td>What it can see</td>
          <td>Only the work items your Azure DevOps account is already allowed to read.</td>
        </tr>
        <tr>
          <td>Stored preferences</td>
          <td>
            Your column, hierarchy, and rich-text choices are stored in Azure DevOps extension data storage,
            scoped to your user, inside your organization.
          </td>
        </tr>
        <tr>
          <td>Backend and analytics</td>
          <td>None. Treefold has no Bacumi server and collects no usage analytics.</td>
        </tr>
      </tbody>
    </table>
    <p>
      See the <Link to="/legal/privacy">Privacy Policy</Link> for how Bacumi handles data across its Azure
      DevOps extensions.
    </p>

    <h2>Limitations</h2>
    <ul>
      <li>Treefold exports flat and tree queries. One-hop (linked-item) queries are not yet supported.</li>
      <li>Treefold is read-only and cannot update work items from a workbook.</li>
      <li>Very large queries are bounded by the result limits Azure DevOps applies to queries.</li>
    </ul>

    <h2>Support</h2>
    <p>
      Email <a href="mailto:support@bacumi.com">support@bacumi.com</a> with questions or feedback, or read
      more on the <Link to="/products/treefold">Treefold product page</Link>.
    </p>
  </DocsLayout>
);

export default TreefoldDocs;
