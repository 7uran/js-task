///let a=100
///EGer eded 33 e boulunende
// alinan qalid 30dan
//boyukdurse hemin qaligin 14
//de bolunmesonden alnan qaliq
// 10dab boyudurse hemoin qalogin 5 blunmesiinden alinan qaligi goster

//TASK 2
//User eni ve uzunlugu daxil edecek
//eger en ve uzunluq 10dan boyukdurse duzbucaqlinin sahesini goster
//yox eger 10dan azdirsa duzbucagin perimetrini goster

//Task4
//Kvardratin Saheson yazin
//EGER kvardtarin sahesin 25 den boyukdurse hemin ededin 12 ye bolunmesinden alinan qaligi goster




//task 1
let a = 100;
if (a % 33 > 30) {
    if ((a % 33) % 14 > 10) {
        print(((a % 33) % 14) % 5)
    }
}

//task 2
let en = prompt()
let uzunlug = prompt()

if (en > 10 && uzunlug > 10) {
    print(en*uzunlug)
}
else{
    print(2*(en+uzunlug))
}

//task 3
let sahe=prompt()
if (sahe>25) {
    print(sahe/12)
}