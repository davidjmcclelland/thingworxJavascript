// takes a js date object PBdate and return String m/d/yy without preceding zeroes
Output = [(PBdate.getMonth() + 1),
       PBdate.getDate(),
       PBdate.getFullYear().toString().substr(-2)
    ].join('/');
    
// takes two JS date objects startDate and endDate and returns a String H:MM AM - H:MM PM
let startHour = pbStartDate.getHours() % 12 || 12;
let endHour = pbEndDate.getHours() % 12 || 12;
let startAmPm = pbStartDate.getHours() > 12 ? 'PM' : 'AM';
let endAmPm = pbEndDate.getHours() > 12 ? 'PM' : 'AM';
let startTimeString = [startHour,('0'+pbStartDate.getMinutes().toString()).substr(-2)].join(':');
let stopTimeString = [endHour,('0'+pbEndDate.getMinutes().toString()).substr(-2)].join(':');
Output = `${startTimeString} ${startAmPm} - ${stopTimeString} ${endAmPm}`;
