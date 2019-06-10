var readline = require('readline-sync');
const fileStream = require('fs')
var ref = require('util')
var que = require('../DsUtility/Queue')
var algo = require("../AlgoUtility/algoutility")
module.exports = {

    

    deckOfCards() {

        var suit = []
        suit = ["Clubs", "Diamonds", "Hearts", "Spades"]

        var rank = []
        rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]

        var n = suit.length * rank.length;
        var deck = [];

        for (let i = 0; i < suit.length; i++) {

            for (let j = 0; j < rank.length; +j++) {
                let temp = "";
                deck.push(temp + rank[j] + "  " + suit[i]);
            }
        }
        for (let i = 0; i < n; i++) 
        {
            var r = parseInt((Math.random() * deck.length));

            var temp = deck[i];
            deck[i] = deck[r];
            deck[r] = temp;
        }

        // print shuffled deck
        var arr = [[], [], [], []]
      
        for (var player = 0; player < 4; player++)
        {
            for (var card = 0; card < 9; card++) 
            {
                arr[player][card] = deck[card ]
               
            }
           
      }
        console.log(arr) 
        
    },

  
}