import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IEstado } from 'app/shared/model/estado.model';

type EntityResponseType = HttpResponse<IEstado>;
type EntityArrayResponseType = HttpResponse<IEstado[]>;

@Injectable({ providedIn: 'root' })
export class EstadoService {
    private resourceUrl = SERVER_API_URL + 'api/estados';

    constructor(private http: HttpClient) {}

    create(estado: IEstado): Observable<EntityResponseType> {
        return this.http.post<IEstado>(this.resourceUrl, estado, { observe: 'response' });
    }

    update(estado: IEstado): Observable<EntityResponseType> {
        return this.http.put<IEstado>(this.resourceUrl, estado, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IEstado>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IEstado[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
