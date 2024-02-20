import { AssociateListingComponent } from './../associate-listing/associate-listing.component';
import { AssocaiateService } from './../../services/assocaiate.service';
import { Component } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Inject } from '@angular/core';
import { Assoicate } from '../../Store/Models/AssociateModel.model';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { state } from '@angular/animations';
import { Store } from '@ngrx/store';
import { addassociate } from '../../Store/AssociateStore/Associate.Action';
@Component({
  selector: 'app-addassociate',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ReactiveFormsModule,
    HttpClientModule,
    AssociateListingComponent,
  ],
  templateUrl: './addassociate.component.html',
  styleUrl: './addassociate.component.css',
  providers:[AssocaiateService]
})
export class AddassociateComponent {
  userForm!: FormGroup
  constructor(
    public dialogRef: MatDialogRef<AddassociateComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: Assoicate,
    private AssocaiateService:AssocaiateService,
    private router:Router,
    private store:Store,
  ) {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      status: new FormControl('True', [Validators.required]),

    })
  }
  AddAssociate() {
    if (this.userForm.valid) {
      // console.log(this.userForm.value)
      const FormData= this.userForm.value
      this.store.dispatch(addassociate({inputdata:FormData}))
      this.dialogRef.close();
      // this.AssocaiateService.addAssociate(FormData).subscribe({
      //   next:(response)=>{
      //     // console.log(response)
      //   },
      //   error:(error)=>{
      //     console.log(error)
      //   },
      //   complete:()=>{
      //     // this.router.navigateByUrl('/AssociatesList',{state:{'FormData':FormData}})
      //     this.dialogRef.close();
      //   }
      // })
    }
  }
  CloseDialog() {
    this.dialogRef.close();
  }
}
