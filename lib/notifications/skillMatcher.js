// Skill matching algorithm with weighted scoring

function matchSkills(candidateSkills, jobSkills) {
    let score = 0;
    const maxScore = Math.max(candidateSkills.length, jobSkills.length);

    candidateSkills.forEach(skill => {
        if (jobSkills.includes(skill)) {
            score++;
        }
    });

    return score / maxScore;
}

module.exports = matchSkills;