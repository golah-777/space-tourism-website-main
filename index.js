class App{
  constructor(){
   this.homeNav = document.querySelector('.home-nav');
   this.destinationNav = document.querySelector('.destination-nav');
   this.crewNav = document.querySelector('.crew-nav');
   this.techNav = document.querySelector('.tech-nav');
   this.main = document.querySelector('.main');


   this.openMenu = document.querySelector('.more-options-mobile');
   this.closeMenu = document.querySelector('.close-menu');
   this.mobileOptions = document.querySelector('.mobile-options');
   this.homeNavMobile = document.querySelector('.home-nav-mobile');
   this.destinationNavMobile = document.querySelector('.destination-nav-mobile');
   this.crewNavMobile = document.querySelector('.crew-nav-mobile');
   this.techNavMobile = document.querySelector('.tech-nav-mobile');

   this.body = document.querySelector('.body')

   this.homeBar = document.querySelector('.active-bar-home');
   this.destinationBar = document.querySelector('.active-bar-destination');
   this.crewBar = document.querySelector('.active-bar-crew');
   this.techBar = document.querySelector('.active-bar-tech');

   this.homeBarT = false;
   this.destinationBarT = false;
   this.crewBarT = false;
   this.techBarT = false;

   this.addEventListeners();
  }

  addEventListeners(){

    this.homeNav.addEventListener('click', ()=>{

      // window.location.href = '/starter-code/index.html';

     this.main.style.opacity = 0;

      // Wait for the fade out animation to complete (adjust the delay as needed)
      setTimeout(() => {
        // Update the content
        this.body.style.backgroundImage = 'url("/background-home-desktop.jpg")'; 
        
        this.main.innerHTML = `
        <div class="intro">
        <h3>SO, YOU WANT TO TRAVEL TO</h3>
        <h1>SPACE</h1>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
        outer space and not hover kind of on the edge of it. Well sit back, and relax 
        because we’ll give you a truly out of this world experience!Let’s face it; if you want to go to space, you might as well genuinely go to 
        outer space and not hover kind of on the edge of it. Well sit back, and relax 
        because we’ll give you a truly out of this world experience!</p>
      </div>
      <div class="circle">
       <span>EXPLORE</span>
      </div>`
      
      this.main.offsetHeight;
    
      // Fade in the new content
      this.main.style.opacity = 1;
    
      }, 500)

      this.checkState('home');

    });
    
    this.destinationNav.addEventListener('click',()=>{

      // this.body.style.backgroundImage = 'url("/background-destination-desktop.jpg")'; 
      
      this.main.style.opacity = 0;

      // Wait for the fade out animation to complete (adjust the delay as needed)
      setTimeout(() => {
        // Update the content

        this.body.style.backgroundImage = 'url("/background-destination-desktop.jpg")';
        this.main.innerHTML = `
        <div class="planet-imj-div" >
        <h3 class="destination"><span>01 </span>  PICK YOUR DESTINATION</h3>
        <div class="planet-imj"></div>
      </div>
      <div class="planets">
        <div>
          <div class="planet-options">
            <div class="planet-option moon">
              <span>MOON</span>
              <div class="active-bar active-moon"></div>
            </div>
            <div class="planet-option">
              <span id="mars">MARS</span>
              <div class="active-mars"></div>
            </div>
            <div class="planet-option europa">
              <span>EUROPA</span>
              <div class="active-europa"></div>
            </div>
            <div class="planet-option titan">
              <span>TITAN</span>
              <div class="active-titan"></div>
            </div>
         </div>
         <h1 class="planet-name">MOON</h1>
         <p class="planet-description">"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."</p>
        <div class="planet-d-t">
          <div>
            <span>Avg. distance</span>
            <p class="planet-distance">384,400 km</p>
          </div>
          <div>
            <span>Est. travel time</span>
            <p class="planet-time">3 days</p>
          </div>
        </div>
      </div>
        `;
    
        // Trigger a reflow to apply the changes before fading in
        this.main.offsetHeight;
    
        // Fade in the new content
        this.main.style.opacity = 1;

        const apptwo = new Apptwo();
      }, 500);

      this.checkState('destination');
    });

    this.crewNav.addEventListener('click', ()=>{
      
      // window.location.href = '/starter-code/crew.html';

      this.main.style.opacity = 0;

      // Wait for the fade out animation to complete (adjust the delay as needed)
      setTimeout(() => {
        // Update the content
        this.body.style.backgroundImage = 'url("/background-crew-desktop.jpg")';
        this.main.innerHTML = `
        <div class="crew-info">
        <h3 class="destination"><span>02 </span>  MEET YOUR CREW</h3>
        <h2 class="crew-role">FLIGHT ENGINEER</h2>
        <h4 class="crew-name">Anousheh Ansari</h4>
        <p class="crew-bio">Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
        Ansari was the fourth self-funded space tourist, the first self-funded woman to 
        fly to the ISS, and the first Iranian in space.</p>
        <div class="crew-options">
          <li class="active-li li-one"></li>
          <li class="li-two"></li>
          <li class="li-three"></li>
          <li class="li-four"></li>
        </div>
      </div>
      <div class="crew-imj-div" >
        <div class="crew-imj"></div>
      </div>
        `;
    
        // Trigger a reflow to apply the changes before fading in
        this.main.offsetHeight;
    
        // Fade in the new content
        this.main.style.opacity = 1;

        const crew = new Appcrew();
      }, 500);

      this.checkState('crew');
    });

    this.techNav.addEventListener('click', ()=>{

      // window.location.href = '/starter-code/technology.html';
      this.main.style.opacity = 0;

      // Wait for the fade out animation to complete (adjust the delay as needed)
      setTimeout(() => {
        // Update the content
        this.body.style.backgroundImage = 'url("/background-technology-desktop.jpg")'; 
        this.main.innerHTML = `
        
            <div class="tech-info">
            <h3 class="destination tech"><span>03 </span>  SPACE LAUNCH 101</h3>
            <div class="mid-sec">
              <div class="numbers-div">
                <div class="no-tech active-tech one"><span>1</span></div>
                <div class="no-tech two"><span>2</span></div>
                <div class="no-tech three"><span>3</span></div>
              </div>
              <div>
                <h2 class="Technology">THE TECHNOLOGY...</h2>
                <h4 class="type-tech">LAUNCH VEHICLE</h4>
                <p class="tech-bio">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                it's quite an awe-inspiring sight on the launch pad!</p>
              </div>
            </div>
           </div>
           <div class="tech-imj-div" >
            <div class="tech-img"></div>
           </div>
        
        `;
    
        // Trigger a reflow to apply the changes before fading in
        this.main.offsetHeight;
    
        // Fade in the new content
        this.main.style.opacity = 1;
        const tech = new Apptech();
      }, 500);

      this.checkState('tech');
    });

    this.openMenu.addEventListener('click',()=>{
      this.mobileOptions.style.display = 'inline';
      this.openMenu.style.display = 'none';
    });

    this.closeMenu.addEventListener('click',()=>{
      this.mobileOptions.style.display = 'none';
      this.openMenu.style.display = 'inline';
    });




    this.homeNavMobile.addEventListener('click',()=>{
            // window.location.href = '/starter-code/index.html';

     this.main.style.opacity = 0;

     // Wait for the fade out animation to complete (adjust the delay as needed)
     setTimeout(() => {
       // Update the content
       this.body.style.backgroundImage = 'url("/background-home-desktop.jpg")'; 
       
       this.main.innerHTML = `
       <div class="intro">
       <h3>SO, YOU WANT TO TRAVEL TO</h3>
       <h1>SPACE</h1>
       <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
       outer space and not hover kind of on the edge of it. Well sit back, and relax 
       because we’ll give you a truly out of this world experience!Let’s face it; if you want to go to space, you might as well genuinely go to 
       outer space and not hover kind of on the edge of it. Well sit back, and relax 
       because we’ll give you a truly out of this world experience!</p>
     </div>
     <div class="circle">
      <span>EXPLORE</span>
     </div>`
     
     this.main.offsetHeight;
   
     // Fade in the new content
     this.main.style.opacity = 1;
   
     }, 500)
     
      this.mobileOptions.style.display = 'none';
      this.openMenu.style.display = 'inline';
    });

    this.destinationNavMobile.addEventListener('click',()=>{
      
      // this.body.style.backgroundImage = 'url("/background-destination-desktop.jpg")'; 
      
      this.main.style.opacity = 0;

      // Wait for the fade out animation to complete (adjust the delay as needed)
      setTimeout(() => {
        // Update the content

        this.body.style.backgroundImage = 'url("/background-destination-desktop.jpg")';
        this.main.innerHTML = `
        <div class="planet-imj-div" >
        <h3 class="destination"><span>01 </span>  PICK YOUR DESTINATION</h3>
        <div class="planet-imj"></div>
      </div>
      <div class="planets">
        <div>
          <div class="planet-options">
            <div class="planet-option moon">
              <span>MOON</span>
              <div class="active-bar active-moon"></div>
            </div>
            <div class="planet-option">
              <span id="mars">MARS</span>
              <div class="active-mars"></div>
            </div>
            <div class="planet-option europa">
              <span>EUROPA</span>
              <div class="active-europa"></div>
            </div>
            <div class="planet-option titan">
              <span>TITAN</span>
              <div class="active-titan"></div>
            </div>
         </div>
         <h1 class="planet-name">MOON</h1>
         <p class="planet-description">"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."</p>
        <div class="planet-d-t">
          <div>
            <span>Avg. distance</span>
            <p class="planet-distance">384,400 km</p>
          </div>
          <div>
            <span>Est. travel time</span>
            <p class="planet-time">3 days</p>
          </div>
        </div>
      </div>
        `;
    
        // Trigger a reflow to apply the changes before fading in
        this.main.offsetHeight;
    
        // Fade in the new content
        this.main.style.opacity = 1;

        const apptwo = new Apptwo();
      }, 500);

      this.mobileOptions.style.display = 'none';
      this.openMenu.style.display = 'inline';
    });

    this.crewNavMobile.addEventListener('click',()=>{
      // window.location.href = '/starter-code/crew.html';

      this.main.style.opacity = 0;

      // Wait for the fade out animation to complete (adjust the delay as needed)
      setTimeout(() => {
        // Update the content
        this.body.style.backgroundImage = 'url("/background-crew-desktop.jpg")';
        this.main.innerHTML = `
        <div class="crew-info">
        <h3 class="destination"><span>02 </span>  MEET YOUR CREW</h3>
        <h2 class="crew-role">FLIGHT ENGINEER</h2>
        <h4 class="crew-name">Anousheh Ansari</h4>
        <p class="crew-bio">Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
        Ansari was the fourth self-funded space tourist, the first self-funded woman to 
        fly to the ISS, and the first Iranian in space.</p>
        <div class="crew-options">
          <li class="active-li li-one"></li>
          <li class="li-two"></li>
          <li class="li-three"></li>
          <li class="li-four"></li>
        </div>
      </div>
      <div class="crew-imj-div" >
        <div class="crew-imj"></div>
      </div>
        `;
    
        // Trigger a reflow to apply the changes before fading in
        this.main.offsetHeight;
    
        // Fade in the new content
        this.main.style.opacity = 1;

        const crew = new Appcrew();
      }, 500);

      this.mobileOptions.style.display = 'none';
      this.openMenu.style.display = 'inline';
    });

    this.techNavMobile.addEventListener('click',()=>{
      // window.location.href = '/starter-code/technology.html';
      this.main.style.opacity = 0;

      // Wait for the fade out animation to complete (adjust the delay as needed)
      setTimeout(() => {
        // Update the content
        this.body.style.backgroundImage = 'url("/background-technology-desktop.jpg")'; 
        this.main.innerHTML = `
        
            <div class="tech-info">
            <h3 class="destination tech"><span>03 </span>  SPACE LAUNCH 101</h3>
            <div class="mid-sec">
              <div class="numbers-div">
                <div class="no-tech active-tech one"><span>1</span></div>
                <div class="no-tech two"><span>2</span></div>
                <div class="no-tech three"><span>3</span></div>
              </div>
              <div>
                <h2 class="Technology">THE TECHNOLOGY...</h2>
                <h4 class="type-tech">LAUNCH VEHICLE</h4>
                <p class="tech-bio">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                it's quite an awe-inspiring sight on the launch pad!</p>
              </div>
            </div>
            </div>
            <div class="tech-imj-div" >
            <div class="tech-img"></div>
            </div>
        
        `;
    
        // Trigger a reflow to apply the changes before fading in
        this.main.offsetHeight;
    
        // Fade in the new content
        this.main.style.opacity = 1;
        const tech = new Apptech();
      }, 500);

      this.mobileOptions.style.display = 'none';
      this.openMenu.style.display = 'inline';
    });
  }

  checkState(option){
    
    if(option === 'home'){
      this.homeBarT = true; 
      this.destinationBarT = false; 
      this.crewBarT = false; 
      this.techBarT= false; 
    }

    if(option === 'destination'){
      this.homeBarT = false; 
      this.destinationBarT = true; 
      this.crewBarT = false; 
      this.techBarT= false; 
    }

    if(option === 'crew'){
      this.homeBarT = false; 
      this.destinationBarT = false; 
      this.crewBarT = true; 
      this.techBarT= false; 
    }

    if(option === 'tech'){
      this.homeBarT = false; 
      this.destinationBarT = false; 
      this.crewBarT = false; 
      this.techBarT= true; 
    }


    this.barStyles()
  }

  barStyles(){
    if(this.homeBarT){
      this.homeBar.classList.add('active-bar')
    }else{
      this.homeBar.classList.remove('active-bar')
    }

    if(this.destinationBarT){
      this.destinationBar.classList.add('active-bar');
    }else{
      this.destinationBar.classList.remove('active-bar')
    }

    if(this.crewBarT){
      this.crewBar.classList.add('active-bar')
    }else{
      this.crewBar.classList.remove('active-bar')
    }

    if(this.techBarT){
      this.techBar.classList.add('active-bar')
    }else{
      this.techBar.classList.remove('active-bar')
    }
  }

}

