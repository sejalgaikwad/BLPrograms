const assert = require('chai').assert;
const result = require('../Outility/DeckOfCard');
//const fs = require('fs');
//var data = fs.readFileSync("/home/admin1/Desktop/Programs/ObjectOrientedProgram/Stock.json");

//var obj = JSON.parse(data);       //convert JSON file into object


describe(' Testing Deckmof cards', function () {

    it("Checking card in Decks", function () {

        {
            var res=result.deckOfCards();
            assert.istrue(res == 52, 'is 52 card'); 
        }
    });

    it("Checking card in null or not", function () {

            {
                var res=result.deckOfCards();
                assert.isNotNull(res, 'it is not null'); 
            }
        });

  
   
});