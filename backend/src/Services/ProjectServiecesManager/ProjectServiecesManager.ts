import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { MongoClient, ServerApiVersion } from 'mongodb';
import fs from 'fs';
import path from 'path';
require('dotenv').config(); // this loads env vars

const myValidationResult = validationResult.withDefaults({
    formatter: (error) => {
        return {
            errorMsg: error.msg,
        };
    },
});

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(`${process.env.URI}`, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

const GetProjectProprieties = async (req: Request, res: Response) => {
    let dbrRes;
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        dbrRes = await client.db('portofolioDB').collection('projects').find().toArray();
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }

    return res.status(200).json({
        error: false,
        projects: dbrRes,
    });
};

const GetProjectLogo = (req: Request, res: Response) => {
    const errors = myValidationResult(req);
    if (!errors.isEmpty()) {
        return res.status(200).json({ error: true, errors: errors.array() });
    }

    return fs.readFile(path.join(__dirname, `../../projects_images/${req.params.project_name}_Logo.png`), (err, image) => {
        if (err) {
            console.log(err);
            return res.status(200).json({ error: true, errors: err });
        }

        res.writeHead(200, {
            'Content-Type': 'image/png',
        });

        res.end(image);
    });
};

export default {
    GetProjectProprieties,
    GetProjectLogo,
};
