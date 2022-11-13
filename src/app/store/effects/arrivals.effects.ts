import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, EMPTY, map, mergeMap } from 'rxjs';

import { ApiService } from 'src/app/services/api.service';

@Injectable()
export class ArrivalsEffects {

    getArrivals$ = createEffect( () => this.action$.pipe(
        ofType('[Arrivals] Load'),
        mergeMap(() => this.apiService.getArrivials()
                        .pipe(
                            map( flights => ({type: '[Arrivials] Success', payload: flights })),
                            catchError(()=> EMPTY)
            ))
        )         
    );


    constructor( 
                private action$: Actions,
                private apiService: ApiService 
    ) 
    { }
}
