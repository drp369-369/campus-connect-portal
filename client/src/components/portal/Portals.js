import React from 'react';

const Card = ({ icon, title, desc }) => (
  <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition-transform">
    <div className="text-4xl">{icon}</div>
    <h3 className="mt-4 text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-gray-600">{desc}</p>
    <div className="mt-4">
      <button
        onClick={() => alert(`${title} coming soon — this minimal demo is static.`)}
        className="text-rvgreen font-semibold"
      >
        Enter {title} →
      </button>
    </div>
  </div>
);

export default function Portals() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card
        icon={'🎓'}
        title={'Student Portal'}
        desc={'Access courses, attendance, assignments, grades, events and campus resources.'}
      />

      <Card
        icon={'👨‍🏫'}
        title={'Faculty Portal'}
        desc={'Manage courses, attendance, assignments, student performance and announcements.'}
      />

      <Card
        icon={'🏛️'}
        title={'Admin Portal'}
        desc={'Manage students, faculty, departments, announcements and university operations.'}
      />
    </div>
  );
}
