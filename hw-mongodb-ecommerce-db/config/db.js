import { connect } from "mongoose";

const db = async () => {
  try {
    const { connection } = await connect(process.env.MONGODB_URI);
    console.log(`Database connection: ${connection.host}`)
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

export default db;