******Dynamic Question Assignment******


  Created a two different Arrays with some set of questions as singapore and us. After that created some constant variables as cycleDuration,cycleStartDate has  7and  '2024-10-14T19:00:00' as initial date  respectively. 
  
  After that created a function name getAssignedQuestion which has two parameters are region and currentdate. firstly checking currentdate is greater than are equal tocycleStartDate, once it satisfies creating another constant variable timeDifference as differece between currentDate and cycleStartDate. After that, creating another constant variable cycleNumber for getting the which cycle the given paratmeter current date comes under as using Math.Floor function to get leaset integer by dividing  timeDifference / with (cycleDuration * 24 * 60 * 60 * 1000)).Then if region is Singapore it will go inside of firs
