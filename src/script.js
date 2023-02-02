function community() {
        let name = prompt("what is your name?");
        let age = prompt("how old are you?");
        let h1 = document.querySelector("h1");

        if (age >= 16) {
          h1.innerHTML = "Welcome to the community " + name + "!";
        } else {
          alert("Sorry you are too young!");
        }
      }

      let communityButton = document.querySelector("button");
      communityButton.addEventListener("click", community);