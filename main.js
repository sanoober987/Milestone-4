"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateResume = void 0;
function generateResume() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var nationality = document.getElementById("nationality").value.trim();
    var dob = document.getElementById("dob").value.trim();
    var address = document.getElementById("address").value.trim();
    var objective = document.getElementById("objective").value.trim();
    var degree = document.getElementById("degree").value.trim();
    var institution = document.getElementById("institution").value.trim();
    var year = document.getElementById("year").value.trim();
    var skills = document.getElementById("skills").value.trim();
    var experience = document.getElementById("experience").value.trim();
    var profilePictureInput = document.getElementById("profile-picture");
    var resumeOutput = document.getElementById("resume-output");
    var profilePicHTML = " ";
    if (profilePictureInput.files && profilePictureInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var imageUrl = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            profilePicHTML = "<img src=\"".concat(imageUrl, "\" alt= \"profile picture\" style=\"width : 150px; height :150px; border : 50%; margin-bottom : 20px;\"/>");
            generateResumeContent();
        };
        reader.readAsDataURL(profilePictureInput.files[0]);
    }
    else {
        profilePicHTML = "<p>No profile picture provided</p>";
        generateResumeContent();
    }
    var skillsList = skills
        ? skills.split(",").map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join("") : "<li>No skill provided</li>";
    function generateResumeContent() {
        resumeOutput.innerHTML = "\n    ".concat(profilePicHTML, "\n     ").concat(name ? "<p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>") : "", "\n    ").concat(email ? "<p><b>Email:</b><span contenteditable=\"true\">".concat(email, "</span></p>") : "", "\n    ").concat(phone ? "<p><b>Phone Number:</b><span contenteditable=\"true\">".concat(phone, "</span></p>") : "", "\n    ").concat(nationality ? "<p><b>Nationality:</b><span contenteditable=\"true\">".concat(nationality, "</span></p>") : "", "\n    ").concat(dob ? "<p><b>Date of birth:</b><span contenteditable=\"true\">".concat(dob, "</span></p>") : "", "\n    ").concat(address ? "<p><b>Address:</b><span contenteditable=\"true\">".concat(address, "</span></p>") : "", "\n\n    <h3>Objective</h3>\n    <p contenteditable=\"true\">").concat(objective || "No objective provides", "</p>\n\n    <h3>Education</h3>\n    <span contenteditable=\"true\">").concat(degree && institution && year ? "<p  contenteditable=\"true\"><strong> c>".concat(degree, "</strong>, <").concat(institution, " (").concat(year, ")</p>") : "<p>No education detail provided</p>", "\n     \n    <h3>Skills</h3>\n    <ul><span contenteditable=\"true\">").concat(skillsList, "</span></ul>\n\n     <h3>Work Experience</h3>\n    <span contenteditable=\"true\"> ").concat(experience, "</span>\n   \n    ");
    }
}
exports.generateResume = generateResume;
