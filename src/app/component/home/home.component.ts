import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(
        private metaService: Meta
    ) { 
        this.addTag();
    }

    ngOnInit(): void {
    }

    addTag() {
        this.metaService.addTag({ name: 'canonical', content: 'https://dazelpro.com' });
        this.metaService.addTag({ name: 'description', content: 'Toko online terkeren yang pernah ada didunia' });
        this.metaService.addTag({ name: 'robots', content: 'index,follow' });
        this.metaService.addTag({ property: 'og:title', content: 'TOCE - Toko Online Kece' });
        this.metaService.addTag({ property: 'og:description', content: 'Toko online terkeren yang pernah ada didunia' });
        this.metaService.addTag({ property: 'og:image', content: 'https://cdn.jsdelivr.net/gh/dazelpro/cdn@2.1.1/img/thumb/main-logo.jpg' });
        this.metaService.addTag({ property: 'og:image:width', content: '1200' });
        this.metaService.addTag({ property: 'og:image:height', content: '627' });
        
        this.metaService.addTag({ property: 'twitter:card', content: 'summary_large_image' });
        this.metaService.addTag({ property: 'twitter:title', content: 'TOCE - Toko Online Kece' });
        this.metaService.addTag({ property: 'twitter:creator', content: '@dazelpro' });
        this.metaService.addTag({ property: 'twitter:description', content: 'Toko online terkeren yang pernah ada didunia' });
        this.metaService.addTag({ property: 'twitter:image', content: 'https://cdn.jsdelivr.net/gh/dazelpro/cdn@2.1.1/img/thumb/main-logo.jpg' });
    }

}
