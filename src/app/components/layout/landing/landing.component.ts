import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ResiService } from '../../../services/resi.service';

@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [
        CommonModule,
        NavbarComponent,
        DialogModule,
        ProgressSpinnerModule
    ],
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.scss'
})
export class LandingComponent {

    ShowLoading = false;

    constructor(
        private _resiService: ResiService
    ) {
        this._resiService
            .ShowLoading$
            .subscribe((result) => {
                this.ShowLoading = result;
            })
    }
}
