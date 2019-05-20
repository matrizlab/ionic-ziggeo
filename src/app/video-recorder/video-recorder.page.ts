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

  api_token = 'r1b1f41ed724ae562971cf0fc53b8454';
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
