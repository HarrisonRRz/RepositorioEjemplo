import React, {useReducer} from "react";
import CitacionReducer from "./citacionReducer";
import CitacionContext from "./citacionContext";

const CitacionState = props => {
    //crea el state inicial
    const CitacionState = {
        citacion:[]
    }

    //useReducer con el dispatch
    const [ state, dispatch] = useReducer(CitacionReducer, CitacionState)

    return(
        <CitacionContext.Provider
            value={{
                citacion: state.citacion
            }}
        >
            {props.children}
        </CitacionContext.Provider>
    )
}

export default CitacionState;