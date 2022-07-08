document.querySelector('#yell').addEventListener('click', parentsYell);


function parentsYell() {

  const userFirstName = document.getElementById('firstName').value;
  const userFirstMiddleName = document.getElementById('firstMiddle').value;
  const userLastName = document.getElementById('lastName').value;
  const upperCasedSurname = userLastName.charAt(0).toUpperCase() + userLastName.slice(1);
  const parentsMessage = document.getElementById('placeToYell');
  document.body.style.backgroundColor = 'red';
  parentsMessage.style.color = 'white';
  parentsMessage.innerHTML = `${userFirstName} ${userFirstMiddleName} ${userLastName}, you messed up! You are no longer the member of the ${upperCasedSurname}s!`;
}
