import { map, mergeMap, catchError } from 'rxjs/operators';
import { of, empty, iif, concat } from 'rxjs';
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';

export function fetchTokenEpic(action$, state$) {
    return action$.pipe(
        ofType('LOG_IN'),
        mergeMap(action => {
            return concat(
                ajax.get('https://api.github.com/users?per_page=5').pipe(
                    map(response => {
                        return { type: 'LOG_IN_SUCCESS', payload: {} };
                    }),
                    catchError(error => {
                        return of({ type: 'LOG_IN_FAILURE', payload: {} });
                    })
                ),
				of({ type: 'CLEAR_FORM', payload:{} })
            );
        })
    );
}