import { createAction, props } from "@ngrx/store";
import { AssociatesModel, Assoicate } from "../Models/AssociateModel.model";

// get all Assocaites
export const LOAD_ASSOCIATES = '[associate] load associates'
export const LOAD_ASSOCIATES_SUCCESS = '[associate] load associates success'
export const LOAD_ASSOCIATES_FAILURE = '[associate] load associates fail'

export const loadassociates = createAction(LOAD_ASSOCIATES)
export const loadassociates_success = createAction(LOAD_ASSOCIATES_SUCCESS,props<{list:Assoicate[]}>())
export const loadassociates_failure = createAction(LOAD_ASSOCIATES_FAILURE,props<{errormessage:string}>())


// add Assocaite
export const OPEN_POPUP='[associate page]open popup'
export const openpopup=createAction(OPEN_POPUP);

export const ADD_ASSOCIATE = '[associate] add associate'
export const ADD_ASSOCIATE_SUCCESS = '[associate] add associate success'

export const addassociate= createAction(ADD_ASSOCIATE,props<{inputdata:Assoicate}>())
export const addassociatesuccess= createAction(ADD_ASSOCIATE_SUCCESS,props<{inputdata:Assoicate}>())
