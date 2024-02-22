var cricketWorldCupWinners = [
    { team: "WestIndies", yearsWon: [1975, 1979] },
    { team: "India", yearsWon: [1983, 2011] },
    { team: "Australia", yearsWon: [1987, 1999, 2003, 2007, 2015,2023] },
    { team: "Pakistan", yearsWon: [1992] },
    { team: "Sri Lanka", yearsWon: [1996] },
    { team: "England", yearsWon: [2019] }
  ];

//cricketWorldCupWinners.forEach(t=>console.log(t.team,t.yearsWon.length))

var st=new Set();
    for (let t of cricketWorldCupWinners){
        let years=t.yearsWon
        for(let y of years){
            if(y>1800 && y<2000){
                st.add(t.team)
            }
        }
    }

console.log(st);

