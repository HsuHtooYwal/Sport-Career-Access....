const sportsInfo = {
  tennis: {
    title: "Tennis",
    description: "Tennis is a racket sport that can be played individually against a single opponent or between two teams of two players each. In the Paralympics, wheelchair tennis is a dynamic and fast-paced variation requiring agility and precision.",
    video: "https://www.youtube.com/embed/jrhM3k84YJU"
  },
  swimming: {
    title: "Swimming",
    description: "Paralympic swimming features athletes with various disabilities competing in freestyle, backstroke, breaststroke, and butterfly. It requires strength, technique, and endurance.",
    video: "https://www.youtube.com/embed/mVQurqWxN0E"
  },
  boxing: {
    title: "Boxing",
    description: "Paralympic-style boxing emphasizes adaptive equipment and rules to ensure fairness. It tests reflexes, power, and strategy in athletes with disabilities.",
    video: "https://www.youtube.com/embed/TCu4S6kuVCE"
  },
  cycling: {
    title: "Cycling",
    description: "Paralympic cycling includes road and track events for athletes using handcycles, tricycles, tandem bikes, or standard bicycles, depending on classification.",
    video: "https://www.youtube.com/embed/5EE8m8mmq1k"
  },
  badminton: {
    title: "Badminton",
    description: "Paralympic badminton includes wheelchair and standing categories. It demands speed, technique, and sharp reflexes. It's the fastest racket sport in the world.",
    video: "https://www.youtube.com/embed/AS7rOKtpgQ"
  },
  tabletennis: {
    title: "Table Tennis",
    description: "Paralympic table tennis involves standing and wheelchair classes, and emphasizes speed, precision, and reflexes.",
    video: "https://www.youtube.com/embed/lwOwIBWkxl4"
  },
  armwrestling: {
    title: "Arm Wrestling",
    description: "Arm wrestling for adaptive athletes focuses on strength and technique, with specific categories based on disability.",
    video: "https://www.youtube.com/embed/T-MpV8K7JnU"
  },
  bowling: {
    title: "Bowling",
    description: "Adaptive bowling uses ramps, guides, and assistants to enable participation. Focus is on accuracy and consistency.",
    video: "https://www.youtube.com/embed/QAP0FEqFEQA"
  },
  suqah: {
    title: "Squah",
    description: "Squash is a high-intensity indoor racket sport. Adaptive squash is growing, featuring wheelchair and mobility-aid-based variations.",
    video: "https://www.youtube.com/embed/Km5TMstbE34"
  },
  marathon: {
    title: "Marathon",
    description: "Paralympic marathons are run by athletes in wheelchairs, on prosthetics, or with visual guides, showcasing endurance and mental strength.",
    video: "https://www.youtube.com/embed/2WuB8BhUJrc"
  }
};

// Separate function outside the object
function showSport(sport) {
  const detailsSection = document.getElementById('sportDetails');
  const sportData = sportsInfo[sport];

  if (sportData) {
    detailsSection.innerHTML = `
      <h3>${sportData.title}</h3>
      <p>${sportData.description}</p>
      <div class="video-container">
        <iframe width="100%" height="315" src="${sportData.video}" frameborder="0" allowfullscreen></iframe>
      </div>
    `;
  } else {
    detailsSection.innerHTML = `<p>Information about this sport is not available.</p>`;
  }
}