const app = new App();

class Appcrew{
  constructor(){
   this.crewRole = document.querySelector('.crew-role');
   this.crewName = document.querySelector('.crew-name');
   this.crewInfo = document.querySelector('.crew-bio');

   this.liOne = document.querySelector('.li-one');
   this.liTwo = document.querySelector('.li-two');
   this.liThree= document.querySelector('.li-three');
   this.liFour = document.querySelector('.li-four');

   this.liOneT = false;
   this.liTwoT = false;
   this.liThreeT= false;
   this.liFourT = false;

   this.crewImg = document.querySelector('.crew-imj');
   this.crewInfoo = document.querySelector('.crew-info')

   this.eventListerners();
  }

  eventListerners(){
    this.liOne.addEventListener('click',()=>{
      this.selectedLi('one');
    });

    this.liTwo.addEventListener('click',()=>{
      this.selectedLi('two');
    });

    this.liThree.addEventListener('click',()=>{
      this.selectedLi('three');
    });

    this.liFour.addEventListener('click',()=>{
      this.selectedLi('four'); 
    });
  }

  selectedLi(option){
    if(option === 'one'){
      this.liOneT = true;
      this.liTwoT = false;
      this.liThreeT= false;
      this.liFourT = false;
    }

    if(option === 'two'){
      this.liOneT = false;
      this.liTwoT = true;
      this.liThreeT= false;
      this.liFourT = false;
    }

    if(option === 'three'){
      this.liOneT = false;
      this.liTwoT = false;
      this.liThreeT= true;
      this.liFourT = false;
    }

    if(option === 'four'){
      this.liOneT = false;
      this.liTwoT = false;
      this.liThreeT= false;
      this.liFourT = true;
    }

    this.crewStyles();
  }

