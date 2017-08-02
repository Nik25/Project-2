  //Project2 - Pagination ("Meets Expectations")

 //Declare the global variables.
  var studentListing = $('.student-item')  
  var totalPages = Math.ceil(studentListing.length / 10); 
  var currentPage = 1;

  // Check the no. of students & pages.
  console.log("The student list begins on page", currentPage); // Shows the page no. where the list begins.
  console.log("The student list contains", studentListing.length, "students and", totalPages, "pages"); //Shows the total no. of students & the total no. of pages.

  // Functions - There are two main functions : 1) showPage and  2) appendPageLinks  

  //*When the page loads, your program should hide all but the first 10 students in the list.*

  // The arguments for page number and student list. 
  function showPage(currentPage, studentListing) {  
    // To begin with, hide all students on the page.
    $(studentListing).hide();
    // Here the position of the first & the last student on each page is determined.
    var beginingIndex = (currentPage - 1) * 10;
    var endingIndex = beginingIndex + 10;
    //if student should be on this page number
   // show the student
    for (var b = beginingIndex; b < endingIndex; b += 1){
      $(studentListing[b]).show();
    }
  }

  // Here, page links are appended to the page
  function appendPageLinks(studentListing) {  //take a student list as an argument
    $('.student-list').append('<div class="pagination"></div>');
    $('.pagination').append('<ul></ul>');
    var pagination = $('.pagination')

  // Here the number of pages get added as links to the pagination object
    for (p = 1; p <= totalPages; p += 1) {
      pagination.append('<li> <a href="#">' + p + '</a></li>');
    }

    $('a:first').addClass('active'); // Page one is made anchor active on page load.
     // define what happens when you click a link :
    //when the link is clicked:
    $('a').click(function() {
      //it gets the page no. from the pages and that page is displayed in the console.
      currentPage = $(this).html();
      console.log("This list is now showing page" , currentPage);
      //The showPage function is called to display the page for the respective group of students
      showPage(currentPage, studentListing);
      //The clicked page becoms active
      $("a").removeClass("active");
      $(this).addClass("active");
    }); 
  }

  // Finally, the functions are called.
  showPage(currentPage,studentListing);
  appendPageLinks(studentListing);
