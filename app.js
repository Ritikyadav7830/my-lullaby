
 document.getElementById('startBtn').addEventListener ('click', function () {

      showScreen(".SignIn-Page")
    
  });

  
//  document.getElementById('baby-btn').addEventListener ('click', function () {

//   const PinkArrow = document.querySelector('.Pink-Arrow');
// const SkyBlueArrow = document.querySelector('.skyBlue-Arrow');
// const BlueArrow = document.querySelector('.Blue-Arrow');
// const YellowArrow = document.querySelector('.yellow-Arrow');
//  let SelectedChoice = "";
// const choice1 = document.getElementById('choice1');
// const choice2 = document.getElementById('choice2');
// const choice3 = document.getElementById('choice3');
// const choice4 = document.getElementById('choice4');
// const choiceBox = document.querySelector('.choice-box')


//   choiceBox.style.display = 'none';
//   PinkArrow.style.display = 'none';
//   SkyBlueArrow.style.display = 'none';
//   BlueArrow.style.display = 'none';
//   YellowArrow.style.display = 'none';
//    SelectedChoice = 'null';
//    choice1.classList.remove('selected');
//   choice2.classList.remove('selected');
//   choice3.classList.remove('selected');
//   choice4.classList.remove('selected');
//  })



// back Arrow home page ke liye
document.querySelector('.SignIn-arrow').addEventListener ('click', function () {

    const hiddenValue = document.querySelector('.hidden-div2');
       const hiddenDiv = document.querySelector('.hidden-div');
     const mobileInput = document.getElementById('mobile');


     hiddenValue.style.display = 'none';
      mobileInput.style.borderColor = '#ccc';
   hiddenDiv.style.display = 'none';
  showScreen(".home-Page")
  
});

// back Arrow signIn page ke liye

document.querySelector('.baby-Arrow').addEventListener ('click', function () {''
 
   const hiddenValue = document.querySelector('.hidden-div2');
  const formData = document.getElementById('formDetails');
   const hiddenDiv = document.querySelector('.hidden-div');
     const mobileInput = document.getElementById('mobile');


  formData.reset();
  mobileInput.style.borderColor = '#ccc';
      hiddenValue.style.display = 'none';
   hiddenDiv.style.display = 'none';
   showScreen(".SignIn-Page")
     
});



// back Arrow choice page ke liye

document.querySelector('.choice-Arrow').addEventListener ('click', function () {''
 
  const Babyform = document.getElementById('BabyformDetails');
  const blueArrow = document.querySelector('.blue-Arrow');
const pinkArrow = document.querySelector('.pink-Arrow');
 const hiddenDiv = document.querySelector('.hidden-baby-div');
 const hiddenBabyName = document.querySelector('.baby-name');
   const TeddySelectionValidation = document.querySelector('.Teddy-selection-validation');
  const nameInput = document.getElementById('BabyName');
  const charCount = document.getElementById('charCount');


 charCount.textContent = `${this.value.length} / 8`;
 nameInput.style.borderColor = '#ccc';
    hiddenDiv.style.display = 'none';
    hiddenBabyName.style.display = 'none';
    TeddySelectionValidation.style.display = 'none';
   blueArrow.style.display = 'none';
   pinkArrow.style.display = 'none';

       showScreen(".select-baby-section")
      Babyform.reset();
})


// baby form me input me enter krne pr counter 

const nameInput = document.getElementById('name');

nameInput?.addEventListener('input', function () {

  this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
});




// signIn form ke liye
const formData = document.getElementById('formDetails'); 

formData.addEventListener('submit', function (e) {
  e.preventDefault();


  const name = document.getElementById('name').value.trim();
  const mobile = document.getElementById('mobile').value.trim();
  const agree = document.getElementById('agree').checked;
  const hiddenDiv = document.querySelector('.hidden-div');
  const mobileInput = document.getElementById('mobile');
    const hiddenValue = document.querySelector('.hidden-div2');
  


  if (name === '' || mobile === '' || !agree) {
    hiddenValue.style.display = 'block';
    return;
  }


  if (mobile.length !== 10) {
    hiddenDiv.style.display = 'block';
    mobileInput.style.borderColor = 'red';
    return;
  }

 else {
     showScreen(".select-baby-section");
  }
});




