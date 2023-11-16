let altura = 1.80;
let peso = 81.00;
let IMC = (peso / (altura * altura));

if (IMC >= 18.4 && IMC <= 24.9){
    document.write("Saudável")
}
if (IMC >= 17 && IMC <= 18.4){
    document.write("Magreza leve")
}
if (IMC >= 16 && IMC <= 16.9){
    document.write("Magreza moderada")
}
if (IMC < 16){
    document.write("Magreza grave")
}
if (IMC >= 25 && IMC <= 29.9){
    document.write("Sobrepeso")
}
if (IMC >= 30 && IMC <= 34.9){
    document.write("Obseidade grau 1")
}
if (IMC >= 35 && IMC <= 39.9){
    document.write("Obseidade severa")
}
if (IMC >= 40){
    document.write("Obsidade mórbida")
}