// ==========================================
// 1. DATA GENERATORS
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

// Generate Alumni Records
function generateAlumniData() {
  const alumniRoles = [
    { title: "Senior Software Engineer", company: "Google", baseSalary: 12500 },
    { title: "Cloud Solutions Architect", company: "Amazon AWS", baseSalary: 13200 },
    { title: "Staff AI Research Engineer", company: "Microsoft", baseSalary: 14800 },
    { title: "Lead Product Manager", company: "Salesforce", baseSalary: 11800 },
    { title: "Senior DevOps Lead", company: "Netflix", baseSalary: 12900 },
    { title: "Autonomous Vehicle Specialist", company: "Tesla", baseSalary: 13500 },
    { title: "Senior Mechanical Consultant", company: "Boeing", baseSalary: 10500 },
    { title: "Power Grid Automation Lead", company: "Siemens", baseSalary: 10200 },
    { title: "Full Stack Engineering Lead", company: "Uber", baseSalary: 11400 },
    { title: "Cybersecurity Principal Analyst", company: "Cisco", baseSalary: 12100 },
    { title: "Data Platform Architect", company: "Meta", baseSalary: 14200 },
    { title: "Robotics Systems Specialist", company: "Boston Dynamics", baseSalary: 13800 }
  ];

  const alumni = [];
  let id = 1;

  departments.forEach((dept, dIdx) => {
    for (let i = 1; i <= 40; i++) {
      const alumId = `ALUM-${2020 + (i % 5)}-${String(id).padStart(3, "0")}`;
      const fName = firstNames[(id * 9 + dIdx) % firstNames.length];
      const lName = lastNames[(id * 13 + i) % lastNames.length];
      const name = `${fName} ${lName}`;
      const roleObj = alumniRoles[(id + i) % alumniRoles.length];
      const monthlySalary = roleObj.baseSalary + ((i * 150) % 3500);

      alumni.push({
        id,
        alumId,
        name,
        department: dept.name,
        designation: `${roleObj.title} @ ${roleObj.company}`,
        monthlySalaryFormatted: `$${monthlySalary.toLocaleString()} / mo`,
        monthlySalaryRaw: monthlySalary
      });

      id++;
    }
  });

  return alumni;
}

// Happy Exit Students Gallery Data
const happyExitStudents = [
  {
    name: "Aarav Sharma",
    avatar: "👨‍🎓",
    department: "Computer Science & Engineering",
    batch: "Class of 2024",
    company: "Google",
    designation: "Software Engineer",
    salary: "$11,500 / mo",
    quote: "Antigravity ERP made tracking our projects seamless! Excited to step into Google Cloud."
  },
  {
    name: "Priya Iyer",
    avatar: "👩‍🎓",
    department: "Electronics & Communication",
    batch: "Class of 2024",
    company: "Microsoft",
    designation: "Firmware Engineer",
    salary: "$12,200 / mo",
    quote: "A thrilling journey from university labs to Microsoft hardware engineering!"
  },
  {
    name: "Rohan Verma",
    avatar: "👨‍🎓",
    department: "Information Technology",
    batch: "Class of 2024",
    company: "Amazon AWS",
    designation: "Solutions Architect",
    salary: "$10,800 / mo",
    quote: "Grateful for the rigorous mentorship. Heading straight to AWS cloud infrastructure!"
  },
  {
    name: "Sneha Kulkarni",
    avatar: "👩‍🎓",
    department: "Electrical & Electronics",
    batch: "Class of 2024",
    company: "Tesla",
    designation: "Battery Systems Engineer",
    salary: "$13,000 / mo",
    quote: "Thrilled to contribute to clean energy mobility and electric battery tech at Tesla!"
  },
  {
    name: "Vikram Singh",
    avatar: "👨‍🎓",
    department: "Mechanical Engineering",
    batch: "Class of 2024",
    company: "Boeing",
    designation: "Aerodynamics Consultant",
    salary: "$10,500 / mo",
    quote: "Designing next-gen flight surfaces was my dream since Year 1. We did it!"
  },
  {
    name: "Ananya Patel",
    avatar: "👩‍🎓",
    department: "Computer Science & Engineering",
    batch: "Class of 2024",
    company: "Meta AI",
    designation: "AI Research Associate",
    salary: "$14,000 / mo",
    quote: "Publishing papers and stepping into Meta AI research. Proud to be an alumnus!"
  }
];

const allStudents = generate500Students();
let filteredStudents = [...allStudents];

const allAlumni = generateAlumniData();
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

  // --- RENDER STUDENTS TABLE ---
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

  // --- RENDER ALUMNI TABLE ---
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
      alumniRecordCount.textContent = "Filtered: 0 alumni";
      return;
    }

    const fragment = document.createDocumentFragment();
    records.forEach((a, idx) => {
      const row = document.createElement("tr");
      const rNum = idx + 2;
      row.innerHTML = `
        <td class="row-num">${rNum}</td>
        <td class="id-cell" data-col="A" data-row="${rNum}">${a.alumId}</td>
        <td class="name-cell" data-col="B" data-row="${rNum}">${a.name}</td>
        <td data-col="C" data-row="${rNum}">${a.department}</td>
        <td class="designation-cell" data-col="D" data-row="${rNum}">${a.designation}</td>
        <td class="salary-cell" data-col="E" data-row="${rNum}">${a.monthlySalaryFormatted}</td>
      `;
      fragment.appendChild(row);
    });
    alumniTableBody.appendChild(fragment);

    alumniRecordCount.textContent = records.length === allAlumni.length
      ? `Ready | ${records.length} alumni loaded`
      : `Filtered: ${records.length} of ${allAlumni.length} alumni`;
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
            <span>${item.salary}</span>
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
    link.download = "Students_ERP_List.csv";
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
    link.download = "Alumni_Placements_Directory.csv";
    link.click();
  });

  // --- INITIAL RENDERS ---
  renderStudentRows(allStudents);
  renderAlumniRows(allAlumni);
  renderGallery();
});
