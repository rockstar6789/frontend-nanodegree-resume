'use strict';
var bio = {
    "name": "Rock Jethwa",


    "role": "UX Architect",
    "contacts": {
        "mobile": "1 416 834 4209",
        "email": "rockstar6789@gmail.com",
        "github": "rockstar6789",
        "website": "www.RockJethwa.com"
    },
    "welcomeMessage": "If you want to go fast, go alone ... if you want to go further and farther, go together. Let's go together.",
    "skills": [
        "Financial Services", "Digital Products", "User Experience Design", "IT 3.0 Marketplaces", "Enterprise Gamificaiton", "Dashboards", "Purchase Flows"
    ],
    "bioPic": "http://cdn.slidesharecdn.com/profile-photo-rockstar6789-96x96.jpg"
};


bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedNameRole = formattedName + formattedRole;
    $("#header").prepend(formattedNameRole);

    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);

    //    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    //    $("#header").append(formattedBioPic);



    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedContactInfo = formattedEmail + formattedMobile + formattedGithub;
    $("#topContacts").append(formattedContactInfo);


    $("#topContacts").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);

    }
};




bio.display();



/*****

!!!Note to Udacity evaluatior: This works; I commented this out because it looks not so cool (aka Fu-gly)

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

*****/




var education = {
    "schools": [{
            "major": "IT Management",
            "degree": "Bachelor of Commerce",
            "school": "Ryerson University",
            "location": "Toronto, ON, Canada"

        }

    ],
    "PostGradCertifications": [{
        "major": "Data Science Toolbox",
        "degree": "Certification",
        "school": "Johns Hopkins University",
        "url": "http://coursera.com/"
    }, {
        "major": "Gamificaiton MBA Course",
        "degree": "Certification",
        "school": "Wharton School of Business",
        "url": "http://coursera.com/"
    }, {
        "major": "Front End Web Developer",
        "degree": "Nano Degree",
        "school": "Udacity Online University",
        "url": "http://udacity.com/"
    }, {
        "major": "Gamificaiton Level 3",
        "degree": "Certification",
        "school": "Masterclass with Gabe Zickermann",
        "url": "http://engagementalliance.org/get-certified/"
    }]
};

education.display = function() {


    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].school);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

        var formattedEducation = formattedSchoolName + formattedSchoolDegree + formattedSchoolMajor;
        $(".education-entry:last").append(formattedEducation);




        $("#education").append(HTMLonlineClasses);

        for (var i = 0; i < education.PostGradCertifications.length; i++) {
            $("#education").append(HTMLschoolStart);

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.PostGradCertifications[i].major);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.PostGradCertifications[i].school);
            var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
            $(".education-entry:last").append(formattedOnlineTitleSchool);
        }
    }

};

education.display();




var work = {
    "jobs": [{
        "employer": "TD Bank",
        "location": "Toronto, CA",
        "title": "IT Architect",
        "dates": "Current > ",
        "description": "Roadmap a Futureproof UX framework that will scale as new features are launched."
    }, {
        "employer": "Questrade",
        "location": "Toronto, ON",
        "title": "Sr. UX Designer",
        "dates": "2012-2014",
        "description": "Created a cross platform HTML5 User Experience that can be deployed for iPhone, Android, WindowPhone, Blackberry, Mobile Web"
    }, {
        "employer": "RBC, TD Bank, Bell Mobility",
        "location": "Toronto, ON",
        "title": "UX Designer",
        "dates": "2008-2012 ",
        "description": "Apple Award for best Financial Services App, with over 2.2 million mobile bill payments in less than 1 year of launch."
    }, {
        "employer": "TELUS",
        "location": "Toronto, ON",
        "title": "Manager Portal Services",
        "dates": "2005-2008",
        "description": "Increase revenue and user base by more than 2X in 24 months [details propritary]."
    }]
};

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

        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedWorkLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};


work.display();

/*****
function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);

    }
    return locationArray;
    locationizer(work_obj);
};
*****/

// Console.log of x, y of mouse click event
$(document).click(function(loc) {
    // your code goes here

    var x = loc.pageX;
    var y = loc.pageY;

    console.log(x, y);

});




var projects = {
    "myProjects": [
        /*        {
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
        */
        {
            "projectTitle": "TD Bank of the Future Kiosk",
            "dates": "",
            "description": "",
            "images": [
                "http://rockjethwa.com/images/img/portfolio/thumb-td1.jpg", "", ""
            ]
        }, {
            "projectTitle": "TD Securities Enterprise Data Portal",
            "dates": "",
            "description": "",
            "images": [
                "http://rockjethwa.com/images/img/portfolio/thumb-td2.jpg", "", ""
            ]
        },


        /*        {
                  "projectTitle": "Questrade Web Trading Platform",
                  "dates": "",
                  "description": "",
                  "images":
                    [
                       "", "", ""
                    ]
                  },
        */
        {
            "projectTitle": "Questrade Mobile Trading App",
            "dates": "",
            "description": "",
            "images": [
                "http://rockjethwa.com/images/img/portfolio/thumb-quest1.jpg", "", ""
            ]
        }, {
            "projectTitle": "RBC Mobile Banking App",
            "dates": "",
            "description": "",
            "images": [
                "http://rockjethwa.com/images/img/portfolio/thumb-rbc1.jpg", "", ""
            ]
        }, {
            "projectTitle": "RBC Mobile Interac Money Transfers",
            "dates": "",
            "description": "",
            "images": [
                "http://rockjethwa.com/images/img/portfolio/thumb-rbc3.jpg", "", ""
            ]
        }, {
            "projectTitle": "RBC Internation Money Transfers",
            "dates": "",
            "description": "",
            "images": [
                "http://rockjethwa.com/images/img/portfolio/thumb-rbc2.jpg", "", ""
            ]
        },

        {
            "projectTitle": "TELUS Mobile Media Player",
            "dates": "",
            "description": "",
            "images": [
                "http://rockjethwa.com/images/img/portfolio/thumb-telus3.jpg", "", ""
            ]
        },


        {
            "projectTitle": "TELUS Self Serve Billing Portal",
            "dates": "",
            "description": "",
            "images": [
                "http://rockjethwa.com/images/img/portfolio/thumb-telus5.jpg", "", ""
            ]
        }, {
            "projectTitle": "TELUS Zoompass Mobile Wallet",
            "dates": "",
            "description": "",
            "images": [
                "http://rockjethwa.com/images/img/portfolio/thumb-mobwallet.jpg", "", ""
            ]
        }
    ]
};


// 1. Create function name and add "{"
// This is also used in the to call the display of the function on the page
projects.display = function() {

    // 2. create for loop start to iterate through and add "{"
    for (var i = 0; i < projects.myProjects.length; i++) {
        // 3. Append to the approproate <div> on the index.html page
        $("#projects").append(HTMLprojectStart);
        // 4. create variables for each JSON item you want to interate through
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.myProjects[i].projectTitle);
        // 5. Print out JSON item
        $(".project-entry:last").append(formattedProjectTitle);


        if (projects.myProjects[i].images.length > 0) {
            for (var image in projects.myProjects[i].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.myProjects[i].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }

        //    for (var i = 0; i < bio.skills.length; i++) {
        //    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        //    $("#skills").append(formattedSkills);

    }

};
// Call function to run
projects.display();



$("#mapDiv").append(googleMap);
