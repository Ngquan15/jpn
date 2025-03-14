let  students=[

    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature : 7 } },

    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature : 5} },

    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature : 9 } }

   ];
function calculateAverage(scores) {
    const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
    return totalScore / Object.keys(scores).length;
}

const excellentStudents = students
.filter(student => calculateAverage(student.scores) >= 8)
.map(student => student.name);

console.log("Sinh viên trên 8.:", excellentStudents.join(", "));