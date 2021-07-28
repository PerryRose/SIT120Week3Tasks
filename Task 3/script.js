const btn = document.getElementById('button');
btn.addEventListener('click', gettersAndSetters);

let student = {
    firstName: "Perry",
    lastName: "Rose",
    ID: "215098559",

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },

    get studentId() {
        return this.ID;
    },

    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    },

    set studentId(value) {
        this.ID = value;
    }
}

function gettersAndSetters() {

    // Get Time
    const date = new Date();
    console.log("Current time: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

    // Getters
    console.log("Student Full Name: " + student.fullName);
    console.log("Student ID number: " + student.studentId);

    // Setters
    student.fullName = "Taylah Anderson";
    console.log("New Student Name: " + student.fullName);

    student.studentId = "123456789"
    console.log("New Student ID: " + student.studentId);
}

