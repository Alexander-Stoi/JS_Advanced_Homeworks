/* Olympic Games is an application that is meant to create a simulation of a real-life event.

Requirements
There should be class OlympicGames that has properties and methods:

Location
Number of sports games
List of countries that will contest
Duration (Date from and to)
Number of people that will contest
List of sports
ChangeSportsList - a method that will change the list of sports that should be.
ChangeDuration - method that will change the duration of the games with properties from and to.
ChangeNumberOfSportsGames, ChangeListOfCountries, and ChangeNumberOfPeople - each of these methods should change the datа regardless of the number of games that might be included or excluded, also with countries that might contest and the number of people as well.
There should be a class Country that has properties (create get/set for each of the properties) and method:

Name
Total number of people that will be sent to contest for any sports
Number of medals that the country already has
Medal rank - sum of all medals
addMedals - a method that should add the number of medals that was achieved to the number of medals that the country already has. Also if the medal is GOLD then you should add +2 to the medal rank, if it's SILVER then add +1 and 0.5 in case the medal is BRONZE.
There should be class Sport that has properties and method:

Name
Rating
Description - properties that will represent the way that the sport is played
Type of sport - individual or team
Number of games
Winner - a method that expects two or more countries (in order from the first place till the last place). If the sport is individual and the number of games is 1, you should take the first three countries from the list and add medal for them (2 (first place), 1 (second place), 0.5 (last place) rank of medal) else you should throw simple Error. In case the sport type is a team and the number of games is 2, you should take the first three countries from the list and add medal for them (2 (first place), 1 (second place), 0.5 (last place) rank of medal) else you should throw simple Error.
Extra requirements
Separate Individual and Team sports as classes that will inherit from Sport and remove the method Winner in the Sport class
In TeamSports class you should keep a history of all matches that were played for that sport (EX. Sport is Handball and Macedonia won against Denmark with 60 - 50 (total numbers of goals from the two matches) also Macedonia won against Spain 40 - 38 and Spain won against Denmark with 39 - 38...The first place goes to Macedonia, then Spain, then Denmark (do not limit yourself to 3 teams (countries))). The format of all results should be the first country name (total result) - second country name (total result). Add method winner that will calculate and add medals.
In IndividualSports class you should as well keep a history of all matches with the names of all countries and their result. The format of the match should be the name of the country (total result). Add method winner that will calculate and add medals (bare in mind the history of all matches should not be in order by countries result (let say the sport is swimming 50m butterfly M - and the results are England (5), Macedonia (1), USA (2), Serbia (4), Italy (3)...We can see that the result of the match are not in order so you need to pick the one that has the lowest rank, the second lowest rank, and the third lowest rank) and to that countries, you should add medals).*/

class OlympicGames {
    constructor(location, numberOfSportsGames, listOfCountries, dateFrom, dateTo, numberOfPeople, listOfSports) {
        this.location = location;
        this.numberOfSportsGames = numberOfSportsGames;
        this.listOfCountries = listOfCountries;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.duration = this.dateTo - this.dateFrom;
        this.numberOfPeople = numberOfPeople;
        this.listOfSports = listOfSports;
    }

    changeSportList = (sportList) => this.listOfSports = sportList;

    changeDuration = (from, to) => this.duration = from - to;

    changeNumberOfSportsGames = num => this.numberOfSportsGames = num;

    changeListOfCountries = list => this.listOfCountries = list;

    changeNumberOfPeople = num => this.numberOfPeople = num;
}


class Country {
    constructor(name, totalNumOfPeople, numOfMedalsTheCountryHave, medalRank) {
        this.name = name;
        this.totalNumOfPeople = totalNumOfPeople;
        this.numOfMedalsTheCountryHave = numOfMedalsTheCountryHave;
        this.medalRank = medalRank;
    }

    set name(name) {
        console.log(`We are setting the name. Please wait...`)
        if (name === undefined || name === "" || typeof (name) !== `string`)
            throw new Error(`Wrong name input`);
        else this._name = name;
    }

    get() {
        console.log(`We are getting the name. Please wait...`);
        return this._name;
    }

    set totalNumOfPeople(numOfPeople) {
        console.log(`We are setting the number of People. Please wait...`)
        if (typeof (numOfPeople) !== `number`)
            throw new Error(`Wrong input of people`);
        else this._totalNumOfPeople = numOfPeople;
    }

    get() {
        console.log(`We are getting the number of People. Please wait...`)
        return this._totalNumOfPeople;
    }


    set numOfMedals(numberOfMedals) {
        console.log(`We are setting the number of medals. Please wait...`)
        if (typeof (numberOfMedals) !== `number`)
            throw new Error(`Wrong input of medals`);
        else this._numOfMedals = numberOfMedals;
    }

    get() {
        console.log(`We are getting the number of medals. Please wait...`)
        return this._numOfMedals;
    }




    static addMedals = (medal, num) => {
        let medalUpp = medal.toUpperCase();

        if (medalUpp === `GOLD`) {
            this.numOfMedalsTheCountryHave += num;
            this.medalRank += num * 2
            return
        }
        else if (medalUpp === `SILVER`) {
            this.numOfMedalsTheCountryHave += num;
            this.medalRank += num
            return
        }

        else if (medalUpp === `BRONZE`) {
            this.numOfMedalsTheCountryHave += num;
            this.medalRank += num / 2
            return
        }

        else
            console.log(`Wrong input of medals`);

    }
}


class Sport {
    constructor(name, rating, description, typeOfSport, NumOfGames) {
        this.name = name;
        this.rating = rating;
        this.description = description;
        this.typeOfSport = typeOfSport;
        this.NumOfGames = NumOfGames;
    }
    winner = countries => {

        if (countries.length < 3) {
            return new Error(`There must be 3 podium finishers`)
        }

        if (this.typeOfSport === `individual`) {
            if (this.NumOfGames === 1) {
                countries[0].addMedals(`gold`, 1);
                countries[1].addMedals(`silver`, 1);
                countries[2].addMedals(`bronze`, 1);
            }
            else
                return new Error(`Wrong number of games`)

        }

        if (this.NumOfGames === `team`) {

            if (this.NumOfGames === 2) {
                countries[0].addMedals(`gold`, 1);
                countries[1].addMedals(`silver`, 1);
                countries[2].addMedals(`bronze`, 1);
            }
            else
                return new Error(`Wrong number of games`)
        }

    }

}