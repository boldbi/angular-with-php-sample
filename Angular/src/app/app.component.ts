import { Component } from '@angular/core';
import { appService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

  export class AppComponent {

    //PHP application would be run on https://localhost:5001;http://localhost:5000, which needs to be set as `apiHost`
    public apiHost="http://localhost:8080";
  
    //Url of the Authorization action in PHP application
    public authorizationUrl= "/authorizeserver.php";
    
    //Url of the GetDetails ation in PHP application
    public getEmbedConfigUrl= "/getData.php";

    public embedConfig: any;
      
    public dashboards: any;
  
    public baseUrl: any;
  
    public dashboardServerApiUrl!: string;
    
    constructor(private _app: appService) {
    }

  ngOnInit() {

  }
}