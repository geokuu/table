import { useState, useEffect } from "react";
import Table from "../../features/table/Table.jsx"; // Import the OldTable component
import CleaningPageStyle from "./cleaningPageStyle.js";
import { tasks, cleaners } from "../../data.js";

const CleaningPage = () => {
  const [modifiedTasks, setModifiedTasks] = useState(null);

  // async function fetchData(endpoint, setData) {
  //   try {
  //     setIsLoading(true);
  //     const response = await fetch(
  //       `https://api.larsen.ee/api/faker${endpoint}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  //         },
  //       },
  //     );
  //     if (!response.ok) {
  //       throw new Error(`API request failed with status ${response.status}`);
  //     }
  //     const responseData = await response.json();
  //     setData(responseData);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   fetchData("/users/role/1", setCleaners);
  //   fetchData("/tasks/cleaning", setTasks);
  // }, []);

  useEffect(() => {
    if (cleaners && tasks) {
      const idToName = cleaners.reduce((names, cleaner) => {
        names[cleaner.id] = `${cleaner.first_name} ${cleaner.last_name}`;
        return names;
      }, {});
      const modifiedTasks = tasks.map((task) => ({
        type: task.type,
        building: task.room.building.name,
        room: task.room.name,
        date: task.todo_at,
        employee: idToName[task.assigned_to_id] || "N/A",
        notes: task.notes,
      }));
      setModifiedTasks(modifiedTasks);
    }
  }, [cleaners, tasks]);

  return (
    <CleaningPageStyle>
      {(!tasks || !cleaners) && (
        <div className="error">
          No data found.
          <button
            className="reload"
            onClick={() => {
              window.location.reload();
            }}
          >
            Reload Page
          </button>
        </div>
      )}
      {modifiedTasks && <Table tasks={modifiedTasks} />}
    </CleaningPageStyle>
  );
};

export default CleaningPage;
