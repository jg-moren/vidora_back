import db from "../db"
import {Test} from "../../models/Test"
class TestRepository{
    static async select():Promise<Test>
    {

        const m:Test = {
                msg:"Hello World!!!"
        };
        return m;
    }
}
export default TestRepository