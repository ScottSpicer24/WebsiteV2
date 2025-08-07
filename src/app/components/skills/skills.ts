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
  fe: TechSkills[] = [];
  se: TechSkills[] = [];
  ml: TechSkills[] = [];
  others: string = "";

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<TechSkills[]>('assets/data/skills.json').subscribe((data) => {
      this.skills = data;
      this.fe = data.filter(s => s.Domain === 'FE');
      this.se = data.filter(s => s.Domain === 'SE');
      this.ml = data.filter(s => s.Domain === 'ML');
      console.log(this.skills);
    });
    
    this.http.get<OtherSkills>('assets/data/other-skills.json').subscribe((data) => {
      console.log("got to others: " + data);
      for(let i = 0; i < data.OtherSkills.length; i++){
        const skill = data.OtherSkills[i];
        if(i == (data.OtherSkills.length - 1)){
          this.others += skill;
        }
        else{this.others += (skill + ", ");}
      }
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
