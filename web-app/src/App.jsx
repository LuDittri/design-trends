import React, { useState, useEffect } from 'react';
import Tabs from './components/Tabs';
import PostCard from './components/PostCard';
import { Loader2 } from 'lucide-react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/design_trends.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data');
        return res.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        // Set first key as active tab
        const keys = Object.keys(jsonData);
        if (keys.length > 0) setActiveTab(keys[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Could not load trends data. Make sure to run the Python script first.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Loader2 className="animate-spin" size={48} color="#38bdf8" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h2 style={{ color: '#ef4444' }}>Error</h2>
        <p style={{ color: '#94a3b8' }}>{error}</p>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
          Run <code>python execution/check_design_trends.py</code> to generate the data.
        </p>
      </div>
    );
  }

  const tabs = Object.keys(data);

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Design Trends</h1>
        <p className="subtitle">Top weekly posts from Reddit's design communities</p>
      </header>

      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <main className="post-grid">
        {data[activeTab]?.map((post) => (
          <PostCard key={post.url} post={post} />
        ))}
      </main>
    </div>
  );
}

export default App;
