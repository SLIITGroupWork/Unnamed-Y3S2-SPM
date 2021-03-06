import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { PrimeNgModule } from './prime-ng.module';;
import { MessageService } from 'primeng/api';
import { BaseApiService } from './services';
import { InternReportService } from './services/inter-report.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule,
        PrimeNgModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule,
        PrimeNgModule,
        HttpClientModule
    ],
    declarations: [

    ],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                MessageService,
                BaseApiService,
                InternReportService
            ]
        };
    }
}
