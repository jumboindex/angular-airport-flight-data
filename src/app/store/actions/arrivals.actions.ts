import { createAction, props } from "@ngrx/store";

export const getArrivals = createAction('[Arrivals] Load');
export const getArrivalsSuccess = createAction('[Arrivals] Loaded Success', props<{flightData:any[]}>());
export const getArrivalsError = createAction('[Arrivals] Loaded Error');