import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { MyLibModule } from '@nx-packaged/my-lib';

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), MyLibModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
