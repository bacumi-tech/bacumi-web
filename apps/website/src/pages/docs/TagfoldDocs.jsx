import React from 'react';
import { Link } from 'react-router-dom';
import DocsLayout from '../../components/docs/DocsLayout';

const TagfoldDocs = () => (
  <DocsLayout product="tagfold">
    <h1>Tagfold Documentation</h1>

    <p>
      <strong>Tagfold</strong> is a free Azure DevOps extension for cleaning up work item tags. It shows every
      tag in a project with a real usage count, groups likely near-duplicates, and lets you rename, merge, or
      delete tags safely. It is coming soon to the Visual Studio Marketplace and is not yet available to
      install.
    </p>

    <h2>What Tagfold Does</h2>
    <ul>
      <li>Lists every work item tag in the project with how many work items use it.</li>
      <li>Groups tags that look like near-duplicates: the same word in a different case, or a likely typo.</li>
      <li><strong>Rename</strong> a tag everywhere it is used, in one action.</li>
      <li><strong>Merge</strong> one tag into another, updating every affected work item and removing the old tag when it is done.</li>
      <li><strong>Delete</strong> a tag, with the affected count shown up front and the tag&apos;s name typed to confirm.</li>
    </ul>

    <h2>Where to Find It</h2>
    <p>
      Once Tagfold is published and installed in your organization, open a project and go to{' '}
      <strong>Project Settings → Tagfold</strong>. There is no account to create and nothing to configure.
    </p>

    <h2>How to Use It</h2>
    <ol>
      <li>Open <strong>Project Settings → Tagfold</strong> in the project you want to clean up.</li>
      <li>Review the tag list and its usage counts. Near-duplicate tags are grouped together.</li>
      <li>Rename a tag to fix its spelling everywhere it is used.</li>
      <li>Merge a duplicate into the tag you want to keep. Tagfold shows how many work items are affected before it runs.</li>
      <li>Delete a tag you no longer need by typing its exact name to confirm.</li>
    </ol>

    <h2>Safety</h2>
    <ul>
      <li>
        Merge re-reads each work item&apos;s current tags immediately before writing, so a tag someone else
        added while the page was open is not dropped.
      </li>
      <li>Delete requires typing the tag&apos;s exact name; there is no one-click delete.</li>
      <li>If you do not have permission to change tags in a project, Tagfold tells you instead of failing silently.</li>
    </ul>

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
            <code>vso.work_write</code>: read and write access to work items, used to count, rename, merge, and
            delete tags.
          </td>
        </tr>
        <tr>
          <td>Where data goes</td>
          <td>
            Tags and work items are read and updated in your Azure DevOps organization with your own sign-in.
            Nothing is sent to Bacumi.
          </td>
        </tr>
        <tr>
          <td>What it can change</td>
          <td>Only what your Azure DevOps account is already allowed to change in that project.</td>
        </tr>
        <tr>
          <td>Backend and analytics</td>
          <td>None. Tagfold has no Bacumi server and collects no usage analytics.</td>
        </tr>
      </tbody>
    </table>
    <p>
      See the <Link to="/legal/privacy">Privacy Policy</Link> for how Bacumi handles data across its Azure
      DevOps extensions.
    </p>

    <h2>Limitations</h2>
    <ul>
      <li>
        Bulk apply or remove of a tag across a set of query results is not included; Azure DevOps already
        does this from the query results view.
      </li>
      <li>Tagfold works on one project at a time.</li>
    </ul>

    <h2>Support</h2>
    <p>
      Email <a href="mailto:support@bacumi.com">support@bacumi.com</a> with questions or feedback, or read
      more on the <Link to="/products/tagfold">Tagfold product page</Link>.
    </p>
  </DocsLayout>
);

export default TagfoldDocs;
