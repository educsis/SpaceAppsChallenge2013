sayings = [
  {maxrange: 100 ,  description:   "Everything is perfect."},
  {maxrange: 90  ,  description:   "I'm feeling great!"},
  {maxrange: 80  ,  description:   "I feel good."},
  {maxrange: 70  ,  description:   "Everything's fine."},
  {maxrange: 65  ,  description:   "Best day of the trip."},
  {maxrange: 60  ,  description:   "I feel homesick."},
  {maxrange: 55  ,  description:   "I miss my home computer."},
  {maxrange: 50  ,  description:   "I'd love to pet my cat right now."},
  {maxrange: 45  ,  description:   "Space is a lonely place."},
  {maxrange: 30  ,  description:   "I feel a bit worried about this mission."},
  {maxrange: 25  ,  description:   "I should have joined 4Acertijos instead of NASA."},
  {maxrange: 23  ,  description:   "Looks like I picked the wrong week to quit sniffing glue."},
  {maxrange: 20  ,  description:   "I need my mommy."},
  {maxrange: 15  ,  description:   "I feel cramped."},
  {maxrange: 10  ,  description:   "I'm not feeling well."},
  {maxrange: 8   ,  description:   "Worse day ever."},
  {maxrange: 1   ,  description:   "I want to die."},
 ]

function get_appropiate_interval(value, data){
  for (index = 0; index < data.length; ++index){
    if (data[index].maxrange <= value){
      return index
    }
  }
}