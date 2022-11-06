
function showProfile() {
    document.getElementById("profileShow").style.display = "none";
    document.getElementById("profileHide").style.display = "block";
    hideObjective();hideSkill();hideEducation();hideCompetition();hideAchievement();hideProject();hideOrganization();
}

function hideProfile() {
    document.getElementById("profileShow").style.display = "block";
    document.getElementById("profileHide").style.display = "none";
}

function showObjective() {
    document.getElementById("objectiveShow").style.display = "none";
    document.getElementById("objectiveHide").style.display = "block";
    hideProfile();hideSkill();hideEducation();hideCompetition();hideAchievement();hideProject();hideOrganization();
}

function hideObjective() {
    document.getElementById("objectiveShow").style.display = "block";
    document.getElementById("objectiveHide").style.display = "none";
}

function showSkill() {
    document.getElementById("skillShow").style.display = "none";
    document.getElementById("skillHide").style.display = "block";
    hideProfile();hideObjective();hideEducation();hideCompetition();hideAchievement();hideProject();hideOrganization();
}

function hideSkill() {
    document.getElementById("skillShow").style.display = "block";
    document.getElementById("skillHide").style.display = "none";
}

function showEducation() {
    document.getElementById("educationShow").style.display = "none";
    document.getElementById("educationHide").style.display = "block";
    hideProfile();hideObjective();hideSkill();hideCompetition();hideAchievement();hideProject();hideOrganization();
}

function hideEducation() {
    document.getElementById("educationShow").style.display = "block";
    document.getElementById("educationHide").style.display = "none";
}

function showCompetition() {
    document.getElementById("competitionShow").style.display = "none";
    document.getElementById("competitionHide").style.display = "block";
    hideProfile();hideObjective();hideSkill();hideEducation();hideAchievement();hideProject();hideOrganization();
}

function hideCompetition() {
    document.getElementById("competitionShow").style.display = "block";
    document.getElementById("competitionHide").style.display = "none";
}

function showAchievement() {
    document.getElementById("achievementShow").style.display = "none";
    document.getElementById("achievementHide").style.display = "block";
    hideProfile();hideObjective();hideSkill();hideEducation();hideCompetition();hideProject();hideOrganization();
}

function hideAchievement() {
    document.getElementById("achievementShow").style.display = "block";
    document.getElementById("achievementHide").style.display = "none";
}

function showProject() {
    document.getElementById("projectShow").style.display = "none";
    document.getElementById("projectHide").style.display = "block";
    hideProfile();hideObjective();hideSkill();hideEducation();hideCompetition();hideAchievement();hideOrganization();
}

function hideProject() {
    document.getElementById("projectShow").style.display = "block";
    document.getElementById("projectHide").style.display = "none";
}

function showOrganization() {
    document.getElementById("organizationShow").style.display = "none";
    document.getElementById("organizationHide").style.display = "block";
    hideProfile();hideObjective();hideSkill();hideEducation();hideCompetition();hideAchievement();hideProject();
}

function hideOrganization() {
    document.getElementById("organizationShow").style.display = "block";
    document.getElementById("organizationHide").style.display = "none";
}
