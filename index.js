// code your solution here

const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

function superbowlWin(array) {
    let win = array.find(isWin);
    // console.log("testing suberbowlWin")
    // console.log(win)
    if (win === undefined){
        // console.log(win)
        return win;
    } else {
        // console.log(win["year"])
        return win["year"]
    }
}

function isWin(element,index,array){
    // console.log("testing isWin")
    // console.log(element["result"]==="W")
    return element["result"] === "W"
}

superbowlWin(record);