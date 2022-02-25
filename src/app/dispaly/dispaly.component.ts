import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-dispaly',
  templateUrl: './dispaly.component.html',
  styleUrls: ['./dispaly.component.css']
})
export class DispalyComponent implements OnInit {
resultat:object={id:'',denomination:''};
sirene:String;
  constructor(private search:SearchService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sirene = this.route.snapshot.paramMap.get('id');
    this.search.get_denomination(this.sirene).subscribe(Response=>{ 
    this.resultat=Response;
    console.log(this.resultat)
    })

  }

}
