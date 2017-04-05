var vm = new Vue({
  el: "#tictac",
  data: {
    board: ["","","","","","","","",""],
    winCombo: [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ],
    currentPlayer: 1,
    player: {
      1: "O",
      2: "X"
    },
    pcPlayer: 1,
    haveWinner: false,
    draw: false,
    twoHumans: false,
    start: true,
    showChoose: false,
    run: false
  },
  computed: {

  },
  mounted: function() {
    // this.checkPcTurn();
  },
  watch: {
    currentPlayer: function() {
       this.checkPcTurn();
    },
    run: function() {
       this.checkPcTurn();
    }
  },
  methods: {
    continueGame: function(){
      this.board.fill("");

      this.haveWinner = false;
      this.draw = false;
      this.currentPlayer = 1;
      this.run = true;
      this.checkPcTurn();
      return;
    },
    newGame: function() {
      this.haveWinner = false;
      this.draw = false;
      this.board.fill("");
      this.currentPlayer = 1;
      this.pcPlayer = 1;
      this.twoHumans = false;
      this.start = true;
      this.showChoose = false;
      this.run = false;
      // return this.checkPcTurn();
      return;
    },
    twoPlayers: function() {
      this.twoHumans = true;
      this.showChoose = true;
      this.start = false;
    },
    onePlayer: function() {
      this.showChoose = true;
      this.start = false;
    },
    setPlayerOne: function(x) {
      this.pcPlayer = x;
      this.showChoose = false;
      this.run = true;
    },
    checkPcTurn: function() {
      if (this.currentPlayer === this.pcPlayer && !this.twoHumans && this.run == true) {
        return this.makePcMove();
      }
    },
    isFree: function(pos) {
      return this.board[pos] === "";
    },
    isPc: function(pos) {
      return this.board[pos] === this.player[this.pcPlayer];
    },
    isHu: function(pos) {
      return  this.board[pos] !== "" && this.board[pos] !== this.player[this.pcPlayer];
    },
    makePcMove: function(){
      if (this.isFree(4)) return this.setItem(4);


      if (this.isPc(0) && this.isPc(2) && this.isFree(1)) return this.setItem(1); // riempi centrali con angoli pieni
      if (this.isPc(0) && this.isPc(6) && this.isFree(3)) return this.setItem(3);
      if (this.isPc(2) && this.isPc(8) && this.isFree(5)) return this.setItem(5);
      if (this.isPc(6) && this.isPc(8) && this.isFree(7)) return this.setItem(7);

      if (this.isPc(4) && this.isPc(2) && this.isFree(6)) return this.setItem(6); //riempi croci
      if (this.isPc(4) && this.isPc(0) && this.isFree(8)) return this.setItem(8);
      if (this.isPc(4) && this.isPc(6) && this.isFree(2)) return this.setItem(2);
      if (this.isPc(4) && this.isPc(8) && this.isFree(0)) return this.setItem(0);

      if (this.isPc(0) && this.isPc(1) && this.isFree(2)) return this.setItem(2); //riempi doppie orizzontali
      if (this.isPc(1) && this.isPc(2) && this.isFree(0)) return this.setItem(0);
      if (this.isPc(3) && this.isPc(4) && this.isFree(5)) return this.setItem(5);
      if (this.isPc(4) && this.isPc(5) && this.isFree(3)) return this.setItem(3);
      if (this.isPc(6) && this.isPc(7) && this.isFree(8)) return this.setItem(8);
      if (this.isPc(7) && this.isPc(8) && this.isFree(6)) return this.setItem(6);

      if (this.isPc(0) && this.isPc(3) && this.isFree(6)) return this.setItem(6); //riempi doppie verticali
      if (this.isPc(3) && this.isPc(6) && this.isFree(0)) return this.setItem(0);
      if (this.isPc(1) && this.isPc(4) && this.isFree(7)) return this.setItem(7);
      if (this.isPc(4) && this.isPc(7) && this.isFree(1)) return this.setItem(1);
      if (this.isPc(2) && this.isPc(5) && this.isFree(8)) return this.setItem(8);
      if (this.isPc(5) && this.isPc(8) && this.isFree(2)) return this.setItem(2);

      if (this.isHu(4) && this.isHu(2) && this.isFree(6)) return this.setItem(6); //blocco croci
      if (this.isHu(4) && this.isHu(0) && this.isFree(8)) return this.setItem(8);
      if (this.isHu(4) && this.isHu(6) && this.isFree(2)) return this.setItem(2);
      if (this.isHu(4) && this.isHu(8) && this.isFree(0)) return this.setItem(0);

      if (this.isHu(0) && this.isHu(2) && this.isFree(1)) return this.setItem(1); // blocco centrale con angoli pieni
      if (this.isHu(0) && this.isHu(6) && this.isFree(3)) return this.setItem(3);
      if (this.isHu(2) && this.isHu(8) && this.isFree(5)) return this.setItem(5);
      if (this.isHu(6) && this.isHu(8) && this.isFree(7)) return this.setItem(7);

      if (this.isHu(0) && this.isHu(1) && this.isFree(2)) return this.setItem(2); //blocco doppie orizzontali
      if (this.isHu(1) && this.isHu(2) && this.isFree(0)) return this.setItem(0);
      if (this.isHu(3) && this.isHu(4) && this.isFree(5)) return this.setItem(5);
      if (this.isHu(4) && this.isHu(5) && this.isFree(3)) return this.setItem(3);
      if (this.isHu(6) && this.isHu(7) && this.isFree(8)) return this.setItem(8);
      if (this.isHu(7) && this.isHu(8) && this.isFree(6)) return this.setItem(6);

      if (this.isHu(0) && this.isHu(3) && this.isFree(6)) return this.setItem(6); //blocco doppie verticali
      if (this.isHu(3) && this.isHu(6) && this.isFree(0)) return this.setItem(0);
      if (this.isHu(1) && this.isHu(4) && this.isFree(7)) return this.setItem(7);
      if (this.isHu(4) && this.isHu(7) && this.isFree(1)) return this.setItem(1);
      if (this.isHu(2) && this.isHu(5) && this.isFree(8)) return this.setItem(8);
      if (this.isHu(5) && this.isHu(8) && this.isFree(2)) return this.setItem(2);

      if (this.isFree(1) || this.isFree(3) || this.isFree(5) || this.isFree(7)) {
        var temp = Math.floor(Math.random()*9+1);

        while (!this.isFree(temp)) {
          temp = Math.floor(Math.random()*9+1);

        }
        return this.setItem(temp);
      }

      if (this.isFree(0) || this.isFree(2) || this.isFree(6) || this.isFree(8)) {
        var temp = Math.floor(Math.random()*9);

        while (!this.isFree(temp)) {
          temp = Math.floor(Math.random()*9);

        }
        return this.setItem(temp);
      }

    },
    setItem: function(index) {
      if (this.board[index] === "" && !this.haveWinner) {
        Vue.set(this.board, index, this.player[this.currentPlayer]);
        if(!this.checkWin(this.board, this.player[this.currentPlayer])) {
          if (this.board.indexOf("") == "-1") {
            this.draw = true;
          } else {
            this.switchPlayer();
          }
        } else {
          this.haveWinner = true;
        }
      }
    },
    switchPlayer: function() {
      if (this.currentPlayer === 1) return this.currentPlayer = 2;
      if (this.currentPlayer === 2) return this.currentPlayer = 1;
    },
    checkWin: function(board,player) {
      var stat = board.map(function(x,i) {
        if (x === player) return i;
      }, this);
      for (combo of this.winCombo) {
        if (stat.indexOf(combo[0]) !== -1 && stat.indexOf(combo[1]) !== -1 && stat.indexOf(combo[2]) !== -1) return true;
      }
      return false;
    }
  }
});
