import React from 'react';

const stageStyles = {
  Live: 'stage-live',
  'Coming Soon': 'stage-planned',
  'Design Partner': 'stage-preview',
  'In Development': 'stage-early'
};

const StageBadge = ({ stage }) => (
  <span className={`stage-badge ${stageStyles[stage] || 'stage-planned'}`}>{stage}</span>
);

export default StageBadge;
