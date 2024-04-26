const message1 = 
`Base Eye Exam 


Visual Acuity (Snellen - Linear) 

	 	Right	Left
	Dist sc	20/40 +1	20/30 -2
	Dist ph sc	20/20 -1	20/15





Tonometry (Tonopen, 1:50 PM) 

	 	Right	Left
	Pressure	35	12





Tonometry #2 (1:51 PM) 

	 	Right	Left
	Pressure	32	





Tonometry #3 (1:51 PM) 

	 	Right	Left
	Pressure	30	





Tonometry #4 (Tonopen, 1:51 PM) 

	 	Right	Left
	Pressure	13	





Pupils 

	 	Pupils	Dark	Light	Shape	React	APD
	Right	PERRL	4	3	Round	Brisk	yes
	Left	PERRL	4	2	Round	Brisk	None





Visual Fields 

	 	Right	Left
		Full	
	Restrictions		Total superior nasal deficiency





Extraocular Movement 

	 	Right	Left
		Full	Full





Neuro/Psych 

	Oriented x3: Yes
	Mood/Affect: Normal





Dilation 

	Both eyes: 1% Tropicamide, 2.5% Phenylephrine @ 1:52 PM






Slit Lamp and Fundus Exam 


External Exam 

	 	Right	Left
	External	Normal	Normal





Slit Lamp Exam 

	 	Right	Left
	Lids/Lashes	Normal for age	Normal for age
	Conjunctiva/Sclera	Normal	Normal
	Cornea	Clear and compact	Clear and compact
	Anterior Chamber	Deep and quiet	Deep and quiet
	Iris	Normal pupil size and shape	Normal pupil size and shape
	Lens	Clear	Clear
	Anterior Vitreous	Normal	Normal





Fundus Exam 

	 	Right	Left
	Disc	No edema; no vascularization; good color (Volk 78 d Lens)	No edema; no vascularization; good color (Volk 78 d Lens)
	C/D Ratio	0.3	0.3
	Macula	Normal reflex; without edema	Normal reflex; without edema
	Vessels	Perfused; no tortuosity or abnormality	Perfused; no tortuosity or abnormality
	Periphery	Attached; no retinal or choroidal lesions	Attached; no retinal or choroidal lesions





 

`

