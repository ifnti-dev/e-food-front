
export function datesDiff(a:Date, b:Date):number {
    let j1 = a.getTime();
    let j2 = (b || new Date()).getTime();
    var c = j1 > j2 ? j1 : j2,
        d = j1 > j2 ? j2 : j1;
    return Math.abs(Math.ceil((c - d) / 86400000));
    
  }