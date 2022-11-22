function addToList(strings) {
  strings.forEach(string => {
    const li = document.createElement('li');
    li.innerHTML = `<li>${string}</li>`;
    li.setAttribute('class', 'detail')
    let ul = document.body.querySelector('ul');
    ul.appendChild(li);
  });
}

async function setHeader() {
  try {
    // header creation
    const header = document.createElement('h1');
    header.innerText = 'Jhass & Vian';
    header.setAttribute('id', 'names');
    header.setAttribute('class', 'name');
    document.body.appendChild(header);

    // unordered list
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'my-details');
    document.body.appendChild(ul);

    // tons of lists
    let strings = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    addToList(strings);

    // clock
    const clock = document.createElement('h2');
    clock.setAttribute('id', 'clock');
    clock.innerText = new Date().toTimeString();
    document.body.append(clock);

  } catch (e) {
    console.log(e);
  }
}

async function startClock() {
  let time = new Date().toTimeString();
  setInterval(() => {
    time = new Date().toTimeString();
    let clock = document.body.querySelector('#clock');
    clock.innerText = time;
  }, 100);
}



window.onload = () => {
  setHeader();
  startClock()
};
