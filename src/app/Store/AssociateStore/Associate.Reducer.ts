import { createReducer, on } from "@ngrx/store";
import { AssociateState } from "./Associate.State";
import { addassociate, addassociatesuccess, loadassociates, loadassociates_failure, loadassociates_success } from "./Associate.Action";

const _AssociateReducer = createReducer(AssociateState,
    on(loadassociates_success, (state, action) => {
        const{list,...data}=action
        return(
        {
            ...state,list,errormessage: ''
        })}
    ),
    on(
        loadassociates_failure, (state, action) => ({...state,list:[],errormessage: action.errormessage})
    ),
    on(addassociatesuccess,(state, action)=>{
        const _maxid = Math.max(...state.list.map(o => o.id));
        const _newdata = { ...action.inputdata };
        _newdata.id = _maxid + 1;
        return{
            ...state,
            list: [...state.list, _newdata],
            errormessage: ''
        }
    })
     
)

export function AssocaiteReducer(state:any,action:any){
    return _AssociateReducer(state,action)
}