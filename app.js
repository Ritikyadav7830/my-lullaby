 document.getElementById('startBtn').addEventListener ('click', function () {
      showScreen(".SignIn-Page")
  });

// back Arrow home page ke liye
document.querySelector('.SignIn-arrow').addEventListener ('click', function () {

  showScreen(".home-Page")
  
});

// back Arrow signIn page ke liye

document.querySelector('.baby-Arrow').addEventListener ('click', function () {''
 
  const formData = document.getElementById('formDetails');
   const hiddenDiv = document.querySelector('.hidden-div');
     const mobileInput = document.getElementById('mobile');


  formData.reset();
  mobileInput.style.borderColor = '#ccc';
   hiddenDiv.style.display = 'none';
   showScreen(".SignIn-Page")
     
});



// back Arrow choice page ke liye

document.querySelector('.choice-Arrow').addEventListener ('click', function () {''
 
  const Babyform = document.getElementById('BabyformDetails');
  const blueArrow = document.querySelector('.blue-Arrow');
const pinkArrow = document.querySelector('.pink-Arrow');
 const hiddenDiv = document.querySelector('.hidden-baby-div');
  const nameInput = document.getElementById('BabyName');
  const charCount = document.getElementById('charCount');


 charCount.textContent = `${this.value.length} / 8`;
 nameInput.style.borderColor = '#ccc';
    hiddenDiv.style.display = 'none';
   blueArrow.style.display = 'none';
   pinkArrow.style.display = 'none';

       showScreen(".select-baby-section")
      Babyform.reset();
});


// baby form me input me enter krne pr counter 

const nameInput = document.getElementById('name');

nameInput?.addEventListener('input', function () {

  this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
});




// signIn form ke liye
const formData = document.getElementById('formDetails'); 

formData.addEventListener('submit', function (e) {
  e.preventDefault();

const SignInPage = document.querySelector('.SignIn-Page');
  const name = document.getElementById('name').value.trim();
  const mobile = document.getElementById('mobile').value.trim();
  const agree = document.getElementById('agree').checked;
  const hiddenDiv = document.querySelector('.hidden-div');
  const mobileInput = document.getElementById('mobile');
    const BabySection = document.querySelector('.select-baby-section');
  


  if (name === '' || mobile === '' || !agree) {
    alert('All values are necessary!');
    return;
  }

  if (name === '') {
    alert('Please enter your name.');
    return;
  }

  if (mobile.length !== 10) {
    hiddenDiv.style.display = 'block';
    mobileInput.style.borderColor = 'red';
    return;
  }

  if (!agree) {
    alert('Please agree to the terms & conditions before continuing.');
    return;
  } else {
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
});

Teddy2.addEventListener('click', function () {
  pinkArrow.style.display = 'block';
  blueArrow.style.display = 'none';
  Teddy2.classList.add('selected');
  Teddy1.classList.remove('selected');
  selectedTeddy = 'Teddy2';
});

// ✅ Form validation for baby form
const form = document.getElementById('BabyformDetails');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('BabyName').value.trim();
  const hiddenDiv = document.querySelector('.hidden-baby-div');
  const nameInput = document.getElementById('BabyName');
   const PickALullsBy = document.querySelector('.Pick-a-lulls-by');
   const BabySection = document.querySelector('.select-baby-section');


  // Name validation
  if (name === '') {
    alert('Please enter your baby\'s name.');
    return;
  }

  if (name.length !== 8) {
    hiddenDiv.style.display = 'block';
    nameInput.style.borderColor = '#BE9C1C';
    return;
  }

  // ✅ Teddy selection validation
  if (!selectedTeddy) {
    alert('Please select a teddy before continuing.');
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

let SelectedTeddy = null; 

choice1.addEventListener('click', function () {
  PinkArrow.style.display = 'block';
  SkyBlueArrow.style.display = 'none';
  BlueArrow.style.display = 'none';
  YellowArrow.style.display = 'none';

  choice1.classList.add('selected');
  choice2.classList.remove('selected');
  choice3.classList.remove('selected');
  choice4.classList.remove('selected');
  SelectedTeddy = 'choice1';
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
  SelectedTeddy = 'choice2';
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
  SelectedTeddy = 'choice3';
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
  SelectedTeddy = 'choice4';
});


// ✅ Form validation for choiceForm
const choiceForm = document.getElementById('choice-form');


choiceForm.addEventListener('submit', function (e) {
  e.preventDefault();
  
   const PickALullsBy = document.querySelector('.Pick-a-lulls-by');
   const complete = document.querySelector('.Complete');


  // ✅ Teddy selection validation
  if (!SelectedTeddy) {
    alert('Please select a teddy before continuing.');
    return;
  }
  else {
    showScreen(".Complete");
  }

});


// Privacy-Policy pr click krne pr action

let Privacy = document.getElementById("Privacy-Policy");
console.log(Privacy);

Privacy.addEventListener('click', function () {
 showScreen(".Privacy-Policy");
});

// privacy arrow pr click krne pr

document.querySelector('.Privacy-arrow').addEventListener ('click', function () {''
 
showScreen(".home-Page");

});


// Terms arrow pr click krne pr
document.querySelector('.Terms-arrow').addEventListener ('click', function () {''

showScreen(".home-Page");
});


// Terms-Conditions pr click krne pr action

let termsConditions = document.getElementById("Terms-Conditions");


  termsConditions.addEventListener('click', function () {
 showScreen(".Terms-Conditions");
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
