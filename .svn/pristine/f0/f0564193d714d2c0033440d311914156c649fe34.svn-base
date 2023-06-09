import express from 'express';

import ProjectServieces from '../../Services/ProjectServiecesManager/ProjectServiecesManager';


const router = express.Router();

router.get('/data', ProjectServieces.GetProjectProprieties);
router.get('/logo/:project_name', ProjectServieces.GetProjectLogo);


export = router;
