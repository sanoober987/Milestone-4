function generateResume() {
    const name  = (document.getElementById("name") as HTMLInputElement).value.trim();
    const email  = (document.getElementById("email")as  HTMLInputElement).value.trim();
    const phone = (document.getElementById("phone")as  HTMLInputElement).value.trim();
    const nationality  =( document.getElementById("nationality")as  HTMLInputElement).value.trim();
    const dob = (document.getElementById("dob")as  HTMLInputElement).value.trim();
    const address = (document.getElementById("address")as  HTMLInputElement).value.trim();
    const objective  = (document.getElementById("objective")as  HTMLInputElement).value.trim();
    const degree = (document.getElementById("degree")as  HTMLInputElement).value.trim();
    const institution  = (document.getElementById("institution")as  HTMLInputElement).value.trim();
    const year = (document.getElementById("year")as  HTMLInputElement).value.trim();
    const skills  = (document.getElementById("skills")as  HTMLInputElement).value.trim();
    const experience  = (document.getElementById("experience")as  HTMLInputElement).value.trim();


    const profilePictureInput : HTMLInputElement= document.getElementById("profile-picture")as HTMLInputElement;
    const resumeOutput : HTMLElement= document.getElementById("resume-output") as HTMLElement;
    
    let profilePicHTML = " ";

    if(profilePictureInput.files && profilePictureInput.files[0]){
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageUrl = e.target?.result;
            profilePicHTML = `<img src="${imageUrl}" alt= "profile picture" style="width : 150px; height :150px; border : 50%; margin-bottom : 20px;"/>`;
            generateResumeContent();
        };
        reader.readAsDataURL(profilePictureInput.files[0]);
    } else {
        profilePicHTML= "<p>No profile picture provided</p>";
        generateResumeContent();
    }

    const skillsList : string = skills
    ?skills.split(",").map((skill : string)=> `<li>${skill.trim()}</li>`).join(""): "<li>No skill provided</li>";
     

    function generateResumeContent(){
    resumeOutput.innerHTML = `
    ${profilePicHTML}
     ${name ?`<p><b>Name:</b><span contenteditable="true">${name}</span></p>` : ""}
    ${email ?`<p><b>Email:</b><span contenteditable="true">${email}</span></p>` : ""}
    ${phone ?`<p><b>Phone Number:</b><span contenteditable="true">${phone}</span></p>` : ""}
    ${nationality ?`<p><b>Nationality:</b><span contenteditable="true">${nationality}</span></p>` : ""}
    ${dob ?`<p><b>Date of birth:</b><span contenteditable="true">${dob}</span></p>` : ""}
    ${address ?`<p><b>Address:</b><span contenteditable="true">${address}</span></p>` : ""}

    <h3>Objective</h3>
    <p contenteditable="true">${objective || "No objective provides"}</p>

    <h3>Education</h3>
    <span contenteditable="true">${degree && institution && year ?`<p  contenteditable="true"><strong> c>${degree}</strong>, <${institution} (${year})</p>` : "<p>No education detail provided</p>"}
     
    <h3>Skills</h3>
    <ul><span contenteditable="true">${skillsList}</span></ul>

     <h3>Work Experience</h3>
    <span contenteditable="true"> ${experience}</span>
   
    `;
    }
}
export {generateResume};