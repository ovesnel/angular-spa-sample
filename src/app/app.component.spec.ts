// Copyright 2018 Ping Identity
//
// Licensed under the MIT License (the "License"); you may not use this file
// except in compliance with the License.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { MetadataComponent } from './metadata/metadata.component';
import { CallbackComponent } from './callback/callback.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { APP_BASE_HREF } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IntroComponent } from './intro/intro.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthorizationService } from './authorization.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        MatCardModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatToolbarModule,
        NoopAnimationsModule
      ],
      declarations: [ AppComponent, MetadataComponent, CallbackComponent, DashboardComponent, IntroComponent, AuthenticationComponent],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        AuthorizationService
      ]
    }).compileComponents();

  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
