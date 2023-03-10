let counter = 0;
let firstcard = "";
let secondcard = "";

const cards = 
    //selecting a card from all of the cards
    document.querySelectorAll(".cards .card");

cards.forEach((card) => {
   card.addEventListener('click', () => {
      card.classList.add("clicked");
      // console.log(true);

      if(counter === 0){
        firstcard = card.getAttribute("flower");
        counter++;
      }
      else{
        secondcard = card.getAttribute("flower");
        counter = 0;

        //both cards are same
        if(firstcard === secondcard){
          const correctcards = document.querySelectorAll(".card[flower='" + firstcard + "']");
          correctcards[0].classList.add("checked");
          correctcards[0].classList.remove("clicked");
          correctcards[1].classList.add("checked");
          correctcards[1].classList.remove("clicked");
        }
        //both cards are not same
        else{
          const incorrectcards = document.querySelectorAll(".card.clicked");
          incorrectcards[0].classList.add("shake");
          incorrectcards[1].classList.add("shake");
          setTimeout(() => {
              incorrectcards[0].classList.remove("shake");
              incorrectcards[0].classList.remove("clicked");
              incorrectcards[1].classList.remove("shake");
              incorrectcards[1].classList.remove("clicked");
          },800)

        }
      }
      // console.log(firstcard);
      // console.log(secondcard);
   })
})
