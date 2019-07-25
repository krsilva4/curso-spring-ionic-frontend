import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";
import { CepDTO } from "../../models/cep.dto ";

@Injectable()
export class CepService {

    constructor(public http: HttpClient) {
    }

    findAll(cep_num: string): Observable<CepDTO> {
        return this.http.get<CepDTO>(`${API_CONFIG.correioUrl}${cep_num}/json/`);

    }
}