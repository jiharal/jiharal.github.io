webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="More" tabIcon="more"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visimisi_visimisi__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__kontak_kontak__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dosen_dosen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pejabat_pejabat__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.onVisiMisi = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__visimisi_visimisi__["a" /* VisiPage */]);
    };
    AboutPage.prototype.onProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
    };
    AboutPage.prototype.onKontak = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__kontak_kontak__["a" /* KontakPage */]);
    };
    AboutPage.prototype.onDosen = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__dosen_dosen__["a" /* DosenPage */]);
    };
    AboutPage.prototype.onPejabat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pejabat_pejabat__["a" /* PejabatPage */]);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Tentang Akakom\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Profil Akakom\n    </ion-card-header>\n  \n    <ion-list>\n      <button ion-item (click)="onVisiMisi()">\n        <ion-icon name="star" item-start></ion-icon>\n        Visi & Misi\n      </button>\n  \n      <button ion-item (click)="onProfile()"> \n        <ion-icon name="home" item-start></ion-icon>\n        Profile STMIK Akakom\n      </button>\n  \n      <button ion-item (click)="onKontak()">\n        <ion-icon name="pin" item-start></ion-icon>\n        Kontak Kami\n      </button>\n  \n      <button ion-item (click)="onPejabat()">\n        <ion-icon name="people" item-start></ion-icon>\n        Pejabat di STMIK Akakom\n      </button>\n  \n      <button ion-item (click)="onDosen()">\n        <ion-icon name="contact" item-start></ion-icon>\n        Kontak Dosen STMIK Akakom\n      </button>\n  \n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VisiPage = (function () {
    function VisiPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    VisiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-visimisi',template:/*ion-inline-start:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/visimisi/visimisi.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Visi & Misi\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n            <h1>Visi & Misi</h1>\n        </ion-card-header>\n        <ion-card-content>\n            <b> V I S I</b>\n            <p align="justify">STMIK AKAKOM mempunyai visi untuk menjadi perguruan tinggi unggulan dalam bidang teknologi informasi yang bertumpu\n                pada nilai-nilai dan etika kehidupan yang baik, benar dan universal untuk mewujudkan peningkatan taraf hidup\n                bangsa.</p>\n            <b>M I S I</b>\n            <p align="justify">Adapun misi STMIK AKAKOM adalah melaksanakan Tridharma Perguruan Tinggi dalam bidang komputer dan teknologi informasi\n                yang berorientasi kepada perkembangan ilmu pengetahuan, teknologi dan seni.</p>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            <h1>Tujuan</h1>\n        </ion-card-header>\n        <ion-card-content>\n            <b> Tujuan yang ingin di capai STMIK Akakom Adalah</b>\n            <ol>\n                <li align="justify">Terselenggaranya sistem pendidikan yang tanggap terhadap perkembangan ilmu dan teknologi informasi dengan\n                    memadukan keunggulan akademik dan mutu profesi.</li>\n                <li align="justify">Terselenggaranya penelitian untuk menghasilkan temuan baru, rekayasa, dan kajian yang berguna bagi pemberdayaan\n                    teknologi informasi dan hidup bermasyarakat.</li>\n                <li align="justify">Pemasyarakatan teknologi informasi sebagai prasarana kehidupan modern bangsa Indonesia.</li>\n                <li align="justify">Terbentuknya sumberdaya manusia yang memiliki kompetensi akademis dan atau profesional, yang beriman, bertakwa,\n                    mandiri, kreatif, dan berkemampuan meningkatkan kualitasnya secara berkelanjutan.</li>\n                <li align="justify">Terwujudnya masyarakat modern yang berperan aktif dalam pembangunan nasional serta dalam membentuk masyarakat\n                    yang maju, adil dan sejahtera.</li>\n            </ol>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            <h1>Sasaran</h1>\n        </ion-card-header>\n        <ion-card-content>\n            <b> Untuk mencapai 5 tujuan tersebut, perlu ditetapkan sasaran-sasaran yang dapat diukur ketercapaiannya. Sasaran\n                yang dikelompokkan dalam 6 kategori:</b>\n            <ol>\n                <li align="justify">Sasaran untuk mencapai kualitas Tridharma yang unggul.</li>\n                <li align="justify">Sasaran untuk mencapai tujuan terselenggaranya sistem pendidikan yang tanggap terhadap perkembangan ilmu\n                    dan teknologi informasi dengan memadukan keunggulan akademik dan mutu profesi.</li>\n                <li align="justify">Sasaran untuk mencapai tujuan terselenggaranya penelitian untuk menghasilkan temuan baru, rekayasa, dan kajian\n                    yang berguna bagi pemberdayaan teknologi informasi dan hidup bermasyarakat.</li>\n                <li align="justify">Sasaran untuk mencapai tujuan pemasyarakatan teknologi informasi sebagai prasarana kehidupan modern bangsa\n                    Indonesia.</li>\n                <li align="justify">Sasaran untuk mencapai tujuan terbentuknya sumberdaya manusia yang memiliki kompetensi akademis dan atau\n                    profesional, yang beriman, bertakwa, mandiri, kreatif, dan berkemampuan meningkatkan kualitasnya secara\n                    berkelanjutan.</li>\n                <li align="justify">Sasaran untuk mencapai tujuan terwujudnya masyarakat modern yang berperan aktif dalam pembangunan nasional\n                    serta dalam membentuk masyarakat yang maju, adil dan sejahtera.</li>\n            </ol>\n        </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/visimisi/visimisi.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], VisiPage);
    return VisiPage;
}());

