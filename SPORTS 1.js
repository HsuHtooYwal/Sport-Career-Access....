
const select = document.getElementById('Sports');

const para = document.getElementById("para");
const bg = document.getElementById("sport_images");

const question1 = document.getElementById('question1');
        const question2 = document.getElementById('question2');
        const question3 = document.getElementById('question3');


/* For showing while page loading*/
showSport();
function showSport(){

const optionElement = document.getElementById('Sports');
if (optionElement.selected) {
  select.value = optionElement.value;
} else {
  
}

const selectedIndex = select.value; 
switch(selectedIndex) {
  case 'Football':
    bg.src = 'football.jpg'
    p1.textContent =
    '- On November 6, 1869, Rutgers and Princeton played what was billed as the first college football game. However, it was not until the 1880s that a great rugby player from Yale, Walter Camp, pioneered rules changes that slowly transformed rugby into the new game of American Football.'
    p2.textContent =
    '- A football team has 11 players on the field during a match, which is standard for association football (soccer).';
    p21.textContent =
    '- Goalkeeper: One player on each team is designated as the goalkeeper.'
    p22.textContent =
    '- Outfield players: The remaining ten players on a team are outfield players, filling various defensive, midfield, and attacking roles.'
    p3.textContent =
    '- To play football (soccer), you need a football, football boots, shin guards, and appropriate clothing like a jersey, shorts, and socks. A hand pump and ball needle are useful for maintaining the ball pressure. For a more comfortable and performance-enhancing experience, you might also want to consider grip socks and other accessories.';
    break;
 
  case 'Basketball':
    bg.src = 'Basketball.jpg'
    p1.textContent =
    '- The game was invented by Springfield College instructor and graduate student James Naismith in 1891, and has grown into the worldwide athletic phenomenon we know it to be today.';
    p2.textContent =
    '- There are five players from each team on the basketball court at any given time, for a total of ten players during a standard game. This 5-on-5 format is a universal standard followed across professional, amateur, and international basketball, ensuring a good balance of defense and offense.';
    p21.textContent =
    '- On the court: Each team plays with five players simultaneously.';
    p22.textContent =
    '- Total players in a game: This means there are always a total of 10 players actively playing the game.';
    p3.textContent =
    '- To play basketball, you need a hoop, a basketball, appropriate athletic shoes, and comfortable clothing like a jersey and shorts. For more serious players, optional items include pads, a mouthguard, a basketball pump and needle, and athletic tape.';
    break;
 
  case 'Volley-ball':
    bg.src = 'Volleyball.avif'
    p1.textContent =
    '-  Volleyball was invented by William G. Morgan in 1895 in Holyoke, Massachusetts, USA, as an indoor sport called "Mintonette" for members of the YMCA who found basketball too strenuous. The name "volleyball" was suggested during a demonstration game in 1896 to better describe the game activity of volleying the ball over the net.';
    p2.textContent =
    '- In a standard game of indoor volleyball, each team has six players on the court at a time, with three in the front row and three in the back row, separated by the attack line. However, other variations exist, such as the popular beach volleyball, where teams have only two players per side.';
    p21.textContent =
    '- Team size: Six players on the court for each team. ';
    p22.textContent =
    '- Court positions: Players rotate clockwise through six positions, with three front-row players and three back-row players.';
    p3.textContent =
    '- To play volleyball, you need a volleyball, a net, and two poles to support the net. For safety and performance, consider wearing volleyball shoes with good traction and knee pads to protect your knees. Comfortable athletic clothing, like shorts and a t-shirt, is also essential.';
    break;

  case 'Cricket':
    bg.src = 'Cricket.jpg'
    p1.textContent =
    '- Cricket has no known single inventor and its exact origins are unknown, but it is believed to have originated in Saxon or Norman England around the 16th century, possibly by children playing in the Weald area of southeast England';
    p2.textContent =
    '- A cricket team has 11 players on the field at any given time. Each team fields 11 players, so a total of 22 players are usually on the field during a game.';
    p21.textContent =
    '- On-field players: Each of the two competing teams will have 11 players on the field during the match.';
    p22.textContent=
    '- Substitutes: Cricket teams often have substitute players, known as the "12th man," who can field if a player is injured.';
    p3.textContent =
    '- To play cricket, you need essential equipment including a cricket bat, a leather cricket ball, stumps with bails, and protective gear such as a helmet, batting pads, batting gloves, and an abdominal guard (or "box") to protect the groin. You also need specialized cricket shoes for grip and appropriate clothing, such as a shirt and trousers.';
    break;

  case 'Ice-Hockey':
    bg.src = 'ice.jpg'
    p1.textContent =
    '- The History of Ice Hockey: From Frozen Ponds to Global ...Modern ice hockey was organized and codified in Canada, with the first recognized organized game played in Montreal on March 3, 1875, thanks to the efforts of James Creighton.';
    p2.textContent =
    '- In a standard game of ice hockey, a team has six players on the ice at any given time. These players are typically composed of one goaltender and five skaters, which include three forwards and two defensemen.';
    p21.textContent =
    '- Goaltender (1): The player responsible for stopping the puck from entering the net.';
    p22.textContent=
    '- Forwards (3): Responsible for offense and scoring goals. These include a center and two wingers. Defensemen (2): Responsible for preventing the opposing team from scoring.';
    p3.textContent =
    '- To play ice hockey, you need protective equipment including a helmet with a facemask or cage, a neck guard, shoulder pads, elbow pads, shin guards, a mouthguard, and an athletic cup (jock/jill).';
    break;

  case 'Field-Hockey':
    bg.src = 'Field-Hockey.avif'
    p1.textContent =
    '- Field hockey has no single inventor, as the modern game evolved from ancient stick-and-ball games played for thousands of years in cultures like those in Egypt, Persia, and Greece.';
    p2.textContent =
    '- In a game of field hockey, each team has 11 players on the field at a time: one goalkeeper and ten outfield players. These players use sticks to hit a ball into the opposing net to score goals, with the team scoring the most goals winning the game.';
    p21.textContent =
    '- 1 Goalkeeper, Defenders: Players who protect their own goal.';
    p22.textContent=
    '- Midfielders: Players who assist both in offense and defense. Forwards (or Strikers): Players who primarily focus on scoring goals.';
    p3.textContent =
    '- To play field hockey, you need a field hockey stick, a hard ball, protective shin guards, and a mouthguard. Additionally, players should wear athletic shoes with good traction, such as specialized cleats or soccer cleats, and a jersey or uniform for team play. Goalkeepers require specialized padding, a helmet, and gloves.';
    break;

  case 'Baseball':
    bg.src = 'BASEBALL.png'
    p1.textContent =
    '- Baseball was not "invented" by one person but evolved from older bat-and-ball games, particularly from the British game of rounders and an American game called "town ball". While the myth credits Abner Doubleday with inventing the game in 1839, it was Alexander Cartwright, a New York bookseller, who codified the first official rules in 1845, leading to the modern version of the game.';
    p2.textContent =
    '- A standard baseball team has 9 players on the field at a time, one for each defensive position, though a professional team is full roster is larger, such as the 26-man roster allowed for Major League Baseball teams during the regular season.';
    p21.textContent =
    '- On the Field (9 players): This is the number of players from one team that are on the field during a game at any given time to play defense. ';
    p22.textContent=
    '- ';
    p3.textContent =
    '- To play baseball, you need a ball, bat, and glove. For organized play, you will also need protective gear like a batting helmet, athletic cup (for males), and proper apparel such as a uniform, cleats, and socks. Other helpful items include batting gloves, sliding shorts, a belt, and a baseball cap.';
    break;

  case 'American Football':
    bg.src = 'American football.webp'
    p1.textContent =
    '- American football did not have a single inventor, but evolved from rugby and soccer. Walter Camp, often called the Father of American Football, introduced key rule changes starting in the 1880s that transformed rugby-style play into the distinct American game we know today.';
    p2.textContent =
    '- In American football, 11 players from each team are on the field at one time, for a total of 22 players on the field during a game. While only 11 players per side are active on the field at any given moment, teams have much larger rosters, with an NFL team having 53 active players.';
    p21.textContent =
    '- On the Field: Each team can only have 11 players on the playing field at any given time.';
    p22.textContent=
    '- ';
    p3.textContent =
    '- To play American football, you need protective equipment such as a helmet, shoulder pads, thigh pads, knee pads, and a mouthguard, as well as a football, a football field, and team uniforms like jerseys and pants. Essential athletic wear includes cleats, socks, and gloves, while a jockstrap with a protective cup is crucial for protecting the groin area.';
    break;

  case 'F1':
    bg.src = 'F1.avif'
    p1.textContent =
    '- Formula 1 was not invented by a single person but was a formalization of racing regulations by the Fédération Internationale de l Automobile (FIA) starting in 1946 and officially commencing with the first Formula 1 World Championship race in 1950.';
    p2.textContent =
    '- There are 20 drivers who form the F1 grid for any given race weekend, with 10 teams each fielding two cars. While the rules permit up to 26 drivers (13 teams), the high cost of operating an F1 team keeps the grid at 10 teams and therefore 20 drivers';
    p21.textContent =
    '- 20 Drivers: Each of the 10 teams on the grid has two drivers competing in each race.';
    p22.textContent=
    '- 10 Teams: The number of teams is fixed at 10.';
    p3.textContent =
    '- To "play F1," you generally need either a gaming PC or console with the official Formula 1 game, a controller or steering wheel and pedals, and a broadband internet connection for online play. For the real-world sport, drivers need a valid FIA International Grade A license, a valid driving license, and must be at least 18 years old.';
    break;

            default:
            para.textContent = '';
            }
}



