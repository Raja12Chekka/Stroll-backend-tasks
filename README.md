                                                          ******Dynamic Question Assignment******


  Created a two different Arrays with some set of questions as singapore and us. After that created some constant variables as cycleDuration,cycleStartDate has  7and  '2024-10-14T19:00:00' as initial cycle start date respectively. 
  -----Function implementation starts here----------
  After that created a function name getAssignedQuestion which has two parameters are region and currentdate. Firstly checking currentdate is greater than are equal tocycleStartDate, once it satisfies creating another constant variable timeDifference as differece between currentDate and cycleStartDate. After that, creating another constant variable cycleNumber for getting the which cycle the given paratmeter current date comes under as using Math.Floor function to get least integer by dividing  timeDifference / with (cycleDuration * 24 * 60 * 60 * 1000)).Then it will get into the switch loop as per the case,if region matches with Singapore case,it will return element from the Singapore array and cycleNumber as the index of the array. Same way if region matches with US case it will return element from the US array and cycleNumber as the index of the array. If it doesn't match with either cases,it will get into default case and return note as Invalid region. In the if clause, currentdate condition doesn't satisfies it will return a note as Cycle started on 2024-10-14T19:00:00.Please enter date after that!.
  
------Function ends here-------
Usage of functions with console.log function in different cases.

  

  
