import React, { useState, useEffect } from "react";
import axios from "axios";

const Cmtytable = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const { data } = await axios.get("/users");

    setUsers(data);
  };

  console.log(users);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <div class="overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Name
              </th>
              <th scope="col" class="py-3 px-6">
                Age
              </th>
              <th scope="col" class="py-3 px-6">
                Gender
              </th>
              <th scope="col" class="py-3 px-6">
                City
              </th>
              <th scope="col" class="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr
                  key={user._id}
                  class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.name}
                  </th>
                  <td class="py-4 px-6">{user.age}</td>
                  <td class="py-4 px-6">Laptop</td>
                  <td class="py-4 px-6">$2999</td>
                  <td class="py-4 px-6">
                    <a
                      href="/"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cmtytable;
