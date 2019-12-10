import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { SectionsModule } from './sections/sections.module';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './pages/examples.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderComponent } from './pages/header/header.component';
import { NgChatModule } from 'ng-chat';
 
import { ToastrModule } from 'ngx-toastr';
import { PresentationModule } from './presentation/presentation.module';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { AddExperienceFormComponent } from './pages/add-experience-form/add-experience-form.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ChatComponent } from './chat/chat.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HeaderComponent,
        ChatComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        PresentationModule,
        SectionsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        ComponentsModule,
        ExamplesModule,
        AngularFontAwesomeModule,
        NgChatModule,
        HttpClientModule,

    ],
    providers: [
    ],
    bootstrap: [AppComponent],
    

})
export class AppModule { }