  crewStyles(){
    if(this.liOneT){
      this.crewInfoo.style.opacity = 0;
      setTimeout(()=>{
        this.crewRole.innerHTML ="FLIGHT ENGINEER";
        this.crewName.innerHTML = "Anousheh Ansari";
        this.crewInfo.innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";

        this.crewInfoo.offsetHeight;
        this.crewInfoo.style.opacity = 1;
      }, 500)

      this.crewImg.style.backgroundImage = 'url("/starter-code/assets/crew/image-anousheh-ansari.webp")' ;
      this.liOne.classList.add('active-li');
      this.crewName.classList.add('show');
    }else{
      this.liOne.classList.remove('active-li');
    }

    if(this.liTwoT){
      this.crewInfoo.style.opacity = 0;
      setTimeout(()=>{
        this.crewRole.innerHTML =  "PILOT";
        this.crewName.innerHTML = "Victor Glover";
        this.crewInfo.innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";

        this.crewInfoo.offsetHeight;
        this.crewInfoo.style.opacity = 1;
      }, 500)

      this.crewImg.style.backgroundImage = 'url("/starter-code/assets/crew/image-victor-glover.webp")' ;
      this.liTwo.classList.add('active-li');
      this.crewName.classList.add('show');
    } else{
      this.liTwo.classList.remove('active-li');
    }

    if(this.liThreeT){
      this.crewInfoo.style.opacity = 0;
      setTimeout(()=>{
        this.crewRole.innerHTML = "MISSION SPECIALIST";
        this.crewName.innerHTML = "Mark Shuttleworth";
        this.crewInfo.innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
        this.crewInfoo.offsetHeight;
        this.crewInfoo.style.opacity = 1;
      }, 500)

      this.crewImg.style.backgroundImage = 'url("/starter-code/assets/crew/image-mark-shuttleworth.webp")';
      this.liThree.classList.add('active-li');
      this.crewName.classList.add('show');
    }else{
      this.liThree.classList.remove('active-li');
    }

    if(this.liFourT){
      this.crewInfoo.style.opacity = 0;
      setTimeout(()=>{
        this.crewRole.innerHTML = "COMMANDER";
        this.crewName.innerHTML = "Douglas Hurley";
        this.crewInfo.innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";

        this.crewInfoo.offsetHeight;
        this.crewInfoo.style.opacity = 1;
      }, 500)

      this.crewImg.style.backgroundImage = 'url("/starter-code/assets/crew/image-douglas-hurley.webp")';
      this.liFour.classList.add('active-li');
      this.crewName.classList.add('show');
    }else{
      this.liFour.classList.remove('active-li');
    }
  }
}





