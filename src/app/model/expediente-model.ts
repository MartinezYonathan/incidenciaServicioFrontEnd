import { Incidencia } from './incidencia-model';
import { Evidencia } from './evidencia-model';

export class Expediente {
    administrador: string;
    username: string;
    informe: string;
    folio: string;
    status:string;
    dateCreacion: string;
    incidencias: Incidencia[];
    nomIncidencia: string;
    evidencias: Evidencia[];
}