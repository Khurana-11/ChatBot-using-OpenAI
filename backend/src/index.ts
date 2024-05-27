import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";


//app.ts me sare routes and middlewares defined hai , so we are importing that and using app here app.listen
//connections and listeneres
const PORT = process.env.PORT || 5000;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log("Server Open & Connected To Database")
    );
  })
  .catch((err) => console.log(err));