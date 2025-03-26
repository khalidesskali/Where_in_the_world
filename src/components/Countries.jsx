import { useNavigate } from "react-router-dom";

const Countries = ({ filteredCountries }) => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto mt-14">
      <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCountries
          .filter((country) => country.name.common.toLowerCase() !== "israel") // Skip Israel
          .map((country) => (
            <li
              key={country.name.common}
              className="bg-white lg:h-[380px] rounded-md shadow overflow-hidden dark:bg-dark-blue"
            >
              <img
                src={country.flags.png}
                alt="country"
                loading="lazy"
                className="w-full md:h-full md:max-h-[212px] lg:max-h-[182px] xl:max-h-[210px] cursor-pointer"
                onClick={() => navigate(`/${country.name.common}`)}
              />
              <div className="px-5 py-7">
                <h2 className="text-xl font-bold mb-4">
                  {country.name.common}
                </h2>
                <div className="flex gap-1 items-center">
                  <span className="font-bold text-sm">Population:</span>
                  <span>{country.population.toLocaleString()}</span>
                </div>
                <div className="flex gap-1 items-center">
                  <span className="font-bold text-sm">Region:</span>
                  <span>{country.region}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-sm">Capital:</span>
                  <span>{country.capital}</span>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Countries;
