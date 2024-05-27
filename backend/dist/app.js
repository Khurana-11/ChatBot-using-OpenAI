import express from "express";
const app = express();
import { config } from "dotenv";
config();
//middlewares
app.use(express.json());
//listeners
app.listen(3000, () => {
    console.log("Server Open");
});
export default app;
//# sourceMappingURL=app.js.map