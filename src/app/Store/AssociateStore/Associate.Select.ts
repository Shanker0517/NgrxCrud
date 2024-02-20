import { state } from '@angular/animations';
import { AssociatesModel } from './../Models/AssociateModel.model';
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getAssociateState=createFeatureSelector<AssociatesModel>('associate');

export const getAssociateList=createSelector(getAssociateState,(state:any | undefined)=>{
    return state;
})
export const getAssociate=createSelector(getAssociateState,(state)=>{
    return state.assocaiteobj
})