//# sourceMappingURL=visimisi.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilePage = (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/profile/profile.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n             Profile STMIK AKAKOM\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n            <h1>Profile STMIK Akakom</h1>\n        </ion-card-header>\n        <ion-card-content>\n            <p align="justify">Dalam abad ke-20 ini dunia banyak diwarnai dengan berbagai kemajuan secara menakjubkan yang telah diciptakan oleh umat manusia,\n            baik dibidang ilmu maupun teknologi. Menanggapi kondisi zaman seperti tersebut di atas, pada tanggal 30 Juni 1979 didirikan\n            sebuah yayasan dengan nama Yayasan Pendidikan Widya Bakti, yang bertujuan mengembangkan dan menyebarluaskan informatika dan\n            teknologi komputer di kalangan masyarakat indonesia melalui usaha pendidikan yang sistematis dan ilmiah. Yayasan tersebut\n            mengelola sebuah akademi yang bernama Akademi Aplikasi Komputer, disingkat AKAKOM.</p>\n            <br>\n            <p align="justify">Terhitung mulai 1 Maret 1983, Akademi Aplikasi Komputer(AKAKOM), diubah menjadi Akademi Komputer dan Informatika AKAKOM.\n            Selanjutnya terhitung mulai tanggal 2 Mei 1985, nama Akademi Komputer dan Informatika AKAKOM diubah dan dibakukan menjadi\n            Akademi Manajemen Informatika dan Komputer(AMIK)AKAKOM.</p>\n            <br>\n            <p align="justify">Agar lembaga tersebut mampu menghasilkan tenaga-tenaga profesional maupun akademik yang lebih berbobot dalam bidang informatika\n            dan komputer, maka sejak tanggal 8 Juni 1992, berdasarkan Surat Keputusan Direktorat Jendral Pendidikan Tinggi Departemen\n            Pendidikan dan Kebudayaan RI Nomor 262/DIKTI/Kep/1992, AMIK AKAKOM diubah bentuknya menjadi Sekolah Tinggi Manajemen Informatika\n            dan Komputer (STMIK) AKAKOM yang membuka program sarjana dan program diploma.</p>\n            <br>\n            <p align="justify">Saat ini program sarjana mempunyai program stusi Teknik Informatika dan Sistem Informasi dengan status akreditasi B dan pada\n            program diploma mempunyai 3 program studi yaitu Manajemen Informatika (status Akreditasi B), Teknik Komputer(status Akreditasi\n            B), dan Komputerisasi Akuntansi (status Akreditasi B).</p>\n        </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KontakPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KontakPage = (function () {
    function KontakPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    KontakPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kontak',template:/*ion-inline-start:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/kontak/kontak.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Hubungi Kami\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-card>\n<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9730216221337!2d110.4056863149747!3d-7.792680994384262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59e18b1c28d1%3A0xe2d750662f2edace!2sSTMIK+Akakom+Yogyakarta!5e0!3m2!1sid!2sid!4v1513100332493"\n    width="100%" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>\n  <ion-fab right top>\n    <button ion-fab>\n      <ion-icon name="pin"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-item>\n    <ion-icon name="home" item-start large></ion-icon>\n    <h2>Address</h2>\n    <p>Jl. Raya Janti No. 143, Karang Jambe, Banguntapan, Bantul, Daerah Istimewa Yogyakarta 55918</p>\n  </ion-item>\n\n  <ion-item>\n    <ion-icon name="call" item-left large ></ion-icon>\n    <h2>Telepon</h2>\n    <p> <a href="tel:(0274) 486664">(0274) 486664</a></p>\n  </ion-item>\n\n<ion-item>\n    <ion-icon name="call" item-left large></ion-icon>\n    <h2>Fax</h2>\n    <p>\n        <a href=" tel:(0274) 486438">(0274) 486438</a>\n    </p>\n</ion-item>\n\n<ion-item>\n    <ion-icon name="mail" item-left large></ion-icon>\n    <h2>Email</h2>\n    <p><a href="mailto:info@akakom.ac.id">info@akakom.ac.id</a></p>\n</ion-item>\n</ion-card>\n</ion-content>'/*ion-inline-end:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/kontak/kontak.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], KontakPage);
    return KontakPage;
}());

//# sourceMappingURL=kontak.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DosenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DosenPage = (function () {
    function DosenPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    DosenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dosen',template:/*ion-inline-start:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/dosen/dosen.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Kontak Dosen STMIK Akakom\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-searchbar></ion-searchbar>\n    <ion-item>\n        <ion-icon name="contact" item-left large></ion-icon>\n        <h2>A Budi Sugihardjo </h2>\n        <p>\n            <a href="mailto:abudisug@akakom.ac.id">abudisug@akakom.ac.id</a>\n        </p>\n    </ion-item>\n    <ion-item>\n        <ion-icon name="contact" item-left large></ion-icon>\n        <h2>Adi Kusjani </h2>\n        <p>\n            <a href="mailto:adikusja@akakom.ac.id">adikusja@akakom.ac.id</a>\n        </p>\n    </ion-item>\n    <ion-item>\n        <ion-icon name="contact" item-left large></ion-icon>\n        <h2>Pius Dian Widi Anggoro</h2>\n        <p>\n            <a href="mailto:piusanggoro@akakom.ac.id">piusanggoro@akakom.ac.id</a>\n        </p>\n    </ion-item>\n</ion-content>'/*ion-inline-end:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/dosen/dosen.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], DosenPage);
    return DosenPage;
}());

//# sourceMappingURL=dosen.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PejabatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PejabatPage = (function () {
    function PejabatPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PejabatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/pejabat/pejabat.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Pejabat di STMIK Akakom\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-searchbar></ion-searchbar>\n    <ion-list>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/img/cuk.jpg">\n            </ion-avatar>\n            <h2>Cuk Subiyantoro., S.Kom.,M.Kom</h2>\n            <h3>Ketua</h3>\n            <p><a href="mailto:cuks@akakom.ac.id">cuks@akakom.ac.id</a></p>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/pejabat/pejabat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], PejabatPage);
    return PejabatPage;
}());

//# sourceMappingURL=pejabat.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jurusan_jurusan__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cordova_cordova__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_browser_tab__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__infokampus_infokampus__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactPage = (function () {
    function ContactPage(navCtrl, browserTab) {
        this.navCtrl = navCtrl;
        this.browserTab = browserTab;
    }
    ContactPage.prototype.onJurusan = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__jurusan_jurusan__["a" /* JurusanPage */]);
    };
    ContactPage.prototype.onCordova = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cordova_cordova__["a" /* CordovaPage */]);
    };
    ContactPage.prototype.onTautan = function () {
        var _this = this;
        this.browserTab.isAvailable()
            .then(function (isAvailable) {
            if (isAvailable) {
                _this.browserTab.openUrl('https://siakad.akakom.ac.id/');
            }
            else {
                console.log("Siakad Akakom");
            }
        });
    };
    ContactPage.prototype.onInfokampus = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__infokampus_infokampus__["a" /* InfoPage */]);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Menu\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-grid>\n  <ion-row>\n    <ion-col col-4 (click)="onJurusan()">\n      <ion-icon name="trophy"></ion-icon>\n      <p>Jurusan</p>\n    </ion-col>\n    <ion-col col-4 (click)="onInfokampus()">\n      <ion-icon name="home"></ion-icon>\n      <p>Info Kampus</p>\n    </ion-col>\n    <ion-col col-4 (click)="onTautan()">\n      <ion-icon name="trophy"></ion-icon>\n      <p>Siakad Akakom</p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col (click)="onCordova()">\n      <p>Plugin Cordova</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_browser_tab__["a" /* BrowserTab */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JurusanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ti_ti__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__si_si__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tk_tk__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ka_ka__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mi_mi__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var JurusanPage = (function () {
    function JurusanPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    JurusanPage.prototype.onTI = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ti_ti__["a" /* TIPage */]);
    };
    JurusanPage.prototype.onSI = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__si_si__["a" /* SIPage */]);
    };
    JurusanPage.prototype.onTK = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tk_tk__["a" /* TKPage */]);
    };
    JurusanPage.prototype.onKA = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__ka_ka__["a" /* KAPage */]);
    };
    JurusanPage.prototype.onMI = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__mi_mi__["a" /* MIPage */]);
    };
    JurusanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jurusan',template:/*ion-inline-start:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/jurusan/jurusan.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Jurusan/ Program Studi\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-4 (click)="onTI()">\n                <ion-icon name="trophy"></ion-icon>\n                <p>Teknik Informatika</p>\n            </ion-col>\n            <ion-col col-4 (click)="onSI()">\n                <ion-icon name="home"></ion-icon>\n                <p>Sistem Informasi</p>\n            </ion-col>\n            <ion-col col-4 (click)="onTK()">\n                <ion-icon name="archive"></ion-icon>\n                <p>Teknik Komputer</p>\n            </ion-col>\n            <ion-col col-4 (click)="onKA()">\n                <ion-icon name="trophy"></ion-icon>\n                <p>Komputerisasi Akuntansi</p>\n            </ion-col>\n            <ion-col col-4 (click)="onMI()">\n                <ion-icon name="trophy"></ion-icon>\n                <p>Manajemen Informasi</p>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/jurusan/jurusan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], JurusanPage);
    return JurusanPage;
}());

