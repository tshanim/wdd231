const courses = [{
   wdd130: 'WDD130',
   wdd131: 'WDD131',
   wdd231: 'WDD231',
   cse110: 'CSE110',
   cse111: 'CSE111',
   cse210: 'CSE210',
}];


/* ***************Filter Section************* */
function displayCourses(filterCourses) {
    let courseHTML ="";
    filterCourses.forEach((course) => {
        // check for each property to exist
    for (let key in course) {
      courseHTML += `<div class="course">${course[key]}</div>`;
    };
    });
    document.querySelector('#course-container').innerHTML = courseHTML;
}
displayCourses(courses);

// Here we add event listeners to the buttons to clear of whatever was previously displayed
 const allCourses = document.querySelector('#all-courses');
 allCourses.addEventListener('click', (event) => {
    event.preventDefault();
    displayCourses(courses);

    // Here is to get the total number of course
    const totalCourses = Object.keys(courses[0]).length;
    document.querySelector('#counter').textContent = `The total number of courses listed below is: ${totalCourses}`;
 });

/* ******************Event Listener for CSE button************* */
const cseCourses = document.querySelector('#cse-courses');

cseCourses.addEventListener('click', (event) => {
    event.preventDefault();
    // Display only CSE Courses
    const cseCourses = [{
        cse110: 'CSE110',
        cse111: 'CSE111',
        cse210: 'CSE210',
    }];
   displayCourses(cseCourses);

   // Here is to get the total number of course
   const totalCourses = Object.keys(cseCourses[0]).length;
   document.querySelector('#counter').textContent = `The total number of courses listed below is: ${totalCourses}`;
});

/* ******************Event Listener for WDD button************* */
const wddCourses = document.querySelector('#wdd-courses');

wddCourses.addEventListener('click', (event) => {
    event.preventDefault();
    // Display only WDD Courses
    const wddCourses = [{
        wdd130: 'WDD130',
        wdd131: 'WDD131',
        wdd231: 'WDD231',
    }];
   displayCourses(wddCourses);

   // Here is to get the total number of course
   const totalCourses = Object.keys(wddCourses[0]).length;
   document.querySelector('#counter').textContent = `The total number of courses listed below is: ${totalCourses}`;
});

