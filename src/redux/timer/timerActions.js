import { END_TIMER, TICK_TIMER } from "./timerConstants"

const tickTimer = () => {
    return {
        type: TICK_TIMER,
    }
}

const endTimer = () => {
    return {
        type: END_TIMER,
    }
}