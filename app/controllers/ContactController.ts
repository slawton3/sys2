import pool from "../dbConnect";
import { Request, Response, NextFunction } from 'express'
import IContact from '../interfaces/contacts';

class ContactController {

    constructor () {};

    public async get(req: Request, res: Response): Promise<void> {
        console.log("TEST")
        try {
            console.log("TEST");
            const client = await pool.connect();

            const stmt: string = "SELECT contact_id, full_name, email, phone_number FROM contacts;";
            
            console.log(stmt);

            const { rows } = await client.query(stmt);

            console.log(rows);
            
            const data: IContact[] = rows;

            console.log(data);

            client.release();

            res.send(data);
        }
        catch(err) {
            console.log(err);
            res.status(400).send(err);
        }
    }
}

export default ContactController;

