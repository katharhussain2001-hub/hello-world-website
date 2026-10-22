// Generate 500 realistic student records
function generate500Students() {
  const firstNames = [
    "Aarav", "Ananya", "Rohan", "Priya", "Vikram", "Sneha", "Rahul", "Divya", "Karthik", "Meera",
    "Arjun", "Pooja", "Aditya", "Kavya", "Sanjay", "Neha", "Varun", "Riya", "Siddharth", "Tanvi",
    "Akash", "Ishaan", "Nisha", "Manish", "Shreya", "Gaurav", "Swati", "Naveen", "Deepika", "Harish",
    "Ankit", "Simran", "Rajesh", "Preeti", "Suresh", "Monika", "Amit", "Rashmi", "Karan", "Bhavna",
    "Abhishek", "Aishwarya", "Vishal", "Shruti", "Tarun", "Komal", "Mayank", "Payal", "Pranav", "Geeta"
  ];

  const lastNames = [
    "Sharma", "Patel", "Verma", "Iyer", "Singh", "Kulkarni", "Nair", "Reddy", "Menon", "Joshi",
    "Gupta", "Rao", "Das", "Mehta", "Choudhury", "Bose", "Pillai", "Mishra", "Saxena", "Bhat",
    "Chatterjee", "Nambiar", "Mukherjee", "Agarwal", "Deshmukh", "Hegde", "Pandey", "Kapoor", "Shetty", "Malhotra"
  ];

  const departments = [
    { name: "Computer Science & Engineering", code: "CS" },
    { name: "Information Technology", code: "IT" },
    { name: "Electronics & Communication", code: "EC" },
    { name: "Mechanical Engineering", code: "ME" },
    { name: "Electrical & Electronics", code: "EE" }
  ];

  const semesters = ["2nd Sem", "4th Sem", "6th Sem", "8th Sem"];
  const statuses = ["Active", "Active", "Active", "Active", "Active", "Active", "Active", "On Leave", "Inactive"];

  const students = [];
  let id = 1;

  departments.forEach((dept) => {
    for (let i = 1; i <= 100; i++) {
      const rollNumStr = String(i).padStart(3, "0");
      const rollNo = `24${dept.code}${rollNumStr}`;

      const fName = firstNames[(id * 7 + i) % firstNames.length];
      const lName = lastNames[(id * 11 + i) % lastNames.length];
      const name = `${fName} ${lName}`;

      const semester = semesters[(i + id) % semesters.length];
      const status = statuses[(i * 3 + id) % statuses.length];

      students.push({
        id,
        rollNo,
        name,
        department: dept.name,
        semester,
        status
      });

      id++;
    }
  });

  return students;
}

const allStudents = generate500Students();
let filteredStudents = [...allStudents];

