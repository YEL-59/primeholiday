
import { useState } from "react";
import { useForm } from "react-hook-form";

const Modal = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("https://your-api-endpoint.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(errorDetails.message || "An error occurred");
      }

      alert("Form submitted successfully!");
      reset();
      onClose();
    } catch (error) {
      console.error("Submission error:", error);
      alert(error.message || "Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    reset(); // Clear form on close
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  flex justify-center items-center z-50">
      <div className="bg-ivory-white p-4 sm:p-6 rounded shadow-lg w-full max-h-[90vh] sm:max-w-md lg:max-w-2xl overflow-y-auto">
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h1 className="text-lg text-green sm:text-xl font-semibold uppercase">
            ENQUIRY FORM
          </h1>
          <button
              onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-inter font-medium text-green">
                First Name *
              </label>
              <input
                type="text"
                className={`bg-gray-50 border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2`}
                placeholder="Enter First Name"
                {...register("firstName", {
                  required: "First Name is required",
                })}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-inter font-medium text-green">
                Last Name *
              </label>
              <input
                type="text"
                className={`bg-gray-50 border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2`}
                placeholder="Enter Last Name"
                {...register("lastName", { required: "Last Name is required" })}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-inter font-medium text-green">
                Email *
              </label>
              <input
                type="email"
                className={`bg-gray-50 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2`}
                placeholder="Enter Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-inter font-medium text-green">
                Telephone *
              </label>
              <input
                type="tel"
                className={`bg-gray-50 border ${
                  errors.telephone ? "border-red-500" : "border-gray-300"
                } text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2`}
                placeholder="Enter Telephone"
                {...register("telephone", {
                  required: "Telephone is required",
                  pattern: {
                    value: /^\d{10,15}$/,
                    message: "Enter a valid telephone number",
                  },
                })}
              />
              {errors.telephone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.telephone.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-inter font-medium text-green">
              Preferred Method of Contact
            </label>
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  value="email"
                  className="w-4 h-4 text-green-600 focus:ring-green-500"
                  {...register("preferredContact", {
                    required: "Please select a contact method",
                  })}
                />
                <label className="ml-2 text-sm text-green">Email</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  value="telephone"
                  className="w-4 h-4 text-green-600 focus:ring-green"
                  {...register("preferredContact", {
                    required: "Please select a contact method",
                  })}
                />
                <label className="ml-2 text-sm text-green">Telephone</label>
              </div>
            </div>
            {errors.preferredContact && (
              <p className="text-red-500 text-xs mt-1">
                {errors.preferredContact.message}
              </p>
            )}

            {errors.preferredContact && (
              <p className="text-red-500 text-xs mt-1">
                {errors.preferredContact.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-inter font-medium text-green">
              Your Message
            </label>
            <textarea
              rows="4"
              className="block w-full text-sm text-green bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="Write your thoughts here..."
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600"
                {...register("subscribe")}
              />
              <label className="ml-2 text-xs text-green">
                Subscribe to our newsletter
              </label>
            </div>
          </div>
          <p className="text-sm text-green">
            Your details will not be passed to any other company, and you can
            unsubscribe at any time.
          </p>

          <button
            type="submit"
            className={`bg-primary text-white uppercase py-2 px-5 shadow ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-primary-dark"
            }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
