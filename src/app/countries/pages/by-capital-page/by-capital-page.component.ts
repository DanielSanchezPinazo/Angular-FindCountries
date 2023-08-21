import { Component, OnInit } from '@angular/core';
import { CountriesService} from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  public countriesC: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = "";

  constructor( private countriesService: CountriesService ) {}

  ngOnInit(): void {
    this.countriesC = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital( term: string ): void {

    if (!term) return;

    this.isLoading = true;

    this.countriesService.searchCapital( term )
      .subscribe( countries => {
        this.countriesC = countries;
        this.isLoading = false;
      })
  }
}
