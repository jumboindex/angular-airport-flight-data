import { Statement } from "@angular/compiler";
import { Action, createReducer, on } from "@ngrx/store";
import * as ArrivalsActions from '../actions/arrivals.actions'

export interface ArrivalsState {
    flightData: any[],
    loading: boolean,
    error: boolean
}

const initialState: ArrivalsState = {
    flightData: [],
    loading: true,
    error: false
} 


export const ArrivalsReducer = createReducer(initialState,
    on(ArrivalsActions.getArrivals, state => ({ ...state, loading: true, error: false  })),
    on(ArrivalsActions.getArrivalsSuccess, (state, {flightData}) => ({...state, loading: false, error: false,  flightData: flightData })),
    on(ArrivalsActions.getArrivalsError, state => ({...state, loading: false, error: true})));