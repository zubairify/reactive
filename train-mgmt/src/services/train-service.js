export default class TrainService {
    constructor() {
        this.trains = [
            {tcode:123, name:"Rajdhani Express", source:"Mumbai", destiny:"New Delhi"},
            {tcode:345, name:"Deccan Queen", source:"Pune", destiny:"Mumbai"},
            {tcode:567, name:"Chennai Express", source:"Pune", destiny:"Chennai"}
        ];
    }

    getTrains() {
        return this.trains;
    }

    getTrainByCode(tcode) {
        return this.trains.find(x => x.tcode === tcode);
    }

    saveTrain(train) {
        this.trains.push(train);
    }

    updateTrain(train) {
        var idx = this.trains.indexOf(this.trains.find(x => x.tcode === train.tcode));
        this.trains[idx] = train;
    }

    deleteTrain(tcode) {
        this.trains.splice(this.trains.indexOf(this.trains.find(x => x.tcode === tcode)), 1);
    }
}
