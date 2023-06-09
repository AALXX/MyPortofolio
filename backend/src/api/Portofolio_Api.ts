import http from 'http';
import express, { NextFunction } from 'express';
import fs from 'fs';

//* imports from route folder
import GetProjects from '../routes/GetProjects/GetProjects';
import * as schedule from 'node-schedule';

//* Configs
import config from '../config/config';
import logging from '../config/logging';
import axios from 'axios';
import path from 'path';
const NAMESPACE = 'Portofolio_Api';
const router = express();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

//* Rules of Api
router.use((req: any, res: any, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Acces-Control-Allow-Methods', 'GET POST PATCH DELETE PUT');
        return res.status(200).json({});
    }
    next();
});

//* Routes
router.use('/api/get-projects/', GetProjects);

//* Error Handleling
router.use((req: any, res: any, next: NextFunction) => {
    const error = new Error('not found');

    return res.status(404).json({
        message: error.message,
    });
});

// get repo data
const getRepoData = () => {
    fs.readFile(path.join(__dirname, `../projects.json`), 'utf8', async (err, data) => {
        if (err) {
            return console.log(`Error reading file from disk: ${err}`);
        }
        // parse JSON string to JSON object
        const projects = JSON.parse(data);

        for (let index = 0; index < Object.keys(projects).length; index++) {
            const projectData = await axios.get(`https://api.github.com/repos/AALXX/${projects[index].repoName}`);
            projects[index].language = projectData.data.language;
            projects[index].lastupdate = projectData.data.pushed_at;
        }

        return fs.writeFileSync(path.join(__dirname, `../projects.json`), JSON.stringify(projects));
    });
};

getRepoData();

schedule.scheduleJob('25 12 * * 3', () => {
    getRepoData();
});

//* Create The Api
const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () => {
    logging.info(NAMESPACE, `Api is runing on: ${config.server.hostname}:${config.server.port}`);
});