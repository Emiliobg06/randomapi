import React, { useState } from 'react';

interface MainCard {
  person: {
    name: string;
    lname: string;
    email: string;
    dateofbirth: Date;
    address: string;
    number: string;
    password: string;
    image: string;
  };
}

interface MainCardProps {
  data: MainCard;
}

const MainCard = ({ data }: MainCardProps) => {
  const [hoveredInfo, setHoveredInfo] = useState<string | null>(null);

  return (
    <div className="fixed top-25 left-1/2 transform -translate-x-1/2">
      <img
        src={data.person.image}
        alt={`${data.person.name} ${data.person.lname}`}
        className="w-50 h-50 rounded-full cursor-pointer"
      />
      <div className="mt-4 flex space-x-4 justify-center">
        <div
          className="relative"
          onMouseEnter={() => setHoveredInfo('name')}
          onMouseLeave={() => setHoveredInfo(null)}
        >
          <img
            src="/icon_user.png"
            className="w-8 h-8 cursor-pointer"
          />
          {hoveredInfo === 'name' && (
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg border border-gray-200">
              <div className="text-sm font-semibold">{`${data.person.name} ${data.person.lname}`}</div>
            </div>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={() => setHoveredInfo('email')}
          onMouseLeave={() => setHoveredInfo(null)}
        >
          <img
            src="/icon_email.png"
            className="w-8 h-8 cursor-pointer"
          />
          {hoveredInfo === 'email' && (
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg border border-gray-200">
              <div className="text-sm font-semibold">{data.person.email}</div>
            </div>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={() => setHoveredInfo('phone')}
          onMouseLeave={() => setHoveredInfo(null)}
        >
          <img
            src="/icon_phone.png"
            className="w-8 h-8 cursor-pointer"
          />
          {hoveredInfo === 'phone' && (
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg border border-gray-200">
              <div className="text-sm font-semibold">{data.person.number}</div>
            </div>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={() => setHoveredInfo('password')}
          onMouseLeave={() => setHoveredInfo(null)}
        >
          <img
            src="/icon_password.png"
            className="w-8 h-8 cursor-pointer"
          />
          {hoveredInfo === 'password' && (
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg border border-gray-200">
              <div className="text-sm font-semibold">{data.person.password}</div>
            </div>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={() => setHoveredInfo('location')}
          onMouseLeave={() => setHoveredInfo(null)}
        >
          <img
            src="/icon_loc.png"
            className="w-8 h-8 cursor-pointer"
          />
          {hoveredInfo === 'location' && (
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg border border-gray-200">
              <div className="text-sm font-semibold">{data.person.address}</div>
            </div>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={() => setHoveredInfo('dob')}
          onMouseLeave={() => setHoveredInfo(null)}
        >
          <img
            src="/calendar_icon.png"
            className="w-8 h-8 cursor-pointer"
          />
          {hoveredInfo === 'dob' && (
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg border border-gray-200">
              <div className="text-sm font-semibold">
                {data.person.dateofbirth.toLocaleDateString()}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainCard;