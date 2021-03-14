import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

    constructor(
        private metaService: Meta
    ) { 
        this.addTag();
    }

    ngOnInit(): void {
    }

    addTag() {
        this.metaService.addTag({ name: 'canonical', content: 'https://dazelpro.com/product/mouse-gaming' });
        this.metaService.addTag({ name: 'description', content: 'Mouse Gaming Berkualitas tinggi dilengkapi dengan fitur silent click sehingga tidak menimbulkan bunyi ketika di klik.' });
        this.metaService.addTag({ name: 'robots', content: 'index,follow' });
        this.metaService.addTag({ property: 'og:title', content: 'TOCE - Mouse Gaming' });
        this.metaService.addTag({ property: 'og:description', content: 'Mouse Gaming Berkualitas tinggi dilengkapi dengan fitur silent click sehingga tidak menimbulkan bunyi ketika di klik.' });
        this.metaService.addTag({ property: 'og:image', content: 'https://cdn.jsdelivr.net/gh/dazelpro/cdn@2.1.1/img/thumb/product-detail-thumb.jpg' });
        this.metaService.addTag({ property: 'og:image:width', content: '1200' });
        this.metaService.addTag({ property: 'og:image:height', content: '627' });

        this.metaService.addTag({ property: 'twitter:card', content: 'summary_large_image' });
        this.metaService.addTag({ property: 'twitter:title', content: 'TOCE - Mouse Gaming' });
        this.metaService.addTag({ property: 'twitter:creator', content: '@dazelpro' });
        this.metaService.addTag({ property: 'twitter:description', content: 'Mouse Gaming Berkualitas tinggi dilengkapi dengan fitur silent click sehingga tidak menimbulkan bunyi ketika di klik.' });
        this.metaService.addTag({ property: 'twitter:image', content: 'https://cdn.jsdelivr.net/gh/dazelpro/cdn@2.1.1/img/product-detail-thumb.jpg' });
    }

}
