// const message = 
// `Base Eye Exam 
	
// Visual Acuity (Snellen - Linear) 
// 	 	Right	Left
// 	Dist sc	20/20	20/25 -2


	
// Tonometry (Tonopen, 8:54 PM) 
// 	 	Right	Left
// 	Pressure	17	18


	
// Pupils 
// 	 	Dark	Light	APD
// 	Right	2	1	not present
// 	Left	2	1	not present


	
// Visual Fields 
// 	 	Right	Left
// 		Full	Full


	
// Extraocular Movement 
// 	 	Right	Left
// 		Full	Full
// Occasional dysconjugate gaze (possibly due to concussion)





// Slit Lamp and Fundus Exam 
	
// Slit Lamp Exam 
// 	 	Right	Left
// 	Lids/Lashes	Normal for age	Normal for age
// 	Conjunctiva/Sclera	Normal	Normal
// 	Cornea	Clear and compact	Clear and compact
// 	Anterior Chamber	Deep and quiet	Deep and quiet
// 	Iris	Normal pupil size and shape	Normal pupil size and shape
// 	Lens	Clear	Clear
// 	Vitreous	Normal	Normal


	
// Fundus Exam 
// 	 	Right	Left
// 	Disc	No edema, no vascularization, good color (Volk 78 d Lens)	No edema, no vascularization, good color (Volk 78 d Lens)
// 	C/D Ratio	.2	.2
// 	Macula	Normal reflex, without edema	Normal reflex, without edema
// 	Vessels	Perfused, no tortuosity or abnormality	Perfused, no tortuosity or abnormality
// 	Periphery	Attached, no retinal or choroidal lesions	Attached, no retinal or choroidal lesions
// `
function convertExam() {
    var message = document.getElementById("examinput").value
    console.log(message)

    mJson = message.split(/[.\n\t_]/)

    apdOD = ""
    apdOS = ""
    pupils = ""
    if(mJson[39] != "not present" && mJson[39] != "no" && mJson[39] != "neg" && mJson[39] != "negative" && mJson[39] != "") {
        apdOD = " +APD OD"
    }
    if(mJson[44] != "not present" && mJson[44] != "no" && mJson[44] != "neg" && mJson[44] != "negative" && mJson[44] != "") {
        apdOS = " +APD OS"
    }
    if(apdOD != "" && apdOS != "") {
        pupils = " no APD OU"
    }
    else if (apdOD == "" && apdOS == "") {
        pupils = ""
    }
    else {
        pupils = " " + apdOD + " " + apdOS
    }

    fieldOD = ""
    fieldOS = ""
    fields = ""
    if(mJson[56] == "Full") {
        fieldOD = "full"
    }
    else {
        fieldOD = "***"
    }
    if(mJson[57] == "Full") {
        fieldOS = "full"
    }
    else {
        fieldOS = "***"
    }
    fields = "CVF OD "+ fieldOD + " OS " + fieldOS

    eomOD = ''
    eomOS = ''
    eoms = ''
    if(mJson[69] == "Full" && mJson[70] == "Full") {
        eoms = 'EOMs full OU. '
    }
    else if (mJson[69] == "Full") {
        eoms = "EOMs OD full, OS ***. "
    }
    else if (mJson[70] == "Full") {
        eoms = "EOMs OD ***, OS full. "
    }
    else {
        eoms = "EOMs ***. "
    }
    if(mJson[71] != "") {
        eoms = eoms + mJson[71] + ". "
    }

    sleOD = ''
    sleOS = ''

    if(mJson[87] != "Normal for age") {
        sleOD = sleOD + 'lids ' + mJson[87] 
    }
    if(mJson[91] != "Normal") {
        sleOD = sleOD + ', conj ' + mJson[91]
    }
    if(mJson[95] != "Clear and compact") {
        sleOD = sleOD + ', cornea ' + mJson[95]
    }
    if(mJson[99] != "Deep and quiet") {
        sleOD = sleOD + ', AC ' + mJSON[99]
    }
    if(mJson[103] != "Normal pupil size and shape") {
        sleOD = sleOD + ', iris ' + mJson[103]
    }
    if(mJson[107] != "Clear") {
        sleOD = sleOD + ', ' + mJson[107]
    }
    if(mJson[111] != "Normal") {
        sleOD = sleOD + ', vit ' + mJson[111]
    }
    if(sleOD == "") {
        sleOD = "wnl"
    }
    else {
        sleOD = sleOD + ' otherwise wnl'
    }

    if(mJson[88] != "Normal for age") {
        sleOS = sleOS + 'lids ' + mJson[88] 
    }
    if(mJson[92] != "Normal") {
        sleOS = sleOS + ', conj ' + mJson[92]
    }
    if(mJson[96] != "Clear and compact") {
        sleOS = sleOS + ', cornea ' + mJson[96]
    }
    if(mJson[100] != "Deep and quiet") {
        sleOS = sleOS + ', AC ' + mJSON[100]
    }
    if(mJson[104] != "Normal pupil size and shape") {
        sleOS = sleOS + ', iris ' + mJson[104]
    }
    if(mJson[108] != "Clear") {
        sleOS = sleOS + ', ' + mJson[108]
    }
    if(mJson[112] != "Normal") {
        sleOS = sleOS + ', vit ' + mJson[112]
    }
    if(sleOS == "") {
        sleOS = "wnl"
    }
    else {
        sleOS = sleOS + ' otherwise wnl'
    }

    dfeOD = ''
    dfeOS = ''
    if(mJson[124] != "No edema, no vascularization, good color (Volk 78 d Lens)") {
        dfeOD = dfeOD + mJson[124] + ' C/D 0.' + mJson[129]
    }
    if(mJson[134] != "Normal reflex, without edema") {
        dfeOD = dfeOD + ", " + mJson[134]
    }
    if(mJson[138] != "Perfused, no tortuosity or abnormality") {
        dfeOD = dfeOD + ", " + mJson[138]
    }
    if(mJson[142] != "Attached, no retinal or choroidal lesions") {
        dfeOD = dfeOD + ", " + mJson[142]
    }

    if(mJson[125] != "No edema, no vascularization, good color (Volk 78 d Lens)") {
        dfeOS = dfeOS + mJson[125] + ' C/D 0.' + mJson[130]
    }
    if(mJson[135] != "Normal reflex, without edema") {
        dfeOS = dfeOS + ", " + mJson[135]
    }
    if(mJson[139] != "Perfused, no tortuosity or abnormality") {
        dfeOS = dfeOS + ", " + mJson[139]
    }
    if(mJson[143] != "Attached, no retinal or choroidal lesions") {
        dfeOS = dfeOS + ", " + mJson[143]
    }
    if(dfeOD == "") {
        dfeOD = "wnl"
    }
    if (dfeOS == "") {
        dfeOS = "wnl"
    }

    finalOutput = 'VA: ' + mJson[9] + " OD: " + mJson[10] + "; OS: " + mJson[11] + "; IOP " + mJson[23]+"|" + mJson[24] + "; Pupils: OD " + mJson[37]+'->'+mJson[38] + " OS " + mJson[42]+'->'+mJson[43] + pupils + ", " + fields + ", " + eoms + "SLE OD: " + sleOD + ", SLE OS: " + sleOS + "; DFE OD: " + dfeOD + "; DFE OS: " + dfeOS


    // Update header text
    document.querySelector('#header').innerHTML = finalOutput

    // Log to console
    console.log('VA: ' + mJson[9] + " OD: " + mJson[10] + "; OS: " + mJson[11] + "; IOP " + mJson[23]+"|" + mJson[24] + "; Pupils: OD " + mJson[37]+'->'+mJson[38] + " OS " + mJson[42]+'->'+mJson[43] + pupils + ", " + fields + ", " + eoms + "SLE OD: " + sleOD + ", SLE OS: " + sleOS + "; DFE OD: " + dfeOD + "; DFE OS: " + dfeOS)

    //`@NAME@  @MRN@  @DOB@
    //@AGE@ @SEX@ presenting with *** which began ***. Has a history of ***.  A/P: *** Please schedule with *** . @PH@  `
    //'VA: sc OD 20/*** ph 20/***   OS 20/*** ph 20/***.  IOP, EOM, CVF, Pupils WNL***.  SLE OD ***. SLE OS:*** DFE OD:***  DFE OS:***'
}
