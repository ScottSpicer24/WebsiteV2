import { Component } from '@angular/core';
import { OtherSkills, TechSkills } from '../../../assets/data/datatypes';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  testScroll = ''
  skills: TechSkills[] = [];
  others: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<TechSkills[]>('assets/data/skills.json').subscribe((data) => {
      this.skills = data;
      console.log(this.skills);
    });
    
    this.http.get<OtherSkills>('assets/data/other-skills.json').subscribe((data) => {
      console.log("got to others: " + data);
      this.others = data.OtherSkills;
    });

    /*
    this.fe = [];
    this.se = [];
    this.ml = [];

    for (const skill of this.skills) {
      switch (skill.Domain) {
        case 'FE': this.fe.push(skill); break;
        case 'SE': this.se.push(skill); break;
        default  : this.ml.push(skill); // ML or anything else
      }
    }
        */

    //this.others = this.otherSkills[0];
  }
}