//# sourceMappingURL=jurusan.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TIPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TIPage = (function () {
    function TIPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TIPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ti',template:/*ion-inline-start:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/ti/ti.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n              <b>Program Studi/Jurusan</b>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n            <p align="right">admin, Jum, 15-Agt-2017 07:37:33</p>\n            <h1><p align="center">TEKNIK INFORMATIKA (S1)</p></h1>\n        </ion-card-header>\n        <ion-card-content>\n            <b>1.1 Pendahuluan</b>\n            <p align="justify">Dalam situasi perekonomian saat ini, pemerintah Indonesia memerlukan upaya-upaya baru untuk mengembalikan kehidupan perekonomian yang lebih baik. Salah satu bentuk upaya yang sedang dilakukan adalah sedikit menggeser prioritas perekonomian nasional dari bentuk resource-base economy ke bentuk knowledge-base economy. Dengan pola pergeseran ini, peran IPTEK menjadi sangat penting untuk mendukung visi Pembangunan Jangka Panjang (RPJP) tahun 2005-2025 yaitu “Indonesia Yang Maju, Mandiri, dan Adil”. Sejalan dengan hal tersebut, banyak organisasi yang telah berkembang ke bentuk dynamic network. Dalam dynamic network organization, peranan Teknologi Informasi menjadi sangat penting.</p>\n            <br>\n            <p align="justify">Bidang teknologi informasi, telah merambah secara luas dalam berbagai bidang kehidupan seperti manajemen, teknik, kedokteran, psikologi, pendidikan hingga seni. Dari kombinasi tersebut telah dihasilkan produk-produk seperti otomatisasi sistem, desain produk, pembuatan musik, aplikasi mobile, yang semuanya telah memberikan kontribusi yang besar bagi kehidupan manusia.</p>\n            <br>\n            <p align="justify">Berdasarkan paparan diatas, diisyaratkan makin  dibutuhkannya sumber daya manusia bidang teknologi informasi. Selain itu juga menandai bahwa bidang teknologi informasi akan terus berkembang sesuai dengan perkembangan ilmu pengetahuan dan teknologi pada umumnya.</p>\n            <br>\n            <p align="justify">Program Studi Teknik Informatika (PSTI) merupakan salah satu cabang dari pohon ilmu Informatika dan Komputer, yang turut mengembangkan bidang ilmu teknologi informasi. Adapun penekanannya pada aspek penyimpanan, pengolahan, dan penyampaian informasi secara algoritmik dengan bantuan komputer. Tiga (3) paradigma yang digunakan adalah: paradigma teori, paradigma abstraksi, dan paradigma perancangan. Ketiga paradigma ini saling melengkapi dan kait-mengait antara satu dengan yang lain. Secara umum ketiga paradigma tersebut (teori, abstraksi, perancangan) merupakan prinsip dasar dari masing-masing bidang ilmu yang diwakili matematika, ilmu alam, teknik).</p>\n            <br>\n            <b>1.2 Sekilas Program Studi Teknik Informatika</b>\n            <p align="justify">Program Studi Teknik Informatika mulai diselenggarakan berdasarkan SK No. 300/DIKTI/Kep/1992. Saat ini Program Studi Teknik Informatika telah diakreditasi ‘B’ berdasarkan SK No. 028/BAN-PT/Ak-IX/S1/I/2006.</p>\n            <br>\n            <p align="justify">Minat untuk mengikuti pendidikan pada Program Studi Teknik Informatika sangat besar dan meningkat dari tahun ke tahun dan berasal dari semua propinsi di Indonesia. Hal ini dikarenakan kebutuhan alumni Program Studi Teknik Informatika   cukup tinggi karena hampir semua aspek membutuhkan teknologi informasi untuk berkembang.  Selain itu juga mengisyaratkan bahwa Program Studi Teknik Informatika  sudah dikenal dalam taraf nasional.</p>\n            <br>\n            <p align="justify">Jumlah alumni Program Studi Teknik Informatika  hingga saat ini mencapai sekitar 1000 mahasiswa, yang telah bekerja pada perbankan, perminyakan, pendidikan, kesehatan , dan bidang-bidang lain. Banyak mahasiswa yang telah bekerja sebelum lulus dari pendidikannya. Hal ini membuktikan bahwa ilmu yang diterima mahasiwa bisa digunakan kapan saja. Beberapa lapangan kerja alumni diantaranya Krakatau Steel, BRI, Pertamina, TOTAL, (SGM), Instansi Negeri (Kejaksaaan, Pemda, PTN), dan Perguruan Tinggi Swasta.</p>\n            <br>\n            <p align="justify">Kegiatan-kegiatan yang dilaksanakan oleh Program Studi Teknik Informatika  sangat beragam. Kegiatan tersebut dalam bentuk penelitian bersama dosen dan mahasiswa, partisipan / penyelenggara even  nasional maupun internasional  (seminar, workshop, kuliah umum), pelatihan teknologi informasi ke instansi/organisasi.</p>\n            <br>\n            <b>1.3 Visi, Misi, Tujuan, dan Sasaran serta Strategi Pencapaian</b>\n            <ol type="1">\n                <li><b> Jelaskan mekanisme penyusunan visi, misi, tujuan dan sasaran program studi, serta pihak-pihak yang dilibatkan.</b>\n                     <p align="justify">Dalam penyusunan Visi, Misi dan tujuan, Program Studi Teknik Informatika berpedoman kepada visi dan misi dari Institusi. Program studi mengadakan rapat pembahasan untuk menghasilkan draft visi, misi dan tujuan program studi berdasarkan visi, misi dan tujuan institusi.</p>\n                     <ol>\n                        <li>Hasil rapat disosialisasikan dalam bentuk edaran  ke seluruh civitas akademika, untuk mendapatkan masukan terhadap visi, misi dan tujuan program studi.</li>\n                        <li>Hasil dari masukan terhadap draft visi, misi dan tujuan dibahas kembali dalam rapat pleno untuk memutuskan visi, misi dan tujuan final program studi.</li>\n                        <li>Sosialisasi hasil akhir visi, misi dan tujuan program studi dalam bentuk   website program studi, dosen jurusan dan alumni, serta pertemuan dengan civitas akademika.</li>\n                    </ol>\n                </li>\n                <br>\n                <li><b> Visi</b></li>\n                <p align="justify">Jurusan Teknik Informatika sebagai pembentukan dan pengembangan sumber daya manusia yang mempunyai wawasan ICT (Information and Communication Technology) yang tinggi dalam bidang Rekayasa Perangkat Lunak (Mobile, Games & Jaringan) dan Sistem Cerdas/Komputasi.</p>\n                <li><b> Misi</b></li>\n                 <p align="justify">Mendidik Mahasiswa untuk siap produktif dan mampu mengembangan diri di dalam penguasaan ICT (Information and Communication Technology) khususnya pada bidang Rekayasa Perangkat Lunak (Mobile, Games & Jaringan) maupun bidang Sistem Cerdas/Komputasi, serta menerapakan dalam kehidupan bermasyarakat.</p>\n                <li><b> Tujuan</b></li>\n                 <p align="justify">Menghasilkan lulusan yang siap bekerja / produktif dalam dunia kerja baik secara tim maupun individu dalam penguasaan ICT (Information and Communication Technology) khususnya pada bidang Rekayasa Perangkat Lunak (Mobile, Games & Jaringan)) maupun bidang Sistem Cerdas/Komputasi dan dapat bekerjasama dalam tingkat lokal, nasional, regional maupun internasional.</p>\n            </ol>  \n            <br>\n            <b>1.4 Kompentensi</b><br>\n            <b>1.4.1 Kompentensi Umum</b>\n            <ol type="1">\n                <li>Mampu mengimplementasikan teknologi informasi secara kreatif dan inovatif di masyarakat.</li>\n                <li>Mampu mengembangkan diri untuk peningkatan wawasan dan keahlian</li>\n                <li>Mampu beradaptasi dan bekerjasama dalam team work.</li>\n                <li>Mampu  berkomunikasi aktif dalam bahasa internasional</li>\n                <li>Mampu menjunjung tinggi etika dan profesionalisme</li>\n             </ol>\n            <br>\n            <b>1.4.2 Kompentensi Khusus</b>\n            <p align="justify"> Mampu menganalisis, merancang, dan membangun perangkat lunak berbasis sistem Cerdas, Mobile, Games, Jaringan menggunakan teknik dan tools, beserta pendokumentasiannya</p>\n            <br>\n            <b>1.4.3 Gradasi Kompetensi</b> \n            <ol type="1">\n                <li>Kompetensi tahun 1</li>\n                <p align="justify">“Menguasai dasar pemrograman, Logika pemrograman & berpikir analitis”</p>\n                <li>Kompetensi tahun 2</li>\n                <p align="justify">“Memahami Metode Pengembangan Perangkat Lunak”</p>\n                <li>Kompetensi tahun 3</li>\n                <p align="justify">“Mampu Merancang Sistem Perangkat Lunak Sederhana”</p>\n                <li>Kompetensi tahun 4</li>\n                <p align="justify">“Mampu Mengimplementasikan Perangkat Lunak” (Cerdas, Mobile, Games dan Jaringan)"</p>\n            </ol>\n            <br>\n            <b>1.4.4 Usaha</b> \n            <p align="justify">Untuk mencapai kompetensi di atas, Program Studi Teknik Informatika  didukung oleh :</p>\n            <ol type="1">\n                <li>Tenaga pengajar 80% S2 dan S3 dan berkompeten dibidang teknologi informasi.</li>\n                <li><b>Kelas laboratorum (KL)</b> yang dikembangkan menggunakan pola pengajaran interaktif. Dalam kelas ini  mahasiswa akan mempraktekkan secara langsung teori atau konsep yang diajarkan, dengan bimbingan dosen pengampu dan menggunakan sarana yang sangat memadai. Pada tahun ini akan dikembangkan KL Administrasi dan Jaringan Komputer, Database dengan ORACLE, Mircosoft .Net.</li>\n                <li><b>Workshop</b>, sebagai salah satu mata kuliah dalam kurikulum yang memberikan menambah pengetahuan/wawasan mahasiswa terhadap perkembangan teknologi informasi.</li>\n                <li><b>Character Building</b>, merupakan sarana pembentukan karakter mahasiswa agar menjadi lulusan yang bertakwa, inovatif, dan mandiri.</li>\n                <li><b>Study Club</b>, kelompok studi yang digunakan sebagai sarana untuk mengembangkan bakat dan hobi mahasiswa dalam bidang teknologi informasi.</li>\n                <li>Pelatihan Bahasa Inggris (TOEFL)</li>\n            </ol>\n            <br>\n            <b>1.5 Kurikulum</b>\n            <p align="justify">Kurikulum podi Teknik Informatika disusun mengacu stantar kurikulum internasional ”Curricula 2005”  yang dipadukan dengan kebutuhan teknologi informasi baik dalam skala nasional maupun internasional  yang ditekankan pada real problem solution.</p> \n            <p align="justify">Silabi pada dasarnya ditinjau setiap tahun oleh pakar-pakar dalam bidang tertentu. Pengembangan perlu dilakukan untuk mengisi dan mengevaluasi materi-materi teknologi informasi yang sangat dinamis. Sedangkan peninjauan kurikulum dilaksanakan sekitar  4-5 tahun.</p>\n            <br>\n            <b>1.6 Syarat Kelulusan</b>\n            <p align="justify">Untuk menyelesaikan pendidikan sarjana pada program studi SI-S1, mahasiswa diwajibkan telah mengumpulkan sekurang-kurangnya 144 sks mata kuliah yang meliputi mata kuliah wajib sebanyak 100 sks (termasuk Tugas Akhir dalam bentuk skripsi atau kerja praktek dan workshop) dan sisanya adalah mata kuliah pilihan minimal sebanyak 44 sks</p>\n            <br>\n            <p align="justify">Mata Kuliah Wajib</p>\n            <p align="justify">Mata kuliah wajib merupakan mata kuliah yang wajib diambil oleh mahasiswa. Mata kuliah wajib terdiri atas mata kuliah wajib Institusi atau wajib STMIK (tanda AK) dan wajib program studi  dengan diberi tanda W pada status yang ada di kurikulum program studi Teknik Informatika. Persyaratan mata kuliah wajib sebesar 105 sks ini dapat dipenuhi dengan mengambil semua mata kuliah wajib institusi dan mata kuliah wajib STMIK  dan selebihnya diambil dari mata kuliah wajib program studi.  Semua mata kuliah wajib dan praktikum nilai minimum adalah C (nilai D berarti tidak lulus).</p>\n            <br>\n            <p align="justify">Mata Kuliah Pilihan</p>\n            <p align="justify">Pada dasarnya mahasiswa bebas memilih mata kuliah pilihan yang tersedia (lihat tabel mata kuliah pilihan). Namun demikian, agar mahasiswa memiliki suatu kesatuan kemampuan yang memadai, maka dalam memilih mata kuliah ini mahasiswa berkonsultasi dan memperhatikan saran-saran dosen pembimbing akademik. Jika mahasiswa ingin mengambil mata kuliah di luar tabel mata kuliah pilihan maka yang bersangkutan harus memberi tahu dan berkonsultasi dengan dosen pembimbing akademik.      Karena suatu alasan, mata kuliah pilihan dapat berubah distribusi semesternya dari semester ganjil ke semester genap atau sebaliknya.</p>   \n            <b>1.7 Skripsi</b>\n            <p align="justify">Skripsi merupakan salah tugas akhir dari mahasiswa Strata-1 yang merupakan mata kuliah wajib yang harus di ambil.</p>\n            <b>Tujuan</b>\n            <ol type="1">\n                <li>Melatih mahasiswa untuk dapat berfikir secara logis dan sistematis</li>\n                <li>Melatih kemandirian sekaligus team work dalam menyelesaikan permasalahan</li>\n                <li>Melatih kemampuan dalam penggunaan produk-produk / tools dalam bidang Teknologi Informasi</li>\n                <li>Melatih kemampuan untuk menulis karya ilmiah</li>\n                <li>Mempersiapkan mahasiswa untuk hidup  bermasyarakat, melanjutkan studi, atau memasuki dunia kerja.</li>\n             </ol>\n            <br>\n            <b>Syarat pengambilan tugas akhir</b>\n            <ol type="1">\n                <li>Telah menempuh 120 sks dengan IPK ≥ 2.00 yang terbaik</li>\n                <li>Telah menempuh mata kuliah penunjang topik tugas akhir</li>\n                <li>Mencantumkan skripsi di KRS dan mendaftarkan ke bagian Administrasi Akademik.</li>\n            </ol>\n            <br>\n            <b>Pelaksanaan Skripsi</b>\n            <p align="justify">Pada dasarnya, pelaksanaan skripsi mahasiswa dibawah bimbingan dosen pembimbing tugas akhir yang sesuai dengan topik yang diambil tugas akhirnya. Mahasiswa memilih sendiri dosen pembimbing tugas akhirnya, saat mendaftarkan diri di bagian Administrasi Akademik.</p>\n            <p align="justify">Mahasiswa wajib membuat proposal skripsi dibawah bimbingan dosen pembimbing, jika dosen pembimbing telah menyetujui, proposal skripsi di kumpulkan pada bagian Administrasi Akademik dan akan dibuatkan jadwal seminar dengan diuji oleh 2 orang dosen sebagai narasumber (narasumber tersebut juga yang akan menguji pada saat ujian pendadaran), jika proposal tersebut LOLOS maka dapat diteruskan sebagai skripsi dan jika TIDAK LOLOS mahasiswa tersebut diwajibkan mengulang dengan telah memperbaiki proposal tersebut.</p>\n\n        </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/ti/ti.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], TIPage);
    return TIPage;
}());

