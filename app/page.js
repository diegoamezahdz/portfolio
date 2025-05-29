import React from 'react';
import { Contact, Home, Projects, Skills } from './components/sections';
import Layout from './components/layout/Layout';

export default function Page() {



  return (
    <div className="font-sans text-gray-900 bg-gray-50 min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-green-500">
      <Layout >
        {/* Home Section */}
        <Home />
        {/* Projects Section */}
        <Projects />
        {/* Skills Section */}
        <Skills />
        {/* Contact Section */}
        <Contact />
      </Layout>
    </div>
  );
}

