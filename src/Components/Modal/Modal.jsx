
import { useForm } from 'react-hook-form';

const Modal = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data); // Replace this with backend API call
    onClose(); // Close modal on successful submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-4 sm:p-6 rounded shadow-lg w-full max-h-[90vh] sm:max-w-md lg:max-w-2xl overflow-y-auto">
      <div className="flex justify-between items-center border-b pb-3 mb-4">
        <h1 className="text-lg sm:text-xl font-semibold">ENQUIRY FORM</h1>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          ×
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              First Name *
            </label>
            <input
              type="text"
              className={`bg-gray-50 border ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              } text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2`}
              placeholder="Enter First Name"
              {...register('firstName', { required: 'First Name is required' })}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Last Name *
            </label>
            <input
              type="text"
              className={`bg-gray-50 border ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              } text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2`}
              placeholder="Enter Last Name"
              {...register('lastName', { required: 'Last Name is required' })}
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
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Email *
            </label>
            <input
              type="email"
              className={`bg-gray-50 border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2`}
              placeholder="Enter Email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address',
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
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Telephone *
            </label>
            <input
              type="tel"
              className={`bg-gray-50 border ${
                errors.telephone ? 'border-red-500' : 'border-gray-300'
              } text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2`}
              placeholder="Enter Telephone"
              {...register('telephone', {
                required: 'Telephone is required',
                pattern: {
                  value: /^\d{10,15}$/,
                  message: 'Enter a valid telephone number',
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
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Preferred Method of Contact
          </label>
          <div className="flex gap-4">
            <div className="flex items-center">
              <input
                type="radio"
                value="email"
                className="w-4 h-4 text-blue-600"
                {...register('preferredContact', {
                  required: 'Please select a contact method',
                })}
              />
              <label className="ml-2 text-sm text-gray-900">Email</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                value="telephone"
                className="w-4 h-4 text-blue-600"
                {...register('preferredContact', {
                  required: 'Please select a contact method',
                })}
              />
              <label className="ml-2 text-sm text-gray-900">Telephone</label>
            </div>
          </div>
          {errors.preferredContact && (
            <p className="text-red-500 text-xs mt-1">
              {errors.preferredContact.message}
            </p>
          )}
        </div>
  
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Your Message
          </label>
          <textarea
            rows="4"
            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2"
            placeholder="Write your thoughts here..."
            {...register('message', { required: 'Message is required' })}
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
              {...register('subscribe')}
            />
            <label className="ml-2 text-sm text-gray-900">
              Subscribe to our newsletter
            </label>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          Your details will not be passed to any other company, and you can
          unsubscribe at any time.
        </p>
  
        <button
          type="submit"
          className=" bg-primary text-white py-2 px-5 rounded shadow hover:bg-primary-dark focus:ring focus:ring-primary-light"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  
  );
};

export default Modal;
