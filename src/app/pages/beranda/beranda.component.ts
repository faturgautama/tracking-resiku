import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { LandingComponent } from "../../components/layout/landing/landing.component";
import { Subject, takeUntil } from 'rxjs';
import { BlogService } from '../../services/blog.service';
import { ResiService } from '../../services/resi.service';
import { DropdownModule } from 'primeng/dropdown'
import { InputTextModule } from 'primeng/inputtext'
import { ButtonModule } from 'primeng/button'
import { ProgressBarModule } from 'primeng/progressbar'
import { TimelineModule } from 'primeng/timeline'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-beranda',
    standalone: true,
    imports: [
        CommonModule,
        LandingComponent,
        DropdownModule,
        InputTextModule,
        ButtonModule,
        ProgressBarModule,
        FormsModule,
        TimelineModule
    ],
    templateUrl: './beranda.component.html',
    styleUrl: './beranda.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class BerandaComponent implements OnInit, OnDestroy {

    Destroy$ = new Subject();

    KurirDatasource: any[] = [
        {
            "id": "65ef02254af932246846e213",
            "code": "anteraja",
            "name": "Anteraja"
        },
        {
            "id": "65ef02c94af932246846e214",
            "code": "ide",
            "name": "ID Express"
        },
        {
            "id": "65ef02df4af932246846e215",
            "code": "jne",
            "name": "Jalur Nugraha Ekakurir"
        },
        {
            "id": "65ef02f74af932246846e216",
            "code": "jnt",
            "name": "J&T Express"
        },
        {
            "id": "65ef03134af932246846e217",
            "code": "lex",
            "name": "Lazada Logistics"
        },
        {
            "id": "65ef03304af932246846e218",
            "code": "lion",
            "name": "Lion Parcel"
        },
        {
            "id": "65ef03584af932246846e219",
            "code": "ninja",
            "name": "Ninja Express"
        },
        {
            "id": "65ef03ab4af932246846e21a",
            "code": "oexpress",
            "name": "OExpress"
        },
        {
            "id": "65ef03c54af932246846e21b",
            "code": "pos",
            "name": "POS Indonesia"
        },
        {
            "id": "65ef03da4af932246846e21c",
            "code": "sap",
            "name": "SAP Express"
        },
        {
            "id": "65ef04004af932246846e21d",
            "code": "sicepat",
            "name": "Sicepat Express"
        },
        {
            "id": "65ef04144af932246846e21e",
            "code": "spx",
            "name": "Shopee Express"
        },
        {
            "id": "65ef04294af932246846e21f",
            "code": "wahana",
            "name": "Wahana Prestasi Logistik"
        }
    ];

    Result: any;

    Kurir: string = "";

    NoResi: string = "";

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
                if (result.status.code == 200) {
                    this.KurirDatasource = result.data;
                } else {
                    this.KurirDatasource = [
                        {
                            "id": "65ef02254af932246846e213",
                            "code": "anteraja",
                            "name": "Anteraja"
                        },
                        {
                            "id": "65ef02c94af932246846e214",
                            "code": "ide",
                            "name": "ID Express"
                        },
                        {
                            "id": "65ef02df4af932246846e215",
                            "code": "jne",
                            "name": "Jalur Nugraha Ekakurir"
                        },
                        {
                            "id": "65ef02f74af932246846e216",
                            "code": "jnt",
                            "name": "J&T Express"
                        },
                        {
                            "id": "65ef03134af932246846e217",
                            "code": "lex",
                            "name": "Lazada Logistics"
                        },
                        {
                            "id": "65ef03304af932246846e218",
                            "code": "lion",
                            "name": "Lion Parcel"
                        },
                        {
                            "id": "65ef03584af932246846e219",
                            "code": "ninja",
                            "name": "Ninja Express"
                        },
                        {
                            "id": "65ef03ab4af932246846e21a",
                            "code": "oexpress",
                            "name": "OExpress"
                        },
                        {
                            "id": "65ef03c54af932246846e21b",
                            "code": "pos",
                            "name": "POS Indonesia"
                        },
                        {
                            "id": "65ef03da4af932246846e21c",
                            "code": "sap",
                            "name": "SAP Express"
                        },
                        {
                            "id": "65ef04004af932246846e21d",
                            "code": "sicepat",
                            "name": "Sicepat Express"
                        },
                        {
                            "id": "65ef04144af932246846e21e",
                            "code": "spx",
                            "name": "Shopee Express"
                        },
                        {
                            "id": "65ef04294af932246846e21f",
                            "code": "wahana",
                            "name": "Wahana Prestasi Logistik"
                        }
                    ]
                }
            })
    }

    handleSearch() {
        this._resiService.ShowLoading$.next(true);

        setTimeout(() => {
            this._resiService.ShowLoading$.next(false);

            this.Result = {
                "tracking_number": this.NoResi,
                "courier_code": this.Kurir,
                "current_status": "Delivered",
                "last_updated": new Date(1694756524 * 1000),
                "histories": [
                    {
                        "status": "Delivered",
                        "description": "Paketmu telah sampai di tujuan & diterima oleh Fatur (YBS)",
                        "location": "",
                        "date": new Date(1694756524 * 1000)
                    },
                    {
                        "status": "Out For Delivery",
                        "description": "Paketmu diantar ke alamat penerima oleh kurir. Pastikan nomor penerima dapat dihubungi oleh kurir",
                        "location": "",
                        "date": new Date(1694741103 * 1000)
                    },
                    {
                        "status": "In Transit",
                        "description": "Paketmu sampai di Gudang Lion Parcel LOMBOK TENGAH, PRAYA, LOMBOK TENGAH",
                        "location": "LOMBOK TENGAH",
                        "date": new Date(1694740166 * 1000)
                    },
                    {
                        "status": "In Transit",
                        "description": "Paketmu telah diberangkatkan dengan truk dari Kota LOMBOK, AMPENAN TENGAH, AMPENAN, MATARAM",
                        "location": "LOMBOK",
                        "date": new Date(1694736463 * 1000)
                    },
                    {
                        "status": "In Transit",
                        "description": "Paketmu akan diberangkatkan dengan truk dari Kota LOMBOK, AMPENAN TENGAH, AMPENAN, MATARAM",
                        "location": "LOMBOK",
                        "date": new Date(1694736438 * 1000)
                    },
                    {
                        "status": "In Transit",
                        "description": "Paket telah disortir sesuai kota tujuan",
                        "location": "LOMBOK",
                        "date": new Date(1694700092 * 1000)
                    },
                    {
                        "status": "In Transit",
                        "description": "Paketmu sedang transit di Kota LOMBOK",
                        "location": "LOMBOK",
                        "date": new Date(1694672180 * 1000)
                    },
                    {
                        "status": "In Transit",
                        "description": "Paketmu akan diterbangkan dengan pesawat dari Kota JAKARTA, KEDOYA SELATAN, KEBON JERUK, JAKARTA BARAT ",
                        "location": "JAKARTA",
                        "date": new Date(1694557653 * 1000)
                    },
                    {
                        "status": "In Transit",
                        "description": "Paket telah disortir sesuai kota tujuan",
                        "location": "JAKARTA",
                        "date": new Date(1694551907 * 1000)
                    },
                    {
                        "status": "In Transit",
                        "description": "Paketmu sampai di Gudang Lion Parcel JAKARTA, KEDOYA SELATAN, KEBON JERUK, JAKARTA BARAT",
                        "location": "JAKARTA",
                        "date": new Date(1694530876 * 1000)
                    },
                    {
                        "status": "In Transit",
                        "description": "Paketmu sampai di Gudang Transit Lion Parcel TANGERANG, KELAPA DUA, TANGERANG",
                        "location": "TANGERANG",
                        "date": new Date(1694523291 * 1000)
                    },
                    {
                        "status": "Picked Up",
                        "description": "Paketmu akan diantar ke Gudang Lion Parcel TANGERANG, KELAPA DUA, KELAPA DUA, TANGERANG",
                        "location": "TANGERANG",
                        "date": new Date(1694522000 * 1000)
                    },
                    {
                        "status": "Info Received",
                        "description": "Paketmu telah diproses oleh Agen Lion Parcel TANGERANG, KELAPA DUA, KELAPA DUA, TANGERANG",
                        "location": "TANGERANG",
                        "date": new Date(1694510174 * 1000)
                    }
                ]
            };
        }, 2000);
    }
}
