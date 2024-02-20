import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AssocaiateService } from "../../services/assocaiate.service";
import { addassociate, addassociatesuccess, loadassociates, loadassociates_failure, loadassociates_success } from "./Associate.Action";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { error } from "console";
import { showalert } from "../Common/Common.Action";

@Injectable()
export class AssociateEffects {
    constructor(private action$: Actions, private AssocaiteService: AssocaiateService) { }

    _loadAssocaites = createEffect(() =>
        this.action$.pipe(
            ofType(loadassociates),
            exhaustMap(() => {
                return this.AssocaiteService.getAssociates().pipe(
                    map((data) => {
                        return loadassociates_success({ list: data })
                    }), catchError((error) => of(loadassociates_failure({ errormessage: error }),showalert({message:error.message,resulttype:'error'}))
                    
                    )
                    
                )
            })
        )
    )

    _addAssocaiates = createEffect(() =>
        this.action$.pipe(
            ofType(addassociate),
            switchMap((action) => {
                return this.AssocaiteService.addAssociate(action.inputdata).pipe(
                    switchMap((data) => {
                        return of(addassociatesuccess({ inputdata: action.inputdata }),
                            showalert({ message: 'created successfully.', resulttype: 'pas' })
                        )
                    }),
                    catchError((error) => of(showalert(
                        { message: `${error} Failed to update associate`, resulttype: 'fail' }
                    )))
                )
            })
        )
    )
}