//# sourceMappingURL=ti.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SIPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SIPage = (function () {
    function SIPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SIPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-si',template:/*ion-inline-start:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/si/si.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n             <b>Program Studi/Jurusan</b>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n            <p align="right">admin, Jum, 15-Agt-2017 07:37:33</p>\n            <h1><p align="center">SISTEM INFORMASI (S1)</p></h1>\n        </ion-card-header>\n        <ion-card-content>\n            <b>1.1 Pendahuluan</b>\n            <p align="justify">Dewasa ini, orang disibukkan dengan banyaknya teknologi baru yang muncul di sekitarnya. Kadang, bahkan kita tidak tahu apa sebenarnya yang benar-benar kita perlukan. Orang berlomba-lomba membeli peralatan teknologi semisal handphone tercanggih, laptop terbaru dan yang lainnya. Sedangkan perusahaan berlomba-lomba membeli peralatan kantor yang dianggap serba terbaru, tercanggih, terdepan. Dalam hal ini, orang menjadi lupa dengan manfaat sesungguhnya dari peralatan-peralatan tersebut. Untuk itu, kini teknologi informasi menjadi sangat penting. Orang, perusahaan berusaha untuk secepatnya memperoleh informasi. Di era informasi yang begitu cepat tersebut, kita membutuhkan tools yang baik yang dapat digunakan untuk membantu mempercepat informasi sampai di tangan. Demikian juga dengan sarana komunikasi yang lainnya, dengan berkembangnya telpon genggam kita bisa berkomunikasi dengan relasi kita kapanpun dan dimanapun. Televisi juga tidak kalah penting, kita dapat melihat siaran televisi dari mancanegara dengan bantuan parabola. Dan kini internet sudah menjadi hal yang biasa di masyarakat kita, terutama masyarakat perkotaan. Warnet tumbuh bak jamur di musim hujan. Dengan adanya internet, kita bisa mengetahui informasi dari mana saja di seluruh dunia. Dengan demikian kita bisa mengembangkan diri, perusahaan kita berbekal informasi baik yang kita peroleh.</p>\n            <br>\n            <p align="justify">Untuk itu, teknologi informasi sangat penting. Kita bisa menentukan teknologi mana yang akan kita gunakan. Juga kita bisa memilah informasi berdasarkan kebutuhan. Teknologi informasi telah merambah secara luas dalam berbagai bidang kehidupan seperti manajemen, teknik, kedokteran, psikologi, pendidikan hingga seni. Untuk itu, kebutuhan akan pakar bidang teknologi informasi dipastikan semakin meningkat setiap tahunnya. Apalagi ilmu dalam bidang ini sangat dinamis, hampir setiap hari dihasilkan teknologi baru.</p>\n            <br>\n            <p align="justify">Program Studi Sistem Informasi merupakan salah satu cabang dari pohon ilmu Informatika dan Komputer. Program ini dikhususkan untuk menggarap sistem informasi dari berbagai sisi. Hal ini meliputi bagaimana data dapat disimpan dengan baik, bagaimana  informasi dapat diperoleh dengan baik, dan bagaimana supaya informasi yang dihasilkan dapat memberikan manfaat bagi yang menggunakannya, baik perusahaan, maupun perorangan.</p>\n            <br>\n            <br>\n            <b>1.2 Sekilas Program Studi Sistem Informasi</b>\n            <p align="justify">Program Studi Sistem Informasi merupakan salah satu program studi yang diselenggarakan oleh STMIK AKAKOM. Program Studi Sistem Informasi mulai diselenggarakan berdasarkan SK No. 300/Dikti/Kep/1992 saat itu dengan nama Manajemen Informatika. Dan saat ini telah terakreditasi ‘B’ berdasarkan SK No. 011/BAN-PT/Ak-X/S1/VIII/2006.</p>\n            <br>\n            <p align="justify">Pada tahun 2009  Program Studi ini telah menerapkan kurikulum berbasis kompetensi. Dalam kurikulum yang dirancang untuk 8 semester ini, program studi mengarahkan minat sistem informasi berorientasi bisnis dan akuntansi. Dengan demikian, diharapkan lulusan akan dapat menganalisis, merancang, mengimplementasikan sistem informasi yang bisa membantu keputusan bisnis ataupun akuntansinya. Dengan kurikulum yang dirancang seperti itu, maka peminat program studi ini, bisa berasal dari berbagai jurusan yang ada di SLTA.</p>\n            <br>\n            <p align="justify">JMahasiswa program studi ini, berasal dari berbagai daerah, yang menunjukkan bahwa program studi ini sudah dikenal di daerah mereka. Namun, tidak bisa dipungkiri bahwa program studi harus terus meningkatkan mutu agar selalu bisa bersaing. </p>\n            <br>\n            <b>1.3 Kompetensi Umum</b>\n            <ol type="1">\n                <li>Mampu mengimplementasikan TI secara kreatif dan inovatif di masyarakat</li>\n                <li>Mampu mengembangkan diri untuk peningkatan wawasan dan keahlian</li>\n                <li>Mampu beradaptasi dan bekerjasama dalam team work</li>\n                <li>Mampu  berkomunikasi aktif dalam bahasa internasional</li>\n                <li> Mampu menjunjung tinggi etika dan profesionalisme</li>\n            </ol>  \n            <br>\n            <br>\n            <b>1.3.1 Kompentensi Khusus</b>\n            <p align="justify">Mampu menganalisis, membangun dan mengembangkan  SI proses bisnis untuk operasional dan manajerial</p>\n            <br>\n            <b>1.3.2 Gradasi Kompetensi</b>\n            <ol type="1">\n                <li>Kompetensi tahun 1</li>\n                <p align="justify">”Menguasai dasar pemograman dan logikanya, menguasai dasar sistem informasi”</p>\n                <li>Kompetensi tahun 2</li>\n                <p align="justify">”Mampu membangun program sederhana, mengkoneksikan dengan database”</p>\n                <li>Kompetensi tahun 3</li>\n                <p align="justify">“Mampu membangun sistem informasi</p>\n                <li>Kompetensi tahun 4</li>\n                <p align="justify">”Mampu mengaplikasikan sistem informasi di dunia nyata”</p>\n            </ol>\n            <br>\n            <b>1.4 Kurikulum</b>\n            <p align="justify">Sesuai dengan Keputusan Menteri Pendidikan Nasional RI No. 232 Tahun 2000 tentang Pedoman Penyusunan Kurikulum Pendidikan Tinggi dan Penilaian Hasil Belajar Mahasiswa, jurusan/program studi Sistem Informasi jenjang Strata 1 (SI-S1), pada tahun akademik 2004/2005 mengikuti pola yang dianjurkan oleh  SK Mendiknas tersebut.</p>\n            <p align="justify">Setelah melalui proses yang cukup panjang, kurikulum berbasis kompetensi program studi SI diberlakukan bagi semua mahasiswa SI yang belum menyelesaikan studinya hingga tahun akademik 2003/2004 berakhir.</p>\n            <p align="justify">Program studi ini mengarahkan mahasiswa untuk membangun sistem informasi berbasis komputer dengan dua peminatan bisnis dan akuntansi. Dengan demikian, lulusan diharapkan untuk bisa.</p>\n            <ol type="1">\n                <li>Mempunyai wawasan dan penguasaan tentang pengetahuan dasar komputer, sistem informasi dan penggunaan aplikasi-aplikasi untuk membantu pelaksanaan proses bisnis dan manajemen.</li>\n                <li>Mempunyai kemampuan dalam rancang bangun sistem informasi berbasis komputer dan implementasinya dengan menggunakan konsep-konsep, metode-metode, teknik dan alat bantu tertentu beserta dokumentasinya.</li>\n                <li>Mempunyai kemampuan akademik untuk mengembangkan bidang ilmu/ teknologi sesuai tridarma perguruan tinggi.</li>\n                <li>Mempunyai sikap dan etika profesi yang tinggi serta mampu beradaptasi berdasarkan ketaqwaan terhadap Tuhan Yang Maha Esa dan kecintaan terhadap tanah air.</li>\n            </ol> \n            <b>1.5 Syarat Kelulusan</b>\n            <p align="justify">Untuk menyelesaikan pendidikan sarjana pada program studi SI-S1, mahasiswa diwajibkan telah mengumpulkan sekurang-kurangnya 144 sks mata kuliah yang meliputi mata kuliah wajib sebanyak 100 sks (termasuk Tugas Akhir dalam bentuk skripsi atau kerja praktek dan workshop) dan sisanya adalah mata kuliah pilihan minimal sebanyak 44 sks</p>\n            <ol type="1">\n                <li>Mata Kuliah Wajib. Mata kuliah wajib merupakan mata kuliah yang wajib diambil oleh mahasiswa. Mata kuliah wajib program studi terdiri atas 100 sks. Bagi mahasiswa yang mengambil peminatan Sistem Informasi Bisnis diwajibkan mengambil mata kuliah wajib minat Sistem Informasi Bisnis (lihat tabel mata kuliah minat), sedangkan mahasiswa yang mengambil peminatan Sistem Informasi Akuntansi dapat mengambil mata kuliah minat Sistem Informasi Akuntansi. Persyaratan mata kuliah wajib sebesar 100 sks ini dapat dipenuhi dengan mengambil semua mata kuliah wajib. Semua mata kuliah wajib dan praktikum nilai minimum adalah C (nilai D berarti tidak lulus).</li>\n                <br>\n                <li>Mata Kuliah Pilihan. Pada dasarnya mahasiswa bebas memilih mata kuliah pilihan yang tersedia dan/atau mengambil mata kuliah wajib minat SIA untuk yang mengambil wajib minat SIB dan sebaliknya. Namun demikian, agar mahasiswa memiliki suatu kesatuan kemampuan yang memadai terutama agar mata kuliah pilihan menunjang Tugas Akhir dan persiapan masuk dunia kerja, maka dalam memilih mata kuliah ini mahasiswa berkonsultasi dan memperhatikan saran-saran dosen pembimbing akademik. Jika mahasiswa ingin mengambil mata kuliah di luar tabel mata kuliah pilihan maka yang bersangkutan harus memberi tahu dan berkonsultasi dengan dosen pembimbing akademik. Karena suatu alasan, mata kuliah pilihan dapat berubah distribusi semesternya dari semester ganjil ke semester genap atau sebaliknya.</li>\n                <br>\n                <li>Skripsi. Tugas akhir mahasiswa dapat berupa skripsi atau kerja praktek dengan bobot 6 sks, dan harus diambil oleh setiap mahasiswa.\n                <br><br>\n                <ol type="1">\n                    <li>Tujuan\n                        <ol type="1">\n                            <li>Melatih mahasiswa untuk dapat berfikir secara logis dan sistematis.</li>\n                            <li>Melatih kemandirian sekaligus team work dalam menyelesaikan permasalahan.</li>\n                            <li>Melatih kemampuan dalam penggunaan produk-produk/tools dalam bidang  terutama untuk keperluan manajemen, bisnis dan akuntansi.</li>\n                            <li>Melatih kemampuan untuk analisis dan pengembangan sistem informasi  pada suatu institusi atau organisasi.</li>\n                            <li>Melatih kemampuan untuk menulis karya ilmiah</li>\n                            <li>Mempersiapkan mahasiswa untuk hidup  bermasyarakat, melanjutkan studi, atau memasuki dunia kerja.</li>\n                        </ol>\n                    </li>\n                    <br>\n                    <li>Syarat pengambilan tugas akhir\n                        <ol type="1">\n                            <li>Telah menempuh 120 sks dengan IPK ≥ 2.00 yang terbaik.</li>\n                            <li>Telah menempuh mata kuliah penunjang topik tugas akhir</li>\n                            <li>Mencantumkan skripsi di KRS dan mendaftarkan ke bagian Administrasi Akademik.</li>\n                        </ol>\n                    </li>\n                    <br>\n                    <li>Pelaksanaan Skripsi\n                        <p align="justify">Pada dasarnya, pelaksanaan tugas akhir mahasiswa dibawah bimbingan dosen pembimbing tugas akhir yang sesuai dengan topik yang diambil. Mahasiswa mengerjakan topik tugas akhir secara mandiri dan secara periodik melaksanakan bimbingan kepada dosen pembimbing tugas akhir 1 maupun 2.</p>\n\n                    </li>\n                    <li>Workshop\n                        <p align="justify">Pada dasarnya mata kuliah ini digunakan untuk menambah pengetahuan/wawasan mahasiswa terhadap perkembangan teknologi dan pelaksanaannya bisa dalam bentuk keikutsertaan seminar, asistensi, penulis dalam media cetak atau bentuk kegiatan lain yang relevan.</p></li>\n                </ol>\n             </li>  \n             </ol>\n            <br>\n        </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/si/si.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], SIPage);
    return SIPage;
}());

