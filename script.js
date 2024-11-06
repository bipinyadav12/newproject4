let employeeList = [];
let employeeId = 1;    
function addEmployee() {
    const name = document.getElementById("name").value;
    const profession = document.getElementById("profession").value;
    const age = document.getElementById("age").value;
    if (!name || !profession || !age) {
        showMessage("error", "All fields are required.");
        return;
    }
    const newEmployee = {
        id: employeeId++,
        name: name,
        profession: profession,
        age: parseInt(age)
    };
    employeeList.push(newEmployee);
    document.getElementById("employeeForm").reset();
    showMessage("success", "Employee added successfully!");
    renderEmployeeList();
}
function renderEmployeeList() {
    const employeeListContainer = document.getElementById("employeeList");
    employeeListContainer.innerHTML = ""; 
    employeeList.forEach(employee => {
        const li = document.createElement("li");
        li.innerHTML = `${employee.name} (${employee.profession}, ${employee.age} years old)`;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.onclick = () => deleteEmployee(employee.id);
        li.appendChild(deleteButton);
        employeeListContainer.appendChild(li);
    });
}
function deleteEmployee(id) {
    employeeList = employeeList.filter(employee => employee.id !== id);
    renderEmployeeList(); 
}
function showMessage(type, message) {
    const messageElement = type === "error" ? document.getElementById("errorMessage") : document.getElementById("successMessage");
    document.getElementById("errorMessage").style.display = "none";
    document.getElementById("successMessage").style.display = "none";
    messageElement.textContent = message;
    messageElement.style.display = "block";
}
