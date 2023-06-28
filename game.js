document.addEventListener('keyup', (event) => {
  if (event.key === "q") {
    console.log(event);
    const player1 = document.querySelector('.racer-table #player1-race .active');
    const checkGoal = document.querySelector("#goal.active");
    if (checkGoal == null) {
      player1.classList.remove("active");
      player1.previousElementSibling.classList.add("active");
    } else {
      const pl1 = window.confirm("The Chick won!\nHe is already eating a toast but there's always room for dessert!\nClick OK if you want to play again!");
      if (pl1 === true) {
        window.location.reload(true);
      }
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === "b") {
    console.log(event);
    const player2 = document.querySelector('.racer-table #player2-race .active');
    const checkGoal = document.querySelector("#goal.active");
    if (checkGoal == null) {
      player2.classList.remove("active");
      player2.previousElementSibling.classList.add("active");
    } else {
      const pl2 = window.confirm("The snail won!\nEven snails are good at running.\nClick OK if you want to play again!");
      if (pl2 === true) {
        window.location.reload(true);
      }
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === "p") {
    console.log(event);
    const player3 = document.querySelector('.racer-table #player3-race .active');
    const checkGoal = document.querySelector("#goal.active");
    if (checkGoal == null) {
      player3.classList.remove("active");
      player3.previousElementSibling.classList.add("active");
    } else {
      const pl3 = window.confirm("The Rabbit won!\nClick OK if you want to play again!");
      if (pl3 === true) {
        window.location.reload(true);
      }
    }
  }
});
