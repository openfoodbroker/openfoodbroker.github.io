import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'openfoodbroker';
   
  dtOptions: any = {};
  showtable:boolean;
  showdata:any
  exampleData = [
    {
      id: 1,
      name: 'Dil'
    },
    {
      id: 2,
      name: 'Dattel'
    },
    {
      id: 3,
      name: 'Klee'
    },
    {
      id: 4,
      name: 'Akee'
    }
  ];
  keyword = 'name';
  ngOnInit()
  {
    
      
       this.showtable = false;
       
       this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5,
        lengthMenu : [5, 10, 25],
        processing: true,
        searching: false, 
        paging: false, 
        info: false

      };
      
      
       
  }
  public selectEvent(e: any): void {
  
    this.showtable = true;
  }

  public getServerResponse(e: any): void {
  
   this.showdata = this.exampleData;
  }

  searchCleared() {
    
    this.showdata = [];
    //this.showtable = false;
  }

  
}
