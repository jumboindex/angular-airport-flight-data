import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, EMPTY, map, mergeMap, of } from 'rxjs';

import { ApiService } from 'src/app/services/api.service';

@Injectable()
export class ArrivalsEffects {

    getArrivals$ = createEffect( () => this.action$.pipe(
        ofType('[Arrivals] Load'),
        mergeMap(() => this.apiService.getArrivials()
                        .pipe(
                            map( flights => ({type: '[Arrivials] Loaded Success', flightData: flights })),
                            catchError(()=> of({type: '[Arrivals] Loaded Error', error: true, loading: false}))
            ))
        )         
    );

    constructor( 
                private action$: Actions,
                private apiService: ApiService 
    ) 
    { }
}
