export const convertDurationTime = (duration) => {
    const hour = Math.floor(duration / 3600)
    const minutes = Math.floor( (duration % 3600) /60 )
    const seconds =  Math.floor(duration % 60)

    const durationTime = [ hour, minutes, seconds ]
        .map( time => String(time).padStart(2 , '0'))
        .join(':')
    return durationTime
}