import { Component, OnDestroy, OnInit } from '@angular/core';
import { LandingComponent } from "../../components/layout/landing/landing.component";
import { Subject, takeUntil } from 'rxjs';
import { BlogService } from '../../services/blog.service';
import { ResiService } from '../../services/resi.service';

@Component({
    selector: 'app-beranda',
    standalone: true,
    imports: [LandingComponent],
    templateUrl: './beranda.component.html',
    styleUrl: './beranda.component.scss'
})
export class BerandaComponent implements OnInit, OnDestroy {

    Destroy$ = new Subject();

    constructor(
        private _resiService: ResiService
    ) { }

    ngOnInit(): void {
        this.getAllKurir();
    }

    ngOnDestroy(): void {
        this.Destroy$.next(0);
        this.Destroy$.complete();
    }

    private getAllKurir() {
        this._resiService
            .getAllCouriers()
            .pipe(takeUntil(this.Destroy$))
            .subscribe((result) => {
                console.log(result);
            })
    }
}