//# sourceMappingURL=si.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TKPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TKPage = (function () {
    function TKPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TKPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tk',template:/*ion-inline-start:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/tk/tk.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n             <b>Program Studi/Jurusan</b>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n            <p align="right">admin, Jum, 15-Agt-2017 07:39:44</p>\n            <h1><p align="center">Teknik Komputer (D3)</p></h1>\n        </ion-card-header>\n        <ion-card-content>\n            <b>1.1 Pendahuluan</b>\n            <p align="justify">Dilandasi kesadaran potensi pesatnya kemajuan teknologi elektronika, program studi Teknik Komputer jenjang D3 merupakan bagian Jurusan Teknik Komputer yang mengemban amanat melatih dan menghasilkan ahli madya yang berkecimpung dalam lingkup teknik elektronika, microprocessor, instrumentasi kendali, dan telekomunikasi. Peran ahli madya bidang ini antara lain untuk menjembatani level perancang dan pengguna teknologi, melakukan supervisi proses produksi, melakukan instalasi-instalasi systems dan networking untuk berbagai keperluan mulai dari perkantoran, housing, hotels, medis, sarana navigasi, hingga entertainment support.</p>\n            <br>\n            <p align="justify">Mahasiswa program ini disarankan menyelesaikan beban akademik 110 sks dan latihan kerja dalam rentang 6 semester. Frame akademik dalam program ini sarat kegiatan praktek dengan peranti hi-tech measurement dan device programming, sehingga mahasiswa dituntut tekun dan berlatih mengembangkan logika. Alur matakuliah dan praktik yang ada mengindikasikan kepada konsentrasi Instrumentasi, Future Control, dan Jaringan Computer. Pada akhir masa studi, mahasiswa dilatih menyelesaikan laporan tugas akhir, yang menunjukkan penguasaan penyelesaian pekerjaan tertentu dalam lingkup yang disebut di muka. Mahasiswa yang mampu dapat melanjutkan studi pada jenjang selanjutnya (D4/S1), bidang yang sesuai umumnya adalah dengan lingkup keteknikan dan systems.</p>\n            <br>\n            <b>1.2 Kompetensi Lulusan</b><br>\n            <b>1.2.1 Kompetensi Umum</b>\n            <ol type="1">\n                <li>Mampu mengimplementasikan TI secara kreatif dan inovatif di masyarakat</li>\n                <li>Mampu mengembangkan diri untuk peningkatan wawasan dan keahlian</li>\n                <li>Mampu beradaptasi dan bekerjasama dalam team work</li>\n                <li>Mampu  berkomunikasi aktif dalam bahasa internasional</li>\n                <li>Mampu menjunjung tinggi etika dan profesionalisme</li>\n            </ol>  \n            <br>\n            <b>1.3.1 Kompentensi Khusus</b>\n            <ol type="1">\n                <li>Membangun dan merawat infrastruktur network</li>\n                <li>Mampu membangun komputer embedded (piranti-piranti yg tersambung dengan sistem komputer)</li>\n                <li>menguasasi tool simulasi elektronik dan network</li>\n            </ol>  \n            <br>\n            <b>1.3.2 Gradasi Kompetensi</b>\n            <ol type="1">\n                <li>Kompetensi tahun 1</li>\n                    <ul>\n                        <li>Mampu menginstalasi komputer dan sistem operasi stand alone.</li>\n                        <li>Mampu mengelola peranti-piranti  elektronik.</li>\n                    </ul>\n                <br>    \n                <li>Kompetensi tahun 2</li>\n                 <ul>\n                        <li>Menyusun program komputer sederhana.</li>\n                        <li>Melakukan pemeliharaan komputer dan troubleshooting.</li>\n                    </ul>\n                <br>    \n                <li>Kompetensi tahun 3</li>\n                <ul>\n                        <li>Menyelesaikan persoalan bisnis berbasis computer embedded.</li>\n                        <li>Menyelesaikan persoalan bisnis berbasis jaringan komputer enterprise.</li>\n                    </ul>\n                <br>    \n            </ol>\n            <br>\n            <b>1.4 Syarat Kelulusan</b>\n            <p align="justify">Untuk menyelesaikan pendidikan diploma 3 pada program studi Teknik Komputer, mahasiswa diwajibkan untuk mengumpulkan sekurang-kurangnya 110 sks mata kuliah yang meliputi mata kuliah wajib sebanyak 80 sks, dan lainnya merupakan mata kuliah pilihan.</p>\n            <ol type="1">\n                <li>Mata Kuliah Wajib.   Mata kuliah wajib merupakan mata kuliah yang wajib diambil oleh semua mahasiswa. Mata kuliah wajib program studi terdiri atas 80 sks. Persyaratan mata kuliah wajib sebesar 80 sks ini dapat dipenuhi dengan mengambil semua mata kuliah wajib. Semua mata kuliah wajib dan praktikum nilai minimum adalah C (nilai D berarti tidak lulus).</li>\n                <br>\n                <li>Mata Kuliah Pilihan . Mata kuliah pilihan dimaksudkan untuk memberi arah dalam penyelesaian tugas akhir. Terdapat dua mata kuliah pilihan, yaitu mata kuliah Pilihan I dan Pilihan II. Mata kuliah pilihan I berbobot 2 sks adalah mata kuliah lintas jurusan, atau mata kuliah pilihan yang ditawarkan  secara bergantian dari semester ke semester. Mata kuliah Pilihan II terdiri atas 4 sks teori dan 2 sks praktikum, mata kuliah pilihan II menunjukkan arah pendalaman pada bidang jaringan komputer atau mikrokontroler.</li>\n                <br>\n                <li>Tugas Akhir. Tugas akhir mempunyai bobot 4 sks, dapat berupa pembuatan suatu sistem yang berbasis mikrokontroler atau mikrokomputer, atau rekayasa perangkat keras dan perangkat lunak yang bertujuan meningkatkan kemampuan sistem berbasis mikrokontroler atau mikrokomputer yang berdiri sendiri atau dalam bentuk jaringan.</li>\n                <br>\n                <ul>\n                    <li>Tujuan Pembuatan Tugas Akhir\n                         <p align="justify">Melatih mahasiswa agar dapat merealisasikan suatu sistem berbasis mikrokontroler atau mikrokomputer, yang terdiri atas perangkat keras dan perangkat lunak.</p>\n                    </li>\n                    <br>\n                    <li>Syarat pengambilan tugas akhir\n                        <ol type="1">\n                            <li>Telah menempuh minimal 90 sks dengan IPK ≥ 2.00 yang terbaik</li>\n                            <li>Telah menempuh mata kuliah penunjang topik tugas akhir</li>\n                            <li>Mencantumkan tugas akhir dalam KRS dan mendaftarkan pemilihan pembimbing tugas akhir ke bagian Administrasi Akademik.</li>\n                        </ol>\n                    </li>\n                    <br>\n                    <li>Pelaksanaan Tugas Akhir\n                        <p align="justify">Pelaksanaan tugas akhir dibawah bimbingan dosen pembimbing tugas akhir yang sesuai dengan bidang permasalahan yang diambil. Mahasiswa dapat memilih tugas akhir berupa rekayasa perangkat keras, kerja praktek, rekayasa piranti praktikum , dan jenis-jenis lain yang direkomendasikan  oleh program studi.</p>\n\n                    </li>\n                </ul>\n            </ol>  \n            <br>\n\n\n\n        </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/tk/tk.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], TKPage);
    return TKPage;
}());

