import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements OnInit {
  keyword: string = ''
  constructor(
    private router : Router
  ) { }
  ngOnInit(): void {
  }
  onSearch(){
    this.router.navigateByUrl('/product')
  }
  onSearchKey(event:any){
    if(event.keyCode === 13){
      this.onSearch()
    }
  }

}
