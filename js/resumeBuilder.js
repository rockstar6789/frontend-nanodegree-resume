'use strict';
var bio = {
    "name": "Rock Jethwa",
    "role": "UX Architect",
    "contacts": {
        "mobile": "1 416 834 4209",
        "email": "rockstar6789@gmail.com",
        "github": "rockstar6789",
        "location": "Toronto, ON",
    },
    "welcomeMessage": "If you want to go fast, go alone ... if you want to go further and farther, go together. Let's go together.",
    "skills": ["Financial Services", "Digital Products", "User Experience Design", "IT 3.0 Marketplaces", "Enterprise Gamificaiton", "Dashboards", "Purchase Flows"],
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
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedContactInfo = formattedEmail + formattedMobile + formattedGithub + formattedLocation;
    //$("#topContacts").append(formattedContactInfo);
    $("#footerContacts").append(formattedContactInfo);


    $("#topContacts").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);

    }
};




bio.display();






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






var education = {
    "schools": [{
        "name": "Ryerson University",
        "location": "Toronto, ON",
        "degree": "Bachelor of Commerce",
        "majors": "IT Management",
        "dates": "2005",
        "url": "http://ryerson.ca/"

    }],
    "onlineCourses": [{
        "title": "Data Science Toolbox",
        "school": "Johns Hopkins University",
        "dates": "2015",
        "url": "http://coursera.com/"
    }, {
        "title": "Gamificaiton MBA Course",
        "school": "Wharton School of Business",
        "dates": "2015",
        "url": "http://coursera.com/"
    }, {
        "title": "Front End Web Developer",
        "school": "Udacity Online University",
        "dates": "2015",
        "url": "http://udacity.com/"
    }, {
        "title": "Gamificaiton Level 3",
        "school": "Masterclass with Gabe Zickermann",
        "dates": "2015",
        "url": "http://engagementalliance.org/get-certified/"
    }]
};

education.display = function() {


    var school = education.schools.length;
    for (var i = 0; i < school; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedEducation = formattedSchoolName + formattedSchoolDegree + formattedSchoolLocation;
        $(".education-entry:last").append(formattedEducation);
        $(".education-entry:last").append(formattedSchoolMajor);

        $("#education").append(HTMLonlineClasses);
        for (var i = 0; i < education.onlineCourses.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            var formattedOnlineURL = HTMLonlineURL.replace("#", education.onlineCourses[i].url).replace("%data%", education.onlineCourses[i].url);
            var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL;
            $(".education-entry:last").append(formattedOnlineTitleSchool);
        }


    }

};

education.display();

var work = {
    "jobs": [{
        "employer": "TD Bank",
        "location": "Toronto, ON",
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
    var job = work.jobs.length;
    for (var i = 0; i < job; i++) {
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
            "dates": "2015",
            "description": "In branch interactive product onboarding kiosk.",
            "images": ["http://rockjethwa.com/images/img/portfolio/thumb-td1.jpg", "", ""]
        }, {
            "projectTitle": "TD Securities Enterprise Data Portal",
            "dates": "2014",
            "description": "Web based bloomberg like portal for trading and managers.",
            "images": ["http://rockjethwa.com/images/img/portfolio/thumb-td2.jpg", "", ""]
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
            "dates": "2013",
            "description": "Web and tablet trading app with sidebar gadgets.",
            "images": ["http://rockjethwa.com/images/img/portfolio/thumb-quest1.jpg", "", ""]
        },

        {
            "projectTitle": "Questrade Mobile Trading App",
            "dates": "2012",
            "description": "iPhone, Android, Mobile Web real time stock market trading apps",
            "images": ["http://rockjethwa.com/images/img/portfolio/thumb-quest1.jpg", "", ""]
        },

        {
            "projectTitle": "RBC Mobile Banking App",
            "dates": "2012",
            "description": "Apple Best App Award. App for Top 50 Global Bank.",
            "images": ["http://rockjethwa.com/images/img/portfolio/thumb-rbc1.jpg", "", ""]
        }, {
            "projectTitle": "RBC Mobile Interac Money Transfers",
            "dates": "2011",
            "description": "1st mobile transfers between customers of different domestic banks.",
            "images": ["http://rockjethwa.com/images/img/portfolio/thumb-rbc3.jpg", "", ""]
        }, {
            "projectTitle": "RBC Internation Money Transfers",
            "dates": "2010",
            "description": "Money transfers between customers of different foreign banks.",
            "images": ["http://rockjethwa.com/images/img/portfolio/thumb-rbc2.jpg", "", ""]
        },

        {
            "projectTitle": "TELUS Zoompass Mobile Wallet",
            "dates": "2007",
            "description": "1st mobile payments between customers of domestic cell phone customers.",
            "images": ["http://rockjethwa.com/images/img/portfolio/thumb-mobwallet.jpg", "", ""]
        },


        {
            "projectTitle": "TELUS Self Serve Billing Portal",
            "dates": "2008",
            "description": "50% conversion rates using Gamification and User Experience principles.",
            "images": ["http://rockjethwa.com/images/img/portfolio/thumb-telus5.jpg", "", ""]
        }, {
            "projectTitle": "TELUS Mobile Media Player",
            "dates": "2007",
            "description": "Mobile media player with in-app storefront found in 1 out of 3 cell phones sold in Canada.",
            "images": ["http://rockjethwa.com/images/img/portfolio/thumb-telus3.jpg", "", ""]
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

        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.myProjects[i].dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.myProjects[i].description);
        $(".project-entry:last").append(formattedProjectDescription);

        //    for (var i = 0; i < bio.skills.length; i++) {
        //    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        //    $("#skills").append(formattedSkills);
    }

};
// Call function to run
projects.display();

$("#mapDiv").append(googleMap);