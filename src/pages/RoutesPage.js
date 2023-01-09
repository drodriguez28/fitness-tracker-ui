import React from "react";

export default function RoutesPage() {
  return (
    <div class="pt-24">
      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-14 mt-5">
        <img class="rounded-t-lg" src="/eastroswell.jpg" alt="" />

        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            East Roswell Park
          </h5>

          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Great running routes, Open fields for soccer , football and baseball
          </p>
          <a
            href="https://www.roswellgov.com/Home/Components/FacilityDirectory/FacilityDirectory/34/1944?selamenityid=34"
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
