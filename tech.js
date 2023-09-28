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
      this.typeTech.innerHTML ="LAUNCH VEHICLE";
      this.techBio.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
      
      this.techImg.style.backgroundImage = 'url("/starter-code/assets/technology/image-launch-vehicle-portrait.jpg")';

      this.one.classList.add('active-tech');
    }else{
      this.one.classList.remove('active-tech');
    }

    if(this.twoT){
      this.typeTech.innerHTML ="SPACEPORT";
      this.techBio.innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";

      this.techImg.style.backgroundImage = 'url("/starter-code/assets/technology/image-spaceport-portrait.jpg")';

      this.two.classList.add('active-tech');
    } else{
      this.two.classList.remove('active-tech');
    }

    if(this.threeT){
      this.typeTech.innerHTML = "SPACE CAPSULE";
      this.techBio.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
      
      this.techImg.style.backgroundImage = 'url("/starter-code/assets/technology/image-space-capsule-portrait.jpg")';

      this.three.classList.add('active-tech');
    }else{
      this.three.classList.remove('active-tech');
    }
  }
}

const tech = new Apptech();