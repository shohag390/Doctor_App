import { useEffect, useState } from "react";
import DoctorCard from "../../components/Doctor/DoctorCard";
import Testimonial from "../../components/Testimonial/Testimonial";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const Doctor = () => {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");

  const handleSearch = () => {
    setQuery(query.trim());
    console.log("handle search");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query);
    }, 700);

    return () => clearTimeout(timeout);
  }, [query]);

  const {
    data: doctors,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`);

  return (
    <>
      <section className="bg-[#002570] md:h-[35vh] flex md:py-0 py-[25px] w-full justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <h4 className="md:text-[35px] text-[20px] text-center font-bold text-[white] md:pb-[20px] pb-[10px]">
            Find a Doctor
          </h4>
          <div className="flex items-center md:h-[55px] h-[40px] md:w-[700px] w-[320px] relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Search Doctor by name or specification"
              className=" md:w-full md:px-[30px] px-[20px] absolute top-0 left-0 right-0 h-full w-full rounded-[30px] focus:outline-none text-[gray] md:text-[17px] font-semibold"
            />
            <div className="absolute right-[3px]">
              <button
                onClick={handleSearch}
                className="md:w-[200px] w-[120px] md:h-[50px] h-[35px] btnTwo"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#E6F1FF]">
        {loading && <Loading />}
        {error && <Error />}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-4 md:px-[80px] md:pt-[55px] pt-[40px] md:pb-[50px] pb-[25px] px-[20px] md:gap-[40px] gap-[20px]">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))}
          </div>
        )}
      </section>
      <section className="bg-[#E6F1FF] bg_tast md:px-[80px] px-[20px] md:py-[50px] py-[25px]">
        <div className="md:px-[400px] px-[60px]">
          <h4 className="md:text-[40px] text-[25px] md:leading-[45px] leading-[30px] text-center font-bold text-[#002570]">
            What our patient say
          </h4>
        </div>
        <Testimonial />
      </section>
    </>
  );
};

export default Doctor;
