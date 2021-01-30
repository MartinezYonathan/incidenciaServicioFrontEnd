import { Incidencia } from './incidencia-model';
import { Evidencia } from './evidencia-model';

export class Expediente {
    adminname: string;
    username: string;
    informe: string;
    folio: string;
    incidencias: Incidencia[];
    evidencias: Evidencia[];
}