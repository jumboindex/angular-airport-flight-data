import { createAction, props } from "@ngrx/store";

export const getArrivals = createAction('[Depatures] Load');
export const getArrivalsLoading = createAction('[Depatures] Loading', props<{error:boolean}>());
export const getArrivalsSuccess = createAction('[Depatures] Loaded Success', props<{flightData:any[]}>());
export const getArrivalsError = createAction('[Depatures] Loaded Error', props<{error:boolean}>());