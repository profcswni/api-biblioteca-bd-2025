import { createConnection, createPool} from 'mysql2'
const config = createPool({
    host: '127.0.0.1',
    user:'root',
    password:'',
    database:'Biblioteca',
    port: 3306,
    enableKeepAlive: true,
    keepAliveInitialDelay: true
})
export {config}