class Apptwo{
  constructor(){
    this.planets = document.querySelector('.planets');
    this.moon = document.querySelector('.moon');
    this.mars = document.querySelector('#mars');
    this.europa = document.querySelector('.europa');
    this.titan = document.querySelector('.titan');
    this.planetsDiv = document.querySelector('.planets')

    this.moonClicked = false;
    this.marsClicked = false;
    this.europaClicked = false;
    this.titanClicked = false;

    this.planetName = document.querySelector('.planet-name');
    this.planetDescription = document.querySelector('.planet-description');
    this.planetDistance = document.querySelector('.planet-distance');
    this.planetTime = document.querySelector('.planet-time');

    this.activeMoon = document.querySelector('.active-moon');
    this.activeMars = document.querySelector('.active-mars');
    this.activeEuropa = document.querySelector('.active-europa');
    this.activeTitan = document.querySelector('.active-titan');

    this.planetImg = document.querySelector('.planet-imj');

    this.addEventListeners();
  }

  addEventListeners(){
    this.moon.addEventListener('click',()=>{
     
    this.clickedPlanet('moon');
   });

   this.mars.addEventListener('click',()=>{

    this.clickedPlanet('mars');
   });

    this.europa.addEventListener('click',()=>{

     this.clickedPlanet('europa');
    });

    this.titan.addEventListener('click',()=>{

     this.clickedPlanet('titan');
    });

 
  }

