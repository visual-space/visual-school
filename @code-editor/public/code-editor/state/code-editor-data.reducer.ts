import { DEBUG } from '../../../config/app'

// Interfaces
import { Action } from '../../shared/interfaces/action';
import { CodeEditorDataState } from '../interfaces/code-editor-state';

// State
import { codeEditorDataActions } from './code-editor-data.actions';
import { codeEditorInitialState } from './code-editor-initial-state';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:codeEditorDataReducer');
DEBUG.init && debug('Instantiate codeEditorDataReducer');

export const codeEditorDataReducer = (state: CodeEditorDataState = codeEditorInitialState.data, action: Action<any>) => {
    switch (action.type) {

        // ====== GET CHAPTERS ======

        case codeEditorDataActions.GET_CODE_BLOCKS_OK:
            DEBUG.reduce && debug('GET_CODE_BLOCKS_OK', action.payload)
            return Object.assign({}, state, <CodeEditorDataState>{ 
                codeBlocks: action.payload, 
                codeBlock: action.payload[0], // TODO proper routing 
            })

        default:
            return state
    }
}