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
      this.crewRole.innerHTML ="FLIGHT ENGINEER";
      this.crewName.innerHTML = "Anousheh Ansari";
      this.crewInfo.innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
      this.crewImg.style.backgroundImage = 'url("/starter-code/assets/crew/image-anousheh-ansari.webp")' ;
      this.liOne.classList.add('active-li');
      this.crewName.classList.add('show');
    }else{
      this.liOne.classList.remove('active-li');
    }

    if(this.liTwoT){
      this.crewRole.innerHTML =  "PILOT";
      this.crewName.innerHTML = "Victor Glover";
      this.crewInfo.innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
      this.crewImg.style.backgroundImage = 'url("/starter-code/assets/crew/image-victor-glover.webp")' ;
      this.liTwo.classList.add('active-li');
      this.crewName.classList.add('show');
    } else{
      this.liTwo.classList.remove('active-li');
    }

    if(this.liThreeT){
      this.crewRole.innerHTML = "MISSION SPECIALIST";
      this.crewName.innerHTML = "Mark Shuttleworth";
      this.crewInfo.innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
      this.crewImg.style.backgroundImage = 'url("/starter-code/assets/crew/image-mark-shuttleworth.webp")';
      this.liThree.classList.add('active-li');
      this.crewName.classList.add('show');
    }else{
      this.liThree.classList.remove('active-li');
    }

    if(this.liFourT){
      this.crewRole.innerHTML = "COMMANDER";
      this.crewName.innerHTML = "Douglas Hurley";
      this.crewInfo.innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
      this.crewImg.style.backgroundImage = 'url("/starter-code/assets/crew/image-douglas-hurley.webp")';
      this.liFour.classList.add('active-li');
      this.crewName.classList.add('show');
    }else{
      this.liFour.classList.remove('active-li');
    }
  }
}

const crew = new Appcrew();