function convertExam() {
    var message = document.getElementById("examinput").value
    //all possible visual acuities. What if there is more than one recording? How often does that even happen?
    var distVAscOD = ""
    var distVAccOD = ""
    var distVAscOS = ""
    var distVAccOS = ""
    var distVAscphOD = ""
    var distVAscphOS = ""
    var distVAccphOD = ""
    var distVAccphOS = ""
    var nearVAscOD = ""
    var nearVAccOD = ""
    var nearVAscOS = ""
    var nearVAccOS = ""
    var iopOD = []
    var iopOS = []
    var eomOD = ""
    var eomOS = ""
    var pupPERRLOD = ""
    var pupPERRLOS = ""
    var pupDarkOD = ""
    var pupDarkOS = ""
    var pupLightOD = ""
    var pupLightOS = ""
    var pupShapeOD = ""
    var pupShapeOS = ""
    var pupReactOD = ""
    var pupReactOS = ""
    var pupAPDOD = ""
    var pupAPDOS = ""
    var fieldOD = ""
    var fieldOS = ""
    var fieldRestrictOD = ""
    var fieldRestrictOS = ""

    var externalOD = ""
    var externalOS = ""
    var lidsOD = ""
    var lidsOS = ""
    var conjscleraOD = ""
    var conjscleraOS = ""
    var corneaOD = ""
    var corneaOS = ""
    var anteriorChamberOD = ""
    var anteriorChamberOS = ""
    var irisOD = ""
    var irisOS = ""
    var lensOD = ""
    var lensOS = ""
    var antVitOD = ""
    var antVitOS = ""

    var discOD = ""
    var discOS = ""
    var cupToDiscOD = ""
    var cupToDiscOS = ""
    var maculaOD = ""
    var maculaOS = ""
    var vesselsOD = ""
    var vesselsOS = ""
    var peripheryOD = ""
    var peripheryOS = ""

    var finalString = ""
    mJson = message.split(/[\n\t_]/)
    let trimmedJSON = []
    // console.log(mJson)
    for(var i = 0; i < mJson.length; i++) {
        console.log(mJson[i])
        // if(mJson[i] !== "" && mJson[i] !== " ") {
            trimmedJSON = trimmedJSON.concat(mJson[i])
        // }
    }
    //by removing all empty fields, then you need to look at the next field to know if something was left blank
    for (var i = 0; i < trimmedJSON.length; i++) {
        //currently this assumes no fields are left unfilled. If something is unfilled, then the logic may put the wrong exam in the wrong eye
        // if(mJson[i] !== "" && mJson[i] !== " ") {
        //then not a blank line
        if(trimmedJSON[i].includes("Dist sc")) { 
            distVAscOD = trimmedJSON[i+1]
            distVAscOS = trimmedJSON[i+2]
            // finalString = finalString.concat("Dist sc OD: ")
            // if(distVAscOD.length > 2) {
            //     finalString = finalString.concat(distVAscOD)
            //     finalString = finalString.concat("; OS: ")
            // }
            // else {
            //     finalString = finalString.concat("***; OS: ")
            // }
            
            // if(distVAscOS.length > 2) {
            //     finalString = finalString.concat(distVAscOS)
            //     finalString = finalString.concat("; ")
            // }
            // else {
            //     finalString = finalString.concat("***; ")
            // }
        }
        if(trimmedJSON[i].includes("Dist ph sc")) { 
            distVAscphOD = trimmedJSON[i+1]
            distVAscphOS = trimmedJSON[i+2]
            // finalString = finalString.concat("Dist sc OD: ")
            // if(distVAscOD.length > 2) {
            //     finalString = finalString.concat(distVAscOD)
            //     finalString = finalString.concat("; OS: ")
            // }
            // else {
            //     finalString = finalString.concat("***; OS: ")
            // }
            // if(distVAscOS.length > 2) {
            //     finalString = finalString.concat(distVAscOS)
            //     finalString = finalString.concat("; ")
            // }
            // else {
            //     finalString = finalString.concat("***; ")
            // }
        }
        if(trimmedJSON[i].includes("Dist cc")) {
            distVAccOD = trimmedJSON[i+1]
            distVAccOS = trimmedJSON[i+2]
        }
        if(trimmedJSON[i].includes("Dist ph cc")) {
            distVAccphOD = trimmedJSON[i+1]
            distVAccphOS = trimmedJSON[i+2]
        }
        if(trimmedJSON[i].includes("Near sc")) {
            nearVAscOD = trimmedJSON[i+1]
            nearVAscOS = trimmedJSON[i+2]
        }
        if(trimmedJSON[i].includes("Near cc")) {
            nearVAccOD = trimmedJSON[i+1]
            nearVAccOS = trimmedJSON[i+2]
        }
        if(trimmedJSON[i].includes("Pressure")) {
            iopOD = iopOD.concat([trimmedJSON[i+1]]) 
            iopOS = iopOS.concat([trimmedJSON[i+2]])
        }
        if(trimmedJSON[i].includes("Extraocular")) {
            eomOD = trimmedJSON[i+8]
            eomOS = trimmedJSON[i+9]
        }
        if(trimmedJSON[i].includes("Pupils") && trimmedJSON[i+3] === " ") {
            // console.log("going thru pupils")
            //find out if Dark, Light, Shape, React, APD exist
            //then keep track of all of them, since it has to be in that order
            var perrl = false
            var dark = false
            var light = false
            var shape = false
            var react = false
            var apd = false
            var count = 0
            for(var j = i+4; j <i+10; j++) {
                if(trimmedJSON[j].includes("Pupils")) {
                    perrl = true
                    count++
                }
                else if(trimmedJSON[j].includes("Dark")) {
                    dark = true
                    count++
                }
                else if(trimmedJSON[j].includes("Light")) {
                    light = true
                    count++
                }
                else if(trimmedJSON[j].includes("Shape")) {
                    shape = true
                    count++
                }
                else if(trimmedJSON[j].includes("React")) {
                    react = true
                    count++
                }
                else if(trimmedJSON[j].includes("APD")) {
                    apd = true
                    count++
                }
            }
            //need to add count from i+3+count+1 -> Right eye pupil findings
            for(var j=i+4; j<i+4+count; j++) {
                if(trimmedJSON[j].includes("Pupils")) {
                    pupPERRLOD = trimmedJSON[j+count+2]
                    pupPERRLOS = trimmedJSON[j+count+count+4]
                }
                else if(trimmedJSON[j].includes("Dark")) {
                    pupDarkOD = trimmedJSON[j+count+2]
                    pupDarkOS = trimmedJSON[j+count+count+4]
                }
                else if(trimmedJSON[j].includes("Light")) {
                    pupLightOD = trimmedJSON[j+count+2]
                    pupLightOS = trimmedJSON[j+count+count+4]
                }
                else if(trimmedJSON[j].includes("Shape")) {
                    pupShapeOD = trimmedJSON[j+count+2]
                    pupShapeOS = trimmedJSON[j+count+count+4]
                }
                else if(trimmedJSON[j].includes("React")) {
                    pupReactOD = trimmedJSON[j+count+2]
                    pupReactOS = trimmedJSON[j+count+count+4]
                }
                else if(trimmedJSON[j].includes("APD")) {
                    pupAPDOD = trimmedJSON[j+count+2]
                    pupAPDOS = trimmedJSON[j+count+count+4]
                }
            }
            console.log(count)
            // pupPERRLOD = trimmedJSON[i+12]
            // pupDarkOD = trimmedJSON[i+13]
            // pupLightOD = trimmedJSON[i+14]
            // pupShapeOD = trimmedJSON[i+15]
            // pupReactOD = trimmedJSON[i+16]
            // pupAPDOD = trimmedJSON[i+17]

            // pupPERRLOS = trimmedJSON[i+20]
            // pupDarkOS = trimmedJSON[i+21]
            // pupLightOS = trimmedJSON[i+22]
            // pupShapeOS = trimmedJSON[i+23]
            // pupReactOS = trimmedJSON[i+24]
            // pupAPDOS = trimmedJSON[i+25]
        }
        if(trimmedJSON[i].includes("Visual Fields")) {
            fieldOD = trimmedJSON[i+8]
            fieldOS = trimmedJSON[i+9]
            fieldRestrictOD = trimmedJSON[i+12]
            fieldRestrictOS = trimmedJSON[i+13]
        }
        if(trimmedJSON[i].includes("Slit Lamp and Fundus Exam")) {
            externalOD = trimmedJSON[i+11]
            externalOS = trimmedJSON[i+12]
            lidsOD = trimmedJSON[i+26]
            lidsOS = trimmedJSON[i+27]
            conjscleraOD = trimmedJSON[i+30]
            conjscleraOS = trimmedJSON[i+31]
            corneaOD = trimmedJSON[i+34]
            corneaOS = trimmedJSON[i+35]
            anteriorChamberOD = trimmedJSON[i+38]
            anteriorChamberOS = trimmedJSON[i+39]
            irisOD = trimmedJSON[i+42]
            irisOS = trimmedJSON[i+43]
            lensOD = trimmedJSON[i+46]
            lensOS = trimmedJSON[i+47]
            antVitOD = trimmedJSON[i+50]
            antVitOS = trimmedJSON[i+51]
            //11 and 12 external
            //26 and 27 lids/lashes
            //30 and 31 conj/sclera
            //34 and 35 cornea
            //38 and 39 anterior chamber
            //42 and 43 iris
            //46 and 47 lens
            //50 and 51 ant vitreous
        }
        if(trimmedJSON[i].includes("Fundus Exam") && !trimmedJSON[i].includes("Slit Lamp")) {
            //assumes posterior vit not included in this?
            discOD = trimmedJSON[i+8]
            discOS = trimmedJSON[i+9]
            cupToDiscOD = trimmedJSON[i+12]
            cupToDiscOS = trimmedJSON[i+13]
            maculaOD = trimmedJSON[i+16]
            maculaOS = trimmedJSON[i+17]
            vesselsOD = trimmedJSON[i+20]
            vesselsOS = trimmedJSON[i+21]
            peripheryOD = trimmedJSON[i+24]
            peripheryOS = trimmedJSON[i+25]
            //8 and 9 disc
            //11 and 12 C/D
            //15 and 16 macula
            //19 and 20 vessels
            //23 and 24 periphery
        }




            // if(trimmedJSON[i].includes("Dist sc") || trimmedJSON[i].includes("Near")) {
            //     //then next elements will be visual acuity
            //     //check if next element is blank
            //     if(trimmedJSON[i+1] === "" || trimmedJSON[i+1] === " ") {
            //         //then the right eye is blank...
            //         finalString.concat(trimmedJSON[i] + " OD: ***; OS: " + trimmedJSON[i+2])
            //     }
            //     if(trimmedJSON[i+2].includes("+")) {
            //         finalString = finalString.concat(trimmedJSON[i] + " OD: " + trimmedJSON[i+1] + trimmedJSON[i+2]+"; ")
            //     }
            //     finalString = finalString.concat(trimmedJSON[i] + " OD: " + trimmedJSON[i+1] + "; OS: " + trimmedJSON[i+2])
            //     console.log(finalString)
            //     //what about pinhole?
            // }
            // if(trimmedJSON[i].includes("Pressure")) {
            //     //then next element will be tonometry
            //     finalString = finalString.concat("; IOP " + trimmedJSON[i+1] + "|" + trimmedJSON[i+2]+", ")
            //     console.log(finalString)
            //     //what about repeat pressures for attacks?
            // }
            // if(trimmedJSON[i].includes("Extraocular")) {
            //     //then EOMs will be next. 
            //     var eoms = ""
            //     // console.log(trimmedJSON[i] + " " + trimmedJSON[i+1] + " " + trimmedJSON[i+2] + " " + trimmedJSON[i+3] + " " + trimmedJSON[i+4] + " " + trimmedJSON[i+5] + " " + trimmedJSON[i+6] + " " + trimmedJSON[i+7] + " " + trimmedJSON[i+8] + " " + trimmedJSON[i+9] + " ")
            //     // console.log(mJson[i+4] + " " + mJson[i+5] + " " + mJson[i+6] + " " + mJson[i+7])
            //     if(trimmedJSON[i+8] === "Full" && trimmedJSON[i+9] === "Full") {
            //         eoms = 'EOMs full OU. '
            //     }
            //     else if (trimmedJSON[i+8] == "Full") {
            //         eoms = "EOMs OD full, OS ***. "
            //     }
            //     else if (trimmedJSON[i+9] == "Full") {
            //         eoms = "EOMs OD ***, OS full. "
            //     }
            //     else {
            //         eoms = "EOMs ***. "
            //     }
            //     finalString = finalString.concat(eoms)
            //     console.log(finalString)
            // }
            // if(trimmedJSON[i].includes("Pupils") && trimmedJSON[i+4].includes("Pupils")) {
            //     apdOD = ""
            //     apdOS = ""
            //     pupils = ""
            //     console.log(trimmedJSON[i+10] + " " + trimmedJSON[i+11] + " " + trimmedJSON[i+12] + " " + trimmedJSON[i+13] + " " + trimmedJSON[i+14] + " " + trimmedJSON[i+15] + " ")
            //     if(trimmedJSON[i+16] != "not present" && trimmedJSON[i+16] != "no" && trimmedJSON[i+16] != "neg" && trimmedJSON[i+16] != "negative") {
            //         apdOD = " +APD OD"
            //     }
            //     if(trimmedJSON[23] != "not present" && trimmedJSON[23] != "no" && trimmedJSON[23] != "neg" && trimmedJSON[23] != "negative" && trimmedJSON[23] != "") {
            //         apdOS = " +APD OS"
            //     }
            //     if(apdOD != "" && apdOS != "") {
            //         pupils = " no APD OU"
            //     }
            //     else if (apdOD == "" && apdOS == "") {
            //         pupils = "pupils wnl"
            //     }
            //     else {
            //         pupils = " " + apdOD + " " + apdOS
            //     }
            //     finalString = finalString.concat(pupils)
            //     console.log(finalString)
            // }
        // }
    }
    console.log("VA: ")
    if(distVAscOD !== "") {
        console.log("Dist sc OD: " + distVAscOD)
    } else if (distVAscOS !== "") {
        console.log("Dist sc OD: unable")
    } else {
        console.log("")
    }
    if(distVAscphOD !== "") {
        console.log(" ph " + distVAscphOD)
    }
    if(distVAscOS !== "") {
        console.log("; OS: " + distVAscOS)
    } else if(distVAscOD != "") {
        console.log("; OS: unable")
    }
    if(distVAscphOS != "") {
        console.log(" ph " + distVAscphOS)
    }
    console.log(" ")
    if(distVAccOD !== "") {
        console.log("Dist cc OD: " + distVAccOD)
    } else if (distVAccOS !== "") {
        console.log("Dist cc OD: unable")
    } else {
        console.log("")
    }
    if(distVAccphOD !== "") {
        console.log(" ph " + distVAccphOD)
    }
    if(distVAccOS !== "") {
        console.log("; OS: " + distVAccOS)
    } else if(distVAccOD != "") {
        console.log("; OS: unable")
    }
    if(distVAccphOS != "") {
        console.log(" ph " + distVAccphOS)
    }
    console.log(" ")
    if(nearVAscOD !== "") {
        console.log("Near sc OD: " + nearVAscOD)
    } else if (nearVAscOS !== "") {
        console.log("Near sc OD: unable")
    } else {
        console.log("")
    }
    if(nearVAscOS !== "") {
        console.log("; OS: " + nearVAscOS)
    } else if(nearVAscOD != "") {
        console.log("; OS: unable")
    }
    console.log(" ")
    if(nearVAccOD !== "") {
        console.log("Near cc OD: " + nearVAccOD)
    } else if (nearVAscOS !== "") {
        console.log("Near cc OD: unable")
    } else {
        console.log("")
    }
    if(nearVAccOS !== "") {
        console.log("; OS: " + nearVAccOS)
    } else if(nearVAccOD != "") {
        console.log("; OS: unable")
    }
    
    console.log(" IOP ")
    if(iopOD.length === 0) {
        console.log("***")
    } else {
        for(var i = 0; i < iopOD.length; i++) {
            if(i != 0) {
                console.log(" -> ")
            }
            console.log(iopOD[i] + "|" + iopOS[i])
        }
    }
    console.log(" ")
    if(eomOD === "Full" && eomOS === "Full") {
        console.log(" EOMs wnl, ")
    } else if (eomOD !== "Full" && eomOS === "Full") {
        console.log(" EOM OD ***, OS full")
    } else if (eomOS !== "Full" && eomOD === "Full") {
        console.log(" EOM OD full OS ***")
    } else {
        console.log(" EOM ***; ")
    }
    console.log(" ")
    if(pupPERRLOD === "PERRL" && pupPERRLOS === "PERRL") {
        console.log(" pupils wnl; ")
    } else {
        console.log(" pupils OD: ")
        if(pupDarkOD !== "") {
            console.log(pupDarkOD)
            if(pupLightOD !== "") {
                console.log("->" + pupLightOD)
            }
        }
        else {
            console.log("***")
        }
        console.log(" ; OS: ")
        if(pupDarkOS != "") {
            console.log(pupDarkOS)
            if(pupLightOS != "") {
                console.log("->" + pupLightOS)
            }
        }
        else {
            console.log("***")
        }
        console.log("; ")
        if(pupAPDOD !== "") {
            console.log("APD OD")
        }
        if(pupAPDOS !== "") {
            console.log("APD OS")
        }
        console.log("; ")
    }
    console.log("CVF ")
    if(fieldOD !== "Full") {
        console.log("OD ***; OS: ")
    } else if(fieldOS !== "Full") {
        console.log("OD full; OS: ***")
    } else console.log("wnl. ")
    console.log("SLE OD ")
    if((externalOD === "Normal" || externalOD === "") && (lidsOD === "Normal for age" || lidsOD === "") && conjscleraOD === "Normal" && corneaOD === "Clear and compact" && anteriorChamberOD === "Deep and quiet" && irisOD === "Normal pupil size and shape" && lensOD === "Clear" && antVitOD === "Normal") {
        console.log("wnl; ")
    } else console.log("***; ")
    console.log("SLE OS ")
    if((externalOS === "Normal" || externalOS === "") && (lidsOS === "Normal for age" || lidsOS === "") && conjscleraOS === "Normal" && corneaOS === "Clear and compact" && anteriorChamberOS === "Deep and quiet" && irisOS === "Normal pupil size and shape" && lensOS === "Clear" && antVitOS === "Normal") {
        console.log("wnl; ")
    } else console.log("***; ")
    console.log("DFE OD: ")
    if(discOD === "No edema; no vascularization; good color (Volk 78 d Lens)" && cupToDiscOD === cupToDiscOS && maculaOD === "Normal reflex; without edema" && vesselsOD === "Perfused; no tortuosity or abnormality" && peripheryOD === "Attached; no retinal or choroidal lesions") {
        console.log("wnl; ")
    } else console.log("***; ")
    console.log("DFE OS: ")
    if(discOS === "No edema; no vascularization; good color (Volk 78 d Lens)" && cupToDiscOD === cupToDiscOS && maculaOS === "Normal reflex; without edema" && vesselsOS === "Perfused; no tortuosity or abnormality" && peripheryOS === "Attached; no retinal or choroidal lesions") {
        console.log("wnl; ")
    } else console.log("***; ")
<<<<<<< HEAD:parseOphExam/src/script.js
    console.log("distVAscOD: " + distVAscOD)
    console.log("distVAccOD: " + distVAccOD)
    console.log("distVAscOS: " + distVAscOS)
    console.log("distVAccOS: " + distVAccOS)
    console.log("distVAscphOD: " + distVAscphOD)
    console.log("distVAscphOS: " + distVAscphOS)
    console.log("distVAccphOD: " + distVAccphOD)
    console.log("distVAccphOS: " + distVAccphOS)
    console.log("nearVAscOD: " + nearVAscOD)
    console.log("nearVAccOD: " + nearVAccOD)
    console.log("nearVAscOS: " + nearVAscOS)
    console.log("nearVAccOS: " + nearVAccOS)
    console.log("iopOD: " + iopOD)
    console.log("iopOS: " + iopOS)
    console.log("eomOD: " + eomOD) //if not full then just grabs the first direction
    console.log("eomOS: " + eomOS)
    console.log("pupPERRLOD: " + pupPERRLOD)
    console.log("pupPERRLOS: " + pupPERRLOS)
    console.log("pupDarkOD: " + pupDarkOD)
    console.log("pupDarkOS: " + pupDarkOS)
    console.log("pupLightOD: " + pupLightOD)
    console.log("pupLightOS: " + pupLightOS)
    console.log("pupShapeOD: " + pupShapeOD)
    console.log("pupShapeOS: " + pupShapeOS)
    console.log("pupReactOD: " + pupReactOD)
    console.log("pupReactOS: " + pupReactOS)
    console.log("pupAPDOD: " + pupAPDOD)
    console.log("pupAPDOS: " + pupAPDOS)
    console.log("fieldOD: " + fieldOD)
    console.log("fieldOS: " + fieldOS)
    console.log("fieldRestrictOD: " + fieldRestrictOD)
    console.log("fieldRestrictOS: " + fieldRestrictOS)
=======

    console.log(distVAscOD)
    console.log(distVAccOD)
    console.log(distVAscOS)
    console.log(distVAccOS)
    console.log(distVAscphOD)
    console.log(distVAscphOS)
    console.log(distVAccphOD)
    console.log(distVAccphOS)
    console.log(nearVAscOD)
    console.log(nearVAccOD)
    console.log(nearVAscOS)
    console.log(nearVAccOS)
    console.log(iopOD)
    console.log(iopOS)
    console.log(eomOD) //if not full then just grabs the first direction
    console.log(eomOS)
    console.log(pupPERRLOD)
    console.log(pupPERRLOS)
    console.log(pupDarkOD)
    console.log(pupDarkOS)
    console.log(pupLightOD)
    console.log(pupLightOS)
    console.log(pupShapeOD)
    console.log(pupShapeOS)
    console.log(pupReactOD)
    console.log(pupReactOS)
    console.log(pupAPDOD)
    console.log(pupAPDOS)
    console.log(fieldOD)
    console.log(fieldOS)
    console.log(fieldRestrictOD)
    console.log(fieldRestrictOS)

>>>>>>> b0700a370491a89bf985329c412e3f7c20e2e85c:examparser/src/script.js

    console.log("externalOD: " + externalOD)
    console.log("externalOS: " + externalOS)
    console.log("lidsOD: " + lidsOD)
    console.log("lidsOS: " + lidsOS)
    console.log("conjscleraOD: " + conjscleraOD)
    console.log("conjscleraOS: " + conjscleraOS)
    console.log("corneaOD: " + corneaOD)
    console.log("corneaOS: " + corneaOS)
    console.log("anteriorChamberOD: " + anteriorChamberOD)
    console.log("anteriorChamberOS: " + anteriorChamberOS)
    console.log("irisOD: " + irisOD)
    console.log("irisOS: " + irisOS)
    console.log("lensOD: " + lensOD)
    console.log("lensOS: " + lensOS)
    console.log("antVitOD: " + antVitOD)
    console.log("antVitOS: " + antVitOS)

    finalString = finalString.concat("VA:")
    if(distVAscOD !== "") {
        finalString = finalString.concat(" Dist sc OD: " + distVAscOD)
    } else if (distVAscOS !== "") {
        finalString = finalString.concat(" Dist sc OD: unable")
    } else {
        finalString = finalString.concat("")
    }
    if(distVAscphOD !== "") {
        finalString = finalString.concat(" ph " + distVAscphOD)
    }
    if(distVAscOS !== "") {
        finalString = finalString.concat("; OS: " + distVAscOS)
    } else if(distVAscOD != "") {
        finalString = finalString.concat("; OS: unable")
    }
    if(distVAscphOS != "") {
        finalString = finalString.concat(" ph " + distVAscphOS)
    }
    if(distVAccOD !== "") {
        finalString = finalString.concat(" Dist cc OD: " + distVAccOD)
    } else if (distVAccOS !== "") {
        finalString = finalString.concat(" Dist cc OD: unable")
    } else {
        finalString = finalString.concat("")
    }
    if(distVAccphOD !== "") {
        finalString = finalString.concat(" ph " + distVAccphOD)
    }
    if(distVAccOS !== "") {
        finalString = finalString.concat("; OS: " + distVAccOS)
    } else if(distVAccOD != "") {
        finalString = finalString.concat("; OS: unable")
    }
    if(distVAccphOS != "") {
        finalString = finalString.concat(" ph " + distVAccphOS)
    }
    if(nearVAscOD !== "") {
        finalString = finalString.concat(" Near sc OD: " + nearVAscOD)
    } else if (nearVAscOS !== "") {
        finalString = finalString.concat(" Near sc OD: unable")
    } else {
        finalString = finalString.concat("")
    }
    if(nearVAscOS !== "") {
        finalString = finalString.concat("; OS: " + nearVAscOS)
    } else if(nearVAscOD != "") {
        finalString = finalString.concat("; OS: unable")
    }
    finalString = finalString.concat(" ")
    if(nearVAccOD !== "") {
        finalString = finalString.concat("Near cc OD: " + nearVAccOD)
    } else if (nearVAscOS !== "") {
        finalString = finalString.concat("Near cc OD: unable")
    } else {
        finalString = finalString.concat("")
    }
    if(nearVAccOS !== "") {
        finalString = finalString.concat("; OS: " + nearVAccOS)
    } else if(nearVAccOD != "") {
        finalString = finalString.concat("; OS: unable")
    }
    
    finalString = finalString.concat("; IOP ")
    if(iopOD.length === 0) {
        finalString = finalString.concat("***")
    } else {
        for(var i = 0; i < iopOD.length; i++) {
            if(i != 0) {
                finalString = finalString.concat(" -> ")
            }
            finalString = finalString.concat(iopOD[i] + "|" + iopOS[i])
        }
    }
    if(eomOD === "Full" && eomOS === "Full") {
        finalString = finalString.concat("; EOMs wnl, ")
    } else if (eomOD !== "Full" && eomOS === "Full") {
        finalString = finalString.concat(" EOM OD ***, OS full")
    } else if (eomOS !== "Full" && eomOD === "Full") {
        finalString = finalString.concat("; EOM OD full OS ***")
    } else {
        finalString = finalString.concat("; EOM ***;")
    }
    if(pupPERRLOD === "PERRL" && pupPERRLOS === "PERRL") {
        finalString = finalString.concat(" pupils wnl; ")
    } else {
        finalString = finalString.concat(" pupils OD: ")
        if(pupDarkOD !== "") {
            finalString = finalString.concat(pupDarkOD)
            if(pupLightOD !== "") {
                finalString = finalString.concat("->" + pupLightOD)
            }
        }
        else {
            finalString = finalString.concat("***")
        }
        finalString = finalString.concat(" ; OS: ")
        if(pupDarkOS != "") {
            finalString = finalString.concat(pupDarkOS)
            if(pupLightOS != "") {
                finalString = finalString.concat("->" + pupLightOS)
            }
        }
        else {
            finalString = finalString.concat("***")
        }
        if(pupAPDOD === "yes"  || pupAPDOD === "pos" || pupAPDOD === "+" || pupAPDOD === "Pos" || pupAPDOD === "Positive" || pupAPDOD === "APD" || pupAPDOD === "Yes") {
            finalString = finalString.concat("; ")
            finalString = finalString.concat("+APD OD")
        }
        if(pupAPDOS === "yes"  || pupAPDOS === "pos" || pupAPDOS === "+" || pupAPDOS === "Pos" || pupAPDOS === "Positive" || pupAPDOS === "APD" || pupAPDOS === "Yes") {
            finalString = finalString.concat("; ")
            finalString = finalString.concat("+APD OS")
        }
        finalString = finalString.concat("; ")
    }
    finalString = finalString.concat("CVF ")
    if(fieldOD !== "Full") {
        finalString = finalString.concat("OD " + fieldRestrictOD + "; OS: ")
        if(fieldOS !== "Full") { 
            finalString.concat(fieldRestrictOS)
        } else {
            finalString.concat("full")
        }
        // finalString = finalString.concat("OD ***; OS: ")
    } else if(fieldOS !== "Full") {
        // finalString = finalString.concat("OD full; OS: ***")
        finalString = finalString.concat("OD full; OS: " + fieldRestrictOS)
    } else finalString = finalString.concat("wnl. ")
    finalString = finalString.concat("; SLE OD ")
    if((externalOD === "Normal" || externalOD === "") && (lidsOD === "Normal for age" || lidsOD === "") && conjscleraOD === "Normal" && corneaOD === "Clear and compact" && anteriorChamberOD === "Deep and quiet" && irisOD === "Normal pupil size and shape" && lensOD === "Clear" && antVitOD === "Normal") {
        finalString = finalString.concat("wnl; ")
    } else {
        finalString = finalString.concat("***; ")
        
    }
    finalString = finalString.concat("SLE OS ")
    if((externalOS === "Normal" || externalOS === "") && (lidsOS === "Normal for age" || lidsOS === "") && conjscleraOS === "Normal" && corneaOS === "Clear and compact" && anteriorChamberOS === "Deep and quiet" && irisOS === "Normal pupil size and shape" && lensOS === "Clear" && antVitOS === "Normal") {
        finalString = finalString.concat("wnl; ")
    } else finalString = finalString.concat("***; ")
    finalString = finalString.concat("DFE OD: ")
    if(discOD === "No edema; no vascularization; good color (Volk 78 d Lens)" && cupToDiscOD === cupToDiscOS && maculaOD === "Normal reflex; without edema" && vesselsOD === "Perfused; no tortuosity or abnormality" && peripheryOD === "Attached; no retinal or choroidal lesions") {
        finalString = finalString.concat("wnl; ")
    } else finalString = finalString.concat("***; ")
    finalString = finalString.concat("DFE OS: ")
    if(discOS === "No edema; no vascularization; good color (Volk 78 d Lens)" && cupToDiscOD === cupToDiscOS && maculaOS === "Normal reflex; without edema" && vesselsOS === "Perfused; no tortuosity or abnormality" && peripheryOS === "Attached; no retinal or choroidal lesions") {
        finalString = finalString.concat("wnl; ")
    } else finalString = finalString.concat("***; ")

    console.log("discOD: " + discOD)
    console.log("discOS: " + discOS)
    console.log("cupToDiscOD: " + cupToDiscOD)
    console.log("cupToDiscOS: " + cupToDiscOS)
    console.log("maculaOD: " + maculaOD)
    console.log("maculaOS: " + maculaOS)
    console.log("vesselsOD: " + vesselsOD)
    console.log("vesselsOS: " + vesselsOS)
    console.log("peripheryOD: " + peripheryOD)
    console.log("peripheryOS: " + peripheryOS)

    //`@NAME@  @MRN@  @DOB@
    //@AGE@ @SEX@ presenting with *** which began ***. Has a history of ***.  A/P: *** Please schedule with *** . @PH@  `
    //'VA: sc OD 20/*** ph 20/***   OS 20/*** ph 20/***.  IOP, EOM, CVF, Pupils WNL***.  SLE OD ***. SLE OS:*** DFE OD:***  DFE OS:***'

    // apdOD = ""
    // apdOS = ""
    // pupils = ""
    // if(mJson[39] != "not present" && mJson[39] != "no" && mJson[39] != "neg" && mJson[39] != "negative" && mJson[39] != "") {
    //     apdOD = " +APD OD"
    // }
    // if(mJson[44] != "not present" && mJson[44] != "no" && mJson[44] != "neg" && mJson[44] != "negative" && mJson[44] != "") {
    //     apdOS = " +APD OS"
    // }
    // if(apdOD != "" && apdOS != "") {
    //     pupils = " no APD OU"
    // }
    // else if (apdOD == "" && apdOS == "") {
    //     pupils = ""
    // }
    // else {
    //     pupils = " " + apdOD + " " + apdOS
    // }

    // fieldOD = ""
    // fieldOS = ""
    // fields = ""
    // if(mJson[56] == "Full") {
    //     fieldOD = "full"
    // }
    // else {
    //     fieldOD = "***"
    // }
    // if(mJson[57] == "Full") {
    //     fieldOS = "full"
    // }
    // else {
    //     fieldOS = "***"
    // }
    // fields = "CVF OD "+ fieldOD + " OS " + fieldOS

    // eomOD = ''
    // eomOS = ''
    // eoms = ''
    // if(mJson[69] == "Full" && mJson[70] == "Full") {
    //     eoms = 'EOMs full OU. '
    // }
    // else if (mJson[69] == "Full") {
    //     eoms = "EOMs OD full, OS ***. "
    // }
    // else if (mJson[70] == "Full") {
    //     eoms = "EOMs OD ***, OS full. "
    // }
    // else {
    //     eoms = "EOMs ***. "
    // }
    // if(mJson[71] != "") {
    //     eoms = eoms + mJson[71] + ". "
    // }

    // sleOD = ''
    // sleOS = ''

    // if(mJson[87] != "Normal for age") {
    //     sleOD = sleOD + 'lids ' + mJson[87] 
    // }
    // if(mJson[91] != "Normal") {
    //     sleOD = sleOD + ', conj ' + mJson[91]
    // }
    // if(mJson[95] != "Clear and compact") {
    //     sleOD = sleOD + ', cornea ' + mJson[95]
    // }
    // if(mJson[99] != "Deep and quiet") {
    //     sleOD = sleOD + ', AC ' + mJson[99]
    // }
    // if(mJson[103] != "Normal pupil size and shape") {
    //     sleOD = sleOD + ', iris ' + mJson[103]
    // }
    // if(mJson[107] != "Clear") {
    //     sleOD = sleOD + ', ' + mJson[107]
    // }
    // if(mJson[111] != "Normal") {
    //     sleOD = sleOD + ', vit ' + mJson[111]
    // }
    // if(sleOD == "") {
    //     sleOD = "wnl"
    // }
    // else {
    //     sleOD = sleOD + ' otherwise wnl'
    // }

    // if(mJson[88] != "Normal for age") {
    //     sleOS = sleOS + 'lids ' + mJson[88] 
    // }
    // if(mJson[92] != "Normal") {
    //     sleOS = sleOS + ', conj ' + mJson[92]
    // }
    // if(mJson[96] != "Clear and compact") {
    //     sleOS = sleOS + ', cornea ' + mJson[96]
    // }
    // if(mJson[100] != "Deep and quiet") {
    //     sleOS = sleOS + ', AC ' + mJson[100]
    // }
    // if(mJson[104] != "Normal pupil size and shape") {
    //     sleOS = sleOS + ', iris ' + mJson[104]
    // }
    // if(mJson[108] != "Clear") {
    //     sleOS = sleOS + ', ' + mJson[108]
    // }
    // if(mJson[112] != "Normal") {
    //     sleOS = sleOS + ', vit ' + mJson[112]
    // }
    // if(sleOS == "") {
    //     sleOS = "wnl"
    // }
    // else {
    //     sleOS = sleOS + ' otherwise wnl'
    // }

    // dfeOD = ''
    // dfeOS = ''
    // if(mJson[124] != "No edema, no vascularization, good color (Volk 78 d Lens)") {
    //     dfeOD = dfeOD + mJson[124] + ' C/D 0.' + mJson[129]
    // }
    // if(mJson[134] != "Normal reflex, without edema") {
    //     dfeOD = dfeOD + ", " + mJson[134]
    // }
    // if(mJson[138] != "Perfused, no tortuosity or abnormality") {
    //     dfeOD = dfeOD + ", " + mJson[138]
    // }
    // if(mJson[142] != "Attached, no retinal or choroidal lesions") {
    //     dfeOD = dfeOD + ", " + mJson[142]
    // }

    // if(mJson[125] != "No edema, no vascularization, good color (Volk 78 d Lens)") {
    //     dfeOS = dfeOS + mJson[125] + ' C/D 0.' + mJson[130]
    // }
    // if(mJson[135] != "Normal reflex, without edema") {
    //     dfeOS = dfeOS + ", " + mJson[135]
    // }
    // if(mJson[139] != "Perfused, no tortuosity or abnormality") {
    //     dfeOS = dfeOS + ", " + mJson[139]
    // }
    // if(mJson[143] != "Attached, no retinal or choroidal lesions") {
    //     dfeOS = dfeOS + ", " + mJson[143]
    // }
    // if(dfeOD == "") {
    //     dfeOD = "wnl"
    // }
    // if (dfeOS == "") {
    //     dfeOS = "wnl"
    // }

    // finalOutput = "test output" //'VA: ' + mJson[9] + " OD: " + mJson[10] + "; OS: " + mJson[11] + "; IOP " + mJson[23]+"|" + mJson[24] + "; Pupils: OD " + mJson[37]+'->'+mJson[38] + " OS " + mJson[42]+'->'+mJson[43] + pupils + ", " + fields + ", " + eoms + "SLE OD: " + sleOD + ", SLE OS: " + sleOS + "; DFE OD: " + dfeOD + "; DFE OS: " + dfeOS
    console.log(finalString)

    // Update header text
    document.querySelector('#header').innerHTML = finalString

    // Log to console
    // console.log('VA: ' + mJson[9] + " OD: " + mJson[10] + "; OS: " + mJson[11] + "; IOP " + mJson[23]+"|" + mJson[24] + "; Pupils: OD " + mJson[37]+'->'+mJson[38] + " OS " + mJson[42]+'->'+mJson[43] + pupils + ", " + fields + ", " + eoms + "SLE OD: " + sleOD + ", SLE OS: " + sleOS + "; DFE OD: " + dfeOD + "; DFE OS: " + dfeOS)

    //`@NAME@  @MRN@  @DOB@
    //@AGE@ @SEX@ presenting with *** which began ***. Has a history of ***.  A/P: *** Please schedule with *** . @PH@  `
    //'VA: sc OD 20/*** ph 20/***   OS 20/*** ph 20/***.  IOP, EOM, CVF, Pupils WNL***.  SLE OD ***. SLE OS:*** DFE OD:***  DFE OS:***'
}
