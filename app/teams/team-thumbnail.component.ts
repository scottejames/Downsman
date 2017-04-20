import {Component,Input,Output,EventEmitter} from '@angular/core'

@Component ({
selector : 'team-thumbnail',
template : `
  <div class= "well hoverwell thumbnail">
    <h2> {{team.name}}</h2>
      <div> Group: {{team.group}} </div>
      <div> Leader: {{team.leader}} </div>

    </div>
`,
styles: [`
  .pad-left { margin-left : 10px; }
  .well div {color: #bbb; }
  .thumbnail {min-height: 210px; }
  `]

})
export class TeamThumbnailComponent {
  @Input() team : any

}
