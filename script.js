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
let currentPage = 1;
let pageSize = 25;

document.addEventListener("DOMContentLoaded", () => {
  const helloBtn = document.getElementById("helloBtn");
  const erpSection = document.getElementById("erpSection");
  const tableBody = document.getElementById("studentTableBody");
  const searchInput = document.getElementById("searchInput");
  const pageSizeSelect = document.getElementById("pageSizeSelect");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const pageIndicator = document.getElementById("pageIndicator");
  const paginationInfo = document.getElementById("paginationInfo");
  const recordCount = document.getElementById("recordCount");
  const cellAddress = document.querySelector(".cell-address");
  const exportBtn = document.getElementById("exportBtn");

  function getStatusClass(status) {
    if (status === "Active") return "active";
    if (status === "Inactive") return "inactive";
    return "on-leave";
  }

  function renderTable() {
    tableBody.innerHTML = "";
    const totalRecords = filteredStudents.length;

    if (totalRecords === 0) {
      tableBody.innerHTML = `
        <tr>
          <td class="row-num">-</td>
          <td colspan="5" style="text-align: center; color: #94a3b8; padding: 26px;">
            No student records matching your search.
          </td>
        </tr>
      `;
      pageIndicator.textContent = "Page 0 of 0";
      paginationInfo.textContent = "Showing 0 of 0 students";
      prevBtn.disabled = true;
      nextBtn.disabled = true;
      return;
    }

    const totalPages = Math.ceil(totalRecords / pageSize);
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalRecords);
    const pageRecords = filteredStudents.slice(startIndex, endIndex);

    pageRecords.forEach((student, index) => {
      const row = document.createElement("tr");
      const excelRowNum = startIndex + index + 2; // Row 1 is header

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
      tableBody.appendChild(row);
    });

    // Update pagination status
    paginationInfo.textContent = `Showing ${startIndex + 1}–${endIndex} of ${totalRecords} students`;
    pageIndicator.textContent = `Page ${currentPage} of ${totalPages}`;
    recordCount.textContent = `Total: ${totalRecords} students loaded`;

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
  }

  // Toggle ERP Spreadsheet
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

  // Search filter
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    filteredStudents = allStudents.filter(student =>
      student.name.toLowerCase().includes(query) ||
      student.rollNo.toLowerCase().includes(query) ||
      student.department.toLowerCase().includes(query) ||
      student.semester.toLowerCase().includes(query) ||
      student.status.toLowerCase().includes(query)
    );
    currentPage = 1;
    renderTable();
  });

  // Page size change
  pageSizeSelect.addEventListener("change", (e) => {
    pageSize = parseInt(e.target.value, 10);
    currentPage = 1;
    renderTable();
  });

  // Pagination button handlers
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderTable();
      tableBody.parentElement.scrollTop = 0;
    }
  });

  nextBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(filteredStudents.length / pageSize);
    if (currentPage < totalPages) {
      currentPage++;
      renderTable();
      tableBody.parentElement.scrollTop = 0;
    }
  });

  // Cell address click handler
  tableBody.addEventListener("click", (e) => {
    const cell = e.target.closest("td");
    if (cell && cell.dataset.col && cell.dataset.row) {
      cellAddress.textContent = `${cell.dataset.col}${cell.dataset.row}`;
      searchInput.value = cell.textContent.trim();
    }
  });

  // Export to CSV function
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
    link.setAttribute("download", "Student_ERP_Master_List_500.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  // Initial render
  renderTable();
});
