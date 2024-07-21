import {Client} from 'pg'
const connectionString="postgresql://Vansh17555555:kpP5xutT1mNF@ep-fancy-rain-a5ag2ao9.us-east-2.aws.neon.tech/secureflow?sslmode=require"

const client =new Client({
    connectionString: connectionString
})
client.connect()
export default client