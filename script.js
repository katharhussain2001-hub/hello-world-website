// ==========================================
// 1. DATA GENERATORS & CONSTANTS
// ==========================================

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

// Featured Happy Exit Students Data
const happyExitStudents = [
  {
    name: "Aarav Sharma",
    avatar: "👨‍🎓",
    department: "Computer Science & Engineering",
    batch: "Class of 2024",
    company: "Google",
    designation: "Software Engineer @ Google",
    salary: 11500,
    quote: "Antigravity ERP made tracking our projects seamless! Excited to step into Google Cloud."
  },
  {
    name: "Priya Iyer",
    avatar: "👩‍🎓",
    department: "Electronics & Communication",
    batch: "Class of 2024",
    company: "Microsoft",
    designation: "Firmware Engineer @ Microsoft",
    salary: 12200,
    quote: "A thrilling journey from university labs to Microsoft hardware engineering!"
  },
  {
    name: "Rohan Verma",
    avatar: "👨‍🎓",
    department: "Information Technology",
    batch: "Class of 2024",
    company: "Amazon AWS",
    designation: "Solutions Architect @ Amazon AWS",
    salary: 10800,
    quote: "Grateful for the rigorous mentorship. Heading straight to AWS cloud infrastructure!"
  },
  {
    name: "Sneha Kulkarni",
    avatar: "👩‍🎓",
    department: "Electrical & Electronics",
    batch: "Class of 2024",
    company: "Tesla",
    designation: "Battery Systems Engineer @ Tesla",
    salary: 13000,
    quote: "Thrilled to contribute to clean energy mobility and electric battery tech at Tesla!"
  },
  {
    name: "Vikram Singh",
    avatar: "👨‍🎓",
    department: "Mechanical Engineering",
    batch: "Class of 2024",
    company: "Boeing",
    designation: "Aerodynamics Consultant @ Boeing",
    salary: 10500,
    quote: "Designing next-gen flight surfaces was my dream since Year 1. We did it!"
  },
  {
    name: "Ananya Patel",
    avatar: "👩‍🎓",
    department: "Computer Science & Engineering",
    batch: "Class of 2024",
    company: "Meta AI",
    designation: "AI Research Associate @ Meta AI",
    salary: 14000,
    quote: "Publishing papers and stepping into Meta AI research. Proud to be an alumnus!"
  }
];

// Generate 500 Students
function generate500Students() {
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

      students.push({ id, rollNo, name, department: dept.name, semester, status });
      id++;
    }
  });

  return students;
}

// Generate EXACTLY 1000 Alumni Records (Including Happy Exit Graduates at the top)
function generate1000Alumni() {
  const alumniRoles = [
    { title: "Senior Software Engineer", company: "Google", base: 12500 },
    { title: "Cloud Solutions Architect", company: "Amazon AWS", base: 13200 },
    { title: "Staff AI Research Engineer", company: "Microsoft", base: 14800 },
    { title: "Lead Product Manager", company: "Apple", base: 13600 },
    { title: "Senior DevOps Lead", company: "Netflix", base: 12900 },
    { title: "Autonomous Vehicle Specialist", company: "Tesla", base: 13500 },
    { title: "Senior Mechanical Consultant", company: "Boeing", base: 10500 },
    { title: "Power Grid Automation Lead", company: "Siemens", base: 10200 },
    { title: "Full Stack Engineering Lead", company: "Uber", base: 11400 },
    { title: "Cybersecurity Principal Analyst", company: "Cisco", base: 12100 },
    { title: "Data Platform Architect", company: "Meta", base: 14200 },
    { title: "Robotics Systems Specialist", company: "Boston Dynamics", base: 13800 },
    { title: "Silicon Design Engineer", company: "NVIDIA", base: 14500 },
    { title: "Wireless Systems Architect", company: "Qualcomm", base: 11900 },
    { title: "Propulsion Dynamics Lead", company: "SpaceX", base: 13900 },
    { title: "Cloud Infrastructure Architect", company: "Oracle", base: 11600 }
  ];

  const alumni = [];
  let id = 1;

  // 1. First add the featured Happy Exit Students so they appear in the Alumni list!
  happyExitStudents.forEach((hes) => {
    alumni.push({
      id,
      alumId: `ALUM-2024-${String(id).padStart(4, "0")}`,
      name: hes.name,
      department: hes.department,
      designation: hes.designation,
      monthlySalaryFormatted: `$${hes.salary.toLocaleString()} / mo`,
      monthlySalaryRaw: hes.salary,
      isFeatured: true
    });
    id++;
  });

  // 2. Generate remaining up to exactly 1,000 alumni
  const targetTotal = 1000;
  const remainingCount = targetTotal - alumni.length;

  for (let i = 0; i < remainingCount; i++) {
    const dept = departments[i % departments.length];
    const alumYear = 2018 + (i % 6); // 2018 to 2023
    const alumId = `ALUM-${alumYear}-${String(id).padStart(4, "0")}`;

    const fName = firstNames[(id * 17 + i) % firstNames.length];
    const lName = lastNames[(id * 23 + i) % lastNames.length];
    const name = `${fName} ${lName}`;

    const role = alumniRoles[(id + i) % alumniRoles.length];
    const monthlySalary = role.base + ((i * 125) % 4500);

    alumni.push({
      id,
      alumId,
      name,
      department: dept.name,
      designation: `${role.title} @ ${role.company}`,
      monthlySalaryFormatted: `$${monthlySalary.toLocaleString()} / mo`,
      monthlySalaryRaw: monthlySalary,
      isFeatured: false
    });

    id++;
  }

  return alumni;
}

