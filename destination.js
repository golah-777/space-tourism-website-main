class Apptwo{
  constructor(){
    this.main = document.querySelector('.main');
    this.planets = document.querySelector('.planets');
    this.moon = this.main.querySelector('.moon');
    this.mars = document.querySelector('#mars');
    this.europa = document.querySelector('.europa');
    this.titan = document.querySelector('.titan');
   

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
      this.planetName.innerHTML = "MOON";
      this.planetDescription.innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
      this.planetDistance.innerHTML ="384,400 km";
      this.planetTime.innerHTML ="3 days";

      this.activeMoon.classList.add('active-bar');
      this.planetImg.style.backgroundImage = 'url("/starter-code/assets/destination/image-moon.png")';
    }else{
      this.activeMoon.classList.remove('active-bar')
    }
    
    if(this.marsClicked){
      this.planetName.innerHTML = "MARS";
      this.planetDescription.innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
      this.planetDistance.innerHTML = "225 mil. km";
      this.planetTime.innerHTML = "9 months";

      this.activeMars.classList.add('active-bar');
      this.planetImg.style.backgroundImage = 'url("/starter-code/assets/destination/image-mars.png")'
    } else{
      this.activeMars.classList.remove('active-bar')
    }
    
    if(this.europaClicked){
      this.planetName.innerHTML = "EUROPA";
      this.planetDescription.innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
      this.planetDistance.innerHTML = "628 mil. km";
      this.planetTime.innerHTML = "3 years";

      this.activeEuropa.classList.add('active-bar');
      this.planetImg.style.backgroundImage = 'url("/starter-code/assets/destination/image-europa.png")'
    } else{
      this.activeEuropa.classList.remove('active-bar')
    }
    
    if(this.titanClicked){
      this.planetName.innerHTML = "TITAN";
      this.planetDescription.innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
      this.planetDistance.innerHTML =  "1.6 bil. km";
      this.planetTime.innerHTML = "7 years";

      this.activeTitan.classList.add('active-bar');
      this.planetImg.style.backgroundImage = 'url("/starter-code/assets/destination/image-titan.png")'
    } else{
      this.activeTitan.classList.remove('active-bar')
    }
  }

}

const apptwo = new Apptwo();