//# sourceMappingURL=tk.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KAPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KAPage = (function () {
    function KAPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    KAPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ka',template:/*ion-inline-start:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/ka/ka.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n             <b>Program Studi/Jurusan</b>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n            <p align="right">admin, Jum, 15-Agt-2017 07:41:49</p>\n            <h1><p align="center">Komputer Akuntansi (D3)</p></h1>\n        </ion-card-header>\n        <ion-card-content>\n            <b>1.1 Pendahuluan</b>\n            <p align="justify">Program studi Komputerisasi Akuntansi merupakan program studi yang berusia relatif muda dan dikembangkan berdasarkan kebutuhan tenaga kerja pada industri yang menginginkan adanya tenaga kerja yang mempunyai skill di bidang komputer serta memahami akuntansi sebagai bahasa bisnis.</p>\n            <br>\n            <p align="justify">Saat ini, tenaga kerja yang memenuhi persyaratan skill di bidang tersebut masih terasa sangat kurang dan tenaga kerja dengan skill akuntansi dan komputer akan selalu diperlukan selama masih terdapat perusahaan-perusahaan dan organisasi-organisasi lain yang memerlukan akuntansi berkomputer dalam operasinya.</p>\n            <br>\n            <p align="justify">Perkembangan industri saat ini telah memicu perkembangan ke enterprise information system, yaitu sistem informasi yang akan diterapkan pada ruang lingkup yang besar dari perusahaan. Besar disini meliputi jangkauan transaksi serta area yang luas meliputi seluruh dunia. Hal tersebut dimungkinkan karena perkembangan teknologi Intranet, Internet, serta Extranet yang sangat pesat. EIS mempunyai inti pada dua bidang, yaitu serta pengetahuan bisnis. Hal tersebut merupakan inti dari program studi Komputerisasi Akuntansi.</p>\n            <br>\n            <p align="justify">Dalam program studi ini, mahasiswa dididik untuk mempunyai pola pikir sebagai pengembang sistem informasi akuntansi. Dengan pola pikir tersebut, mahasiswa akan diuntungkan karena selain mampu mengembangkan sistem informasi akuntansi sendiri, mahasiswa juga mengetahui bagaimana seharusnya suatu software akuntansi bekerja. Dengan demikian, lulusan dari program studi Komputerisasi Akuntansi tidak akan mengalami kesulitan menggunakan berbagai software akuntansi.</p>\n            <br>\n            <p align="justify">Dalam kaitan sebagai pengembang sistem informasi akuntansi, mahasiswa akan dididik secara konsisten untuk menggunakan piranti dan metodologi yang berbasis Object-Oriented karena metodologi serta piranti tersebut yang banyak digunakan oleh industri pada saat ini dan masa yang akan datang. Metodologi seperti RUP, Extreme Programming, serta metodologi-metodologi Agile lainnya seharusnya dipahami dengan baik oleh mahasiswa karena merupakan materi yang diajarkan di Komputerisasi Akuntansi. Demikian juga dengan piranti pemodelan berbasis UML merupakan kompetensi dari mahasiswa Komputerisasi Akuntansi. Seiring dengan makin meningkatkan penggunaan software open source di masa kini dan masa yang akan datang (komitmen dari Oracle, IBM, serta HP menunjukkan hal tersebut), program studi Komputerisasi Akuntansi mendeklarasikan diri sebagai program studi yang memfokuskan diri pada peranti berbasis open source mulai dari awal kuliah sampai mahasiswa lulus.</p>\n            <br>\n            <p align="justify">Sementara itu, dalam kaitannya dengan sistem informasi akuntansi, mahasiswa akan mendapatkan materi yang memadai dalam hal akuntansi serta sistem akuntansi. Akuntansi manual mulai dari akuntansi pengantar, akuntansi keuangan menengah dan lanjut, akuntansi kos dan akuntansi manajemen akan memberi bekal yang memadai bagi lulusan Komputerisasi Akuntansi. Berbagai materi pendukung lainnya untuk kepentingan pengembangan diri (seperti etika bisnis dan profesi, aspek legal, dan lain-lain) dan pengkayaan wawasan bisnis juga diharapkan akan memperkuat lulusan dari Komputerisasi Akuntansi.</p>\n            <br>\n            <b>1.2 Sekilas Program Studi Komputerisasi Akuntansi</b>\n            <p align="justify">Program studi Komputerisasi Akuntansi di STMIK AKAKOM didirikan pada tahun 1999. Pada saat berdiri, program studi Komputerisasi Akuntansi memperoleh status Terdaftar berdasarkan SK Dirjen Dikti Nomor 39/DIKTI/Kep/1999. Setelah itu program studi Komputerisasi Akuntansi terus menerus berusaha memperbaiki diri dan meningkatkan kualitas dan statusnya.</p>\n            <p align="justify">Program studi Komputerisasi Akuntansi mendapatkan Akreditasi BAN-PT dengan nilai B pada tahun 2012. Perolehan status tersebut merupakan bukti kemauan dari pihak akademis untuk selalu memberikan peningkatan kualitas pendidikan.</p>\n            <br>\n            <b>1.2 Kompetensi Lulusan</b><br>\n            <b>1.2.1 Kompetensi Umum</b>\n            <ol type="1">\n                <li>Mampu mengimplementasikan TI secara kreatif dan inovatif di masyarakat</li>\n                <li>Mampu mengembangkan diri untuk peningkatan wawasan dan keahlian</li>\n                <li>Mampu beradaptasi dan bekerjasama dalam team work</li>\n                <li>Mampu  berkomunikasi aktif dalam bahasa internasional</li>\n                <li>Mampu menjunjung tinggi etika dan profesionalisme</li>\n            </ol>  \n            <br>\n            <b>1.2.1 Kompentensi Khusus</b>\n            <ol type="1">\n                <li>Mampu membangun aplikasi akuntansi berbasis web</li>\n                <li>Menguasai akuntansi bidang pajak</li>\n                <li>Menguasai tool akuntansi</li>\n            </ol>  \n            <br>\n            <b>1.2.2 Gradasi Kompetensi</b>\n            <ol type="1">\n                <li>Kompetensi tahun 1 : "Mampu Menyusun Laporan keuangan Perusahaan Berbasis IT" </li>\n                <li>Kompetensi tahun 2 : "Mampu menyusun dan Melakukan penghitungan Pajak berbasis IT" \n                <li>Kompetensi tahun 3 : "Mampu Menyusun sistem akuntansi berbasis IT"</li>    \n            </ol>\n            <br>\n            <b>1.3 Usaha</b>\n            <p align="justify">Untuk mencapai kompetensi tersebut, program studi Komputerisasi Akuntansi melakukan berbagai aktivitas belajar mengajar serta aktivitas-aktivitas lain untuk menambah nilai. Diantaranya adalah sebagai berikut :</p>\n            <ol type="1">\n                <li>Workshop peranti pengembangan serta aplikasi berbasis open source</li>\n                <li>Kuliah umum berkaitan dengan kompetensi utama tersebut</li>\n                <li>Kunjungan ke industri</li>\n                <li>Evaluasi kurikulum secara periodik</li>\n                <li>Peningkatan kualitas dosen (pendidikan lanjut maupun mengikuti berbagai kegiatan yang berhubungan dengan kompetensi utama jurusan)</li>\n                <li>Memfasilitasi kelompok belajar (Python, Linux. GNUCash, Akuntansi)</li>\n                <li>Meningkatkan skill dalam berbahasa Inggris, TOEFL menjadi syarat kelulusan</li>\n                <li>Evaluasi kinerja dosen.</li>\n            </ol>\n            <br>\n            <b>1.4 Peluang Karir</b>\n            <p align="justify">Hasil pengamatan dan survey pada berbagai lapangan kerja yang tersedia serta lulusan Komputerisasi Akuntansi yang telah diserap di dunia kerja menunjukkan bahwa lulusan program studi ini mempunyai prospek yang sangat cerah. Beberapa peluang karir dari lulusan ini antara lain :</p>\n            <ol type="1">\n                <li>Pengembang sistem informasi, khususnya sistem informasi akuntansi</li>\n                <li>Accounting software maintenance</li>\n                <li>Analis sistem</li>\n                <li>Pengembang web e-commerce</li>\n                <li>Auditor sistem informasi</li>\n                <li>Pekerja dalam sistem akuntansi</li>\n            </ol>\n            <br>\n            <b>1.5 Syarat Kelulusan</b>\n            <p align="justify">Untuk menyelesaikan pendidikan pada program studi Komputerisasi Akuntansi - D3, mahasiswa diwajibkan telah mengumpulkan sekurang-kurangnya 110 sks, dengan mata kuliah wajib sejumlah 80 sks, dan sisanya merupakan mata kuliah pilihan. Persyaratan mata kuliah wajib sebesar 80 sks ini dapat dipenuhi dengan mengambil semua mata kuliah wajib. Semua mata kuliah wajib dan praktikum nilai minimum adalah C (nilai D berarti tidak lulus).</p>\n            <ol type="1">\n                <li>Tugas Akhir</li>\n                 <p align="justify">Tugas akhir mempunyai bobot 4 sks, dapat berupa pembuatan suatu sistem yang berbasis mikrokontroler atau mikrokomputer, atau rekayasa perangkat keras dan perangkat lunak yang bertujuan meningkatkan kemampuan sistem berbasis mikrokontroler atau mikrokomputer yang berdiri sendiri atau dalam bentuk jaringan.</p>\n                <br>\n                <ul>\n                    <li>Tujuan Pembuatan Tugas Akhir\n                        <ol type="1">\n                            <li>Melatih mahasiswa untuk dapat berfikir secara logis dan sistematis</li>\n                            <li>Melatih kemandirian sekaligus team work dalam menyelesaikan permasalahan</li>\n                            <li>Melatih kemampuan dalam penggunaan produk-produk / tools dalam bidang Teknologi Informasi</li>\n                            <li>Mempersiapkan mahasiswa untuk hidup bermasyarakat, melanjutkan studi, atau memasuki dunia kerja.</li>\n                        </ol>\n                    </li>\n                    <br>\n                    <li>Syarat pengambilan tugas akhir\n                        <p align="justify">Mahasiswa yang akan mengambil tugas akhir disyaratkan sebagai berikut :</p>\n                        <ol type="1">\n                            <li>Telah menempuh sekurang-kurangnya 80 sks dengan IPK ≥ 2.00 terbaik</li>\n                            <li>Terdaftar pada semester yang bersangkutan</li>\n                            <li>Mencantumkan tugas akhir dalam KRS dan mendaftarkan pemilihan pembimbing tugas akhir ke bagian Administrasi Akademik.</li>\n                        </ol>\n                    </li>\n                    <br>\n                    <li>Pelaksanaan Tugas Akhir\n                        <p align="justify">Pada dasarnya, pelaksanaan tugas akhir mahasiswa dibawah bimbingan dosen pembimbing tugas akhir yang sesuai dengan topik yang diambil tugas akhirnya. Mahasiswa memilih sendiri dosen pembimbing tugas akhirnya, saat mendaftarkan diri di bagian Administrasi Akademik.</p>\n\n                    </li>\n                </ul>\n            </ol>  \n            <br>\n        </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/ka/ka.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], KAPage);
    return KAPage;
}());

