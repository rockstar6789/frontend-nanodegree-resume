var bio =
    {
      "name": "Rock Jethwa",


      "role": "UX Architect",
      "contacts":
        {
          "mobile": "1 416 834 4209",
          "email": "rockstar6789@gmail.com",
          "github": "rockstar6789",
          "website": "www.RockJethwa.com"
        },
        "welcomeMessage": "I rate my success by how I make other people successful.",
        "skills": [
                    "Financial Services Digital Products", "User Experience Design", "IT 3.0 Marketplaces", "Dashboards"
                  ],
        "bioPic": "http://cdn.slidesharecdn.com/profile-photo-rockstar6789-96x96.jpg"
    }




    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);



    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);


    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedContactInfo = formattedEmail + formattedMobile + formattedGithub;
    $("#topContacts").append(formattedContactInfo);


    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkills);

    };




// i18n name Firstname LASTNAME
function inName(name) {
  // use JS trim to remove white space from front and back of string
  name = bio.name.trim().split(" ");
  console.log(name);

  // Last name to uppercase
  name[1] = name[1].toUpperCase();

  // First name to Sentence case
      // (a) use slice to chooe first letter to Upper
      // (b) from 2nd letter onwards to Lower
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  //return the two values as a string
  return name[0] + " " + name[1];

}
//add button defined in helper.js to index.html, main section
// this will run function when iName(name) when button is clicked
$("#main").append(internationalizeButton);











  var education =
    {
      "schools":
      [
        {
          "major": "IT Management",
          "type": "Bachelor of Commerce",
          "name": "Ryerson University",
          "location": "Toronto, ON, Canada"

        }

      ],
      "PostGradCertifications":
        [
          {
            "major": "Data Science Toolbox",
            "type": "Certification",
            "name": "Johns Hopkins University",
            "url" : "http://coursera.com/"
          },
          {
            "major": "Gamificaiton MBA Course",
            "type": "Certification",
            "name": "Wharton School of Business",
            "url": "http://coursera.com/"
          },
          {
            "major": "Front End Web Developer",
            "type": "Nano Degree",
            "name": "Udacity Online University",
            "url" : "http://udacity.com/"
          },
          {
            "certification": "Gamificaiton Level 3",
            "type": "Certification",
            "name": "Masterclass with Gabe Zickermann",
            "url":  "http://engagementalliance.org/get-certified/"
         }
        ]
    }

  var work =
  {
    "jobs": [
              {
                "employer" : "TD Bank",
                "location" : "Toronto, ON",
                "title" : "IT Architect",
                "dates" : "Current - ",
                "description" : "Roadmap a Futureproof UX framework that will scale as new features are launched."
              },
              {
                "employer" : "Questrade",
                "location" : "Toronto, ON",
                "title" : "Sr. UX Designer",
                "dates" : "2012-2014",
                "description" : "Created a cross platform HTML5 User Experience that can be deployed for iPhone, Android, WindowPhone, Blackberry, Mobile Web"
              },
              {
                "employer" : "RBC, TD Bank, Bell Mobility",
                "location" : "Toronto, ON",
                "title" : "UX Designer",
                "dates" : "2008-2012 ",
                "description" : "Apple Award for best Financial Services App, with over 2.2 million mobile bill payments in less than 1 year of launch."
              },
              {
                "employer" : "TELUS",
                "location" : "Toronto, ON",
                "title" : "Manager Portal Services",
                "dates" : "2005-2008",
                "description" : "Increase revenue and user base by more than 2X in 24 months [details propritary]."
              }
            ]
  }

work.display = function() {
for (var i = 0; i < work.jobs.length; i++) {
  console.log(work.jobs[i]);
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
  var formattedEmployerTitle = formattedEmployer.toUpperCase() + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
  $(".work-entry:last").append(formattedDescription);


}


};
work.display();


function locationizer(work_obj) {
  var locationArray = [];

  for (job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);

  }
  return locationArray;
locationizer(work_obj);
};



$(document).click(function(loc) {
  // your code goes here

var x = loc.pageX;
var y = loc.pageY;

console.log(x,y);

});








  var projects =
    {
    "myProjects":
      [
        {
          "projectTitle": "TD IT 3.0 Marketplace",
          "dates": "",
          "description": "",
          "images":
            [
               "", "", ""
            ]
        },
        {
          "projectTitle": "TD Enterprise Hackathon",
          "dates": "",
          "description": "",
          "images":
            [
               "", "", ""
            ]
          },
        {
          "projectTitle": "TD Enterprise UX Framework - Banking",
          "dates": "",
          "description": "",
          "images":
            [
               "", "", ""
            ]
          },

                    {
          "projectTitle": "TD Bank of the Future Kiosk",
          "dates": "",
          "description": "",
          "images":
            [
               "", "", ""
            ]
        },
        {
          "projectTitle": "Questrade Web Trading Platform",
          "dates": "",
          "description": "",
          "images":
            [
               "", "", ""
            ]
          },
        {
          "projectTitle": "Questrade Mobile Trading App",
          "dates": "",
          "description": "",
          "images":
            [
               "", "", ""
            ]
        },
                    {
          "projectTitle": "RBC Mobile Banking App",
          "dates": "",
          "description": "",
          "images":
            [
               "", "", ""
            ]
        },

                    {
          "projectTitle": "TELUS Mobile Media Player",
          "dates": "",
          "description": "",
          "images":
            [
               "", "", ""
            ]
        },
                          {
          "projectTitle": "TELUS Mobile Search",
          "dates": "",
          "description": "",
          "images":
            [
               "", "", ""
            ]
        },
                    {
          "projectTitle": "TELUS Mobile Portal",
          "dates": "",
          "description": "",
          "images":
            [
               "", "", ""
            ]
        },
                          {
          "projectTitle": "TELUS Self Serve Billing Portal",
          "dates": "",
          "description": "",
          "images":
            [
               "", "", ""
            ]
        }
      ]
    }

// 1. Create function name and add "{"
projects.display = function() {

// 2. create for loop start to iterate through and add "{"
for (var i = 0; i < projects.myProjects.length; i++) {
// 3. Start
  $("#projects").append(HTMLprojectStart);
// 4. create variables for each JSON item you want to interate through
  var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.myProjects[i].projectTitle);
// 5. Print out JSON item
  $(".project-entry:last").append(formattedProjectTitle);




  }

};
// Call function to run
projects.display();

$("#mapDiv").append(googleMap);

