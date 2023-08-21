import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder: string ="";

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  @Input()
  public initValue = "";

  ngOnInit(): void {

    this.debouncerSuscription = this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe( value => {
        this.onDebounce.emit( value );
      })
  }

  ngOnDestroy(): void {

    this.debouncerSuscription?.unsubscribe();

  }

  public emitValue( value: string ): void {

    this.onValue.emit( value );
  }

  public onKeyPress( searchTerm: string ) {

    // console.log(searchTerm);
    this.debouncer.next( searchTerm );

  }

}
