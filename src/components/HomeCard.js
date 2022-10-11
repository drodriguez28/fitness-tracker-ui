import React from "react";

export default function HomeCard() {
  return (
    <div class="flex justify-evenly pt-5">
      <div>
        <a
          href="#"
          class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Workouts
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            we can check this out later !
          </p>
        </a>
      </div>

      <div>
        <a
          href="#"
          class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Routes
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            wwe can check this out later too !
          </p>
        </a>
      </div>

      <div>
        <a
          href="#"
          class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Community
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            wwe can check this out later too !
          </p>
        </a>
      </div>
    </div>
  );
}
