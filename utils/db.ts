import mongoose, { mongo } from "mongoose";
interface Connection {codeConnection:number | null}
//flag
const connection:Connection = {codeConnection:null};

//funcion encarga de conectarse
 async function connect () {
    // si la el codigo de conexión es  igual a 1
    if(connection.codeConnection){
        console.log('already connected');
        return
    }
    // si hay la longitud de las conexiones es mayor a 0
    if(mongoose.connections.length > 0){
        // le daremmos el valor de la conexión numero 1
        connection.codeConnection = mongoose.connections[0].readyState;
        //si code conection es igual a 1
        if(connection.codeConnection ===1){
            console.log('use previous connection');
            return;
        }

        await mongoose.disconnect();
    }
    //de no cumplirse ninguna
    const db = await mongoose.connect(<string>process.env.MONGODB_URI);
    console.log('new connection');
    connection.codeConnection = db.connection.readyState;

    
}

async function disconnect() {
    if(connection.codeConnection === 1){
        if(process.env.NODE_ENV === 'production'){
            await mongoose.disconnect();
            connection.codeConnection = 0;
        }else{
            console.log('not disconnected');
            
        }
    }
}
const db = {connect, disconnect};

export default db;