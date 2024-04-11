// Function to update the "About Us" text
function updateAboutText() {
  const aboutText = document.getElementById("about-text");
  aboutText.textContent = "We offer classes for all ages and skill levels, from beginners to tournament players.";
}

// Function to get class information and populate the list
function getClasses() {
  const classList = document.getElementById("class-list");
  classList.innerHTML = ""; // Clear existing list items

  // Simulate fetching class data (replace with actual data fetching logic)
  const classes = [
    { day: "Monday", time: "6:00 PM", age: "Kids (6-12 years)" },
    { day: "Wednesday", time: "7:30 PM", age: "Adults (Beginners)" },
    { day: "Friday", time: "5:00 PM", age: "Teens (Advanced)" },
  ];

  // Loop through classes and create list items
  for (const classInfo of classes) {
    const listItem = document.createElement("li");
    listItem.textContent = `${classInfo.day} - ${classInfo.time} - ${classInfo.age}`;
    classList.appendChild(listItem);
  }
}
