import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
import AOS from "aos";
import "aos/dist/aos.css";

const Profile = ({ doctorData }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    gender: "",
    specialization: "",
    ticketPrice: "",
    qualifications: [],
    experiences: [],
    timeSlots: [],
    about: "",
    photo: null,
  });

  useEffect(() => {
    setFormData({
      name: doctorData?.name,
      email: doctorData?.email,
      phone: doctorData?.phone,
      bio: doctorData?.bio,
      gender: doctorData?.gender,
      specialization: doctorData?.specialization,
      ticketPrice: doctorData?.ticketPrice,
      qualifications: doctorData?.qualifications,
      experiences: doctorData?.experiences,
      timeSlots: doctorData?.timeSlots,
      about: doctorData?.about,
      photo: doctorData?.photo,
    });
  }, [doctorData]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setFormData({ ...formData, photo: data?.url });
  };
  const updateProfileHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw Error(result.message);
      }
      setLoading(false);
      toast.success(result.message);
    } catch (error) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  //reuseable input change function
  const handleReusableInputChangeFunc = (key, index, event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      const updateItems = [...prevFormData[key]];

      updateItems[index][name] = value;

      return {
        ...prevFormData,
        [key]: updateItems,
      };
    });
  };

  //reuseable deleting function
  const deleteItem = (key, index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: prevFormData[key].filter((_, i) => i !== index),
    }));
  };

  // AddQualification Hear
  const addQualification = (e) => {
    e.preventDefault();

    addItem("qualifications", {
      startingDate: "",
      endingDate: "",
      degree: "PHD",
      university: "Dhaka Medical Collage",
    });
  };

  //reuseable function for adding
  const addItem = (key, item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }));
  };

  const handleQualificationChange = (event, index) => {
    handleReusableInputChangeFunc("qualifications", index, event);
  };
  // AddQualification Close

  const deletedQualification = (e, index) => {
    e.preventDefault();
    deleteItem("qualifications", index);
  };

  const addExperiences = (e) => {
    e.preventDefault();

    addItem("experiences", {
      startingDate: "",
      endingDate: "",
      position: "senior surgeon",
      hospital: "Dhaka medical",
    });
  };
  const handleExperiencesChange = (event, index) => {
    handleReusableInputChangeFunc("experiences", index, event);
  };

  const deletedExperiences = (e, index) => {
    e.preventDefault();
    deleteItem("experiences", index);
  };
  const addTimeSlot = (e) => {
    e.preventDefault();

    addItem("timeSlots", {
      day: "Sunday",
      startingTime: "10:00",
      endingTime: "04:30",
    });
  };
  const handleTimeSlotChange = (event, index) => {
    handleReusableInputChangeFunc("timeSlots", index, event);
  };

  const deletedTimeSlot = (e, index) => {
    e.preventDefault();
    deleteItem("timeSlots", index);
  };

  useEffect(() => {
    AOS.init({
      duration: "1000",
      disable: "mobile",
    });
  }, []);

  return (
    <div>
      <h2 className="text-[30px] font-bold text-[#002570] pb-[10px]">
        Profile Information
      </h2>

      <form onSubmit={updateProfileHandler}>
        <div className="mb-5">
          <p className="md:text-[17px] md:font-semibold text-[gray] pb-[5px]">
            Name*
          </p>
          <input
            type="text"
            name="name"
            value={formData.name || ""}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
          />
        </div>
        <div className="mb-5">
          <p className="md:text-[17px] md:font-semibold text-[gray] pb-[5px]">
            Email
          </p>
          <input
            type="email"
            name="email"
            value={formData.email || ""}
            onChange={handleInputChange}
            placeholder="Email"
            className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
            readOnly
            aria-readonly
            disabled={true}
          />
        </div>
        <div className="mb-5">
          <p className="md:text-[17px] md:font-semibold text-[gray] pb-[5px]">
            Phone*
          </p>
          <input
            type="number"
            name="phone"
            value={formData.phone || ""}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
          />
        </div>
        <div className="mb-5">
          <p className="md:text-[17px] md:font-semibold text-[gray] pb-[5px]">
            Bio*
          </p>
          <input
            type="text"
            name="bio"
            value={formData.bio || ""}
            onChange={handleInputChange}
            placeholder="Bio"
            className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
            maxLength={100}
          />
        </div>
        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px]">
            <div>
              <p className="md:text-[17px] md:font-semibold text-[gray] pb-[5px]">
                Gender*
              </p>
              <select
                name="gender"
                onChange={handleInputChange}
                value={formData.gender || ""}
                className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <p className="md:text-[17px] md:font-semibold text-[gray] pb-[5px]">
                Specialization*
              </p>
              <select
                name="specialization"
                onChange={handleInputChange}
                value={formData.specialization || ""}
                className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
              >
                <option value="">Select</option>
                <option value="surgeon">Surgeon</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
              </select>
            </div>
            <div>
              <p className="md:text-[17px] md:font-semibold text-[gray] pb-[5px]">
                Ticket Price*
              </p>
              <input
                type="number"
                name="ticketPrice"
                value={formData.ticketPrice || ""}
                onChange={handleInputChange}
                placeholder="Ticket Price"
                className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
              />
            </div>
          </div>
        </div>

        <div className="mb-5">
          <p className="pb-2 font-bold text-[#002570] text-[20px]">
            Qualifications:
          </p>
          {formData.qualifications?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="md:text-[17px] md:font-semibold text-[gray] pb-[5px]">
                      Starting Date*
                    </p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate || ""}
                      className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="md:text-[17px] md:font-semibold text-[gray] pb-[5px]">
                      Ending Date*
                    </p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate || ""}
                      className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="md:text-[17px] md:font-semibold text-[gray] pb-[5px]">
                      Degree*
                    </p>
                    <input
                      type="text"
                      name="degree"
                      value={item.degree || ""}
                      placeholder="Degree Name"
                      className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="md:text-[17px] md:font-semibold text-[gray] pb-[5px]">
                      University*
                    </p>
                    <input
                      type="text"
                      name="university"
                      value={item.university || ""}
                      placeholder="university Name"
                      className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>

                <button
                  onClick={(e) => deletedQualification(e, index)}
                  className="bg-red-600 rounded-full text-white text-[18px] mt-2 p-2 mb-[10px] cursor-pointer"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={addQualification}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add Qualification
          </button>
        </div>
        <div className="mb-5">
          <p className="pb-2 font-bold text-[#002570] text-[20px]">
            Experiences:
          </p>
          {formData.experiences?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="md:text-[17px] md:font-semibold text-[gray] pb-[5px]">
                      Starting Date*
                    </p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate || ""}
                      onChange={(e) => handleExperiencesChange(e, index)}
                      className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
                    />
                  </div>
                  <div>
                    <p className="md:text-[17px] md:font-semibold text-[gray] pb-[5px]">
                      Ending Date*
                    </p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate || ""}
                      onChange={(e) => handleExperiencesChange(e, index)}
                      className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="md:text-[17px] md:font-semibold text-[gray] pb-[5px]">
                      Position*
                    </p>
                    <input
                      type="text"
                      name="position"
                      value={item.position || ""}
                      onChange={(e) => handleExperiencesChange(e, index)}
                      placeholder="Position"
                      className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
                    />
                  </div>
                  <div>
                    <p className="md:text-[17px] md:font-semibold text-[gray] pb-[5px]">
                      Hospital*
                    </p>
                    <input
                      type="text"
                      name="hospital"
                      value={item.hospital || ""}
                      onChange={(e) => handleExperiencesChange(e, index)}
                      placeholder="Hospital Name"
                      className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
                    />
                  </div>
                </div>

                <button
                  onClick={(e) => deletedExperiences(e, index)}
                  className="bg-red-600 rounded-full text-white text-[18px] mt-2 p-2 mb-[10px] cursor-pointer"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={addExperiences}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add Experiences
          </button>
        </div>
        <div className="mb-5">
          <p className="pb-2 font-bold text-[#002570] text-[20px]">
            Time Slots:
          </p>
          {formData.timeSlots?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
                  <div>
                    <p className="md:text-[17px] md:font-semibold text-[gray] pb-[5px]">
                      Day*
                    </p>
                    <select
                      name="day"
                      value={item.day || ""}
                      onChange={(e) => handleTimeSlotChange(e, index)}
                      className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
                    >
                      <option value="">Select</option>
                      <option value="saturday">Saturday</option>
                      <option value="sunday">Sunday</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                    </select>
                  </div>
                  <div>
                    <p className="md:text-[17px] md:font-semibold text-[gray] pb-[5px]">
                      Starting Time*
                    </p>
                    <input
                      type="time"
                      name="startingTime"
                      value={item.startingTime || ""}
                      onChange={(e) => handleTimeSlotChange(e, index)}
                      className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
                    />
                  </div>
                  <div>
                    <p className="md:text-[17px] md:font-semibold text-[gray] pb-[5px]">
                      Ending Time*
                    </p>
                    <input
                      type="time"
                      name="endingTime"
                      value={item.endingTime || ""}
                      onChange={(e) => handleTimeSlotChange(e, index)}
                      className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
                    />
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={(e) => deletedTimeSlot(e, index)}
                      className="bg-red-600 rounded-full text-white text-[18px] mt-6 p-2 cursor-pointer"
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={addTimeSlot}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add TimeSlot
          </button>
        </div>
        <div className="mb-5">
          <p className="md:text-[17px] md:font-semibold text-[gray] pb-[5px]">
            About*
          </p>
          <textarea
            name="about"
            rows={5}
            value={formData.about || ""}
            placeholder="Write about you"
            onChange={handleInputChange}
            className="py-[10px] rounded-[30px] border-[1px] border-[#002570] focus:outline-none px-[20px] w-full"
          ></textarea>
        </div>

        <div className="flex items-center gap-3 mb-5">
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
              <img
                src={formData.photo || null}
                className="w-full h-full rounded-full"
                alt="image"
              />
            </figure>
          )}
          <div className="relative w-[130px] h-[50px]">
            <input
              type="file"
              name="photo"
              id="customFile"
              onChange={handleFileInputChange}
              accept=".jpg,.png"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
            <label
              htmlFor="customFile"
              className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
            >
              Upload Photo
            </label>
          </div>
        </div>
        <div className="mt-7">
          <button
            disabled={loading && true}
            type="submit"
            className="btnOne w-full py-[10px]"
          >
            {loading ? (
              <HashLoader size={18} color="#ffffff" />
            ) : (
              "Update Profile"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