select.onchange = Sport;
function Sport() {
    const choice = select.value;
    
    switch(choice) {
        case 'Football':
            bg.src = 'football.jpg'
            p1.textContent =
            '- On November 6, 1869, Rutgers and Princeton played what was billed as the first college football game. However, it was not until the 1880s that a great rugby player from Yale, Walter Camp, pioneered rules changes that slowly transformed rugby into the new game of American Football.'
            p2.textContent =
            '- A football team has 11 players on the field during a match, which is standard for association football (soccer).';
            p21.textContent =
            '- Goalkeeper: One player on each team is designated as the goalkeeper.'
            p22.textContent =
            '- Outfield players: The remaining ten players on a team are outfield players, filling various defensive, midfield, and attacking roles.'
            p3.textContent =
            '- To play football (soccer), you need a football, football boots, shin guards, and appropriate clothing like a jersey, shorts, and socks. A hand pump and ball needle are useful for maintaining the ball pressure. For a more comfortable and performance-enhancing experience, you might also want to consider grip socks and other accessories.';
            break;
 
        case 'Basketball':
            bg.src = 'basketball.jpg'
            p1.textContent =
            '- The game was invented by Springfield College instructor and graduate student James Naismith in 1891, and has grown into the worldwide athletic phenomenon we know it to be today.';
            p2.textContent =
            '- There are five players from each team on the basketball court at any given time, for a total of ten players during a standard game. This 5-on-5 format is a universal standard followed across professional, amateur, and international basketball, ensuring a good balance of defense and offense.';
            p21.textContent =
            '- On the court: Each team plays with five players simultaneously.';
            p22.textContent =
            '- Total players in a game: This means there are always a total of 10 players actively playing the game.';
            p3.textContent =
            '- To play basketball, you need a hoop, a basketball, appropriate athletic shoes, and comfortable clothing like a jersey and shorts. For more serious players, optional items include pads, a mouthguard, a basketball pump and needle, and athletic tape.';
            break;
 
        case 'Volley-ball':
            bg.src = 'Volleyball.avif'
            p1.textContent =
            '- Volleyball was invented by William G. Morgan in 1895. Morgan, a physical education director at the Holyoke YMCA in Massachusetts, created the game as a less strenuous alternative to basketball for older YMCA members';
            p2.textContent =
            '- In a standard game of indoor volleyball, there are six players on the court for each team at any given time. For beach volleyball, the format is different, with each team consisting of just two players on the sand.';
            p21.textContent =
            '- Each team has six players, divided into front and back rows.';
            p22.textContent =
            '- Players rotate positions clockwise after their team wins the serve back from the opponent.';
            p3.textContent =
            '- To play volleyball, you need a ball and a net with poles to form the court. For players, knee pads are essential for protection, while volleyball shoes provide grip and support. Competitive play requires team jerseys and shorts.';
            break;
 
        case 'Cricket':
            bg.src = 'Cricket.jpg'
            p1.textContent =
            '- Cricket has no known single inventor and its exact origins are unknown, but it is believed to have originated in Saxon or Norman England around the 16th century, possibly by children playing in the Weald area of southeast England';
            p2.textContent =
            '- A cricket team has 11 players on the field at any given time. Each team fields 11 players, so a total of 22 players are usually on the field during a game.';
            p21.textContent =
            '- On-field players: Each of the two competing teams will have 11 players on the field during the match.';
            p22.textContent=
            '- Substitutes: Cricket teams often have substitute players, known as the "12th man," who can field if a player is injured.';
            p3.textContent =
            '- To play cricket, you need essential equipment including a cricket bat, a leather cricket ball, stumps with bails, and protective gear such as a helmet, batting pads, batting gloves, and an abdominal guard (or "box") to protect the groin. You also need specialized cricket shoes for grip and appropriate clothing, such as a shirt and trousers.';
            break;

        case 'Ice-Hockey':
          bg.src = 'ice.jpg'
          p1.textContent =
          '- The History of Ice Hockey: From Frozen Ponds to Global ...Modern ice hockey was organized and codified in Canada, with the first recognized organized game played in Montreal on March 3, 1875, thanks to the efforts of James Creighton.';
          p2.textContent =
          '- In a standard game of ice hockey, a team has six players on the ice at any given time. These players are typically composed of one goaltender and five skaters, which include three forwards and two defensemen.';
          p21.textContent =
          '- Goaltender (1): The player responsible for stopping the puck from entering the net.';
          p22.textContent=
          '- Forwards (3): Responsible for offense and scoring goals. These include a center and two wingers. Defensemen (2): Responsible for preventing the opposing team from scoring.';
          p3.textContent =
          '- To play ice hockey, you need protective equipment including a helmet with a facemask or cage, a neck guard, shoulder pads, elbow pads, shin guards, a mouthguard, and an athletic cup (jock/jill).';
          break;

        case 'Field-Hockey':
          bg.src = 'Field-Hockey.avif'
          p1.textContent =
          '- Field hockey has no single inventor, as the modern game evolved from ancient stick-and-ball games played for thousands of years in cultures like those in Egypt, Persia, and Greece.';
          p2.textContent =
          '- In a game of field hockey, each team has 11 players on the field at a time: one goalkeeper and ten outfield players. These players use sticks to hit a ball into the opposing net to score goals, with the team scoring the most goals winning the game.';
          p21.textContent =
          '- 1 Goalkeeper, Defenders: Players who protect their own goal.';
          p22.textContent=
          '- Midfielders: Players who assist both in offense and defense. Forwards (or Strikers): Players who primarily focus on scoring goals.';
          p3.textContent =
          '- To play field hockey, you need a field hockey stick, a hard ball, protective shin guards, and a mouthguard. Additionally, players should wear athletic shoes with good traction, such as specialized cleats or soccer cleats, and a jersey or uniform for team play. Goalkeepers require specialized padding, a helmet, and gloves.';
          break;

        case 'Baseball':
        bg.src = 'Baseball.png'
        p1.textContent =
        '- Baseball was not "invented" by one person but evolved from older bat-and-ball games, particularly from the British game of rounders and an American game called "town ball". While the myth credits Abner Doubleday with inventing the game in 1839, it was Alexander Cartwright, a New York bookseller, who codified the first official rules in 1845, leading to the modern version of the game.';
        p2.textContent =
        '- A standard baseball team has 9 players on the field at a time, one for each defensive position, though a professional team is full roster is larger, such as the 26-man roster allowed for Major League Baseball teams during the regular season.';
        p21.textContent =
        '- On the Field (9 players): This is the number of players from one team that are on the field during a game at any given time to play defense. ';
        p22.textContent=
        '- ';
        p3.textContent =
        '- To play baseball, you need a ball, bat, and glove. For organized play, you will also need protective gear like a batting helmet, athletic cup (for males), and proper apparel such as a uniform, cleats, and socks. Other helpful items include batting gloves, sliding shorts, a belt, and a baseball cap.';
        break;

        case 'American Football':
        bg.src = 'American Football.jpg'
        p1.textContent =
        '- American football did not have a single inventor, but evolved from rugby and soccer. Walter Camp, often called the Father of American Football, introduced key rule changes starting in the 1880s that transformed rugby-style play into the distinct American game we know today.';
        p2.textContent =
        '- In American football, 11 players from each team are on the field at one time, for a total of 22 players on the field during a game. While only 11 players per side are active on the field at any given moment, teams have much larger rosters, with an NFL team having 53 active players.';
        p21.textContent =
        '- On the Field: Each team can only have 11 players on the playing field at any given time.';
        p22.textContent=
        '- ';
        p3.textContent =
        '- To play American football, you need protective equipment such as a helmet, shoulder pads, thigh pads, knee pads, and a mouthguard, as well as a football, a football field, and team uniforms like jerseys and pants. Essential athletic wear includes cleats, socks, and gloves, while a jockstrap with a protective cup is crucial for protecting the groin area.';
        break;

        case 'F1':
        bg.src = 'F1.avif'
        p1.textContent =
        '- Formula 1 was not invented by a single person but was a formalization of racing regulations by the Fédération Internationale de l Automobile (FIA) starting in 1946 and officially commencing with the first Formula 1 World Championship race in 1950.';
        p2.textContent =
        '- There are 20 drivers who form the F1 grid for any given race weekend, with 10 teams each fielding two cars. While the rules permit up to 26 drivers (13 teams), the high cost of operating an F1 team keeps the grid at 10 teams and therefore 20 drivers';
        p21.textContent =
        '- 20 Drivers: Each of the 10 teams on the grid has two drivers competing in each race.';
        p22.textContent=
        '- 10 Teams: The number of teams is fixed at 10.';
        p3.textContent =
        '- To "play F1," you generally need either a gaming PC or console with the official Formula 1 game, a controller or steering wheel and pedals, and a broadband internet connection for online play. For the real-world sport, drivers need a valid FIA International Grade A license, a valid driving license, and must be at least 18 years old.';
        break;
        
        default:
          para.textContent = '';
        }
      }

