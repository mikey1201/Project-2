const rankingsDiv = document.getElementById('medal-rankings');

const countriesList = [{country: 'USA', gold: '39', silver: '41', bronze: '33'}, {
    country: 'China',
    gold: '38',
    silver: '32',
    bronze: '18'
}, {country: 'Japan', gold: '27', silver: '14', bronze: '17'}, {
    country: 'Ireland',
    gold: '22',
    silver: '21',
    bronze: '22'
}, {country: 'India', gold: '20', silver: '28', bronze: '23'}, {
    country: 'Australia',
    gold: '17',
    silver: '7',
    bronze: '22'
}, {country: 'Netherlands', gold: '10', silver: '12', bronze: '14'}, {
    country: 'France',
    gold: '10',
    silver: '12',
    bronze: '11'
}, {country: 'Germany', gold: '10', silver: '11', bronze: '16'}, {
    country: 'Italy',
    gold: '10',
    silver: '10',
    bronze: '20'
}];

let rank = 1;

countriesList.forEach(data => {
    const countryDiv = document.createElement('div');
    countryDiv.className = 'country-div';

    const ranking = document.createElement('b');
    ranking.textContent = '#' + rank;
    ranking.style.fontSize = '24px';
    rank++;

    countryDiv.appendChild(ranking);

    const imgLocation = 'images/';

    const goldImage = document.createElement('img');
    goldImage.src = imgLocation + 'gold.png';
    goldImage.style = 'width: 16px';
    const silverImage = document.createElement('img');
    silverImage.src = imgLocation + 'silver.png';
    silverImage.style = 'width: 16px';
    const bronzeImage = document.createElement('img');
    bronzeImage.src = imgLocation + 'bronze.png';
    bronzeImage.style = 'width: 16px';

    const flag = document.createElement('img');
    flag.className = 'flag';
    flag.src = imgLocation + data.country + '.png';
    flag.alt = data.country;
    flag.style = 'height: 128px';

    countryDiv.appendChild(flag);

    const countryName = document.createElement('b');
    countryName.textContent = data.country;

    countryDiv.appendChild(countryName);

    const goldMedals = document.createElement('div');
    goldMedals.className = 'medals-div';
    goldMedals.textContent = data.gold;
    goldMedals.appendChild(goldImage);

    countryDiv.appendChild(goldMedals);

    const silverMedals = document.createElement('div');
    silverMedals.className = 'medals-div';
    silverMedals.textContent = data.silver
    silverMedals.appendChild(silverImage);

    countryDiv.appendChild(silverMedals);

    const bronzeMedals = document.createElement('div');
    bronzeMedals.className = 'medals-div';
    bronzeMedals.textContent = data.bronze;
    bronzeMedals.appendChild(bronzeImage);

    countryDiv.appendChild(bronzeMedals);

    rankingsDiv.appendChild(countryDiv);
});

const sportsDiv = document.getElementById('sports-list');

const events = [
    {sport:'Basketball',
        events:['Game 1: Team A vs Team B - July 30, 10:00 AM',
        'Game 2: Team C vs Team D - July 30, 1:00 PM',
        'Game 3: Team E vs Team F - July 31, 11:00 AM',
        'Game 4: Team G vs Team H - July 31, 2:00 PM']},
    {sport:'Swimming',
        events:['Event 1: 100m Freestyle - July 30, 9:00 AM',
        'Event 2: 200m Backstroke - July 30, 11:00 AM',
        'Event 3: 4x100m Medley Relay - July 31, 10:00 AM',
        'Event 4: 50m Butterfly - July 31, 1:00 PM']},
    {sport:'Track and Field',
        events: ['Event 1: 100m Dash - July 30, 8:00 AM',
        'Event 2: Long Jump - July 30, 10:00 AM',
        'Event 3: Shot Put - July 31, 9:00 AM',
        'Event 4: 4x400m Relay - July 31, 12:00 PM']},
    {sport: 'Gymnastics',
        events: ['Event 1: Vault - July 30, 2:00 PM',
        'Event 2: Uneven Bars - July 30, 4:00 PM',
        'Event 3: Balance Beam - July 31, 3:00 PM',
        'Event 4: Floor Exercise - July 31, 5:00 PM']},
    {sport: 'Tennis',
        events: ['Match 1: Player A vs Player B - July 30, 7:00 AM',
        'Match 2: Player C vs Player D - July 30, 9:00 AM',
        'Match 3: Player E vs Player F - July 31, 8:00 AM',
        'Match 4: Player G vs Player H - July 31, 10:00 AM']}
];
events.forEach(data => {
    const sport = document.createElement('div');
    sport.className = 'sport';
    sport.textContent = data.sport;
    sport.style.fontSize = '40px';
    sport.style.width = '40%';
    const eventDiv = document.createElement('div');
    sport.appendChild(eventDiv);

    const eventInfo = document.createElement('div');
    eventInfo.className = 'event';
    eventInfo.id = 'event';
    eventInfo.style.display = 'none';

    data.events.forEach(events => {
        const event = document.createElement('p');
        event.textContent = events+"";
        event.style.fontSize = '20px';
        eventInfo.appendChild(event);
    });

    eventDiv.appendChild(eventInfo);

    sport.addEventListener('click', data => {
        if (eventInfo.style.display === 'none') {
            eventInfo.style.display = 'flex';
        } else {
            eventInfo.style.display = 'none';
        }

    });

   sportsDiv.appendChild(sport);

});

