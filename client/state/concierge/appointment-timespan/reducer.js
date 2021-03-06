/** @format */

/**
 * Internal dependencies
 */
import { createReducer } from 'state/utils';
import { CONCIERGE_INITIAL_REQUEST, CONCIERGE_INITIAL_UPDATE } from 'state/action-types';

export const appointmentTimespan = createReducer( null, {
	[ CONCIERGE_INITIAL_REQUEST ]: () => null,
	[ CONCIERGE_INITIAL_UPDATE ]: ( state, { initial } ) => initial.appointmentTimespan,
} );

export default appointmentTimespan;
