const company = {
    table: "RikkeiSoft",
    location: "Hà Nội",
    employees: [
        { name1: "Nguyễn Văn Luận", position1: "Developer" },
        { name2: "Nguyễn Văn Hoàng", position2: "Tester" },
        { name3: "Hoàng Nam Cao", position3: "Manager" }
    ]
};
console.log(company.table + "-" + company.location);
console.log(company.employees[0].name1 + "-" + company.employees[0].position1);
console.log(company.employees[1].name2 + "-" + company.employees[1].position2);
console.log(company.employees[2].name3 + "-" + company.employees[2].position3);


