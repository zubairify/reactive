
export default class TrainRestService {
    constructor() {
        this.trains = null;
        this.uri = "http://localhost:8880";
    }

    async getTrains() {
        return await fetch(this.uri+"/trains").then(response => {
            if(!response.ok) {
                this.handleResponseError(response);
            }
            return response.json();
        }).then(data => {
            return data;
        }).catch(error => {
            console.log(error.message);
        });
    }

    async getTrainByCode(tcode) {
        return await fetch(this.uri+"/train/"+tcode).then(response => {
            if(!response.ok) {
                this.handleResponseError(response);
            }
            return response.json();
        }).then(data => {
            return data;
        }).catch(error => {
            console.log(error.message); 
        });
    }

    async saveTrain(train) {
        return await fetch(this.uri+"/train", {
            method:"POST",
            mode:"cors",
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(train)
        }).then(response => {
            if(!response.ok) {
                this.handleResponseError(response);
            }
            return response.json();
        }).catch(error => {
            console.log(error.message); 
        });
    }

    async updateTrain(train) {
        return await fetch(this.uri+"/train", {
            method:"PUT",
            mode:"cors",
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(train)
        }).then(response => {
            if(!response.ok) {
                this.handleResponseError(response);
            }
            return response.json();
        }).catch(error => {
            console.log(error.message); 
        });
    }

    async deleteTrain(tcode) {
        return await fetch(this.uri+"/train/"+tcode, {
            method:"DELETE", 
            mode:"cors"
        }).then(response => {
            if(!response.ok) {
                this.handleResponseError(response);
            }
            return response.json();
        }).catch(error => {
            console.log(error.message); 
        });
    }
}