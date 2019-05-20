import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ZiggeoModule } from 'angular-ziggeo/build/ziggeo';
import { ZiggeoPlayerComponent } from 'angular-ziggeo/build/ziggeo';
import { ZiggeoRecorderComponent } from 'angular-ziggeo/build/ziggeo';

import { VideoRecorderPage } from './video-recorder.page';

const routes: Routes = [
  {
    path: '',
    component: VideoRecorderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZiggeoModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
      ZiggeoPlayerComponent,
      ZiggeoRecorderComponent
  ],
  declarations: [VideoRecorderPage]
})
export class VideoRecorderPageModule {}