const newsDiv = document.getElementById('news');
const newsArticles = [{
        name:"news1",
        title: "France Dominates in Fencing: Paris 2024 Hosts Spectacular Finals",
        story: "In an exhilarating display of skill and strategy, France emerged victorious in the fencing finals at the Paris 2024 Olympics. The host nation showcased its historical prowess in the sport, with French fencers clinching gold in both the men's and women's individual events. The atmosphere in the arena was electric as fans cheered on their athletes, culminating in a series of intense matches that kept spectators on the edge of their seats. This triumphant performance not only added to France's medal tally but also reaffirmed its legacy as a powerhouse in the world of fencing."
    },
    {
        name:'news2',
        title: "Historic Win for USA: Women's Gymnastics Team Claims Gold in Paris",
        story: "The USA Women's Gymnastics Team made history at the Paris 2024 Olympics by clinching the gold medal in a breathtaking competition. With flawless routines and exceptional teamwork, the American gymnasts outperformed their rivals, demonstrating their dominance on the global stage. This victory marks a significant milestone, as the team overcame fierce competition from powerhouse nations like Russia and China. Their triumph was a testament to years of rigorous training and dedication, inspiring future generations of gymnasts around the world."
    },
    {
        name:'news3',
        title: "New World Record in the Marathon: Kenyan Runner Shatters Previous Time at Paris Olympics",
        story: "Kenyan runner Eliud Kipchoge set a new world record in the marathon at the Paris 2024 Olympics, finishing the grueling race in an astonishing 2 hours and 1 minute. Kipchoge's remarkable feat captivated audiences worldwide as he maintained an incredible pace throughout the course, breaking away from the pack in the final miles. His achievement not only secured him the gold medal but also underscored Kenya's dominance in long-distance running. This historic performance will be remembered as one of the greatest moments in Olympic history, inspiring athletes and fans alike."
    },
    {
        name:'news4',
        title: "Japan's Naomi Osaka Captures Gold in Women's Tennis Singles at Paris 2024",
        story: "Japan's tennis sensation Naomi Osaka clinched the gold medal in women's singles at the Paris 2024 Olympics, delivering a masterful performance that captivated fans worldwide. Osaka's powerful serves and strategic play helped her dominate the competition, culminating in a thrilling final match against a formidable opponent. This victory marks a significant achievement in her career, showcasing her resilience and skill on the Olympic stage. The win not only boosts Osaka's legacy but also brings immense pride to her home country, further solidifying her status as a global sports icon."
    },
    {
        name:'news5',
        title: "China Sweeps Diving Events, Secures Record-Breaking Medal Haul at Paris Olympics",
        story: "China continued its dominance in diving at the Paris 2024 Olympics, sweeping all gold medals in both men's and women's events. The Chinese diving team, known for its precision and consistency, delivered flawless performances that left spectators in awe. With synchronized dives that exemplified perfect coordination and individual routines that pushed the boundaries of the sport, China secured a record-breaking medal haul. This extraordinary achievement highlights the nation's dedication to excellence in diving, reinforcing its reputation as the premier powerhouse in the sport."
    },
    {
        name:'news6',
        title: "Breakdancing Makes a Dazzling Debut at Paris 2024, Captivates Global Audience",
        story: "Breakdancing made a sensational debut at the Paris 2024 Olympics, captivating a global audience with its dynamic and electrifying performances. The new addition to the Olympic program showcased the creativity, athleticism, and cultural richness of the sport, as dancers from around the world competed in intense battles. The event drew widespread acclaim for its unique blend of artistry and athletic prowess, highlighting the diverse talents of the competitors. This historic introduction of breakdancing to the Olympic stage not only broadened the appeal of the Games but also celebrated the vibrant spirit of urban dance culture."
    }];

newsArticles.forEach(data =>{
   const storyDiv = document.createElement('div');
   storyDiv.className = 'story-div';


    const title = document.createElement('b');
    title.textContent = data.title;
    title.style.fontSize = '24px';
    title.style.padding = '20px';
    storyDiv.appendChild(title);

   const imageLocation = 'images/';
   const image = document.createElement('img');
   image.src = imageLocation + data.name + '.png';
   image.alt = data.title;
   image.style.height = '512px';
   image.style.objectFit = 'cover';
   image.style.boxShadow = '0 0 4px rgba(0, 0, 0, 0.2)';


    storyDiv.appendChild(image);



   const story = document.createElement('p');
   story.textContent = data.story;
   story.style.fontSize = '20px';
   story.style.padding = '20px';
   story.style.width = '80%';

   storyDiv.appendChild(story);

   newsDiv.appendChild(storyDiv);
});