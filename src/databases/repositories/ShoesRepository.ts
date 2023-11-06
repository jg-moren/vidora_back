import db from "../db"
import { Shoes } from "../../models/Shoes"
class ShoesRepository{
    static async select():Promise<Shoes[]>
    {

        const res:Shoes[] = [
            {
                nome:"tenis 1",
                marca:"nike",
                preco:100.10,
            },
            {
                nome:"tenis 2",
                marca:"nike",
                preco:100.10,
            },            {
                nome:"tenis 1",
                marca:"adidas",
                preco:100.10,
            },            {
                nome:"tenis 2",
                marca:"adidas",
                preco:100.10,
            }
        ];
        return res;
    }
}
export default ShoesRepository