// pages/DatabasePage.js

import React from 'react';
import '../styles/DatabasePage.css';
import DatabaseSection from '../components/HomePage/DatabaseSection';
function DatabasePage() {
  return (
    <div className="database-container">
      <DatabaseSection />
      <p>This is the database page content.</p>
    </div>
  );
}

export default DatabasePage;
