import { Action } from '@ngrx/store'
import { CardInput } from './../models/card.model'
import * as CardActions from './../actions/card.action'

const initialState: CardInput = {
    name: 'George Yakubu Dafei',
    cardNumber: '5363663562562',
    amount: '100',
    date: '34/24',
    securityCode: '456',
}

export function cardReducer(state: CardInput[] = [initialState], action: CardActions.Actions) {

    // Section 3
    switch(action.type) {
        case CardActions.ADD_CARD:
            return [...state, action.payload];
        default:
            return state;
    }
 }   