const allStudents = generate500Students();
let filteredStudents = [...allStudents];

const allAlumni = generate1000Alumni();
let filteredAlumni = [...allAlumni];

// ==========================================
// 2. DOM INITIALIZATION & EVENT HANDLERS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // Navigation elements
  const studentBtn = document.getElementById("studentBtn");
  const alumniBtn = document.getElementById("alumniBtn");
  const studentSection = document.getElementById("studentSection");
  const alumniSection = document.getElementById("alumniSection");

  // Student elements
  const studentTableBody = document.getElementById("studentTableBody");
  const studentFilterToggle = document.getElementById("studentFilterToggle");
  const studentFilterPanel = document.getElementById("studentFilterPanel");
  const studentFilterRoll = document.getElementById("studentFilterRoll");
  const studentFilterName = document.getElementById("studentFilterName");
  const studentFilterDept = document.getElementById("studentFilterDept");
  const studentResetBtn = document.getElementById("studentResetBtn");
  const studentSearchInput = document.getElementById("studentSearchInput");
  const studentRecordCount = document.getElementById("studentRecordCount");
  const studentExportBtn = document.getElementById("studentExportBtn");

  // Alumni elements
  const alumniTableBody = document.getElementById("alumniTableBody");
  const alumniFilterToggle = document.getElementById("alumniFilterToggle");
  const alumniFilterPanel = document.getElementById("alumniFilterPanel");
  const alumniFilterName = document.getElementById("alumniFilterName");
  const alumniFilterDept = document.getElementById("alumniFilterDept");
  const alumniFilterDesignation = document.getElementById("alumniFilterDesignation");
  const alumniResetBtn = document.getElementById("alumniResetBtn");
  const alumniSearchInput = document.getElementById("alumniSearchInput");
  const alumniRecordCount = document.getElementById("alumniRecordCount");
  const alumniExportBtn = document.getElementById("alumniExportBtn");

  // Gallery container
  const exitStudentsGallery = document.getElementById("exitStudentsGallery");

  // --- TAB TOGGLING: Student Details vs Alumni Details ---
  studentBtn.addEventListener("click", () => {
    studentBtn.classList.add("active");
    alumniBtn.classList.remove("active");
    studentSection.classList.remove("hidden");
    alumniSection.classList.add("hidden");
  });

  alumniBtn.addEventListener("click", () => {
    alumniBtn.classList.add("active");
    studentBtn.classList.remove("active");
    alumniSection.classList.remove("hidden");
    studentSection.classList.add("hidden");
  });

  function getStatusClass(status) {
    if (status === "Active") return "active";
    if (status === "Inactive") return "inactive";
    return "on-leave";
  }

  // --- RENDER STUDENTS TABLE (500 RECORDS) ---
  function renderStudentRows(records) {
    studentTableBody.innerHTML = "";
    if (records.length === 0) {
      studentTableBody.innerHTML = `
        <tr>
          <td class="row-num">-</td>
          <td colspan="5" style="text-align: center; color: #94a3b8; padding: 26px;">
            No student records matching your filter criteria.
          </td>
        </tr>
      `;
      studentRecordCount.textContent = "Filtered: 0 of 500 students";
      return;
    }

    const fragment = document.createDocumentFragment();
    records.forEach((s, idx) => {
      const row = document.createElement("tr");
      const rNum = idx + 2;
      row.innerHTML = `
        <td class="row-num">${rNum}</td>
        <td class="roll-cell" data-col="A" data-row="${rNum}">${s.rollNo}</td>
        <td class="name-cell" data-col="B" data-row="${rNum}">${s.name}</td>
        <td data-col="C" data-row="${rNum}">${s.department}</td>
        <td data-col="D" data-row="${rNum}">${s.semester}</td>
        <td data-col="E" data-row="${rNum}"><span class="status-badge ${getStatusClass(s.status)}">${s.status}</span></td>
      `;
      fragment.appendChild(row);
    });
    studentTableBody.appendChild(fragment);

    studentRecordCount.textContent = records.length === allStudents.length
      ? `Ready | 500 students loaded`
      : `Filtered: ${records.length} of 500 students`;
  }

  // --- RENDER ALUMNI TABLE (1,000 RECORDS) ---
  function renderAlumniRows(records) {
    alumniTableBody.innerHTML = "";
    if (records.length === 0) {
      alumniTableBody.innerHTML = `
        <tr>
          <td class="row-num">-</td>
          <td colspan="5" style="text-align: center; color: #94a3b8; padding: 26px;">
            No alumni records matching your filter criteria.
          </td>
        </tr>
      `;
      alumniRecordCount.textContent = "Filtered: 0 of 1,000 alumni";
      return;
    }

    const fragment = document.createDocumentFragment();
    records.forEach((a, idx) => {
      const row = document.createElement("tr");
      const rNum = idx + 2;
      const featuredBadge = a.isFeatured ? ` <span style="font-size:0.7rem; background:#dbeafe; color:#1e40af; padding:2px 6px; border-radius:4px; font-weight:700;">★ Grad 2024</span>` : '';
      
      row.innerHTML = `
        <td class="row-num">${rNum}</td>
        <td class="id-cell" data-col="A" data-row="${rNum}">${a.alumId}</td>
        <td class="name-cell" data-col="B" data-row="${rNum}">${a.name}${featuredBadge}</td>
        <td data-col="C" data-row="${rNum}">${a.department}</td>
        <td class="designation-cell" data-col="D" data-row="${rNum}">${a.designation}</td>
        <td class="salary-cell" data-col="E" data-row="${rNum}">${a.monthlySalaryFormatted}</td>
      `;
      fragment.appendChild(row);
    });
    alumniTableBody.appendChild(fragment);

    alumniRecordCount.textContent = records.length === allAlumni.length
      ? `Ready | 1,000 alumni loaded`
      : `Filtered: ${records.length} of 1,000 alumni`;
  }

  // --- RENDER HAPPY EXIT GALLERY ---
  function renderGallery() {
    exitStudentsGallery.innerHTML = "";
    happyExitStudents.forEach(item => {
      const card = document.createElement("div");
      card.className = "exit-card";
      card.innerHTML = `
        <div class="card-banner">
          <span class="batch-tag">${item.batch}</span>
        </div>
        <div class="card-avatar-wrap">
          <span>${item.avatar}</span>
        </div>
        <div class="card-body">
          <h3 class="student-exit-name">${item.name}</h3>
          <p class="student-exit-dept">${item.department}</p>
          <div class="placement-badge">
            💼 Placed at <strong>${item.company}</strong>
          </div>
          <p class="exit-quote">"${item.quote}"</p>
          <div class="card-footer">
            <span>Role: ${item.designation}</span>
            <span>$${item.salary.toLocaleString()} / mo</span>
          </div>
        </div>
      `;
      exitStudentsGallery.appendChild(card);
    });
  }

  // --- STUDENT FILTERS ---
  function applyStudentFilters() {
    const roll = studentFilterRoll.value.toLowerCase().trim();
    const name = studentFilterName.value.toLowerCase().trim();
    const dept = studentFilterDept.value.trim();
    const search = studentSearchInput.value.toLowerCase().trim();

    filteredStudents = allStudents.filter(s => {
      const mRoll = !roll || s.rollNo.toLowerCase().includes(roll);
      const mName = !name || s.name.toLowerCase().includes(name);
      const mDept = !dept || s.department === dept;
      const mSearch = !search ||
        s.name.toLowerCase().includes(search) ||
        s.rollNo.toLowerCase().includes(search) ||
        s.department.toLowerCase().includes(search) ||
        s.status.toLowerCase().includes(search);
      return mRoll && mName && mDept && mSearch;
    });

    renderStudentRows(filteredStudents);
  }

  studentFilterToggle.addEventListener("click", () => {
    studentFilterPanel.classList.toggle("closed");
    studentFilterToggle.classList.toggle("active");
  });

  studentFilterRoll.addEventListener("input", applyStudentFilters);
  studentFilterName.addEventListener("input", applyStudentFilters);
  studentFilterDept.addEventListener("change", applyStudentFilters);
  studentSearchInput.addEventListener("input", applyStudentFilters);

  studentResetBtn.addEventListener("click", () => {
    studentFilterRoll.value = "";
    studentFilterName.value = "";
    studentFilterDept.value = "";
    studentSearchInput.value = "";
    filteredStudents = [...allStudents];
    renderStudentRows(filteredStudents);
  });

  // --- ALUMNI FILTERS ---
  function applyAlumniFilters() {
    const name = alumniFilterName.value.toLowerCase().trim();
    const dept = alumniFilterDept.value.trim();
    const desig = alumniFilterDesignation.value.toLowerCase().trim();
    const search = alumniSearchInput.value.toLowerCase().trim();

    filteredAlumni = allAlumni.filter(a => {
      const mName = !name || a.name.toLowerCase().includes(name);
      const mDept = !dept || a.department === dept;
      const mDesig = !desig || a.designation.toLowerCase().includes(desig);
      const mSearch = !search ||
        a.name.toLowerCase().includes(search) ||
        a.alumId.toLowerCase().includes(search) ||
        a.department.toLowerCase().includes(search) ||
        a.designation.toLowerCase().includes(search);
      return mName && mDept && mDesig && mSearch;
    });

    renderAlumniRows(filteredAlumni);
  }

  alumniFilterToggle.addEventListener("click", () => {
    alumniFilterPanel.classList.toggle("closed");
    alumniFilterToggle.classList.toggle("active");
  });

  alumniFilterName.addEventListener("input", applyAlumniFilters);
  alumniFilterDept.addEventListener("change", applyAlumniFilters);
  alumniFilterDesignation.addEventListener("input", applyAlumniFilters);
  alumniSearchInput.addEventListener("input", applyAlumniFilters);

  alumniResetBtn.addEventListener("click", () => {
    alumniFilterName.value = "";
    alumniFilterDept.value = "";
    alumniFilterDesignation.value = "";
    alumniSearchInput.value = "";
    filteredAlumni = [...allAlumni];
    renderAlumniRows(filteredAlumni);
  });

  // --- EXPORT HANDLERS ---
  studentExportBtn.addEventListener("click", () => {
    const headers = ["Roll No", "Student Name", "Department", "Semester", "Status"];
    const rows = filteredStudents.map(s => [
      `"${s.rollNo}"`, `"${s.name}"`, `"${s.department}"`, `"${s.semester}"`, `"${s.status}"`
    ]);
    const csv = [headers.join(","), ...rows.map(r => r.join(","))].join("\r\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Students_ERP_500_List.csv";
    link.click();
  });

  alumniExportBtn.addEventListener("click", () => {
    const headers = ["Alumni ID", "Alumni Name", "Department", "Current Designation", "Monthly Salary"];
    const rows = filteredAlumni.map(a => [
      `"${a.alumId}"`, `"${a.name}"`, `"${a.department}"`, `"${a.designation}"`, `"${a.monthlySalaryFormatted}"`
    ]);
    const csv = [headers.join(","), ...rows.map(r => r.join(","))].join("\r\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Alumni_Directory_1000_List.csv";
    link.click();
  });

  // --- INITIAL RENDERS ---
  renderStudentRows(allStudents);
  renderAlumniRows(allAlumni);
  renderGallery();
});