  clickedPlanet(option){
   if(option === 'moon'){
    this.moonClicked = true;
    this.marsClicked = false;
    this.europaClicked = false;
    this.titanClicked = false;
   } else if(option === 'mars'){
    this.moonClicked = false;
    this.marsClicked = true;
    this.europaClicked = false;
    this.titanClicked = false;
   } else if(option === 'europa'){
    this.moonClicked = false;
    this.marsClicked = false;
    this.europaClicked = true;
    this.titanClicked = false;
   } else if(option === 'titan'){
    this.moonClicked = false;
    this.marsClicked = false;
    this.europaClicked = false;
    this.titanClicked = true;
   }

   this.planetsInfo();
   
  }

  planetsInfo(){
    if(this.moonClicked){
      this.planetsDiv.style.opacity = 0;

      setTimeout(()=>{
      this.planetName.innerHTML = "MOON";
      this.planetDescription.innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
      this.planetDistance.innerHTML ="384,400 km";
      this.planetTime.innerHTML ="3 days";

      this.planetsDiv.offsetHeight;
      this.planetsDiv.style.opacity = 1;
     }, 500)
     


      this.activeMoon.classList.add('active-bar');
      this.planetImg.style.backgroundImage = 'url("/starter-code/assets/destination/image-moon.png")';
    }else{
      this.activeMoon.classList.remove('active-bar')
    }
    
    if(this.marsClicked){
      this.planetsDiv.style.opacity = 0;
      setTimeout(()=>{

      this.planetName.innerHTML = "MARS";
      this.planetDescription.innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
      this.planetDistance.innerHTML = "225 mil. km";
      this.planetTime.innerHTML = "9 months";
        
      this.planetsDiv.offsetHeight;
      this.planetsDiv.style.opacity = 1;
     },500)


      this.activeMars.classList.add('active-bar');
      this.planetImg.style.backgroundImage = 'url("/starter-code/assets/destination/image-mars.png")'
    } else{
      this.activeMars.classList.remove('active-bar')
    }
    
    if(this.europaClicked){
      this.planetsDiv.style.opacity = 0;
      setTimeout(()=>{

        this.planetName.innerHTML = "EUROPA";
        this.planetDescription.innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
        this.planetDistance.innerHTML = "628 mil. km";
        this.planetTime.innerHTML = "3 years";
        
       this.planetsDiv.offsetHeight;
       this.planetsDiv.style.opacity = 1;
      },500)


      this.activeEuropa.classList.add('active-bar');
      this.planetImg.style.backgroundImage = 'url("/starter-code/assets/destination/image-europa.png")'
    } else{
      this.activeEuropa.classList.remove('active-bar')
    }
    
    if(this.titanClicked){
      this.planetsDiv.style.opacity = 0;
      setTimeout(()=>{

        this.planetName.innerHTML = "TITAN";
        this.planetDescription.innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
        this.planetDistance.innerHTML = "1.6 bil. km";
        this.planetTime.innerHTML = "7 years";

        
       this.planetsDiv.offsetHeight;
       this.planetsDiv.style.opacity = 1;
      },500)

      this.activeTitan.classList.add('active-bar');
      this.planetImg.style.backgroundImage = 'url("/starter-code/assets/destination/image-titan.png")'
    } else{
      this.activeTitan.classList.remove('active-bar')
    }
  }

}

