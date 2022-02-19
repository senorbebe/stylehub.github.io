import {Component, Input} from '@angular/core';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent {

  @Input() iconDefinition: IconDefinition | undefined;
  @Input() caption: string = "";
  @Input() style: 'primary' | 'secondary' = 'primary';


}
