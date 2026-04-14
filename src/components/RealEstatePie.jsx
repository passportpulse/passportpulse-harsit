import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from 'recharts';


import { BadgeCheck } from "lucide-react";

const data = [
  { name: 'BUY', value: 33.3, path: '/buy', color: '#1D4ED8' },
  { name: 'SELL', value: 33.3, path: '/sell', color: '#F97316' },
  { name: 'RENT', value: 33.3, path: '/rent', color: '#10B981' },
];

const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, value } = props;
  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 8}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        stroke="#FFFFFF"
        strokeWidth={2}
      />
    </g>
  );
};

// --- NEW: Function to draw Arrows and External Labels ---
const renderCustomizedLabel = (props) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, payload } = props;
  const RADIAN = Math.PI / 180;
  
  // Position text at 60% of the radius to stay inside the slice
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill={payload.name === 'BUY' ? 'white' : 'black'}
      textAnchor="middle"
      dominantBaseline="central"
      className="text-[12px] font-black tracking-wider uppercase pointer-events-none"
    >
      {payload.name}
    </text>
  );
};

const RealEstatePie = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  // Helper function to handle navigation
  const handleNavigation = (targetPath) => {
    if (targetPath) {
      navigate(targetPath);
    }
  };

  return (
    <div className="w-full h-64 md:h-80 flex justify-center items-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={0}
            outerRadius={110}
            dataKey="value"
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onMouseDown={(entry) => handleNavigation(entry.path)}
            onClick={(entry) => handleNavigation(entry.path)}
            label={(props) => renderCustomizedLabel({ ...props })}
            labelLine={false}
            className="outline-none cursor-pointer"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                stroke="#FFFFFF"
                strokeWidth={2}
                className="cursor-pointer"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RealEstatePie;