teams_color = {
    aston_martin: "#388c74",
    ferrari: "#ff1434",
    red_bull_racing: "#3874c4",
    mercedes: "#70d4bc",
    mclaren: "#f88424",
    alpine: "#2894d4",
    haas_f1_team: "#b8bcbc",
    williams: "#38bcdc",
    alfa_romeo: "#d02c4c",
    alphatauri: "#608cac"
}



function changeBackgroundColor(team){

    let _team = team.replaceAll(' ', '_').toLowerCase();
    console.log(_team);

    let body_back = document.getElementsByClassName("f1-app")[0]
    body_back.style.backgroundImage = `repeating-radial-gradient( circle at 0 0, transparent 0, black 40px ), repeating-linear-gradient( ${teams_color[_team]}, ${teams_color[_team]} )`
    console.log(body_back.style.backgroundImage)

}

function originalBackground(){
    let body_back = document.getElementsByClassName("f1-app")[0]
    body_back.style.backgroundImage = "repeating-radial-gradient( circle at 0 0, transparent 0, white 40px ), repeating-linear-gradient( black, black )"  
}

function changeBiographyLineColor(team){

    let _team = team.replaceAll(' ', '_').toLowerCase();
    console.log(_team);

    let bio_line = document.getElementsByClassName("biography-line")[0]
    console.log(bio_line)
    bio_line.style.borderRight = `5px solid ${teams_color[_team]}`
    bio_line.style.borderBottom = `5px solid ${teams_color[_team]}`

}