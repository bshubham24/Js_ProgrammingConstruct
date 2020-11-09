let day = 31;
let month = "march";
let check_date = false;
if((day>=20 && day<=31 && month=="march")||(day>=20 && day<=30 && month=="june")||(month=="april" || month=="may")){
  check_date = true;
}
console.log(check_date);