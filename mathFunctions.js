//function to calculate area
 function calcArea(radius){
   let area = radius*radius*3.14;
   return area;
}

//function to calculate circumference
 function calcCircumference(radius){
   let circumference = 2*3.14*radius;
   return circumference.toPrecision(4);
}

export {
   calcArea,
   calcCircumference
};