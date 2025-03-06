"use client";
import { useState, useEffect } from "react";
import MainCard from "./components/maincard";

const RANDOM_API_URL = "https://randomuser.me/api/";

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

const Index = () => {
  const [mainCardData, setMainCardData] = useState<MainCard | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchMainCardData = async () => {
    setLoading(true);
    try {
      const response = await fetch(RANDOM_API_URL);
      const data = await response.json();
      const user = data.results[0];
      setMainCardData({
        person: {
          name: user.name.first,
          lname: user.name.last,
          email: user.email,
          dateofbirth: new Date(user.dob.date),
          address: `${user.location.street.number} ${user.location.street.name}`,
          number: user.phone,
          password: user.login.password,
          image: user.picture.large,
        },
      });
    } catch (error) {
      console.error("Error fetching MainCard data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMainCardData();
  }, []);

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">Perfil del Usuario</h1>

        {loading && (
          <div className="text-center mt-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-gray-900"></div>
          </div>
        )}

        {mainCardData && <MainCard data={mainCardData} />}
      </div>
    </div>
  );
};

export default Index;