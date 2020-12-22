const data1El = document.querySelector('#data1');


function validateForm(form) {
    let id = form.student_id.value;
    if (id == "") {
        alert("Name must be filled out");
        return false;
    }
    console.log(id);
    getStudentCB(id,(err, data) =>{
        if (err) {
            console.log(err);
        } else {
            let student = JSON.parse(data);
            data1El.textContent = `${student.Nachname}, ${student.Vorname}, ${student.Lehrbetrieb} `;
            console.log(student);
            getStudentCB(id,(err, data) =>{
                if (err) {
                    console.log(err);
                } else {
                    let student = JSON.parse(data);
                    data1El.textContent = `${student.Nachname}, ${student.Vorname}, ${student.Lehrbetrieb} `;
                    console.log(student);
                }
            });

        }
    });
}