const babyNameInput = document.getElementById('BabyName');
const charCount = document.getElementById('charCount');

babyNameInput?.addEventListener('input', function () {
  this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
  charCount.textContent = `${this.value.length} / 8`;
});


// teddy ke liye toggle button
const Teddy1 = document.getElementById('Teddy1');
const Teddy2 = document.getElementById('Teddy2');

const blueArrow = document.querySelector('.blue-Arrow');
const pinkArrow = document.querySelector('.pink-Arrow');

let selectedTeddy = null; 

Teddy1.addEventListener('click', function () {
  blueArrow.style.display = 'block';
  pinkArrow.style.display = 'none';
  Teddy1.classList.add('selected');
  Teddy2.classList.remove('selected');
  selectedTeddy = 'Teddy1';
  console.log(selectedTeddy);
});

Teddy2.addEventListener('click', function () {
  pinkArrow.style.display = 'block';
  blueArrow.style.display = 'none';
  Teddy2.classList.add('selected');
  Teddy1.classList.remove('selected');
  selectedTeddy = 'Teddy2';
   console.log(selectedTeddy);
});

// ✅ Form validation for baby form
const form = document.getElementById('BabyformDetails');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('BabyName').value.trim();
  const hiddenDiv = document.querySelector('.hidden-baby-div');
  const hiddenBabyName = document.querySelector('.baby-name');
  const TeddySelectionValidation = document.querySelector('.Teddy-selection-validation');
  const nameInput = document.getElementById('BabyName');
 
  // Name validation
  if (name === '') {
    hiddenBabyName.style.display = 'block';
    return;
  }

  if (name.length !== 8) {
    hiddenDiv.style.display = 'block';
    nameInput.style.borderColor = '#BE9C1C';
    return;
  }

  // ✅ Teddy selection validation
  if (!selectedTeddy) {
    TeddySelectionValidation.style.display = 'block';
    return;
  }else {
      showScreen(".Pick-a-lulls-by");
  }
});




// choice ke liye toggle button

const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const choice3 = document.getElementById('choice3');
const choice4 = document.getElementById('choice4');


const PinkArrow = document.querySelector('.Pink-Arrow');
const SkyBlueArrow = document.querySelector('.skyBlue-Arrow');
const BlueArrow = document.querySelector('.Blue-Arrow');
const YellowArrow = document.querySelector('.yellow-Arrow');

let SelectedChoice = null; 

choice1.addEventListener('click', function () {
  PinkArrow.style.display = 'block';
  SkyBlueArrow.style.display = 'none';
  BlueArrow.style.display = 'none';
  YellowArrow.style.display = 'none';

  choice1.classList.add('selected');
  choice2.classList.remove('selected');
  choice3.classList.remove('selected');
  choice4.classList.remove('selected');
  SelectedChoice = 'choice1';
  console.log(SelectedChoice);
});

choice2.addEventListener('click', function () {
  PinkArrow.style.display = 'none';
  SkyBlueArrow.style.display = 'block';
  BlueArrow.style.display = 'none';
  YellowArrow.style.display = 'none';

  choice1.classList.remove('selected');
  choice2.classList.add('selected');
  choice3.classList.remove('selected');
  choice4.classList.remove('selected');
  SelectedChoice = 'choice2';
  console.log(SelectedChoice);
});

choice3.addEventListener('click', function () {
  PinkArrow.style.display = 'none';
  SkyBlueArrow.style.display = 'none';
  BlueArrow.style.display = 'block';
  YellowArrow.style.display = 'none';

  choice1.classList.remove('selected');
  choice2.classList.remove('selected');
  choice3.classList.add('selected');
  choice4.classList.remove('selected');
  SelectedChoice = 'choice3';
  console.log(SelectedChoice);
});

