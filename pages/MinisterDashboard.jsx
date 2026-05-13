// src/pages/MinisterDashboard.jsx

import React from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

export default function MinisterDashboard() {

  // =========================
  // GRAPH DATA
  // =========================

  const escalationData = [

    {
      district: "Mumbai",
      value: 28
    },

    {
      district: "Thane",
      value: 22
    },

    {
      district: "Pune",
      value: 18
    },

    {
      district: "Nashik",
      value: 14
    }

  ];

  const resolvedData = [

    {
      day: "Mon",
      resolved: 22
    },

    {
      day: "Tue",
      resolved: 34
    },

    {
      day: "Wed",
      resolved: 48
    },

    {
      day: "Thu",
      resolved: 62
    },

    {
      day: "Fri",
      resolved: 74
    }

  ];

  const fieldData = [

    {
      zone: "North",
      teams: 18
    },

    {
      zone: "South",
      teams: 24
    },

    {
      zone: "East",
      teams: 16
    },

    {
      zone: "West",
      teams: 28
    }

  ];

  const healthData = [

    {
      name: "Healthy",
      value: 92
    },

    {
      name: "Risk",
      value: 8
    }

  ];

  const COLORS = [
    "#2563eb",
    "#dc2626"
  ];

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      {/* =========================
          PAGE TITLE
      ========================= */}

      <div className="mb-10">

        <h1 className="text-5xl font-bold">

          Minister Operational Layer

        </h1>

        <p className="text-gray-600 mt-4 text-lg">

          Statewide governance operational visibility

        </p>

      </div>

      {/* =========================
          TOP CARDS
      ========================= */}

      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
        mb-10
      ">

        {/* CARD */}

        <div className="
          bg-white
          rounded-2xl
          p-6
          shadow-lg
        ">

          <div className="
            w-4
            h-4
            rounded-full
            bg-red-500
            mb-4
          " />

          <p className="text-gray-500">

            Active Escalations

          </p>

          <h2 className="text-5xl font-bold mt-3">

            28

          </h2>

        </div>

        {/* CARD */}

        <div className="
          bg-white
          rounded-2xl
          p-6
          shadow-lg
        ">

          <div className="
            w-4
            h-4
            rounded-full
            bg-green-500
            mb-4
          " />

          <p className="text-gray-500">

            Resolved Incidents

          </p>

          <h2 className="text-5xl font-bold mt-3">

            142

          </h2>

        </div>

        {/* CARD */}

        <div className="
          bg-white
          rounded-2xl
          p-6
          shadow-lg
        ">

          <div className="
            w-4
            h-4
            rounded-full
            bg-blue-500
            mb-4
          " />

          <p className="text-gray-500">

            Field Teams

          </p>

          <h2 className="text-5xl font-bold mt-3">

            63

          </h2>

        </div>

        {/* CARD */}

        <div className="
          bg-white
          rounded-2xl
          p-6
          shadow-lg
        ">

          <div className="
            w-4
            h-4
            rounded-full
            bg-purple-500
            mb-4
          " />

          <p className="text-gray-500">

            Operational Health

          </p>

          <h2 className="text-5xl font-bold mt-3">

            92%

          </h2>

        </div>

      </div>

      {/* =========================
          CHARTS
      ========================= */}

      <div className="
        grid
        grid-cols-1
        xl:grid-cols-2
        gap-8
      ">

        {/* =========================
            BAR CHART
        ========================= */}

        <div className="
          bg-white
          p-8
          rounded-2xl
          shadow-lg
        ">

          <h2 className="text-2xl font-bold mb-6">

            Active Escalations

          </h2>

          <ResponsiveContainer
            width="100%"
            height={350}
          >

            <BarChart data={escalationData}>

              <XAxis dataKey="district" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="value"
                fill="#dc2626"
                radius={[10,10,0,0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* =========================
            LINE CHART
        ========================= */}

        <div className="
          bg-white
          p-8
          rounded-2xl
          shadow-lg
        ">

          <h2 className="text-2xl font-bold mb-6">

            Resolved Incidents

          </h2>

          <ResponsiveContainer
            width="100%"
            height={350}
          >

            <LineChart data={resolvedData}>

              <XAxis dataKey="day" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="resolved"
                stroke="#16a34a"
                strokeWidth={4}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

        {/* =========================
            AREA CHART
        ========================= */}

        <div className="
          bg-white
          p-8
          rounded-2xl
          shadow-lg
        ">

          <h2 className="text-2xl font-bold mb-6">

            Field Teams

          </h2>

          <ResponsiveContainer
            width="100%"
            height={350}
          >

            <AreaChart data={fieldData}>

              <XAxis dataKey="zone" />

              <YAxis />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="teams"
                stroke="#2563eb"
                fill="#93c5fd"
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

        {/* =========================
            PIE CHART
        ========================= */}

        <div className="
          bg-white
          p-8
          rounded-2xl
          shadow-lg
        ">

          <h2 className="text-2xl font-bold mb-6">

            Operational Health

          </h2>

          <ResponsiveContainer
            width="100%"
            height={350}
          >

            <PieChart>

              <Pie
                data={healthData}
                dataKey="value"
                outerRadius={120}
                label
              >

                {healthData.map((entry, index) => (

                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />

                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>

  );

}