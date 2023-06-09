import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
const projects = require('./projects.json');
import fs from 'fs';
import path from 'path';

const myValidationResult = validationResult.withDefaults({
    formatter: (error) => {
        return {
            errorMsg: error.msg,
        };
    },
});

const GetProjectProprieties = (req: Request, res: Response) => {
    return res.status(200).json({
        error: false,
        projects: projects,
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
