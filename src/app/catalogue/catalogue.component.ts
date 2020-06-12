import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { CatalogueService } from '../services/catalogue.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
  providers: [NgbCarouselConfig]
})
export class CatalogueComponent implements OnInit {

  catalogues = [];
  constructor(private route: ActivatedRoute, private catService: CatalogueService,
              config: NgbCarouselConfig, private router: Router) { 
                
    config.showNavigationIndicators = false;
    
  }

  getSubCatalogue(id) {
    this.catService.getCatalogues(id).subscribe(data => {
      this.catalogues.push(data);
      this.router.navigate(['/catalogue/' + id]).finally(() => {
        location.reload();
      });
    });
  }

   getCatalogue(id) {
    this.catService.getCatalogues(id).subscribe(data => {
      this.catalogues.push(data);
      console.log(this.catalogues[0].categories.categories);
    });
   }

  ngOnInit(): void {
    this.getCatalogue(this.route.snapshot.paramMap.get('idcatalogue'));
  }

}
