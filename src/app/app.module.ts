import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from "./app.component";
import { EmailComponent } from './component/email/email.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule, FormsModule,MatFormFieldModule,MatSnackBarModule],
  declarations: [AppComponent,EmailComponent,],
  bootstrap: [AppComponent]
})
export class AppModule {}
