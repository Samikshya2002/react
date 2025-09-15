export function createConnection(serverUrl, roomId){
    return{
        connect(){
            console.log('Connecting to '+ roomId);
        },
        disconnect(){
            console.log('Disconnected')
        }
    }
}