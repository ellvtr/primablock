import { Component, OnInit } from '@angular/core';
import { Contributor } from '../contributor';
import { ContributorsService } from '../contributors.service';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css']
})
export class ContributorsComponent implements OnInit {

  contributors: Contributor[];

  constructor(private contributorsService: ContributorsService) { }

  ngOnInit() {
    this.getContributors();
  }

  getContributors(): void {
    this.contributorsService.getAll()
      .subscribe(all => this.contributors = all);
  }

}
