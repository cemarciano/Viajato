import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiAlertService, JhiEventManager } from 'ng-jhipster';

import { CidadeService } from '../entities/cidade/cidade.service';

import { LoginModalService, Principal, Account } from 'app/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ICidade } from 'app/shared/model/cidade.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.css']
})
export class HomeComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;
    cidades: ICidade[];
    private jhiAlertService: JhiAlertService;

    constructor(
        private cidadeService: CidadeService,
        private principal: Principal,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager
    ) {}

    ngOnInit() {
        this.principal.identity().then(account => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();
        this.loadAll();
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', message => {
            this.principal.identity().then(account => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }

    //Get all cities
    loadAll() {
        this.cidadeService.query().subscribe(
            (res: HttpResponse<ICidade[]>) => {
                this.cidades = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
