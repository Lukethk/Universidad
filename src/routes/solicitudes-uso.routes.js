import { Router } from 'express';
import {
    createSolicitudUso,
    getSolicitudesUso,
    getSolicitudUsoById,
    updateEstadoSolicitud,
    devolverSolicitud
} from '../controllers/solicitudes-uso.controller.js';

const router = Router();

router.post('/solicitudes-uso', createSolicitudUso);

router.get('/solicitudes-uso', getSolicitudesUso);

router.get('/solicitudes-uso/:id', getSolicitudUsoById);

router.put('/solicitudes-uso/:id/estado', updateEstadoSolicitud);

router.post('/solicitudes-uso/:id/devolver', devolverSolicitud);

export default router;