class Apptech{
  constructor(){
   this.typeTech = document.querySelector('.type-tech');
   this.techBio = document.querySelector('.tech-bio');

   this.one = document.querySelector('.one');
   this.two = document.querySelector('.two');
   this.three= document.querySelector('.three');
   
   this.oneT = false;
   this.twoT = false;
   this.threeT= false;
   
   this.techImg = document.querySelector('.tech-img');
   this.midSec = document.querySelector(".mid-sec")

   this.eventListerners();
  }

  eventListerners(){
    this.one.addEventListener('click',()=>{
      this.selectedNo('one');
    });

    this.two.addEventListener('click',()=>{
      this.selectedNo('two');
    });

    this.three.addEventListener('click',()=>{
      this.selectedNo('three');
    });

  }

  selectedNo(option){
    if(option === 'one'){
      this.oneT = true;
      this.twoT = false;
      this.threeT= false;
    }

    if(option === 'two'){
      this.oneT = false;
      this.twoT = true;
      this.threeT= false;
    }

    if(option === 'three'){
      this.oneT = false;
      this.twoT = false;
      this.threeT= true;
    }

    this.techStyles();
  }

  techStyles(){
    if(this.oneT){
      this.midSec.style.opacity = 0;
      setTimeout(()=>{
        this.typeTech.innerHTML ="LAUNCH VEHICLE";
        this.techBio.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
        
        this.techImg.style.backgroundImage = 'url("/starter-code/assets/technology/image-launch-vehicle-portrait.jpg")';

        this.midSec.offsetHeight;
        this.midSec.style.opacity = 1
      }, 500)


      this.one.classList.add('active-tech');
    }else{
      this.one.classList.remove('active-tech');
    }

    if(this.twoT){
      this.midSec.style.opacity = 0;
      setTimeout(()=>{
        this.typeTech.innerHTML ="SPACEPORT";
        this.techBio.innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
  
        this.techImg.style.backgroundImage = 'url("/starter-code/assets/technology/image-spaceport-portrait.jpg")';

        this.midSec.offsetHeight;
        this.midSec.style.opacity = 1
      }, 500)


      this.two.classList.add('active-tech');
    } else{
      this.two.classList.remove('active-tech');
    }

    if(this.threeT){
      this.midSec.style.opacity = 0;
      setTimeout(()=>{
        this.typeTech.innerHTML = "SPACE CAPSULE";
        this.techBio.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
        
        this.techImg.style.backgroundImage = 'url("/starter-code/assets/technology/image-space-capsule-portrait.jpg")';

        this.midSec.offsetHeight;
        this.midSec.style.opacity = 1
      }, 500)


      this.three.classList.add('active-tech');
    }else{
      this.three.classList.remove('active-tech');
    }
  }
}




