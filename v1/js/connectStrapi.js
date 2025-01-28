import * as wayfinder from './wayFinder.js'

const loadingOverlay = document.querySelector('#loadingOverlay');
const apiUrl = 'http://134.102.201.28:1337/api/wayfinding-routes'

const hideLoadingOverlay = () => {
    loadingOverlay.style.display = 'none';
}

export const initialiseStudy = async (participantData, id) => {
    console.log("Initialising study.")
    if(id === undefined) {
        await axios.post(apiUrl, participantData)
            .then( response =>{
                console.log('No participant ID existing. Creating..')
                //console.log('response.data:', response.data)
                //console.log('response.data.data:', response.data.data)
                //console.log('response.data.data.id:', response.data.data.id)

                //setupParticipant(response.data.data);
                wayfinder.setParticipantID(response.data.data.id)
                hideLoadingOverlay()
            })
            .catch( error => {
                if (error.response){
                    console.log('error:', error.response)
                }
                else if (error.request){
                    console.log('error:', error.request)
                }
                else if (error.message){
                    console.log('error:', error.message)
                }
                else {
                    console.log('error:', error)
                }
            })
    } else {
        axios.put(apiUrl+ id, participantData)
            .then(response => {
                console.log('response.data:', response.data)
                console.log('response.data.data:', response.data.data)
                console.log('response.data.data.id:', response.data.data.id)
            })
            .catch( error => {
                console.log('error:', error)
            })
    }
}


export const updateWayfindingData = (wayfindingData, id) => {
    console.log("Updating Wayfinding Data")
    if (id === undefined) {
        alert("No Participant ID - What happened?!")
    } else {
        axios.put(apiUrl + '/' + id, wayfindingData)
            .then( response => {
                console.log('response.data:', response.data)
                console.log('response.data.data:', response.data.data)
                console.log('response.data.data.id:', response.data.data.id)
            } )
            .catch( error => {
                console.err('error:', error)
            })
    }
}

/*const setupParticipant = (data) => {
    console.log('Creating new participant data.')
    //wayfinder.wayfindingData = data
    console.log('Setting Participant ID: ', data.id)
    wayfinder.setParticipantID(data.id)// = data.id
    //console.log('Wayfinding Data: ', wayfinder.getWayfindingData())
    hideLoadingOverlay()
}*/