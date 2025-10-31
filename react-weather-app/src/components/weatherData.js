// weatherData.js
const weatherData = {
  NewYork: {
    summary: "Sunny, 25°C",
    details: `hbghfgbgjkhgkhjhtjkjhkjlyk;ljInstall React Router:
Run the following command to install React Router:
npm install react-router
Create the File Structure:
● App.jsx: Main component to set up routes.
● src/components/TaskList.jsx: Component displaying a list of tasks.
● src/components/TaskDetail.jsx: Component displaying details of a specific
task.
Step 2: Define Task Data
Create a mock task dataset in a separate file or directly within the TaskList
component. Each task object should have id, title and description properties.
Step 3: Create the TaskList Component
1
● Display a list of tasks with links to their detail pages.
● Include your mock task dataset from step 2 inside of the TaskList
component.
● Use the .map() method to iterate through tasks.
● Make sure to create a Link component that navigates to /task/`,
  },
  London: {
    summary: "Cloudy, 18°C",
    details: "Overcast with occasional light rain in the afternoon.",
  },
  Tokyo: {
    summary: "Rainy, 22°C",
    details: "Continuous rain expected throughout the day.",
  },
 
};

export default weatherData;
