//Converting human language to whale language
let input='Hi, Human';
let vowels=['a','e','i','o','u'];
let resultArray=[];
for(let x=0; x < input.length; x++)
{
  //console.log(x); //count the number of characters in the input array
  for (let i=0; i < vowels.length; i++)
  {

    if (input[x]===vowels[i])
    {
 //The amount of vowels in the input array are:
    resultArray.push(input[x]);
  //Whales double their e‘s and the u‘s in their language.  
  if (input[x]==='e' || input[x]==='u')
    {
      resultArray.push(input[x]); 
  }
    }
    
} 
}
//The whale speaks:
 console.log('Whale Talk: '+ resultArray.join('').toUpperCase()+'!!');