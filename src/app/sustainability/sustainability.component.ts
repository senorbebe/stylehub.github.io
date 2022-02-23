import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sustainability',
  templateUrl: './sustainability.component.html',
  styleUrls: ['./sustainability.component.css']
})
export class SustainabilityComponent implements OnInit {

  typewriter_text: string = "Nachhaltig-";
  typewriter_display: string = "";

  typewriter_textt: string = "keit";
  typewriter_displayy: string = "";


  typingCallback(that: any) {
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    let total_lengthh = that.typewriter_textt.length;
    let current_lengthh = that.typewriter_displayy.length;
    console.log(total_lengthh)
    console.log(current_lengthh)

    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
      setTimeout(that.typingCallback, 80, that);
    } else if (current_lengthh < total_lengthh) {
      console.log("here")
      that.typewriter_displayy += that.typewriter_textt[current_lengthh];
      setTimeout(that.typingCallback, 80, that);
    }
  }

  ngOnInit(): void {
    this.typingCallback(this);
  }

}
