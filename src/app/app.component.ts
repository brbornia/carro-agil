import { Component } from '@angular/core';
import {AuthConfig, OAuthService} from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';

const authConfig: AuthConfig = {
  issuer: 'https://cognito-idp.us-west-2.amazonaws.com/us-west-2_Seg2U3Htb',
  redirectUri: window.location.origin + '',
  clientId: '5992cmk32lntem9urk254f9htp',
  scope: 'openid profile email',
  showDebugInformation: true,
  responseType: 'token',
  oidc: true,
  strictDiscoveryDocumentValidation: false,
  disableAtHashCheck: true // at_hash isn't required for authentication code flow
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carro-agil';

  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocument().then((doc) => {
      this.oauthService.tryLogin();
      // tslint:disable-next-line:no-console
      console.debug('discovery succeeded', doc);
    });

    // this.oauthService.initImplicitFlow();
  }

  get givenName() {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) {
      return null;
    }
    console.debug('claims', claims);
    const nameKey = 'name';
    return claims[nameKey];
  }

  login() {
    this.oauthService.initImplicitFlow();
    // this.oauthService.tryLogin();
  }

}
