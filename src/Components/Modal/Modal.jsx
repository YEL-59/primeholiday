// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#fffff0] p-6 rounded-lg max-w-4xl w-full">
        <div className="flex justify-between">
          <h1>Explore Now</h1>
          <button
            onClick={onClose}
            className="text-2xl font-bold text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </div>
        <div className="mt-4">
          <form>
            <div className="grid gap-6 mb-2 md:grid-cols-2">
              <div>
                <label
                  for="website"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="flowbite.com"
                  required
                />
              </div>
              <div>
                <label
                  for="visitors"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Unique visitors (per month)
                </label>
                <input
                  type="number"
                  id="visitors"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="grid gap-6 mb-2 md:grid-cols-2">
              <div>
                <label
                  for="website"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="flowbite.com"
                  required
                />
              </div>
              <div>
                <label
                  for="visitors"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Unique visitors (per month)
                </label>
                <input
                  type="number"
                  id="visitors"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder=""
                  required
                />
              </div>
              <div></div>
            </div>
            <div>

            <label
                  for="visitors"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Unique visitors (per month)
                </label>


<div class="flex items-center mb-4">
    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
</div>
<div class="flex items-center">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
</div>

            </div>

            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Write your thoughts here..."
            ></textarea>

            <div className="flex items-start mb-6 mt-5">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                  required
                />
              </div>
              <label
                for="remember"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{' '}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>
            <button  onClick={onClose}
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
