// Function to open modal
function openModal() {
  document.getElementById('modal-notify').style.display = 'flex';
  document.getElementById('countdown').style.display = 'none';
  document.getElementById('loader').style.display = 'none';
}

// Function to close modal
function closeModal() {
  document.getElementById('modal-notify').style.display = 'none';
  document.getElementById('countdown').style.display = 'none';
  document.getElementById('loader').style.display = 'none';
}

// Function to handle form submission
function submitForm(event) {
  event.preventDefault(); // Prevent form submission

  const countdownEl = document.getElementById('countdown');
  const loader = document.getElementById('loader');
  countdownEl.style.display = 'block';
  loader.style.display = 'none';

  let secondsLeft = 3;
  countdownEl.innerText = `Submitting in ${secondsLeft}...`;

  const countdownInterval = setInterval(() => {
    secondsLeft--;
    if (secondsLeft <= 0) {
      clearInterval(countdownInterval);
      countdownEl.style.display = 'none';
      loader.style.display = 'block';

      setTimeout(() => {
        loader.style.display = 'none';
        const name = event.target.name.value;
        const email = event.target.email.value;
        alert(`Thank you for subscribing, ${name}! We will notify you at ${email}.`);
        closeModal();
        event.target.reset();
      }, 2000);
    } else {
      countdownEl.innerText = `Submitting in ${secondsLeft}...`;
    }
  }, 1000);
}



  
  
  