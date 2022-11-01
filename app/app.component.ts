import {Component} from '@angular/core'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMessage = '';
  numberOfTeams: number | "" = "";
  teams: string[][] = [];
  title = 'form-focus';

  onInput(member: string){
    this.newMemberName = member;
  }

  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  addMember() {
    if(!this.newMemberName){
      this.errorMessage = "O campo nome não pode estar em branco"
      return;
    }

    this.errorMessage = '';
    this.members.push(this.newMemberName);
    this.newMemberName = '';
  }

  generateTeams(){
    if(!this.numberOfTeams || this.numberOfTeams <= 0){
      this.errorMessage = 'O número de times é inválido';
      return
    }

    if(this.members.length < this.numberOfTeams){
      this.errorMessage = 'Não há membros suficientes';
    }

    this.errorMessage = '';
    const allMembers = [...this.members]

    while (allMembers.length) {
      for(let i=0; i < this.numberOfTeams; i++){
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];

        if(!member) break;

        if(this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    } 
  }
}


// import { AfterContentInit, Directive, ElementRef, Input } from "@angular/core";

// @Directive({selector:'[appAutoFocusDirective'})

// export class AutoFocusDirectiveDirective implements AfterContentInit {
//   @Input() public appAutoFocus: boolean;
//   constructor(private el: ElementRef) {}

//   public ngAfterContentInit(): void {
//     setTimeout(() => {
//       this.el.nativeElement.focus();
//     }, 500);  
//   }
// }