let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");
 
window.addEventListener("scroll", function() {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
 
  if (scrollTop > lastScrollTop) {
    // Scrolling down → hide navbar
    navbar.classList.add("hide");
  } else {
    // Scrolling up → show navbar
    navbar.classList.remove("hide");
  }
 
  lastScrollTop = scrollTop;
});

        // Define questions for each sport
        const sportQuestions = {
            'Football': {
                q1: 'Who invented football and when was it?',
                q2: 'How many players are there?',
                q3: 'What things do we need to play football?'
            },
            'Basketball': {
                q1: 'Who invented basketball and when?',
                q2: 'How many players are on a basketball team?',
                q3: 'What equipment is needed to play basketball?'
            },
            'Volley-ball': {
                q1: 'Who invented volleyball and when?',
                q2: 'How many players are on a volleyball court?',
                q3: 'What is needed to play volleyball?'
            },
            'Cricket': {
                q1: 'What are the origins of cricket?',
                q2: 'How many players are in a cricket team?',
                q3: 'What equipment is essential for cricket?'
            },
            'Ice-Hockey': {
                q1: 'Who organized modern ice hockey?',
                q2: 'How many players are on the ice?',
                q3: 'What protective gear is needed for ice hockey?'
            },
            'Field-Hockey': {
                q1: 'What are the origins of field hockey?',
                q2: 'How many players are on a field hockey team?',
                q3: 'What equipment is used in field hockey?'
            },
            'Baseball': {
                q1: 'How did baseball evolve?',
                q2: 'How many players are on a baseball field?',
                q3: 'What is needed to play baseball?'
            },
            'American Football': {
                q1: 'How did American football develop?',
                q2: 'How many players are on the field?',
                q3: 'What protective equipment is used in American football?'
            },
            'F1': {
                q1: 'How was Formula 1 established?',
                q2: 'How many drivers compete in F1?',
                q3: 'What is needed to participate in F1?'
            }
        };

        // Function to update content based on selected sport
        function updateContent() {
            const selectedSport = select.value;
            
            // Update questions
            question1.innerHTML = `<b>${sportQuestions[selectedSport].q1}</b>`;
            question2.innerHTML = `<b>${sportQuestions[selectedSport].q2}</b>`;
            question3.innerHTML = `<b>${sportQuestions[selectedSport].q3}</b>`;
            
          
                
        
        }
        

        // Initialize content on page load
        document.addEventListener('DOMContentLoaded', function() {
            updateContent();
            
            // Add event listener to update content when selection changes
            select.addEventListener('change', updateContent);
        });