const singapore = ["What was Singapore known as during the 14th century?",
                   "What are the colors of the Singaporean flag?",
                   "What is the name of Singapore's international airport?",
                   "What is the highest point in the island Singapore?", 
                   "What day did Singapore gain its independence?"]
const us = ["What are the two major parties in the US?",
            "How many states are there in the US?",
             "What do Americans celebrate on July 4th?",
             "Which president freed the slaves?",
             "Who was the civil rights leader who fought through nonviolent action?"]

const cycleDuration = 7;
const cycleStartDate = new Date('2024-10-14T19:00:00') // Initialising  monday 7 PM 
function getAssignedQuestion(region, currentDate) {
    if (currentDate >= cycleStartDate) {
        const timeDifference = currentDate - cycleStartDate;
        const cycleNumber = Math.floor(timeDifference / (cycleDuration * 24 * 60 * 60 * 1000));

        if (region === 'Singapore') {
            return singapore[cycleNumber];
        } else if (region === 'US') {
            return us[cycleNumber];
        } else
            return ('Invalid region')

    }
    return ('Cycle started on 2024-10-14T19:00:00.Please enter date after that!')
}
console.log(getAssignedQuestion('US', new Date('2024-10-21T19:00:00')))
console.log(getAssignedQuestion('Singapore', new Date('2024-10-15T19:00:00')))
console.log(getAssignedQuestion('US', new Date('2024-10-14T19:00:00')))
console.log(getAssignedQuestion('Singapore', new Date('2024-10-13T19:00:00')))
console.log(getAssignedQuestion('India', new Date('2024-10-14T19:00:00')))