document.addEventListener("DOMContentLoaded", () => {
  const helloBtn = document.getElementById("helloBtn");
  const erpSection = document.getElementById("erpSection");
  const tableBody = document.getElementById("studentTableBody");
  const recordCount = document.getElementById("recordCount");
  const cellAddress = document.querySelector(".cell-address");
  const exportBtn = document.getElementById("exportBtn");

  // Filter elements
  const filterToggleBtn = document.getElementById("filterToggleBtn");
  const filterPanel = document.getElementById("filterPanel");
  const filterRollNo = document.getElementById("filterRollNo");
  const filterName = document.getElementById("filterName");
  const filterDepartment = document.getElementById("filterDepartment");
  const resetFilterBtn = document.getElementById("resetFilterBtn");
  const searchInput = document.getElementById("searchInput");

  function getStatusClass(status) {
    if (status === "Active") return "active";
    if (status === "Inactive") return "inactive";
    return "on-leave";
  }

  // Fast rendering using DocumentFragment
  function renderAllRows(records) {
    tableBody.innerHTML = "";
    const totalRecords = records.length;

    if (totalRecords === 0) {
      tableBody.innerHTML = `
        <tr>
          <td class="row-num">-</td>
          <td colspan="5" style="text-align: center; color: #94a3b8; padding: 26px;">
            No student records matching your filter criteria.
          </td>
        </tr>
      `;
      recordCount.textContent = "Filtered: 0 of 500 students";
      return;
    }

    const fragment = document.createDocumentFragment();

    records.forEach((student, index) => {
      const row = document.createElement("tr");
      const excelRowNum = index + 2; // Row 1 is header

      row.innerHTML = `
        <td class="row-num">${excelRowNum}</td>
        <td class="roll-cell" data-col="A" data-row="${excelRowNum}">${student.rollNo}</td>
        <td class="name-cell" data-col="B" data-row="${excelRowNum}">${student.name}</td>
        <td data-col="C" data-row="${excelRowNum}">${student.department}</td>
        <td data-col="D" data-row="${excelRowNum}">${student.semester}</td>
        <td data-col="E" data-row="${excelRowNum}">
          <span class="status-badge ${getStatusClass(student.status)}">${student.status}</span>
        </td>
      `;
      fragment.appendChild(row);
    });

    tableBody.appendChild(fragment);

    if (totalRecords === allStudents.length) {
      recordCount.textContent = `Ready | 500 students loaded`;
    } else {
      recordCount.textContent = `Filtered: ${totalRecords} of 500 students`;
    }
  }

  // Combined filter logic (Roll No, Name, Department, Quick Search)
  function applyFilters() {
    const rollQuery = filterRollNo.value.toLowerCase().trim();
    const nameQuery = filterName.value.toLowerCase().trim();
    const deptQuery = filterDepartment.value.trim();
    const searchQuery = searchInput.value.toLowerCase().trim();

    filteredStudents = allStudents.filter(student => {
      const matchesRoll = !rollQuery || student.rollNo.toLowerCase().includes(rollQuery);
      const matchesName = !nameQuery || student.name.toLowerCase().includes(nameQuery);
      const matchesDept = !deptQuery || student.department === deptQuery;
      const matchesSearch = !searchQuery ||
        student.name.toLowerCase().includes(searchQuery) ||
        student.rollNo.toLowerCase().includes(searchQuery) ||
        student.department.toLowerCase().includes(searchQuery) ||
        student.semester.toLowerCase().includes(searchQuery) ||
        student.status.toLowerCase().includes(searchQuery);

      return matchesRoll && matchesName && matchesDept && matchesSearch;
    });

    renderAllRows(filteredStudents);
  }

  // Toggle filter panel visibility
  filterToggleBtn.addEventListener("click", () => {
    filterPanel.classList.toggle("closed");
    filterToggleBtn.classList.toggle("active");
    if (!filterPanel.classList.contains("closed")) {
      filterRollNo.focus();
    }
  });

  // Filter input event listeners
  filterRollNo.addEventListener("input", applyFilters);
  filterName.addEventListener("input", applyFilters);
  filterDepartment.addEventListener("change", applyFilters);
  searchInput.addEventListener("input", applyFilters);

  // Reset filter button
  resetFilterBtn.addEventListener("click", () => {
    filterRollNo.value = "";
    filterName.value = "";
    filterDepartment.value = "";
    searchInput.value = "";
    filteredStudents = [...allStudents];
    renderAllRows(filteredStudents);
  });

  // Toggle ERP Sheet
  helloBtn.addEventListener("click", () => {
    const isHidden = erpSection.classList.contains("hidden");
    if (isHidden) {
      erpSection.classList.remove("hidden");
      erpSection.classList.add("visible");
      erpSection.setAttribute("aria-hidden", "false");
      helloBtn.textContent = "Hide ERP Student Sheet";
      erpSection.scrollIntoView({ behavior: "smooth" });
    } else {
      erpSection.classList.remove("visible");
      erpSection.classList.add("hidden");
      erpSection.setAttribute("aria-hidden", "true");
      helloBtn.textContent = "Hello World";
    }
  });

  // Interactive Excel cell click
  tableBody.addEventListener("click", (e) => {
    const cell = e.target.closest("td");
    if (cell && cell.dataset.col && cell.dataset.row) {
      cellAddress.textContent = `${cell.dataset.col}${cell.dataset.row}`;
      searchInput.value = cell.textContent.trim();
    }
  });

  // Export to CSV
  exportBtn.addEventListener("click", () => {
    const headers = ["Roll No", "Student Name", "Department", "Semester", "Status"];
    const rows = filteredStudents.map(s => [
      `"${s.rollNo}"`,
      `"${s.name}"`,
      `"${s.department}"`,
      `"${s.semester}"`,
      `"${s.status}"`
    ]);

    const csvContent = [headers.join(","), ...rows.map(r => r.join(","))].join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Student_ERP_Filtered_List.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  // Initial render
  renderAllRows(allStudents);
});
