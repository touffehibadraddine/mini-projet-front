import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private search:SearchService,private router: Router) { }
 sirene:String;
 status:Boolean=true;
  ngOnInit(): void {
  }
  onSearch(){
    if (this.sirene){
      this.router.navigate(['/display', this.sirene]);
    }
    this.status=false;
  }
  

}
