const mentors = [
    {
        name: "Divya Patel",
        title: "Software Engineer at Microsoft",
        location: "Gujarat, India",
        bio: "Hello there! I'm Divya, a final year Computer Engineering student at LDCE...",
        connections: "93 mutual connections"
    },
    {
        name: "Rajveersinh Chavda",
        title: "Web Developer at Google",
        location: "Ahmedabad",
        bio: "JavaScript, Node.js, React | Web Development | AWS Cloud Practitioner...",
        connections: "100 mutual connection"
    },
    {
        name: "Karthik Applla",
        title: "Software Engineer at Apple",
        location: "New Delhi",
        bio: "Expert in AI, ML, and Cloud Technologies...",
        connections: "85 mutual connections"
    },
    {
        name: "Ankita Mewada",
        title: "iOS Developer",
        location: "Surat",
        bio: "Building innovative mobile apps with Swift and Objective-C...",
        connections: "80 mutual connections"
    },
    {
        name: "Nidhi Modi",
        title: "Python Developer",
        location: "Ahmedabad",
        bio: "Building innovative mobile apps using python...",
        connections: "150 mutual connections"
    }
];

function displayMentors(filteredMentors) {
    const mentorList = document.getElementById("mentorList");
    mentorList.innerHTML = ""; // Clear existing results

    filteredMentors.forEach(mentor => {
        const mentorDiv = document.createElement("div");
        mentorDiv.classList.add("mentor");
        mentorDiv.innerHTML = `
            <h3>${mentor.name}</h3>
            <p>${mentor.title}</p>
            <p>${mentor.location}</p>
            <button onclick="openProfile('${mentor.name}', '${mentor.title}', '${mentor.location}', '${mentor.bio}', '${mentor.connections}')">View Profile</button>
        `;
        mentorList.appendChild(mentorDiv);
    });
}