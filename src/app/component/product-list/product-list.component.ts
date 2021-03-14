import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    constructor(
        private metaService: Meta
    ) { 
        this.addTag();
    }

    ngOnInit(): void {
    }

    addTag() {
        this.metaService.addTag({ name: 'canonical', content: 'https://dazelpro.com/product' });
        this.metaService.addTag({ name: 'description', content: 'Pilih produk yang kamu inginkan dan segera masukan ke keranjang' });
        this.metaService.addTag({ name: 'robots', content: 'index,follow' });
        this.metaService.addTag({ property: 'og:title', content: 'TOCE - Product List' });
        this.metaService.addTag({ property: 'og:description', content: 'Pilih produk yang kamu inginkan dan segera masukan ke keranjang' });
        this.metaService.addTag({ property: 'og:image', content: 'https://cdn.jsdelivr.net/gh/dazelpro/cdn@2.1.1/img/thumb/product-thumb.jpg' });
        this.metaService.addTag({ property: 'og:image:width', content: '1200' });
        this.metaService.addTag({ property: 'og:image:height', content: '627' });

        this.metaService.addTag({ property: 'twitter:card', content: 'summary_large_image' });
        this.metaService.addTag({ property: 'twitter:title', content: 'TOCE - Product List' });
        this.metaService.addTag({ property: 'twitter:creator', content: '@dazelpro' });
        this.metaService.addTag({ property: 'twitter:description', content: 'Pilih produk yang kamu inginkan dan segera masukan ke keranjang' });
        this.metaService.addTag({ property: 'twitter:image', content: 'https://cdn.jsdelivr.net/gh/dazelpro/cdn@2.1.1/img/thumb/product-thumb.jpg' });
    }

}
