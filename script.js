const students = [
  { rollNo: "24CS101", name: "Aarav Sharma", department: "Computer Science & Engineering", semester: "4th Sem", status: "Active" },
  { rollNo: "24CS102", name: "Ananya Patel", department: "Computer Science & Engineering", semester: "4th Sem", status: "Active" },
  { rollNo: "24IT103", name: "Rohan Verma", department: "Information Technology", semester: "4th Sem", status: "Active" },
  { rollNo: "24EC104", name: "Priya Iyer", department: "Electronics & Communication", semester: "4th Sem", status: "Active" },
  { rollNo: "24ME105", name: "Vikram Singh", department: "Mechanical Engineering", semester: "4th Sem", status: "Active" },
  { rollNo: "24EE106", name: "Sneha Kulkarni", department: "Electrical Engineering", semester: "4th Sem", status: "Active" },
  { rollNo: "24CE107", name: "Rahul Nair", department: "Civil Engineering", semester: "4th Sem", status: "Active" },
  { rollNo: "24AI108", name: "Divya Reddy", department: "Artificial Intelligence & Data Science", semester: "4th Sem", status: "Active" },
  { rollNo: "24CS109", name: "Karthik Menon", department: "Computer Science & Engineering", semester: "4th Sem", status: "Active" },
  { rollNo: "24IT110", name: "Meera Joshi", department: "Information Technology", semester: "4th Sem", status: "Active" }
];

document.addEventListener("DOMContentLoaded", () => {
  const helloBtn = document.getElementById("helloBtn");
  const erpSection = document.getElementById("erpSection");
  const tableBody = document.getElementById("studentTableBody");
  const searchInput = document.getElementById("searchInput");
  const recordCount = document.getElementById("recordCount");
  const cellAddress = document.querySelector(".cell-address");

  function renderRows(data) {
    tableBody.innerHTML = "";
    if (data.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td class="row-num">2</td>
          <td colspan="5" style="text-align: center; color: #94a3b8; padding: 20px;">
            No matching student records found.
          </td>
        </tr>
      `;
      recordCount.textContent = "0 records found";
      return;
    }

    data.forEach((student, index) => {
      const row = document.createElement("tr");
      const rowNumber = index + 2; // Row 1 is header
      row.innerHTML = `
        <td class="row-num">${rowNumber}</td>
        <td class="roll-cell" data-col="A" data-row="${rowNumber}">${student.rollNo}</td>
        <td class="name-cell" data-col="B" data-row="${rowNumber}">${student.name}</td>
        <td data-col="C" data-row="${rowNumber}">${student.department}</td>
        <td data-col="D" data-row="${rowNumber}">${student.semester}</td>
        <td data-col="E" data-row="${rowNumber}"><span class="status-badge">${student.status}</span></td>
      `;
      tableBody.appendChild(row);
    });

    recordCount.textContent = `${data.length} records loaded`;
  }

  // Initial render
  renderRows(students);

  // Toggle ERP Spreadsheet on Hello World button click
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

  // Live search/filter via formula bar
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    const filtered = students.filter(student =>
      student.name.toLowerCase().includes(query) ||
      student.rollNo.toLowerCase().includes(query) ||
      student.department.toLowerCase().includes(query)
    );
    renderRows(filtered);
  });

  // Interactive Excel cell click to update formula bar address
  tableBody.addEventListener("click", (e) => {
    const cell = e.target.closest("td");
    if (cell && cell.dataset.col && cell.dataset.row) {
      cellAddress.textContent = `${cell.dataset.col}${cell.dataset.row}`;
      searchInput.value = cell.textContent.trim();
    }
  });
});
