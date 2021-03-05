// takes a js date object PBdate and return String m/d/yy without preceding zeroes
Output = [(PBdate.getMonth() + 1),
       PBdate.getDate(),
       PBdate.getFullYear().toString().substr(-2)
    ].join('/');
    
// takes two JS date objects startDate and endDate and returns a String H:MM AM - H:MM PM
let startTime = startDate.getHours() > 12 ?
    startDate.getHours() - 12 + ':' + startDate.getMinutes() + ' PM':
startDate.getHours() + ':' + startDate.getMinutes() + ' AM';
let endTime = endDate.getHours() > 12 ?
    endDate.getHours() - 12 + ':' + endDate.getMinutes() + ' PM':
endDate.getHours() + ':' + endDate.getMinutes() + ' AM';
Output = startTime + ' - ' + endTime;
