import { AssociatesModel } from './../../Store/Models/AssociateModel.model';
import { state } from '@angular/animations';
import { AssocaiateService } from './../../services/assocaiate.service';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'
import { MatDialog } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { AddassociateComponent } from '../addassociate/addassociate.component';
import { Assoicate } from '../../Store/Models/AssociateModel.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadassociates } from '../../Store/AssociateStore/Associate.Action';
import { getAssociateList } from '../../Store/AssociateStore/Associate.Select';
import { MatTableDataSource } from "@angular/material/table"
import { DataSource } from '@angular/cdk/collections';
@Component({
  selector: 'app-associate-listing',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatTableModule],
  templateUrl: './associate-listing.component.html',
  styleUrl: './associate-listing.component.css'
})
export class AssociateListingComponent implements OnInit {
  title = 'associate-listing';
  AddAssociateData: any
  AssociateList!: Assoicate[]
  dataSource!: any;
  displayedColumns: string[] = ['position', 'name', 'email', 'phone', 'address', 'status'];
  constructor(public dialogBox: MatDialog,
    private AssociateService: AssocaiateService,
    private router: Router,
    private store: Store
  ) {
    this.AddAssociateData = this.router.getCurrentNavigation()?.extras.state;
  }
  ngOnInit(): void {
    this.getAssociates()
  }
  getAssociates() {
    this.store.dispatch(loadassociates())
    this.store.select(getAssociateList).subscribe((state: any) => {
      if (state.list) {
        this.AssociateList = state.list;
        this.dataSource = new MatTableDataSource<Assoicate>(this.AssociateList);
      }
    })
    // this.AssociateService.getAssociates().subscribe(data => {
    //   this.AssociateList=data
    //   console.log(this.AddAssociateData)
    //   if (this.AddAssociateData){
    //     console.log(this.AssociateList)
    //   }
    // })
  }

  AddAssociate(): void {
    const dialog = this.dialogBox.open(AddassociateComponent)
  }
}
