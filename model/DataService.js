
class DataService {
    #list = [];
    constructor() {}
   
    getData(url, callback) {
        async function getData(url = "") {
            // Default options are marked with *
            const response = await fetch(url, {
                method: "GET",
                mode: "cors", 
                cache: "no-cache", 
                credentials: "same-origin", 
                headers: {
                    "Content-Type": "application/json",
                    
                },
                redirect: "follow", 
                referrerPolicy: "no-referrer", 
            });
            return response.json(); 
        }

        getData(url).then((data) => {
            console.log(data); 
            callback(data);
        });
    }
    postData(url, callback) {
        async function getData(url = "") {
            
            const response = await fetch(url, {
                method: "GET", 
                mode: "cors", 
                cache: "no-cache", 
                credentials: "same-origin", 
                headers: {
                    "Content-Type": "application/json",
                    
                },
                redirect: "follow", 
                referrerPolicy: "no-referrer", 
            });
            return response.json();
        }

        getData(url).then((data) => {
            console.log(data);
            callback(data);
        });
    }
    getAxiosData(url, callback){
        axios.get(url)
        .then(function (response) {
          // handle success
          //console.log(response);
          //console.log(response.data);
          //console.log(response.status);
          //console.log(response.statusText);
          //console.log(response.headers);
          //console.log(response.config);
          callback(response.data.adat)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });

    }
    postAxiosData(url, data, callback){
        axios.post(url, data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
}
export default DataService;