//# sourceMappingURL=ka.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MIPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MIPage = (function () {
    function MIPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MIPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mi',template:/*ion-inline-start:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/mi/mi.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n             <b>Program Studi/Jurusan</b>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n            <p align="right">admin, Jum, 15-Agt-2017 07:37:33</p>\n            <h1><p align="center">Manajemen Informatika (D3)</p></h1>\n        </ion-card-header>\n        <ion-card-content>\n            <b>1.1 Pendahuluan</b>\n            <p align="justify">Dalam situasi perekonomian saat ini, pemerintah Indonesia memerlukan upaya-upaya baru untuk mengembalikan kehidupan perekonomian yang lebih baik. Salah satu bentuk upaya yang sedang dilakukan adalah sedikit menggeser prioritas perekonomian nasional dari bentuk resource-base economy ke bentuk knowledge-base economy. Dengan pola pergeseran ini, peran IPTEK menjadi sangat penting untuk mendukung visi Pembangunan Jangka Panjang (RPJP) tahun 2005-2025 yaitu “Indonesia Yang Maju, Mandiri, dan Adil”. Sejalan dengan hal tersebut, banyak organisasi yang telah berkembang ke bentuk dynamic network. Dalam dynamic network organization, peranan TI menjadi sangat penting.</p>\n            <br>\n            <p align="justify">Jurusan/program studi Manajemen Informatika dengan jenjang D3 diharapkan dapat memberikan kontribusi untuk mewujudkan kebutuhan tenaga-tenaga siap pakai pada semua bidang TI. Dalam mewujudkan harapan tersebut maka jurusan/program studi Manajemen Informatika membuat kurikulum yang berbasis kompetensi.</p>\n            <br>\n            <p align="justify">Sesuai dengan Keputusan Menteri Pendidikan Nasional RI No. 232 Tahun 2000 tentang Pedoman Penyusunan Kurikulum Pendidikan Tinggi dan Penilaian Hasil Belajar Mahasiswa, jurusan/program studi Manajemen Informatika jenjang D3 (MI-D3), pada tahun akademik 2004/2005 mengikuti pola yang dianjurkan oleh  SK Mendiknas tersebut. Setelah melalui proses yang cukup panjang, kurikulum berbasis kompetensi program studi MI diberlakukan bagi semua mahasiswa MI yang belum menyelesaikan studinya hingga tahun akademik 2003/2004. Selain hasil kurikulum yang dituangkan dalam bentuk distribusi semesteran, pengembangan isi dan materi silabi juga diberlakukan.</p>\n            <br>\n            <b>1.2 Kompetensi Lulusan</b><br>\n            <b>1.2.1 Kompetensi Umum</b>\n            <ol type="1">\n                <li>Mampu mengimplementasikan TI secara kreatif dan inovatif di masyarakat</li>\n                <li>Mampu mengembangkan diri untuk peningkatan wawasan dan keahlian</li>\n                <li>Mampu beradaptasi dan bekerjasama dalam team work</li>\n                <li>Mampu  berkomunikasi aktif dalam bahasa internasional</li>\n                <li>Mampu menjunjung tinggi etika dan profesionalisme</li>\n            </ol>  \n            <br>\n            <b>1.2.2 Kompentensi Khusus</b>\n            <ol type="1">\n                <li>Trampil mengimplemetasikan  rancangan sistem informasi bisnis berbasis desktop dan web</li>\n                <li>Mampu membangun animasi multimedia</li>\n                <li>Menguasai tools multimedia dan web</li>\n            </ol>  \n            <br>\n            <b>1.2.3 Gradasi Kompetensi</b>\n            <ol type="1">\n                <li>Kompetensi tahun 1</li>\n                <p align="justify">“Memahami dasar-dasar sistem informasi dan mampu melakukan operasi basis data”</p> \n                <li>Kompetensi tahun 2</li>\n                 <p align="justify">“Mampu  membangun aplikasi basis data  berbasis desktop dan web ”</p>   \n                <li>Kompetensi tahun 3</li>\n                <p align="justify">“Mampu membangun aplikasi berbasis web dinamis”</p> \n            </ol>\n            <br>\n             <b>1.2.4 Kompetensi Umum</b>\n            <ol type="1">\n                <li>Peningkatan kualitas dosen secara terus menerus</li>\n                <li>Memberikan materi workshop lebih dinamis</li>\n                <li>Evaluasi kurikulum dilakukan secara periodik</li>\n                <li>TOEFL menjadi syarat kelulusan</li>\n                <li>Memfasilitasi kegiatan kelompok mahasiswa jurusan</li>\n                <li>Memfasilitasi kegiatan kelompok dosen</li>\n                <li>Proses belajar mengajar ditingkatkan secara terus menerus</li>\n            </ol>  \n            <br>\n            <b>1.3 Syarat Kelulusan</b>\n            <p align="justify">Untuk menyelesaikan pendidikan diploma pada program studi MI-D3, mahasiswa diwajibkan telah menyelesaikan sekurang-kurangnya 110 sks mata kuliah yang meliputi mata kuliah wajib sebanyak 80  sks  dan sisanya adalah mata kuliah pilihan.</p>\n            <ol type="1">\n                <li>Mata Kuliah Wajib</li>  \n                <p align="justify">Mata kuliah wajib merupakan mata kuliah yang wajib diambil oleh semua mahasiswa. Mata kuliah wajib program studi terdiri atas 80 sks. Persyaratan mata kuliah wajib sebesar 80 sks ini dapat dipenuhi dengan mengambil semua mata kuliah wajib. Semua mata kuliah wajib dan praktikum nilai minimum adalah C (nilai D berarti tidak lulus).</p>\n                <br>\n                <li>Mata Kuliah Pilihan</li>  \n                <p align="justify"> Pada dasarnya mahasiswa bebas memilih mata kuliah pilihan yang tersedia. Namun demikian, agar mahasiswa memiliki suatu kesatuan kemampuan yang memadai, maka dalam memilih mata kuliah ini mahasiswa berkonsultasi dan memperhatikan saran-saran dosen pembimbing akademik. Jika mahasiswa ingin mengambil mata kuliah di luar tabel mata kuliah pilihan maka yang bersangkutan harus memberi tahu dan berkonsultasi dengan dosen pembimbing akademik. Karena suatu alasan, mata kuliah pilihan dapat berubah distribusi semesternya dari semester ganjil ke semester genap atau sebaliknya.</p>\n                <br>\n                <li>Tugas Akhir</li> \n                <p align="justify">Tugas akhir mahasiswa dapat berupa penugasan atau kerja praktek dengan bobot 4 sks, dan harus diambil oleh setiap mahasiswa.</p>\n                <br>\n                <ul>\n                    <li>Tujuan Pembuatan Tugas Akhir\n                         <ol type="1">\n                            <li>Melatih mahasiswa untuk dapat berfikir secara logis dan sistematis</li>\n                            <li>Melatih kemandirian sekaligus team work dalam menyelesaikan permasalahan</li>\n                            <li>Melatih kemampuan dalam penggunaan produk-produk / tools dalam bidang Teknologi Informasi</li>\n                            <li>Melatih kemampuan untuk menulis karya ilmiah</li>\n                            <li>Mempersiapkan mahasiswa untuk hidup  bermasyarakat, memasuki dunia kerja, atau melanjutkan studi.</li>\n                        </ol>\n                    </li>\n                    <br>\n                    <li>Syarat pengambilan tugas akhir\n                    <p align="justify">Mahasiswa yang akan mengambil tugas akhir disyaratkan sebagai berikut :</p>\n                        <ol type="1">\n                            <li>Telah menempuh minimal 90 sks dengan IPK ≥ 2.00 yang terbaik</li>\n                            <li>Mencantumkan tugas akhir di KRS dan mendaftarkan ke bagian Administrasi Akademik.</li>\n                        </ol>\n                    </li>\n                    <br>\n                    <li>Pelaksanaan Tugas Akhir\n                        <p align="justify">Pada dasarnya, pelaksanaan tugas akhir mahasiswa dibawah bimbingan dosen pembimbing tugas akhir yang sesuai dengan topik yang diambil tugas akhirnya. Mahasiswa memilih sendiri dosen pembimbing tugas akhirnya, saat mendaftarkan diri di bagian Administrasi Akademik</p>\n                        <p align="justify">Tugas akhir  di program studi Manajemen Informatika memiliki 2 pola :</p>\n                        <ol type="1">\n                            <li>Mandiri\n                                <p align="justify">Tugas Akhir mandiri adalah pelaksanaan tugas akhir yang dilakukan secara konvensional yang selama ini sudah dilakukan yakni mahasiswa mengerjakan tugas akhir tersebut secara mandiri dibawah arahan seorang pembimbing.</p>\n\n                                <p align="justify">Syarat Tugas akhir pola ini adalah :</p>\n                                <ol>\n                                    <li>IPK minimal 2,75, atau</li>\n                                    <li>Mendapat rekomendasi dari seorang dosen, bahwa mahasiswa yang bersangkutan diprediksi mampu melaksanakan tugas akhir secara mendiri  (untuk   IPK<2,75)</li>\n                                </ol>\n                            </li><br>\n                            <li>Laboratory\n                                <p align="justify">Pelaksanaan tugas akhir pola ini, mahasiswa di kelompokkan dalam 1 kelas, dan penyusunan tugas akhir pelaksanaannya terjadwal  dengan pembimbing adalah tim.</p>\n                                <p align="justify">Syarat Tugas akhir pola ini adalah :</p>\n                                <ol>\n                                    <li>PK <2,75, atau </li>\n                                    <li>Mengajukan secara khusus untuk mengikuti pola ini bagi mahasiswa dengan IPK>=2,75</li>\n                                </ol>\n                            </li>\n                        </ol>\n                    </li>\n                </ul>\n             </ol>  \n            <br>\n            <b>1.4 Peluang</b>\n            <p align="justify">Lulusan dari jurusan/program studi Manajemen Informatika masih banyak dibutuhkan oleh stakeholder, hal ini dapat dilihat dari banyaknya permintaan lulusan D3 yang ditempatkan pada bagian programmer, teknisi dan software maintenance.  Masih banyaknya peluang lulusan D3 Manajemen Informatika untuk tenaga di bidang TI, memberikan kesempatan yang sangat terbuka agar jurusan dapat mengembangkan diri menjadi lebih adaptif terhadap kebutuhan pasar tenaga kerja bidang TI.</p> \n            <p align="justify">Kemampuan yang lebih dari setiap lulusan akan memberikan daya saing yang baik untuk peluang di dunia kerja.</p>\n\n        </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/mi/mi.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], MIPage);
    return MIPage;
}());

