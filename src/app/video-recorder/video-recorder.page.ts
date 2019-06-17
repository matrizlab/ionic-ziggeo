import { 
  Component,
  OnInit,
  ViewChild,
  AfterViewInit
 } from '@angular/core';

@Component({
  selector: 'app-video-recorder',
  templateUrl: './video-recorder.page.html',
  styleUrls: ['./video-recorder.page.scss'],
})
export class VideoRecorderPage implements OnInit, AfterViewInit {

    api_token = 'r12191ba2fd53c798278dd56ab4df612';
    recorder: any;
    @ViewChild('ziggeorecorder') ziggeorecorder: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit () {
      this.recorder = this.ziggeorecorder.recorderInstance;

      this.recorder.on('recording', () => {
          console.log('Recorder in progress');
      }, this);

      this.recorder.on('access_granted', () => {
          console.log('Recorder has camera access');
      }, this);

      this.recorder.on('verified', () => {
          console.log('playing your action here');
      }, this);
  }

}
