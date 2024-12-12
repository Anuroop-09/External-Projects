const inputStudyDate = document.getElementById('study-date');
const inputAge = document.getElementById('age');
const inputDOB = document.getElementById('dob');
const calculateBtn = document.getElementById('submit');
const showNormalizedDate = document.querySelector('#normalized-date span');
const studyDateError = document.querySelector('.study-date-error');
const dobError = document.querySelector('.dob-error');
const ageError = document.querySelector('.age-error');
const resetBtn =  document.getElementById('reset');

calculateBtn.addEventListener('click', function(event) {
    event.preventDefault();

    showError(0);
    if(inputDOB.value && inputStudyDate.value && inputAge.value) {
        // Study date, Age and DOB values are given
        showNormalizedDate.style.opacity = 1;
        showNormalizedDate.innerText = calculateStudyDate(inputStudyDate.value, inputDOB.value, inputAge.value);
    } else if (inputDOB.value == '' && inputStudyDate.value && inputAge.value) {
        // Study Date and Age values are given (No DOB)
        showNormalizedDate.style.opacity = 1;
        showNormalizedDate.innerText = calculateStudyDate(inputStudyDate.value, undefined, inputAge.value);
    } else if(inputDOB.value && inputStudyDate.value && inputAge.value == '') {
        // Study date and DOB values are given (No Age)
        showNormalizedDate.style.opacity = 1;
        showNormalizedDate.innerText = calculateStudyDate(inputStudyDate.value, inputDOB.value, undefined);
    } else if(inputDOB.value && inputStudyDate.value == '' && inputAge.value) {
        // Age and DOB values are given (No Study Date)
        showError(1, true, false, false);
        console.log(`Study Date is missing`);
    } else if(inputDOB.value == '' && inputStudyDate.value == '' && inputAge.value) {
        // Age value is given (No DOB & Study Date)
        showError(1, true, false, false);
        console.log(`Study Date and DOB are missing`);
    } else if(inputDOB.value == '' && inputStudyDate.value && inputAge.value == '') {
        // Study Date value is given (No DOB & Age)
        showError(1, false, true, true);
        console.log(`Age and DOB are missing`);
    } else if(inputDOB.value && inputStudyDate.value == '' && inputAge.value == '') {
        // DOB value is given (No Study date & Age)
        showError(1, true, false, false);
        console.log(`Study Date and Age are missing`);
    } else {
        // No Values is given
        console.log(`No values given`);
        showError(1);
    }
});

resetBtn.addEventListener('click', () => {
    inputDOB.value = '';
    inputStudyDate.value = '';
    inputAge.value = '';
    showNormalizedDate.style.opacity = 0;
})

const calculateStudyDate = function (studyDate = null, dob = null, age = null) {
    const studyDateYear = Number(studyDate.split('-')[0]);
    console.log(`Study Date Year: ${studyDateYear}`);
    let delta;
    if (age && dob == null) {
        // When only age is given (No DOB)
        const dobForCal = studyDateYear - Number(age);
        console.log(`DOB for Cal: ${dobForCal}`);
        delta = dobForCal - 1900;
        console.log(`Delta: ${delta}`);
    } else if ((age == null && dob) || (age && dob)) {
        // when age and dob are given, and also if age is not given and dob is given
        const dobYear = Number(dob.split('-')[0]);
        console.log(`DOB Year: ${dobYear}`);
        delta = dobYear - 1900;
        console.log(`Delta: ${delta}`);
    }
    const finalNormalizedYear = studyDateYear - delta;
    console.log(`Final Normalized Year: ${finalNormalizedYear}`);
    return finalNormalizedYear;
}

const showError = function (value, studyDate = true, age = true, dob = true) {
    if (studyDate) studyDateError.style.opacity = value;
    if (dob) dobError.style.opacity = value;
    if (age) ageError.style.opacity = value;
}