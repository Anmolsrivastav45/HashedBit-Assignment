const students = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

// Function to calculate average scores
function calculateAverages(students) {
    let result = {};
    
    for (let student in students) {
        let subjects = students[student];
        let total = Object.values(subjects).reduce((sum, score) => sum + score, 0);
        let average = total / Object.keys(subjects).length;
        result[student] = { average: Math.round(average) }; // rounding to the nearest integer
    }
    
    return result;
}

// Example usage:
const averages = calculateAverages(students);
console.log(averages);
