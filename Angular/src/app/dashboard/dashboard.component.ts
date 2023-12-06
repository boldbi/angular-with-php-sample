import { Component, OnInit } from '@angular/core';
import { Item } from '../app';
import { appService } from '../app.service';
import { AppComponent } from '../app.component';
import { BoldBI } from '@boldbi/boldbi-embedded-sdk';
import { DashboardService } from '../dashboard.service';
import { EMPTY, catchError } from 'rxjs';

// declare var BoldBI: any;
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    providers: [appService]
})

export class Dashboard implements OnInit {

    public dashboardsList!: Item[];
    result: any;
    dashboard: any;
    embedConfig: any;
    constructor(private _app: appService, private _appComponent: AppComponent, private dashboardService: DashboardService) {
    }

    ngOnInit() {       
        this._app.GetEmbedConfig(this._appComponent.apiHost + this._appComponent.getEmbedConfigUrl)
        .pipe(
            catchError(error => {
              console.log('Error in the embedConfig.json file');
              return EMPTY;
            })
          )
        .subscribe(data => {
            this._appComponent.embedConfig = <any>data;
            this.dashboardService.setEmbedConfig(this._appComponent.embedConfig);
            if (this.dashboardService.embedConfig.Environment == "enterprise" || this.dashboardService.embedConfig.Environment == "onpremise") {
                this._appComponent.baseUrl = this.dashboardService.embedConfig.ServerUrl + "/" + this.dashboardService.embedConfig.SiteIdentifier;
                this._appComponent.dashboardServerApiUrl = this.dashboardService.embedConfig.ServerUrl + "/api/" + this.dashboardService.embedConfig.SiteIdentifier;
            } else {
                this._appComponent.baseUrl = this.dashboardService.embedConfig.ServerUrl;
                this._appComponent.dashboardServerApiUrl = this.dashboardService.embedConfig.ServerUrl + "/api";
            }
            this.renderDashboard();
        })
    }

    renderDashboard() {
        this.dashboard= BoldBI.create({
            serverUrl: this._appComponent.baseUrl,
            dashboardId: this.dashboardService.embedConfig.DashboardId,
            embedContainerId: "dashboard",
            embedType: this.dashboardService.embedConfig.EmbedType,
            environment: this.dashboardService.embedConfig.Environment,
            mode: BoldBI.Mode.View,
            width:"100%",
            height:"100%",
            expirationTime:100000,
            authorizationServer: {
                url:this._appComponent.apiHost + this._appComponent.authorizationUrl
            }
        });

        this.dashboard.loadDashboard();        
    } 
}