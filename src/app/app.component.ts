import { AssociateListingComponent } from './component/associate-listing/associate-listing.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AssocaiateService } from './services/assocaiate.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, 
    AssociateListingComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[AssocaiateService]
})
export class AppComponent {
  title = 'NgrxCrud';
}
