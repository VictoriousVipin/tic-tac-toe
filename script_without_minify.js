(function() {
	  var flag, count, gameEnd;

	  document.getElementById("restart").addEventListener("click", function() {
		resetGame();
	  });

	  var resetGame = function() {
		var tile, i;
		flag = false;
		count = 0;
		gameEnd = false;
		document.getElementById("mainWrapper").innerHTML = "";
		document
		  .querySelector("#result-message")
		  .setAttribute("style", "display: none");
		for (i = 1; i <= 9; i++) {
		  tile = document.createElement("div");
		  tile.setAttribute("class", "tiles");
		  tile.innerText = i;
		  tile.addEventListener("click", function() {
			if (this.innerText !== "0" && this.innerText !== "X" && !gameEnd) {
			  changeTile(this);
			}
		  });
		  document.getElementById("mainWrapper").appendChild(tile);
		}
	  };

	  var changeTile = function(tile) {
		if (flag) {
		  tile.setAttribute("class", tile.getAttribute("class") + " red checked");
		  tile.innerText = "0";
		} else {
		  tile.setAttribute("class", tile.getAttribute("class") + " green checked");
		  tile.innerText = "X";
		}
		count++;
		flag = !flag;
		checkResult();
	  };

	  var checkResult = function() {
		var tiles = document
		  .getElementById("mainWrapper")
		  .getElementsByClassName("tiles");
		if (
		  checkEquality(
			tiles[0].innerText,
			tiles[1].innerText,
			tiles[2].innerText
		  ) ||
		  checkEquality(
			tiles[3].innerText,
			tiles[4].innerText,
			tiles[5].innerText
		  ) ||
		  checkEquality(
			tiles[6].innerText,
			tiles[7].innerText,
			tiles[8].innerText
		  ) ||
		  checkEquality(
			tiles[0].innerText,
			tiles[3].innerText,
			tiles[6].innerText
		  ) ||
		  checkEquality(
			tiles[1].innerText,
			tiles[4].innerText,
			tiles[7].innerText
		  ) ||
		  checkEquality(
			tiles[2].innerText,
			tiles[5].innerText,
			tiles[8].innerText
		  ) ||
		  checkEquality(
			tiles[0].innerText,
			tiles[4].innerText,
			tiles[8].innerText
		  ) ||
		  checkEquality(tiles[6].innerText, tiles[4].innerText, tiles[2].innerText)
		) {
		  gameEnd = true;
		  if (flag) {
			document.querySelector("#result-message").innerHTML =
			  "<div class='message success'>Player 1 won.</div>";
		  } else {
			document.querySelector("#result-message").innerHTML =
			  "<div class='message success'>Player 2 won.</div>";
		  }
		  document
			.querySelector("#result-message")
			.setAttribute("style", "display: inline-block");
		} else if (count === 9) {
		  document.querySelector("#result-message").innerHTML =
			"<div class='message'>No result.</div>";
		  document
			.querySelector("#result-message")
			.setAttribute("style", "display: inline-block");
		}
	  };

	  var checkEquality = function(a, b, c) {
		if (a === b && b === c) {
		  return true;
		}

		return false;
	  };
	  resetGame();
	})();