//# sourceMappingURL=mi.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CordovaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CordovaPage = (function () {
    function CordovaPage(navCtrl, camera, alertCtrl) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
    }
    CordovaPage.prototype.ngOnInit = function () {
        this.photos = [];
    };
    CordovaPage.prototype.takePhoto = function () {
        var _this = this;
        console.log("coming here");
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 450,
            targetHeight: 450,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            _this.photos.push(_this.base64Image);
            _this.photos.reverse();
        }, function (err) {
            console.log(err);
        });
    };
    CordovaPage.prototype.deletePhoto = function (index) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Apakah anda ingin menghapus foto ini ?',
            message: '',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.photos.splice(index, 1);
                    }
                }
            ]
        });
        confirm.present();
    };
    CordovaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cordova',template:/*ion-inline-start:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/cordova/cordova.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Plugin Cordova\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <button ion-button full (click)="takePhoto()">\n        <ion-icon name="camera"></ion-icon>&nbsp;Kamera\n    </button>\n\n    \n\n    <ion-grid>\n        <ion-row>\n            <ion-col col-6 *ngFor="let photo of photos; let id = index">\n                <ion-card class="block">\n                    <ion-icon name="trash" class="deleteIcon" (click)="deletePhoto(id)"></ion-icon>\n                    <img [src]="photo" *ngIf="photo" />\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/cordova/cordova.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], CordovaPage);
    return CordovaPage;
}());

//# sourceMappingURL=cordova.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoPage = (function () {
    function InfoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-infokampus',template:/*ion-inline-start:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/infokampus/infokampus.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n             <b>Info Kampus</b>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n            <p align="right">admin, Jum, 15-Agt-2017 07:37:33</p>\n            <h1>Seminar Bioenergi</h1>\n        </ion-card-header>\n        <ion-card-content>\n            <p align="justify">Kepuketan 3 bekerja sama dengan Bioenergi training mengadakan seminar dengn topik " Melejitkan potensi diri dan mendongkrak kesuksesan dengan kecerdasan Bioenergi pada :</p>\n            <br>\n            <table>\n                <tr>\n                    <td>Tgl</td>\n                    <td>:</td>\n                    <td>10 Maret 2017</td>\n                </tr>\n                <tr>\n                    <td>Pukul </td>\n                    <td>:</td>\n                    <td>10.00 - 12.00 WIB</td>\n                </tr>\n                <tr>\n                    <td>Pukul</td>\n                    <td>:</td>\n                    <td>R. Presentasi STMIK AKAKOM</td>\n                </tr>\n            </table>\n            <br>\n            \n            <p align="justify">Pendaftaran peserta dapat dilakukan di kepuketan III tempat terbatas dan tidak dipungut biaya.</p>\n            <p align="justify">Ayo raih prestasi semester genap ini dengan awal yang baik.</p>\n            <p align="justify">Info lebih lanjut hubungi Puket III.</p><br>\n\n            <p align="justify">ttd</p>\n            <p align="justify">Puket III</p>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-card-header>\n            <p align="right">admin, Jum, 15-Agt-2017 07:37:33</p>\n            <h1>\n                Informasi KRS Jurusan TI Tanggal 25 Februari 2015\n            </h1>\n        </ion-card-header>\n        <ion-card-content>\n            <p align="justify">Diberitahukan kepada seluruh mahasiswa jurusan Teknik Informatika - S1 bahwa dalam pengambilan mata kuliah pada saat\n                KRS TI hari pertama tanggal 25 Februari 2017 hanya dapat dilakukan di Laboratorium Terpadu. Untuk mengurangi\n                berbagai hambatan yang akan terjadi , Pada tanggal tersebut Portal Akademik sementara tidak dapat diakses dari\n                luar termasuk akses Wi-Fi juga akan dimatikan.</p>\n            <p align="justify">Pendaftaran peserta dapat dilakukan di kepuketan III tempat terbatas dan tidak dipungut biaya.Akses akan dibuka lagi\n                setelah pukul 16.00 WIB. Demikian Informasi ini untuk dapat di perhatikan. Mohon Maaf dan Terima kasih. </p>\n    \n            <p align="justify">ttd</p>\n            <p align="justify">Puket III</p>\n        </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/infokampus/infokampus.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=infokampus.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>STMIK Akakom Yogyakarta</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/akakom.png">\n      </ion-avatar>\n      <h2>STMIK Akakom Yogyakarta</h2>\n      <p>Desember 5, 2017</p>\n    </ion-item>\n  \n    <img src="assets/img/1.jpg">\n  \n    <ion-card-content>\n      <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa.\n        This is heavy.</p>\n    </ion-card-content>\n  \n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>12 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>4 Comments</div>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/akakom.png">\n      </ion-avatar>\n      <h2>STMIK Akakom Yogyakarta</h2>\n      <p>Desember 5, 2017</p>\n    </ion-item>\n  \n    <img src="assets/img/2.jpg">\n  \n    <ion-card-content>\n      <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa.\n        This is heavy.</p>\n    </ion-card-content>\n  \n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>12 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>4 Comments</div>\n        </button>\n      </ion-col>\n    </ion-row>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_browser_tab__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_visimisi_visimisi__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_kontak_kontak__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_dosen_dosen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_pejabat_pejabat__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_jurusan_jurusan__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_ti_ti__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_cordova_cordova__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_si_si__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tk_tk__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_ka_ka__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_mi_mi__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_infokampus_infokampus__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_visimisi_visimisi__["a" /* VisiPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_kontak_kontak__["a" /* KontakPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_dosen_dosen__["a" /* DosenPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_pejabat_pejabat__["a" /* PejabatPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_jurusan_jurusan__["a" /* JurusanPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_ti_ti__["a" /* TIPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_cordova_cordova__["a" /* CordovaPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_si_si__["a" /* SIPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tk_tk__["a" /* TKPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_ka_ka__["a" /* KAPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_mi_mi__["a" /* MIPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_infokampus_infokampus__["a" /* InfoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_visimisi_visimisi__["a" /* VisiPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_kontak_kontak__["a" /* KontakPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_dosen_dosen__["a" /* DosenPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_pejabat_pejabat__["a" /* PejabatPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_jurusan_jurusan__["a" /* JurusanPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_ti_ti__["a" /* TIPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_cordova_cordova__["a" /* CordovaPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_si_si__["a" /* SIPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tk_tk__["a" /* TKPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_ka_ka__["a" /* KAPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_mi_mi__["a" /* MIPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_infokampus_infokampus__["a" /* InfoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_browser_tab__["a" /* BrowserTab */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/zzz/go/src/github.com/s1gu/cordova/AkakomMobile/akakom/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map