import React, { useEffect, useState } from "react";

const Countries = () => {
  const [countries, setContries] = useState([]);

  const getContries = async () => {
    try {
      const res = await fetch("http://localhost:5173/data.json");
      const data = await res.json();
      setContries(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getContries();
  }, []);
  return (
    <div className="container mx-auto mt-14">
      <ul className="grid grid-cols-1 gap-15 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {countries.map((country) => {
          return (
            <li
              key={country.name}
              className="bg-white  rounded-md shadow overflow-hidden dark:bg-dark-blue"
            >
              <img
                src={country.flags.png}
                alt="country"
                loading="lazy"
                className="w-full md:h-full md:max-h-[212px] lg:max-h-[182px] xl:max-h-[208px] cursor-pointer"
              />
              <div className="px-5 py-7">
                <h2 className="text-xl font-bold mb-4">{country.name}</h2>
                <div className="flex gap-1 items-center">
                  <span className="font-bold text-sm ">Population:</span>
                  <span>{country.population}</span>
                </div>
                <div className="flex gap-1 items-center">
                  <span className="font-bold text-sm">Region:</span>
                  <span>{country.region}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-sm">Capital:</span>
                  <span> {country.capital}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Countries;