choice4.addEventListener('click', function () {
  PinkArrow.style.display = 'none';
  SkyBlueArrow.style.display = 'none';
  BlueArrow.style.display = 'none';
  YellowArrow.style.display = 'block';

  choice1.classList.remove('selected');
  choice2.classList.remove('selected');
  choice3.classList.remove('selected');
  choice4.classList.add('selected');
  SelectedChoice = 'choice4';
  console.log(SelectedChoice);
});


// ✅ Form validation for choiceForm
const choiceForm = document.getElementById('choice-form');


choiceForm.addEventListener('submit', function (e) {
  e.preventDefault();

   const choiceBox = document.querySelector('.choice-box');
   

  // ✅ Teddy selection validation
  if (!SelectedChoice) {
    choiceBox.style.display = 'block';
    console.log("1")
    return;
  } 
  else {
    showScreen(".Complete");
  }

});


// Privacy-Policy pr click krne pr action

let PrivacyArrow = document.querySelector(".Privacy-arrow");

PrivacyArrow.addEventListener('click', function () {
 
  let PrivacyContainer = document.querySelector(".Privacy-Policy");

  PrivacyContainer.classList.add('d-none');
     PrivacyContainer.style.zIndex = "";
     PrivacyContainer.style.position = "";
     PrivacyContainer.style.top = "";
});

let Privacy = document.getElementById("Privacy-Policy");

Privacy.addEventListener('click', function () {
 
let PrivacyContainer = document.querySelector(".Privacy-Policy");

  PrivacyContainer.classList.remove('d-none');
     PrivacyContainer.style.zIndex = "100";
     PrivacyContainer.style.position = "fixed";
     PrivacyContainer.style.top = "0";
});





// Terms arrow pr click krne pr
 const termsArrow= document.querySelector(".Terms-arrow");
 
 termsArrow.addEventListener ('click', function () {

  let termsConditionsContainer = document.querySelector(".Terms-Conditions");
   

 termsConditionsContainer.classList.add('d-none');
    termsConditionsContainer.style.zIndex = "";
    termsConditionsContainer.style.position = "";
    termsConditionsContainer.style.top = "";
    
   

});


// Terms-Conditions pr click krne pr action

let termsConditions = document.getElementById("Terms-Conditions");

  termsConditions.addEventListener('click', function () {

    let termsConditionsContainer = document.querySelector(".Terms-Conditions");


    termsConditionsContainer.classList.remove('d-none');
    termsConditionsContainer.style.zIndex = "100";
    termsConditionsContainer.style.position = "fixed";
    termsConditionsContainer.style.top = "0";
    

});

const allSreen = document.querySelectorAll(".common-section")
function showScreen(showScreen){
  allSreen.forEach(screen=>{
    if(!screen.classList.contains("d-none")){
        screen.classList.add("d-none")
    }
  })
  
  document.querySelector(showScreen).classList.remove("d-none")
}


document.addEventListener("DOMContentLoaded", function() {
  const qrSection = document.getElementById("qrSection");
  if (window.innerWidth > 1024) {
    showScreen(".qr");
  } else {
    showScreen(".home-Page");
  }
});


// video play krne ke liye
    const playBtn = document.querySelector(".play-img");
    const thumbnail = document.querySelector(".thumbnail");
    const video = document.querySelector(".main-video");

    playBtn.addEventListener("click", function() {
      
      thumbnail.style.display = "none";
      playBtn.style.display = "none";
      
      video.style.display = "block";
      video.play();
    });
 


// video ko download krne ke liye function
    const downloadBtn = document.querySelector(".download-button");

    downloadBtn.addEventListener("click", function() {
      
      const videoUrl = "assists/video/video1.mp4";  
      const fileName = "MyVideo.mp4"; 

      
      const a = document.createElement("a");
      a.href = videoUrl;
      a.download = fileName;

      // Anchor tag ko click karte hain programmatically
      document.body.appendChild(a);
      a.click();

      // Cleanup
      document.body.removeChild(a);
    });




     const Homebtn = document.getElementById("home-btn");
     Homebtn.addEventListener("click", function() {
        
      showScreen('.home-Page')
     });
